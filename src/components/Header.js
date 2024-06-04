import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import styles from './Styling.module.css';

const Header = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(search);
  };


return(
<nav className="navbar navbar-expand-lg ">
  
    
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto"style={{backgroundColor:'black'}}>
    <li className="nav-item ">
        <Link className="nav-link" href="#" style={{marginRight: 1 + 'em',color:'white',fontSize:20}}>
          <img src={"log.jpeg"}height={80}width={160}></img> </Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link" href="/" style={{marginRight: 1+ 'em',marginTop: 1 + 'em',marginBottom: 1 + 'em',color:'white',fontSize:20}}>Home </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="aboutus"style={{marginRight: 1 + 'em',marginTop: 1 + 'em',marginBottom: 1 + 'em',color:'white',fontSize:20}}>About us</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="contactus"style={{marginRight: 1+ 'em',marginTop: 1 + 'em',marginBottom: 1 + 'em',color:'white',fontSize:20}}>Contact Us</Link>
      </li>
     
      <li className="nav-item">
        <Link className="nav-link" href="products"
        style={{marginRight: 1+ 'em',color:'white',marginTop: 1 + 'em',marginBottom: 1 + 'em',fontSize:20}}>Products</Link>
      </li>
     
    
       <li className="nav-item">
      <Link className="nav-link " href="cart" style={{marginTop: 1 + 'em',marginBottom: 1 + 'em'}}>
          <img src={"cartlogo.png"} height={40}></img>
        </Link></li>  <li className="nav-item">
        <Link className="nav-link " href="login" style={{marginBottom: 1 + 'em'}}>
          <img src={"login.jpeg"} height={80}width={140}></img>
        </Link></li>
       
       

      <li className="nav-item">
    <form onSubmit={handleSearch}>
          <input
            type="text" style={{marginLeft: 5 + 'em',color:'white',backgroundColor:'black',fontSize:20,height:50,width:350}}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for products..."
          />
          <button type="submit"style={{marginRight: 1 + 'em',marginLeft: 2 + 'em',marginTop: 1 + 'em',marginBottom: 1 + 'em',color:'white',backgroundColor:'black',fontSize:20,height:50,border:'3px white solid'}}>Search</button>
        </form></li></ul>
  </div>
</nav>)}

export default Header;
