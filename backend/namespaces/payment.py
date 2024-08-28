import stripe
from flask import current_app, request, jsonify
from flask_restx import Namespace, Resource
from models import db, User, Payment 
from namespaces.auth import login_required 

payment_ns = Namespace('payment', description='Payment related operations')

# @login_required
# @payment_ns.route('/process')
# class PaymentProcess(Resource):
#     def post(self):
#         stripe.api_key = current_app.config['STRIPE_API_KEY']
#         data = request.json
#         user_id = data.get('user_id')
#         amount = data.get('amount')  # Amount in cents
#         currency = data.get('currency', 'usd')

#         # Fetch the user from the database
#         user = User.query.get(user_id)
#         if not user:
#             return {"status": "error", "message": "User not found"}, 404

#         try:
#             charge = stripe.Charge.create(
#                 amount=amount,
#                 currency=currency,
#                 source=data.get('source'),  # Token from frontend
#                 description=f'Charge for user {user.username}'
#             )
#             # Save payment details
#             payment = Payment(
#                 user_id=user.id,
#                 amount=amount / 100,  # Convert to dollars
#                 currency=currency,
#                 status='succeeded',
#                 transaction_id=charge.id
#             )
#             payment.save()

#             user.has_paid = True
#             user.save()

#             return {"status": "success", "charge": charge}
#         except stripe.error.StripeError as e:
#             return {"status": "error", "message": str(e)}, 400

@login_required
@payment_ns.route('/create-checkout-session')
class CreateCheckoutSession(Resource):
    def post(self):
        stripe.api_key = current_app.config['STRIPE_API_KEY']
        YOUR_DOMAIN = 'https://miniature-disco-6v5j5pqg5w7247r6-5000.app.github.dev/payment/'
        data = request.get_json()
        if not data:
            return jsonify({"error": "No data provided"}), 400
        price_id = data.get('priceId')
        
        try:
            checkout_session = stripe.checkout.Session.create(
                line_items=[
                    {
                        'price': price_id,  # Use the actual price_id
                        'quantity': 1,
                    },
                ],
                mode='payment',
                success_url=YOUR_DOMAIN + '?success=true',
                cancel_url=YOUR_DOMAIN + '?canceled=true',
            )
            print("Checkout Session: ",checkout_session)
            return {"url": checkout_session.url}, 200 
        except Exception as e:
            print("Error: ",str(e))
            return jsonify({"error": str(e)}), 400
        

@login_required
@payment_ns.route('/webhook')
class PaymentWebhook(Resource):
    def post(self):
        payload = request.get_data(as_text=True)
        sig_header = request.headers.get('Stripe-Signature')

        try:
            event = stripe.Webhook.construct_event(
                payload, sig_header, current_app.config['STRIPE_ENDPOINT_SECRET']
            )
        except ValueError as e:
            # Invalid payload
            return 'Invalid payload', 400
        except stripe.error.SignatureVerificationError as e:
            # Invalid signature
            return 'Invalid signature', 400

        # Handle the event
        if event['type'] == 'checkout.session.completed':
            session = event['data']['object']
            # Fulfill the purchase
            handle_checkout_session(session)

        return 'Success', 200