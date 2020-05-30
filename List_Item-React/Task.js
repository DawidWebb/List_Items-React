const Task = (props) => (
  <div className="tasks__div">
    Zadaienie nr: {props.id + 1}
    <input className="tasks__input" type="checkbox" />
    {props.name}
    <button onClick={props.delete} className="tasks__btn">
      usuń zadanie
    </button>
  </div>
);
