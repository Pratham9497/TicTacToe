import { useState } from "react"
import Card from "../Card/Card"
import './Grid.css'
import isWinner from "../../helpers/checkWinner"

function Grid({ noc }) {
    const [board, setBoard] = useState(Array(noc).fill(''))
    const [turn, setTurn] = useState(true) // true->O , false->X
    const [winner, setWinner] = useState(null)

    function playTurn(index) {
        if (board[index] != "" || winner) return;
        if (turn) {
            board[index] = 'O'
        }
        else {
            board[index] = 'X'
        }
        let win = isWinner(board, turn ? "O" : "X")
        if (win) {
            setWinner(win);
        }
        setBoard([...board])
        setTurn(!turn)
    }

    function reset() {
        setTurn(true)
        setWinner(null)
        setBoard(Array(noc).fill(''))
    }

    return (
        <>
            <div className="grid-wrapper">
                {
                    winner && (
                        <>
                            <h1 className="player-turn"> Winner is {winner} </h1>
                        </>
                    )
                }
                <button className="reset" onClick={reset}>
                    Reset Game
                </button>
                <h1 className="player-turn">
                    Current Turn : {turn ? "O" : "X"}
                </h1>
                <div className="grid">
                    {board.map((el, idx) => <Card key={idx} onPlay={playTurn} player={el} index={idx} />)}
                </div>
            </div>
        </>
    )
}

export default Grid