import React from 'react'
import Logo from '../assets/logo.svg'
import SymbolLogo from '../assets/logo-symbol.svg'
import '../styles/Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='home-page'>
        <div className="logo-home">
            <img src={SymbolLogo} alt="" />
        </div>
        <div className="content">
            <div className="text">
                <h1>Helogram</h1>
            </div>
            <div className="btn">
                <button><Link to="/feed">Start</Link></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
