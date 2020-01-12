import React from "react";

const Todos = ({ todos, deleteThis }) => {
  const todo = todos.length ? (
    todos.map(todos => {
      return (
           <div key={todos.id} className="card bg-warning mb-3" style={{width:'auto', margin:'10px'}}>
  <div className="card-body" >
    <h5 className="card-title">{todos.title}</h5>
    <p className="card-text">{todos.body}</p>
                <p
              onClick={deleteThis.bind(this, todos.id)}
              className="btn btn-danger btn-sm"
            >
              Remove
            </p>
  </div>
</div> 
      );
    })
  ) : (
    <h1 className='text-primary'>Nothing in Todos Congrats!</h1>
  );
  return <div className="jumbotron grid">{todo}</div>;
};
export default Todos;