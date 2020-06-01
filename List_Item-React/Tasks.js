class Tasks extends React.Component {
  state = {
    tasks: [],
    todo: 0,
    done: 0,
    valueName: "",
  };

  handleAddTask = (e) => {
    const name = e.target.value;
    this.setState({
      valueName: name,
    });
  };
  handleShowTask = () => {
    const tasks = this.state.tasks.slice();
    tasks.push({
      id: tasks.length,
      isDone: false,
      name: this.state.valueName,
    });
    this.setState({
      tasks: tasks,
      valueName: "",
      todo: this.state.todo + 1,
    });
  };
  handlerIsDoneTask = (id) => {
    const tasks = this.state.tasks.slice();
    const index = tasks.findIndex((task) => task.id === id);
    if (tasks[index].isDone === false) {
      tasks[index].isDone = true;
      this.setState({ done: this.state.done + 1 });
      console.log(tasks[index].isDone);

      return tasks[index].isDone;
    } else {
      tasks[index].isDone = false;
      this.setState({ done: this.state.done - 1 });
      console.log(tasks[index].isDone);
      return tasks[index].isDone;
    }
  };
  handlerDeleteTask = (id) => {
    const tasks = this.state.tasks.slice();
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks: tasks,
      todo: this.state.todo - 1,
    });
  };
  render() {
    const tasks = this.state.tasks.map((task) => (
      <Task
        name={task.name}
        key={task.id}
        id={task.id}
        isDone={this.handlerIsDoneTask}
        isDoneFn={this.handlerIsDoneTask.bind(this, task.id)}
        delete={this.handlerDeleteTask.bind(this, task.id)}
      />
    ));
    return (
      <div className="container">
        <header className="head">
          <div className="head__title">Lista zadań</div>
          <div className="head__todo">
            Zadania do wykonania: {this.state.todo}
          </div>
          <div className="head__done">Zadania wykonane: {this.state.done}</div>
        </header>
        <div className="container__main">
          <section className="tasks">{tasks}</section>
          <aside className="addTask">
            <form className="addTask__form">
              <input
                value={this.state.valueName}
                type="text"
                className="addTask__name"
                onChange={this.handleAddTask}
              />
            </form>
            <button className="addTask__btn" onClick={this.handleShowTask}>
              Dodaj zadanie
            </button>
          </aside>
        </div>
        <footer className="foot">
          <div className="foot__info">@TM</div>
        </footer>
      </div>
    );
  }
}
