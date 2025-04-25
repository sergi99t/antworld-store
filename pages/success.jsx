import Link from 'next/link';

export default function Success() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold text-green-600 mb-4">¡Gracias por tu compra! 🐜</h1>
      <p className="text-lg text-gray-600 mb-6">Tu pedido está siendo procesado. Te enviaremos un correo con los detalles.</p>
      <Link href="/">
        <a className="text-primary font-medium hover:underline">Volver a la tienda</a>
      </Link>
    </div>
  );
}
