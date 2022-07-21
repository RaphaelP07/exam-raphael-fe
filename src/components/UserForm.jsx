import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from "../context/GlobalState";
import axios from "axios";

const UserView = ({ user, setForm, setUser }) => {
  const { apiURL, setUsers } = useContext(GlobalContext);
  const [name, setName] = useState("");
  const [role, setRole] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState(false)
  const [errors, setErrors] = useState([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (user === null) {
      return
    } else
    setName(user.attributes.name)
    setRole(user.attributes.role)
    setEmail(user.attributes.email)
    setPhone(user.attributes.phone)
  }, [])

  
  let action = ''
  
  if (user !== null) {
    action = "EDIT USER"
  } else {
    action = "ADD USER"
  }

  const onChange = (e) => {
    switch (e.target.id) {
      case "name":
        setName(e.target.value);
        break;
      case "role":
        setRole(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "phone":
        setPhone(e.target.value);
        break;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios({
      method: `${user === null ? 'post' : 'put'}`,
      url: `${apiURL}/users/${user === null ? '' : user.id}`,
      data: {
        name: name,
        role: role,
        email: email,
        phone: phone
      }
    }).then((res) => {
      setUser(null)
      setForm(false)
      axios({
        method: "get",
        url: `${apiURL}/users`
      }).then((res) => {
        setUsers(res.data.data);
      });
    }).catch((error) => {
      setError(true)
      setErrors(error.response.data)
    })
  }

  return (
    <form className="bg-container" onSubmit={onSubmit} noValidate>
      <div className='outside' onClick={() => setForm(false)}></div>
      <div className='form-container'>
        <h1 className='form-title form'>
          {action}
        </h1>
        <div className="input-label form">
          Name
        </div>
        <span className={error === false ? "display-none" : "text-error"}>
          {errors.name}
        </span>
        <input
          required
          className="input-form form"
          type="name"
          id="name"
          name="name"
          value={name}
          onChange={onChange}
        ></input>
        <div className="input-label form">
          Role
        </div>
        <span className={error === false ? "display-none" : "text-error"}>
          {errors.role}
        </span>
        <select id="role" value={role} onChange={onChange}>
          <option value=""></option>
          <option value="superadmin">superadmin</option>
          <option value="admin">admin</option>
          <option value="basic">basic</option>
        </select>
        <div className="input-label form">
          Email
        </div>
        <span className={error === false ? "display-none" : "text-error"}>
          {errors.email}
        </span>
        <input
          required
          className="input-form form"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={onChange}
        ></input>
        <div className="input-label form">
          Phone
        </div>
        <span className={error === false ? "display-none" : "text-error"}>
          {errors.phone}
        </span>
        <input
          required
          className="input-form form"
          type="phone"
          id="phone"
          name="phone"
          value={phone}
          onChange={onChange}
        ></input>
        <div className="form-btn">
          <button className='crud-btn'>CONFIRM</button>
          <button className='crud-btn' onClick={() => setForm(false)} onMouseUp={() => setUser(null)}>CANCEL</button>
        </div>
      </div>
    </form>
  )
}

export default UserView
