import React, { useState, useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";
import axios from "axios";

const DeletePrompt = ({ user, setPrompt, setMessage, setMesssageExists, setUser }) => {
  const { apiURL, setUsers } = useContext(GlobalContext);

  const deleteUser = () => {
    axios({
      method: "delete",
      url: `${apiURL}/users/${user.id}`,
    }).then((res) => {
      setPrompt(false)
      setMesssageExists(true)
      setMessage(res.data.message)
      setUser(null)
      axios({
        method: "get",
        url: `${apiURL}/users`
      }).then((res) => {
        setUsers(res.data.data);
      });

    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className="prompt-container">
      <div className="outside"></div>
      <div className="prompt">
        <h2>DELETE USER</h2>
        <div className="warning">
          Are you sure you want to delete user {user.attributes.name}?
        </div>
        <div className="buttons">
          <button className="crud-btn" onClick={() => deleteUser()}>CONTINUE</button>
          <button className="crud-btn" onClick={() => setPrompt(false)}>CANCEL</button>
        </div>
      </div>
    </div>
  )
}

export default DeletePrompt