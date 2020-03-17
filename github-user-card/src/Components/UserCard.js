import React from 'react';
import UserList from './FollowerList';
import styled from 'styled-components';

const List=styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

const Image=styled.img`
  display: flex;
  display: block;
  align-content: center;
  height: 300px;
  width: 300px;
`
const Heading=styled.h3`
    padding-left:315px;
    margin:10px;
`

const UserCard = props => {
  console.log('UserCard Props', props);
  return (
    <div>
      <div>
        <List>
          <Image src={props.user.avatar_url} />
          <Heading>Username: {props.user.login}</Heading>
          <Heading>Location: {props.user.location}</Heading>
          <Heading>Following: {props.user.following}</Heading>
          <Heading>Followers: {props.user.followers}</Heading>
        </List>

        <UserList user={props.user} followers={props.followers} />
      </div>
    </div>
  );
};

export default UserCard;