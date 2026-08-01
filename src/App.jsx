import Board from "./components/Board";
import "./styles/board.css";
export default function App() {
  return (
    <div className="app">
      <h1>🐍 Serpientes y Escaleras 🪜</h1>
      <Board />
      {/* <p className="footer">🎲 Lanza el dado y avanza hasta llegar al 🏆 casilla 49</p> */}
    </div>
  );
}
