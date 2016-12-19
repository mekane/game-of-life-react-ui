const Controls = (props) => {
    let sizeInput = null;
    const undo = () => props.action('UNDO', {});
    const next = () => props.action('NEXT', {});
    const newBoard = () => props.action('NEW', {size: sizeInput.value});
    return (
        <div className="controls">
            <button type="button" className="controls__undo" onClick={undo} disabled={props.states.length < 2}>Undo</button>
            <button type="button" className="controls__next" onClick={next}>Next</button>
            <button type="button" className="controls__new" onClick={newBoard}>New Board</button>
            <input type="number" min="3" defaultValue="10" ref={(input) => sizeInput = input} />
        </div>
    );
};