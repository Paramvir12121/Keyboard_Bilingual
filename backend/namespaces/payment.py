import stripe
from flask import current_app, request
from flask_restx import Namespace, Resource
from models import db, User, Payment  # Ensure correct import paths

payment_ns = Namespace('payment', description='Payment related operations')

@payment_ns.route('/process')
class PaymentProcess(Resource):
    def post(self):
        stripe.api_key = current_app.config['STRIPE_API_KEY']
        data = request.json
        user_id = data.get('user_id')
        amount = data.get('amount')  # Amount in cents
        currency = data.get('currency', 'usd')

        # Fetch the user from the database
        user = User.query.get(user_id)
        if not user:
            return {"status": "error", "message": "User not found"}, 404

        try:
            charge = stripe.Charge.create(
                amount=amount,
                currency=currency,
                source=data.get('source'),  # Token from frontend
                description=f'Charge for user {user.username}'
            )
            # Save payment details
            payment = Payment(
                user_id=user.id,
                amount=amount / 100,  # Convert to dollars
                currency=currency,
                status='succeeded',
                transaction_id=charge.id
            )
            payment.save()

            # If Chearge.is_paid then 
            # Remove user from "Basic" group
        #     client.admin_remove_user_from_group(
        #         UserPoolId=current_app.config['COGNITO_USER_POOL_ID'],
        #         Username=email,
        #         GroupName='Basic'
        #     )
        #     # Add user to "Premium Users" group
        #     client.admin_add_user_to_group(
        #         UserPoolId=current_app.config['COGNITO_USER_POOL_ID'],
        #         Username=email,
        #         GroupName='Premium Users'
        #       )

            # Update user's payment status
            user.has_paid = True
            user.save()

            return {"status": "success", "charge": charge}
        except stripe.error.StripeError as e:
            return {"status": "error", "message": str(e)}, 400
