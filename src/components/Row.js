const Row = (props) => (
    <div className="row">
        { props.data.map((cell,i) => <Cell value={cell} key={i}></Cell>) }
    </div>
);