import React from 'react'
import Navbar from "./Navbar";
import UsersTable from "./UsersTable";

const Homepage = () => {
  return (
    <div className="container">
      <Navbar />
      <UsersTable />
    </div>
  )
}

export default Homepage