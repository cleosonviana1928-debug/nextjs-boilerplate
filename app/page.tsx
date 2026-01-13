export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #000 0%, #1a0010 100%)',
      color: '#ffd6ea',
      fontFamily: 'Arial',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>

      {/* TOPO */}
      <div style={{ padding: 30, textAlign: 'center' }}>
        <h1 style={{ fontSize: 42, color: '#ff4fa3', marginBottom: 5 }}>Vivi Langerie</h1>
        <p style={{ letterSpacing: 2 }}>MODA ÍNTIMA & FITNESS</p>
      </div>

      {/* CARD PRODUTO */}
      <div style={{
        background: 'white',
        color: '#111',
        width: 340,
        borderRadius: 25,
        padding: 20,
        boxShadow: '0 0 30px rgba(255,79,163,.4)',
        textAlign: 'center'
      }}>
        <img src="/calcinha-preta.png" style={{ width: '100%', borderRadius: 15 }} />
        <h2 style={{ marginTop: 15 }}>VL001 – Calcinha Rendinha Preta</h2>
        <p>Tamanhos: P • M • G</p>
        <p style={{ fontSize: 24, fontWeight: 'bold', color: '#ff4fa3' }}>R$ 35,00</p>

        <a href="https://wa.me/5593984032129?text=Olá,%20quero%20comprar%20VL001%20-%20Calcinha%20Rendinha%20Preta"
          style={{
            display: 'block',
            background: 'linear-gradient(45deg,#ff4fa3,#ff8ecf)',
            color: 'white',
            padding: 14,
            borderRadius: 30,
            textDecoration: 'none',
            marginTop: 15,
            fontWeight: 'bold'
          }}>
          COMPRAR AGORA
        </a>
      </div>

      {/* CONJUNTOS */}
      <div style={{
        background: '#fff',
        color: '#111',
        width: 340,
        borderRadius: 25,
        padding: 20,
        marginTop: 20,
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#ff4fa3' }}>Conjuntos</h2>
        <p>Em breve novidades incríveis 💗</p>
      </div>

      <p style={{ margin: 30, fontSize: 12, opacity: .6 }}>
        © Vivi Langerie — Todos os direitos reservados
      </p>
    </div>
  );
}
