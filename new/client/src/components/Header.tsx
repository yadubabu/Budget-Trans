import React from 'react'
import NavBar from './NavBar';
import './navbar.css';

// import PaidIcon from '@mui/icons-material/Paid';

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='logo d-flex'><h1 className='head'><span>MV</span>Fincop</h1>
    <span><NavBar/></span>
    </div>
  )
}

export default Header