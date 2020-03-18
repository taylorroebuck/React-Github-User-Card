import React from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './Components/UserCard';
import { CardDeck } from 'shards-react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: 'taylorroebuck',
      user: {},
      followers: []
    };
  }

  changeUserName = (userName) => {
    this.setState({ userName })
  }

  componentDidMount() {
    this.usersGet();
    this.usersFollowers();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("CDU", this.state)
    if(prevState.userName !== this.state.userName) {
      console.log(prevState.userName)
      this.usersGet();
      this.usersFollowers();
    
    }
  }

  usersGet = () => {
    axios
      .get('https://api.github.com/users/taylorroebuck')
      .then(res => {
        console.log(res);
        this.setState({ user: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  usersFollowers = () => {
    axios
    .get(`https://api.github.com/users/taylorroebuck/followers`)
    .then(res => {  console.log(res.data);
      this.setState({ followers: res.data });
    });
  };

  render() {
    return (
      <div className='App'>
        <CardDeck>
          <UserCard user={this.state.user} followers={this.state.followers} />
        </CardDeck>
      </div>
    );
  }
}

export default App;