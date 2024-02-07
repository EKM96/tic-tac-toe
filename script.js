function createGame() {
  const game = {
    gameboard: {
      cells: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    
    players: {
      user: {},
      cpu: {},
    },
    
    logic: {
      randomStart() {
        const startingPlayer = getRandom(['user', 'cpu']);
        
        if (startingPlayer === 'user') {
          logMessage('You start');
        } else if (startingPlayer === 'cpu') {
          logMessage('CPU starts');
        }
      },
    },
     
    init() {
      game.logic.randomStart();
    }
  }

  function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  function logMessage(message) {
    console.log(message);
  };

  game.init();
}

const ticTacToe = createGame();

    
