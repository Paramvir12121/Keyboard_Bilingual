import os
from flask import Flask, jsonify, redirect, request
from flask_restx import Api, Resource, Namespace, fields
from flask_cognito import CognitoAuth, cognito_auth_required, current_cognito_jwt

import stripe

import stripe
from flask import current_app
from flask_restx import Namespace, Resource

payment_ns = Namespace('payment', description='Payment related operations')

@payment_ns.route('/process')
class PaymentProcess(Resource):
    def post(self):
        stripe.api_key = current_app.config['STRIPE_API_KEY']
        # Example Stripe charge
        try:
            charge = stripe.Charge.create(
                amount=1000,  # Amount in cents
                currency='usd',
                source='tok_visa',  # Use an appropriate source or customer
                description='Example charge'
            )
            return {"status": "success", "charge": charge}
        except stripe.error.StripeError as e:
            return {"status": "error", "message": str(e)}, 400
