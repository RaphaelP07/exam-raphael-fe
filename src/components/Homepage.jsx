import React, { useState } from 'react'
import Navbar from "./Navbar";
import UsersTable from "./UsersTable";
import UserForm from "./UserForm";

const Homepage = () => {
  const [form, setForm] = useState(false)
  const [user, setUser] = useState(null)


  return (
    <div className="container">
      {form && <UserForm user={user} setUser={(set) => setUser(set)} setForm={(set) => setForm(set)}/>}
      <Navbar form={form} setForm={(set) => setForm(set)} />
      <UsersTable form={form} setForm={(set) => setForm(set)} setUser={(user) => setUser(user)} />
    </div>
  )
}

export default Homepage