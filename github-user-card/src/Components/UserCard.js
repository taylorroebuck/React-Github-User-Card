import React from 'react';

const UserCard = (props) => {
    return (
        <div className="user-card">
            <div>
                <img src={props.user.avatar_url} />
                <h2>{props.user.login}</h2>
                <div className="user-card-body">
                    <p>{props.user.bio}</p>
                    <button href={props.user.html_url} target="_blank">
                        View GitHub Profile
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UserCard;