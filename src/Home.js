import React from 'react';
import './Home.css';

var i = 0;
var txt = 'Hi I\'m Jayesh Berani                        ';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriters").innerHTML += txt.charAt(i);
    i++;
  }
  if(i == txt.length){
    document.getElementById("typewriters").innerHTML =''
    i=0;
  }
}setInterval(typeWriter, speed);

function Home() {

  return (
    <div className='home'>
      <div className='home__bg'>
        <div className='header d__flex align__items__center pxy__30'>
            <div className='logo'> 
                <img src={''} alt=''/>
            </div>
            <div className='navigation pxy__30'>
                <ul className='navbar d__flex'>
                    <a href='#Home'><li className='nav__items mx__15'>Home</li></a>
                    <a href='#About'><li className='nav__items mx__15'>About</li></a>
                    <a href='#Blog'><li className='nav__items mx__15'>Blog</li></a>
                    <a href='#Contact'><li className='nav__items mx__15'>Contact</li></a>
                    <a href='#Portfolio'><li className='nav__items mx__15'>Portfolio</li></a>
                </ul>
            </div>
        </div>
        <div className='container'>
          <div className='home__content'>
            <div className='home__meta'>
              <h1 className='home__text pz__10'>  
                WELCOME TO MY WORLD !
              </h1>
              <div>
              <h2 className='home__text pz__10' id='typewriters'>
                
              </h2>
              </div>
              <h3 className='home__text sweet'>
                Web Developer
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
