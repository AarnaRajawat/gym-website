import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo (3).png'

import { Stack } from '@mui/material'
const Navbar = () => {
  return (
    <Stack direction= "row" justifyContent= "space-around" sx={{gap: {
      sm:'122px', xs: '20px', margin: '0 20px'
    },justifyContent : 'none'}} px = "20px"  >
      <Link to = "/">
      
      <img src={Logo} alt = 'logo' style = {{width: '48px', margin: '0 20px', height: '48px'}}/>
      </Link>
      <Stack direction= "row" gap = "40px" fontSize= "24px" alignItems= "flex-end">
        <Link style={{textDecoration: 'none', color: '#3A1212',borderBottom: '3px solid #FF2625' }}>
        Home
        </Link>
        <a href='#exercises' style={{textDecoration: 'none', color: '#3A1212' }}>
          Exercises
          

        </a>
      
    </Stack>
    </Stack>
    
  )
}

export default Navbar
