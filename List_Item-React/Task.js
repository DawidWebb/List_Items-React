const Task = (props) => (
  <div className={`tasks__div ${props.isDone ? "isDone" : null}`}>
    Zadaienie nr: {props.id + 1}
    <input onChange={props.isDoneFn} className="tasks__input" type="checkbox" />
    {props.name}
    <button onClick={props.delete} className="tasks__btn">
      usuń zadanie
    </button>
  </div>
);
