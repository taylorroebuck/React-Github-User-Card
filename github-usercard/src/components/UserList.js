import React from 'react';
import { Card, CardHeader, CardTitle, CardImg, CardBody } from 'shards-react';
import '../App.css';

const UserList = props => {
  console.log('UserList', props);
  return (
    <div className="followersList">
      <Card>
        {props.followers.map((follower, id) => (
          <div key={id}>
            <div className="followers">
              <CardHeader>
              <CardImg src={follower.avatar_url} alt="github follower"/>
              <CardTitle>{follower.login}</CardTitle>
              </CardHeader>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default UserList;