import React from 'react'
import { Outlet } from 'react-router-dom'

const UserProfilePage = () => {
  return (
    <div>UserProfilePage
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default UserProfilePage