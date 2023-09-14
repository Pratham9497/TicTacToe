function isWinner(board, symb){
    if(board[0] == board[1] && board[1] == board[2] && board[2] == symb) return symb;
    if(board[3] == board[4] && board[4] == board[5] && board[5] == symb) return symb;
    if(board[6] == board[7] && board[7] == board[8] && board[8] == symb) return symb;

    if(board[0] == board[3] && board[3] == board[6] && board[6] == symb) return symb;
    if(board[1] == board[4] && board[4] == board[7] && board[7] == symb) return symb;
    if(board[2] == board[5] && board[5] == board[8] && board[8] == symb) return symb;

    if(board[0] == board[4] && board[4] == board[8] && board[8] == symb) return symb;
    if(board[2] == board[4] && board[4] == board[6] && board[6] == symb) return symb;
    return "";
}

export default isWinner