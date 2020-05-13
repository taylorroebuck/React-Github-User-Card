import React from 'react';
import UserList from './UserList.js';
import { Card, CardHeader, CardTitle, CardImg, CardBody } from 'shards-react';

const UserCard = props => {
    console.log('UserCard Props', props);
    return (
        <div>
          <Card className="userCard" style={{width: '250px', display: 'flex', alignItems: 'center', alignContent: 'center', padding: '5%', flexDirection: 'column', marginLeft: '38%'}}>
              <CardHeader>
                  <CardTitle style={{color: '#ff6f69', background:'#ffeead'}}>{props.user.login}'s GitHub</CardTitle>
              </CardHeader>
              <CardImg src={props.user.avatar_url} />
              <CardBody className="userCard-body" style={{color: '#ffeead', marginTop: '2%'}}>
                  <div className="cardBody">
                      <p>{props.user.bio}</p>
                  </div>
                  <CardImg src="http://ghchart.rshah.org/taylorroebuck" alt="taylorroebuck's Github chart" />
              </CardBody>
          </Card>
  
          <UserList user={props.user} followers={props.followers} />
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