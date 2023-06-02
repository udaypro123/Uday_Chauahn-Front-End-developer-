import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
 
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid ">
          <div className="navbar-text">
            <img src="../share-removebg-preview.png" alt="....image not fount" />
          </div>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" >Human Spaceflight </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Dragon</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Starship</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
