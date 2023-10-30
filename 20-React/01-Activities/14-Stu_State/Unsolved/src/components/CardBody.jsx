// TODO: Add a comment explaining what is being passed to this "child" component as props
// the parent is Counter.jsx therefore, props is whatever is returned from Counter.jsx

function CardBody({count, handleDecrement, handleIncrement}) {
  return (
    <div className="card-body">
      <p className="card-text">Click Count: {count}</p>
      
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleIncrement}
      >
        Increment
      </button>{' '}
      
      <button
        type="button"
        className="btn btn-danger"
        onClick={handleDecrement}
      >
        Decrement
      </button>

    </div>
  );
}

export default CardBody;
