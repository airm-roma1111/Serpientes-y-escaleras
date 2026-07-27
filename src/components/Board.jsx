import { useState } from "react";
import Cell from "./Cell";
import { boardData } from "../data/boardData";

export default function Board() {
  const [valorDado, setValorDado] = useState("🎲");
  const [rodando, setRodando] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [resultado, setResultado] = useState(null);

  const [posicionJugador, setPosicionJugador] = useState(1);

  const [jugador1, setJugador1] = useState(1);
  const [jugador2, setJugador2] = useState(1);

  const [turno, setTurno] = useState(1);

  const [moviendo, setMoviendo] = useState(false);

  function moverJugador(casillas) {
    setPosicionJugador((posicionActual) =>
      Math.min(posicionActual + casillas, 49),
    );
  }

  function lanzarDado() {
    if (rodando) return;

    setRodando(true);

    let contador = 0;

    const intervalo = setInterval(() => {
      contador++;

      setValorDado(Math.floor(Math.random() * 6) + 1);

      if (contador >= 20) {
        clearInterval(intervalo);

        const numeroFinal = Math.floor(Math.random() * 6) + 1;

        setResultado(numeroFinal);
        setValorDado(numeroFinal);

        moverJugadorAnimado(numeroFinal);

        setTimeout(() => {
          setRodando(false);
        //  setMostrarModal(true);
        }, 300);
      }
    }, 100);
  }

  function moverJugadorAnimado(resultado) {
    setMoviendo(true);

    const setter = turno === 1 ? setJugador1 : setJugador2;
    const posicionActual = turno === 1 ? jugador1 : jugador2;

    let recorrido = 0;

    const animacion = setInterval(() => {
      recorrido++;

      setter((pos) => Math.min(pos + 1, 49));

      if (recorrido >= resultado) {
        clearInterval(animacion);

        setTimeout(() => {
          setMoviendo(false);

          setTurno((t) => (t === 1 ? 2 : 1));

          //setMostrarModal(true);
        }, 300);
      }
    }, 400);
  }

  return (
    <>
      <h2>Turno del Jugador {turno}</h2>

      <div className="tablero">
        {boardData.map((c) => (
          <Cell key={c.numero} {...c} jugador1={jugador1} jugador2={jugador2} />
        ))}
      </div>

      <div className="panel-juego">
        <div className={`dado ${rodando ? "rodando" : ""}`}>{valorDado}</div>

        <button className="btn-lanzar" onClick={lanzarDado} disabled={rodando}>
          {rodando ? "Lanzando..." : "Lanzar dado"}
        </button>

        <p>Posición jugador: {posicionJugador}</p>
      </div>

      {mostrarModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>🎲 Resultado</h2>

            <div className="resultado-dado">{resultado}</div>

            <p>Avanzas {resultado} casillas</p>

            <button
              onClick={() => setMostrarModal(false)}
              className="btn-cerrar"
            >
              Continuar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
