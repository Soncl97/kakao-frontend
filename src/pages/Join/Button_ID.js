import React from "react";

class Button_ID extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: <span class="ico_account"></span>,
    };
  }
  handleClick = () => {
    this.setState({ clicked: <span class="ico_account_on"></span> });
  };

  render() {
    return (
      <div>
        <p onClick={this.handleClick}>{this.state.clicked}</p>
      </div>
    );
  }
}

export default Button_ID;
