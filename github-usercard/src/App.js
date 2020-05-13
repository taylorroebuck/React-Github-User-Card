import React from 'react';
import UserCard from './components/UserCard';
import './App.css';

class App extends React.Component {
  state = {
    gitUser: {},
    followers: []
  };

  // constructor() {
  //   super();
  //   this.state = {
  //     userName: 'taylorroebuck',
  //     user: {},
  //     followers: []
  //   };
  // }

  componentDidMount() {
    fetch('https://api.github.com/users/taylorroebuck')
      .then(res => res.json())
      .then(res => {
        console.log("tr: App.js: CDM: res", res)
        this.setState({ gitUser: res })
      })
      .catch(err => {
        console.log("err", err)
      })
      fetch('https://api.github.com/users/taylorroebuck/followers')
        .then(res => res.json())
        .then(res => {
          console.log("tr: App.js: CDM: res2", res)
          this.setState({ followers: res })
        })
        .catch(err => {
          console.log("tr: App.js: CDM: err2")
        })
  }

  render() {
    return (
      <div className="App">
        <h1>Github User Card</h1>
        <UserCard user={this.state.gitUser} followers={this.state.followers} />
      </div>
    )
}
}

export default App;