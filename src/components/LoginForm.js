import React from "react";

class LoginForm extends React.Component {
  state={
    username: "",
    password: ""
  }

  change = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  sumbmit = (e) => {
    e.preventDefault();
    //debugger;
    if (this.state.username && this.state.password){
      this.props.handleLogin(this.state);
    }
    
  }

  render() {
    return (
      <form onSubmit={this.sumbmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.change}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.change}/>
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
