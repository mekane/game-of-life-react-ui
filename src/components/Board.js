const Board = (props) => (
    <div className="board">
        { props.state.map((row,i) => <Row data={row} row={i} key={i} action={props.action}></Row>) }
    </div>
);