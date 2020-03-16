import React from 'react';
import './App.css';
import UserCard from './Components/UserCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "taylorroebuck",
      users: [""]
    };
  }

  componentDidMount(){
    fetch(`https://avatars1.githubusercontent.com/${this.state.user}`)
      .then(res => {
        console.log("tr: App.js: CDM: fetch: then: users: ", res);
        return res.json;
      })
      .then(res => {
        this.setState({ users: [res] })
      })
      .catch(err => console.log(err));

      fetch(`https://api.github.com/users/${this.state.user}/followers`)
        .then(res => {
          console.log("tr: App.js: CDM: fetch: then3: followers: ", res)
          return res.json();
        })
        .then(res => {
          console.log("tr: App.js: CDM: fetch: then4: followers: ", res)
          this.setState({ users: [...this.state.users, ...res] });
        })
        .catch(err => console.log(err));
  };

  render() {
  return (
    <div className="App">
      <header>
        <h1>{this.state.user}'s GitHub</h1>
      </header>
      
     <div>
       {this.state.users.map(user => {
         return <UserCard key={user.id} user={user} />
       })}
     </div>
    </div>
  );
}
}


export default App;
