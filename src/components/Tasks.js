import tasks from "./taskList";
import react, { Component } from "react";
class Tasks extends Component {
    constructor() {
        super();
        this.state = { task: tasks }
    }




    render() {
        return (
            <div className="container">
                {this.state.task.map((t) => (
                    <h3 key={this.state.task.id}>{t.text}</h3>
                ))}
            </div>

        );
    }
}


export default Tasks;