const Board = (props) => (
    <div className="board">
        { props.state.map((row,i) => <Row data={row} key={i}></Row>) }
    </div>
);