const Cell = (props) => (
    <div className={`cell ${props.value ? 'live' : 'dead'}`}></div>
);