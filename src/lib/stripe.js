import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID = {
    'seeker_pro': "price_1TgQTJJt9f94pS7YZmSpqXgu",
    'seeker_premium': "price_1TgQUQJt9f94pS7YHtxFFKVH",
    'recruiter_growth': "price_1TgQVKJt9f94pS7YjqwUyv7K",
    'recruiter_enterprise': "price_1TgTX9Jt9f94pS7YZpM57Bed"
}