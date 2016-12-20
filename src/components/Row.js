const Row = (props) => (
    <div className="row">
        { props.data.map((cell,i) => <Cell value={cell} row={props.row} col={i} key={i} action={props.action}></Cell>) }
    </div>
);