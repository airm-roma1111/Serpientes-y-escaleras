export default function Cell({ emoji, numero, tipo, jugador1, jugador2 }) {
  const esImagen = typeof emoji === "string" && emoji.startsWith("/img01/");

  return (
    <div className={`casilla ${tipo} celda`}>
      <div className="contenido">
        {esImagen ? (
          <img src={emoji} alt={`emoji-${numero}`} className="emoji-img" />
        ) : (
          <span className="emoji-span">{emoji}</span>
        )}
      </div>

      <span className="numero">{numero}</span>

      <div className="fichas">
        {jugador1 === numero && <div className="ficha ficha-roja">1</div>}
        {jugador2 === numero && <div className="ficha ficha-azul">2</div>}
      </div>
    </div>
  );
}
