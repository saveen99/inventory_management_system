import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export const Search = () => {
  window.addEventListener("scroll",function(){
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })
  return (
    <section className='search'>
      <div className="container c_flex">
        <div className="logo width">
          <img src={logo} alt="" className='logo-size'/>
        </div>
        <div className="search-box f_flex">
          <i className='fa fa-search'></i>
          <input type="text" placeholder='Search and hit enter...' />
          <span>All Category</span>
        </div>
        <div className="icon f_flex width">
          <i className='fa fa-user icon_circle'></i>
          <div className="cart">
            <Link to="/cart">
              <i className='fa fa-shopping-bag icon-circle'></i>
            </Link>
            <span>0</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Search