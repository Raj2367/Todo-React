import React from "react";

import Table from "./Table";
import CompletedTask from "./CompletedTask";
import Form from "./Form";

class Login extends React.Component {
  constructor() {
    super();
    this.setStateOfCompletedTask.bind(this);
    this.setStateOfPendingTask.bind(this);
    this.state = {
      task: '',
      items: [],
      completedTasks: []
    }
  };

  /**
   * setStateOfPendingTask and setStateOfCompletedTask is being called by it's child component Table.
   * Whenever any changes done to incomplete task array(items) or complete task array(completedTasks) 
   * these functions being called to set the state of incomplete or complete task array.
   */
  setStateOfPendingTask = (newPendingTask) => {
    this.setState({ items: newPendingTask });
  }
  setStateOfCompletedTask = (newCompletedTasks) => {
    this.setState({ completedTasks: newCompletedTasks });
  }

  /**
   * When form is submitted handleFormSubmit function is being called
   */
  handleFormSubmit = (e) => {
    /** prevent page re-loading */
    e.preventDefault();
    /** Collect already exist list of incomplete task and add new task to the list */
    let items = [...this.state.items];
    /** If input is blank then it gives an alert */
    if (this.state.task==='') {
      alert("Please give valid input");
      return;
    }
    items.push({ task: this.state.task });
    /** Again set the state of incomplete task(items) as it is and task as blank string */
    this.setState({
      items,
      task: ''
    });
  };

  /**
   * Whenever any changes happen inside form, handleInputChange is being called.
   * It set the state of the task as the input value.
   */
  handleInputChange = (e) => {
    let input = e.target;
    let task = e.target.name;
    let value = input.value;
    this.setState({
      [task]: value
    })
  };

  render() {
    return (
      <div>
        <br />
        <div className="container">
          <div className="text-center">
            {/** Header */}
            <h1>Todo List</h1><hr />  
          </div>
          <h4>Enter your task:</h4>
          {/** 
           * Form component for enter your task 
           */}
          <Form
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            newTask={this.state.task}
          />
          <br />
          <div className="row">
            <div id="incompleteTask" className="col-6 p-3 border">
              {/**
               * Table component for displaying all the incomplete tasks
               */}
              <Table
                items={this.state.items}
                completedTasks={this.state.completedTasks}
                setStateOfCompletedTask={this.setStateOfCompletedTask}
                setStateOfPendingTask={this.setStateOfPendingTask}
              />
            </div>
            <div id="completeTask" className="col-6 p-3 border">
              {/**
               * Completed task component for displaying all the completed tasks
               */}
              <CompletedTask items={this.state.completedTasks} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
