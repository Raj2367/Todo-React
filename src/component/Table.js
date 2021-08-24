import React from "react";

// import "../css/Table.css";

class Table extends React.Component {

    /**
     * handleCompletedTask is called when "mark as complete" button is clicked
     */
    handleCompletedTask = index => (e) => {
        e.preventDefault();

        /** Collect already exist list of complete tasks and add new task to the list */
        let completedTasks = [...this.props.completedTasks];
        completedTasks.push({ completedTask: this.props.items[index].task });
        /** Set state of completed task */
        this.props.setStateOfCompletedTask(completedTasks);

        /** Collect already exist list of incomplete tasks and remove selected task from the list */
        let pendingTasks = [...this.props.items];
        pendingTasks.splice(index, 1);
        /** Set state of incompleted task */
        this.props.setStateOfPendingTask(pendingTasks);
    };

    deleteTask = index => (e) => {
        e.preventDefault();

        /** Collect already exist list of incomplete tasks and remove selected task from the list */
        let pendingTasks = [...this.props.items];
        pendingTasks.splice(index, 1);
        /** Set state of incompleted task */
        this.props.setStateOfPendingTask(pendingTasks);
    }

    render() {
        const items = this.props.items;
        return (
            <div>
                <table className="table">
                    <tbody>
                        <tr>
                            <th scope="row">Tasks</th>
                        </tr>
                        {/**
                         * Itearate all the items inside items array
                         */}
                        {items.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.task}</td>
                                    <td>
                                        <button id="markAsComplete" 
                                            className="btn btn-success" 
                                            onClick={this.handleCompletedTask(index)}>
                                            Mark as Complete
                                        </button>
                                    </td>
                                    <td>
                                        <button id="delete" 
                                            className="btn btn-danger" 
                                            onClick={this.deleteTask(index)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;