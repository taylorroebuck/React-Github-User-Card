import React from 'react';
import { Card, CardHeader, CardTitle, CardImg, CardBody } from 'shards-react';

const UserList = props => {
  console.log('UserList', props);
  return (
    <div>
      <Card>
        {props.followers.map((follower, id) => (
          <div key={id}>
            <CardHeader>
              <CardImg src={follower.avatar_url} />
              <CardTitle>User Login: {follower.login} </CardTitle>
            </CardHeader>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default UserList;