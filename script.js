const gameboard = {
  cells: [1, 2, 3, 4, 5, 6, 7, 8, 9],  
}
  
const user = {};
  
const cpu = {
  turn() {
    let randomCell = getRandom(gameboard.cells);
    logMessage(`CPU choses cell: ${randomCell}`);
    updateActiveCells(gameboard.cells, randomCell);
    logMessage(`Active Cells: ${gameboard.cells}`);
  }
};

function getRandom(arr) { return arr[Math.floor(Math.random() * arr.length)] };

function logMessage(message) { console.log(message) };

function randomStart() {
  const startingPlayer = getRandom(['user', 'cpu']);
  
  if (startingPlayer === 'user') {
    logMessage('You start');
  } else if (startingPlayer === 'cpu') {
    logMessage('CPU starts');
  }
}

function updateActiveCells(arr, item) { arr.splice(arr.indexOf(item), 1) }
    
function init() {
  randomStart();
}














  


