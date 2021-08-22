import React from "react";


class CompletedTask extends React.Component {
  render() {
    const items = this.props.items;
    return (
      <div>
        <table className="table">
          <tbody>
            <tr>
              <th scope="row">Completed Tasks</th>
            </tr>
            {/**
              * Itearate all the elements inside completedTask array
              */}
            {items.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.completedTask}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CompletedTask;