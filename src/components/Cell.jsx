export default function Cell({ emoji, numero, tipo, jugador1, jugador2 }) {
  return (
    <div className={`casilla ${tipo} celda`}>
      <span>{emoji}</span>
      <span className="numero">{numero}</span>
            <div className="fichas">

        {jugador1 === numero && (
          <div className="ficha ficha-roja">
            1
          </div>
        )}

        {jugador2 === numero && (
          <div className="ficha ficha-azul">
            2
          </div>
        )}

      </div>
    </div>
  );
}
