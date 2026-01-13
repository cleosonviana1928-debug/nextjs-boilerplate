export default function App() {
  return (
    <div className="min-h-screen bg-black text-pink-200 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Vivi Langerie</h1>
      <p>Moda Íntima & Fitness</p>

      <div className="bg-white text-black p-6 rounded-2xl mt-6 max-w-sm text-center">
        <h2 className="text-2xl">VL001 - Calcinha Rendinha Preta</h2>
        <p className="mt-2">Tamanhos: P • M • G</p>
        <p className="font-bold text-xl mt-2">R$ 35,00</p>

        <a
          className="mt-4 inline-block bg-pink-500 text-white px-6 py-2 rounded-xl"
          href="https://wa.me/5593984032129?text=Olá,%20quero%20comprar%20o%20produto%20VL001%20-%20Calcinha%20Rendinha%20Preta"
        >
          Comprar no WhatsApp
        </a>
      </div>

      <div className="bg-white text-black p-6 rounded-2xl mt-6 max-w-sm text-center">
        <h2 className="text-2xl">Conjuntos</h2>
        <p>Em breve novidades incríveis 💗</p>
      </div>
    </div>
  );
}
