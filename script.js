const players = {
  options: [{user: {}}, {cpu: {}}],  
};

function chooseRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const startingPlayer = function chooseRandomStartingPlayer() {
  const players = ['user', 'cpu'];
  return chooseRandom(players);
};

function logMessage(message) {
  console.log(message);
}

const startingMessage = function logStartingPlayerMessage(startingPlayer) {
  const starts = startingPlayer();
  
  if (starts === 'user') {
    logMessage('You start');
  } else if (starts === 'cpu') {
    logMessage('CPU starts');
  }
};

const gameboard = {
  init() {
    startingMessage(startingPlayer);
  }
};

gameboard.init();



