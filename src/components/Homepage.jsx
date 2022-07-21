import React, { useState } from 'react'
import Navbar from "./Navbar";
import UsersTable from "./UsersTable";
import UserForm from "./UserForm";
import DeletePrompt from "./DeletePrompt";
import MessagePrompt from "./MessagePrompt";

const Homepage = () => {
  const [form, setForm] = useState(false)
  const [prompt, setPrompt] = useState(false)
  const [messageExists, setMessageExists] = useState(false)
  const [message, setMessage] = useState('')
  const [user, setUser] = useState(null)


  return (
    <div className="container">
      {form && 
      <UserForm
        user={user}
        setUser={(set) => setUser(set)}
        setForm={(set) => setForm(set)} />}
      {prompt &&
      <DeletePrompt
        user={user}
        setUser={(set) => setUser(set)}
        setMessage={(message) => setMessage(message)}
        setMesssageExists={(set) => setMessageExists(set)}
        setPrompt={(set) => setPrompt(set)} />}
      {messageExists &&
      <MessagePrompt
        message={message}
        setMessage={() => setMessage('')}
        setMessageExists={(set) => setMessageExists(set)} />}
      <Navbar
        form={form}
        setForm={(set) => setForm(set)} />
      <UsersTable
        form={form}
        setForm={(set) => setForm(set)}
        setPrompt={(set) => setPrompt(set)}
        setUser={(user) => setUser(user)} />
    </div>
  )
}

export default Homepage