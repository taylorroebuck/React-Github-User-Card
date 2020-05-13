import React from 'react';
import UserList from './UserList.js';
import { Card, CardHeader, CardTitle, CardImg, CardBody } from 'shards-react';
import '../App.css';

const UserCard = props => {
    console.log('UserCard Props', props);
    return (
        <div>
          <Card className="userCard" style={{width: '250px', display: 'flex', alignItems: 'center', alignContent: 'center', padding: '5%', flexDirection: 'column', marginLeft: '38%'}}>
              <CardHeader>
                  <CardTitle style={{color: '#37a777', fontSize: '1.2rem'}}>{props.user.login}'s GitHub</CardTitle>
              </CardHeader>
              <CardImg src={props.user.avatar_url} />
              <CardBody className="userCard-body" style={{color: '#ffeead', marginTop: '2%'}}>
                  <div className="cardBody">
                      <p>{props.user.bio}</p>
                      <p>Followers: {props.user.followers}</p>
                      <p>Repos: {props.user.public_repos}</p>
                  </div>
                  <CardTitle style={{textAlign: 'center', color: '#ffe027'}}>{props.user.name}'s Contributions:</CardTitle>
                  <CardImg src="http://ghchart.rshah.org/taylorroebuck" alt="taylorroebuck's Github chart" />
              </CardBody>
          </Card>
  
          <UserList className="userList" user={props.user} followers={props.followers} />
      </div>
    );
  };

// const UserCard = props => {
//   console.log('UserCard Props', props);
//   return (
//     <div>
//       <Card>
//         <div>
//           <img src={props.user.avatar_url} alt="github avatar"/>
//           <p>{props.user.name}'s Login: {props.user.login}</p>
//           <p>User Location: {props.user.location}</p>
//           <p>User Following: {props.user.following}</p>
//           <p>User Followers: {props.user.followers}</p>
//           <img src="http://ghchart.rshah.org/taylorroebuck" alt="taylorroebuck's Github chart" />
//         </div>

//         <UserList user={props.user} followers={props.followers} />
//       </Card>
//     </div>
//   );
// };

export default UserCard;