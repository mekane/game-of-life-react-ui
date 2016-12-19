const boardElement = document.getElementById('board');
const controlsElement = document.getElementById('controls');
let states = [];

newGame(10);

function action(actionName, actionProperties) {
    console.log('ACTION ' + actionName, actionProperties);
}

function render() {
    const state = states[states.length-1];
    console.log(`render `,state);
    if (state)
        ReactDOM.render(<Board state={state} action={action}></Board>, boardElement);
    ReactDOM.render(<Controls states={states} action={action}></Controls>, controlsElement);
}

function newGame(boardSize) {
    states = [game.newGame(boardSize)];
    render();
}