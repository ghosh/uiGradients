import React from 'react'

import NavItems from './NavItems'
import Avatar from './Avatar'
import Divider from './Divider'
import Burger from './Burger'
import CTA from './CTA'

import { useAuth } from '@providers/AuthProvider'

const Navbar = () => {
  const { login, logout, user } = useAuth()

  return (
    <>
    <NavItems />
    <Divider />
    {user && <Avatar />}
    {user && <CTA onClick={() => logout()}>Logout</CTA>}
    {!user && <CTA onClick={() => login()}>Login</CTA>}
    <Burger />
    </>
  )
}

export default Navbar
