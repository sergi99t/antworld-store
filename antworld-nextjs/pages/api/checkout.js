import Stripe from 'stripe';

const stripe = new Stripe('sk_test_TU_CLAVE_SECRETA');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { items } = req.body;

  const line_items = items.map((item) => ({
    price_data: {
      currency: 'eur',
      product_data: {
        name: item.nombre,
      },
      unit_amount: Math.round(item.precio * 100),
    },
    quantity: 1,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items,
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error('Stripe error:', error);
    res.status(500).json({ error: 'Error al crear la sesión de pago' });
  }
}
