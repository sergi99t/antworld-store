import Link from 'next/link';

export default function Cancel() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Pago cancelado</h1>
      <p className="text-lg text-gray-600 mb-6">Parece que no se completó la compra. Puedes intentarlo nuevamente.</p>
      <Link href="/">
        <a className="text-primary font-medium hover:underline">Volver a la tienda</a>
      </Link>
    </div>
  );
}
