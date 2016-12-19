const rootElement = document.getElementById('root');
let states = [];

newGame(10);


function render() {
    const state = states[states.length-1];
    console.log(`render `,state);
    if (state)
        ReactDOM.render(<Board state={state}></Board>, rootElement);
}

function newGame(boardSize) {
    states = [game.newGame(boardSize)];
    render();
}