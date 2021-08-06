import react, { Component } from 'react';

class Task extends Component {

    constructor() {
        super();

    }

    render() {
        return (
            <div className="task">
                <h3>{this.props.task.text}</h3>
                <p>{this.props.task.day}</p>
            </div>
        )
    }
}
export default Task;