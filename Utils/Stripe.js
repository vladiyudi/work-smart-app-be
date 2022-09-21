require('dotenv').config({path:"./.env"})
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)


const subscribe = async (req, res)=>{
try{
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        success_url: `${process.env.SERVER_URL}/success`,
        cancel_url: `${process.env.SERVER_URL}/cancel`,
        line_items: [{
            price_data: {
                currency: 'usd',
                product_data: {'name': 'Donation'},
                unit_amount: 1000,
            }, quantity: 1,
        }]
    })
    res.redirect(session.url)
}
catch(err){
    console.log(err)
    res.status(500).send(err)
}
   
}

module.exports = {subscribe}