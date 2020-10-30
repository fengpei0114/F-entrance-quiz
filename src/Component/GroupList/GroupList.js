import React from 'react';
import './GroupList.scss'
import UserList from '../UserList/UserList'

function GroupList(props) {
  return (
    <div className="group_div">
      <div className="group_title"><p>{props.group.id + 1}组</p></div>
      <div className="group_number">
        {
          props.group.trainees.map(user => {
            return (
              <UserList key = {user.id} user = {user} />
            )
          })
        }
      </div>
    </div>
    )
}
export default GroupList;
