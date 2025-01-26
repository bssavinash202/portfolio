import React, { useRef, useState } from 'react'
import './Navbar.css';
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const menuRef =useRef();
  const openMenu = () =>{
    menuRef.current.style.right = "0";
  }
  const closeMenu = () =>{
    menuRef.current.style.right = "-350px";
  }
  

  return (
    <div className='navbar'>
      <img src={logo} alt='logo'/>
      <img src={menu_open} onClick={openMenu} alt='' className='nav-menu-open' />
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt='' className='nav-menu-close'/>
        <li><p onClick={()=>{setMenu('home')}}><AnchorLink className='anchor' offset={-50} href='#home'>Home</AnchorLink></p>{menu==='home'?<img src={underline} alt=''/>:<></>}</li>
        <li><p onClick={()=>{setMenu('about')}}><AnchorLink className='anchor' offset={50} href='#about'>About me</AnchorLink></p>{menu==='about'?<img src={underline} alt=''/>:<></>}</li>
        <li><p onClick={()=>{setMenu('services')}}><AnchorLink className='anchor' offset={50} href='#services'>Services</AnchorLink></p>{menu==='services'?<img src={underline} alt=''/>:<></>}</li>
        <li><p onClick={()=>{setMenu('portfolio')}}><AnchorLink className='anchor' offset={50} href='#portfolio'>Portfolio</AnchorLink></p>{menu==='portfolio'?<img src={underline} alt=''/>:<></>}</li>
        <li><p onClick={()=>{setMenu('contact')}}><AnchorLink className='anchor' offset={50} href='#contact'>Contact</AnchorLink></p>{menu==='contact'?<img src={underline} alt=''/>:<></>}</li>
      </ul>
      <div className='nav-connect'>
      <AnchorLink className='anchor' offset={50} href='#contact'>Connect with me</AnchorLink>
      </div>
    </div>
  )
}

export default Navbar;
