import React from "react";
class AddAnswer extends React.Component {
  state = { answer: "" };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.answer);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="ans">Leave An Answer:</label>
          <input
            type="text"
            id="ans"
            value={this.state.answer}
            onChange={(e) => this.setState({ answer: e.target.value })}
          />
          <button type="submit">Post Your answer</button>
        </form>
      </div>
    );
  }
}
export default AddAnswer;
