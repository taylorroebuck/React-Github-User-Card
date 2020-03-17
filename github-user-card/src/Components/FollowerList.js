import React from 'react';
import styled from 'styled-components';

const List=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  background: pink;
`

const Image=styled.img`
  height: auto;
  width: auto;
`

const Card=styled.div`
  width:250px;
  height:400px;
  display:flex;
`


const UserList = props => {
  console.log('UserList', props);
  return (
    <div>
      <List>
        {props.followers.map((follower, id) => (
          <div key={id}>
            <Card>
              <Image src={follower.avatar_url} />
              <h3>User Login: {follower.login}</h3>
            </Card>
          </div>
        ))}
      </List>
    </div>
  );
};

export default UserList;