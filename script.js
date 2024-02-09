const gameboard = {
  cells: [1, 2, 3, 4, 5, 6, 7, 8, 9],  
}
  
const user = {
  turnMessage: '\nIt\'s your turn, select a cell\n', 
  selectCell(num) {
    const repeated = searchAgainstActiveCells(num) === false;

    if (repeated) {
      logMessage('Select another cell, cell already taken');
      return;
  
    } else {
      updateActiveCells(gameboard.cells, num);
      logMessage(`Selected cell: ${num}`);
      logMessage(`Active cells: ${gameboard.cells}`);
      logMessage(cpu.turnMessage);
      setTimeout(cpu.selectCell, 3000);
    }
  }, 
};

  
const cpu = {
  turnMessage: '\nIt\'s cpu turn\n',
  selectCell() {
    let randomCell = getRandom(gameboard.cells);
    logMessage(`CPU choses cell: ${randomCell}`);
    updateActiveCells(gameboard.cells, randomCell);
    logMessage(`Active Cells: ${gameboard.cells}`);
    logMessage(user.turnMessage);
  },
};

function getRandom(arr) { return arr[Math.floor(Math.random() * arr.length)] };

function logMessage(message) { console.log(message) };

function randomStart() {
  turn = getRandom(['user', 'cpu']);
  
  (turn === 'user') ? logMessage('You start') : logMessage('CPU starts');
}

function updateActiveCells(arr, item) { arr.splice(arr.indexOf(item), 1) }
    
function searchAgainstActiveCells(cell) { return gameboard.cells.includes(cell) };

let turn;

function init() {
  randomStart();
  play();
}

function play() {
  if (turn === 'user') {
    logMessage(user.turnMessage);    
  }
  else if (turn === 'cpu') {
    logMessage(cpu.turnMessage);
    cpu.selectCell();
  }
}

init();













  


