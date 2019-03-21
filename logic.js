let players = ['x', 'o'];
let activePlayer;
let board;
let s0; // счётчики строк и столбцов
let s1;
let s2;
let st0;
let st1;
let st2;
let d1; //счётчик главной диагонали
let d2; // счётчик дополнительной диагонали

function startGame() {
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
  activePlayer = 0;
  renderBoard(board);
}

function click(line,column) {
  if (activePlayer == 0) {
    board[line][column] = players[0];
    renderBoard(board);
    prizeConditions(players[0]);
    if (s0 == 3 || s1 == 3 || s2 == 3 || st0 == 3 || st1 == 3 || st2 == 3 || d1 == 3 || d2 == 3) {
    showWinner(activePlayer);
    } else {
    activePlayer = 1;
    return;
    };
  };

  if (activePlayer == 1) {
    board[line][column] = players[1];
    renderBoard(board);
    prizeConditions(players[1]);
    if (s0 == 3 || s1 == 3 || s2 == 3 || st0 == 3 || st1 == 3 || st2 == 3 || d1 == 3 || d2 == 3) {
    showWinner(activePlayer);
    } else {
    activePlayer = 0;
    return;
    };
  }; 
};

function prizeConditions(playerN) {
  s0 = 0;
  s1 = 0;
  s2 = 0;
  st0 = 0;
  st1 = 0;
  st2 = 0;
  d1 = 0;
  d2 = 0;
  for (let i = 0; i < board.length; i++) {
    if (board[0][i] == playerN) {
      s0++; 
    };
    if (board[1][i] == playerN) {
      s1++;
    };
    if (board[2][i] == playerN) {
      s2++;
    };
    if (board[i][0] == playerN) {
      st0++;
    };
    if (board[i][1] == playerN) {
        st1++;
    };
    if (board[i][2] == playerN) {
      st2++;
    };
    if (board[i][i] == playerN) {
      d1++;
    };
    if (board[board.length - 1 - i][i] == playerN) {
      d2++;
    };
  };  
};// JavaScript Document