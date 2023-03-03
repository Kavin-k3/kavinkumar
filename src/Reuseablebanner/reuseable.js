import React from "react";
import {Link} from 'react-router-dom'
export function Navbar(){ 
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">ReactJS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">

        <Link to='/home'>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Helloworld</a>
        </li></Link>

        <Link to='/about'>
        <li class="nav-item"> 
          <a class="nav-link" href="#">Memberlogin</a>
        </li></Link>

         <Link to='/button'>
        <li class="nav-item">
          <a class="nav-link" href="#">socialbutton</a>
        </li></Link> 

        <Link to='/notify'>
        <li class="nav-item">
          <a class="nav-link disabled">Notification</a>
        </li></Link>

        <Link to='/tech'>
        <li class="nav-item">
          <a class="nav-link disabled">Technologies</a>
        </li></Link>

        <Link to='/congrats'>
        <li class="nav-item">
          <a class="nav-link disabled">Congratscard</a>
        </li></Link>

        <Link to='/super'>
        <li class="nav-item">
          <a class="nav-link disabled">Superleague</a>
        </li></Link>
      </ul>
    </div>
  </div>
</nav>
      

        </>
    );
}





















