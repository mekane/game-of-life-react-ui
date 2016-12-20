const boardElement = document.getElementById('board');
const controlsElement = document.getElementById('controls');
let states = [];

newGame(10);

function action(actionName, actionProperties) {
    switch (actionName) {
        case 'CELL':
            toggleCell(actionProperties.row, actionProperties.col);
            render();
            break;
        case 'NEW':
            newGame(1 * actionProperties.size);
            break;
        case 'NEXT':
            states.push(game.tick(latestState()));
            render();
            break;
        case 'UNDO':
            states.pop();
            render();
            break;
        default:
            console.log('Unknown action ' + actionName, actionProperties);
    }
}

function toggleCell(row, column) {
    const nextGameState = cloneArrayOfArrays(latestState());
    nextGameState[row][column] = !nextGameState[row][column];
    states.push(nextGameState);
}

function cloneArrayOfArrays(array) {
    return array.map(subArray => subArray.slice());
}

function latestState() {
    return states[states.length - 1];
}

function render() {
    const state = latestState();
    if (state)
        ReactDOM.render(<Board state={state} action={action}></Board>, boardElement);
    ReactDOM.render(<Controls states={states} action={action}></Controls>, controlsElement);
}

function newGame(boardSize) {
    states = [game.newGame(boardSize)];
    render();
}