const Cell = (props) => {
    const cellClicked = () => {
        props.action('CELL', {row: props.row, col: props.col});
    };

    return (
        <div className={`cell cell_${props.row}_${props.col} ${props.value ? 'live' : 'dead'}`} onClick={cellClicked}></div>
    );
};