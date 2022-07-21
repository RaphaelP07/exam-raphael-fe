import React, { useEffect, useState, useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";
import axios from "axios";

const UsersTable = ({ setForm, setUser, setPrompt }) => {
  const { users, apiURL, setUsers } = useContext(GlobalContext);
  const [action, setAction] = useState('')

  useEffect(() => {
    axios({
      method: "get",
      url: `${apiURL}/users`
    }).then((res) => {
      setUsers(res.data.data);
    });
  }, [])

  const userForm = (user) => {
    setUser(user)
    setForm(true)
  }

  const userDelete = (user) => {
    setUser(user)
    setPrompt(true)
  }

  return (
    <div className='users-table'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users === null ? 
          <tr>
            <td colSpan={4}>Loading users</td>
          </tr> :
          users.map(user => 
            <tr className='row' key={users.indexOf(user)} >
              <td>
                {user.attributes.name}
              </td>
              <td>
                {user.attributes.role}
              </td>
              <td>
                {user.attributes.email}
              </td>
              <td>
                {user.attributes.phone}
              </td>
              <td>
                <button className='crud-btn table-btn' onClick={() => userForm(user)}>
                  EDIT
                </button>
                <button className='crud-btn table-btn' onClick={() => userDelete(user)}>
                  DELETE
                </button>
              </td>
            </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default UsersTable