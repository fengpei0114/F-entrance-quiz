import React from 'react';
import './UserList.scss'

function UserList(props) {
  return <p key={props.user.id} className="number_list">{props.user.id}. {props.user.name}  </p>
}
export default UserList;