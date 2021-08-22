import React from "react";


class Form extends React.Component {
    render() {
        return (
            <div id="Form">
                {/** 
                 * Form field 
                 * */}
                <form onSubmit={this.props.handleFormSubmit}>
                    <label htmlFor="task">
                        {/** 
                         * input field
                         */}
                        <input className="form-control me-2" id="task" value={this.props.newTask} type="text" name="task" onChange={this.props.handleInputChange} />
                    </label> &nbsp;
                    {/** 
                     * Submit button
                     */}
                    <button className="btn btn-outline-success" type="submit" value="Submit">Add Task</button>
                </form>
            </div>
        );
    }
}

export default Form;