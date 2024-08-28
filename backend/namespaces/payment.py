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
class StripeWebhook(Resource):
    def post(self):
        payload = request.get_data(as_text=True)
        sig_header = request.headers.get('Stripe-Signature')
        endpoint_secret = current_app.config['STRIPE_WEBHOOK_SECRET']
        event = None

        try:
            event = stripe.Webhook.construct_event(
                payload, sig_header, endpoint_secret
            )
        except ValueError as e:
            # Invalid payload
            return jsonify({'error': str(e)}), 400
        except stripe.error.SignatureVerificationError as e:
            # Invalid signature
            return jsonify({'error': str(e)}), 400

        # Handle the checkout.session.completed event
        if event['type'] == 'checkout.session.completed':
            session = event['data']['object']
            customer_email = session['customer_details']['email']

            # Find the user by email
            user = User.query.filter_by(email=customer_email).first()

            if user:
                user.has_paid = True
                db.session.commit()

        return jsonify({'status': 'success'}), 200