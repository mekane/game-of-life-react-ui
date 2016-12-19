const size = 10;
const state = [
    [1, 0, 1],
    [0, 1, 0],
    [0, 1, 1]
]; //TODO: get this from the Game of Life library

ReactDOM.render(
    <Board state={state}></Board>,
    document.getElementById('root')
);