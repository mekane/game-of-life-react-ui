const boardElement = document.getElementById('board');
const controlsElement = document.getElementById('controls');
let states = [];

newGame(10);

function action(actionName, actionProperties) {
    console.log('ACTION ' + actionName, actionProperties);
    switch ( actionName ) {
        case 'NEW':
            console.log('new game with size ' + actionProperties.size);
            newGame(1 * actionProperties.size);
            break;
        case 'NEXT':
            console.log('compute next board state');
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

function latestState() {
    return states[states.length-1];
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