import React from 'react';
import UserList from './FollowerList';
import { Card, CardHeader, CardTitle, CardImg, CardBody } from 'shards-react';
import '../App.css';

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
            </CardBody>
        </Card>

        <UserList user={props.user} followers={props.followers} />
    </div>
  );
};

export default UserCard;