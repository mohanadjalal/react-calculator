
import react, { Component } from "react";
import Task from "./Task";
class Tasks extends Component {

    constructor(props) {
        super();
        this.state = { task: props.tx }

    }




    render() {

        return (
            <div className="container">
                {this.state.task.map((t) => (
                    <Task key={t.id} task={t} />
                ))}

            </div>

        );
    }
}


export default Tasks;