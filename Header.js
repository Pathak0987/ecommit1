import React, { useEffect, useState } from 'react'
import './Header.css'

const Header = () => {
  const [location, setLocation]=useState('Fetching Location ....')
  useEffect(()=>{
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
          (position)=>{
            const { latitude, longitude } = position.coords;
            fetch(`https://api-bdc.net/data/reverse-geocode-client?latitude=${latitude}=&longitude=${longitude}&localityLanguage=en`)
            .then(response => response.json())
            .then(data => {
              setLocation(`${data.city}, ${data.principalSubdivision} ,${data.countryName}`)
            })
            .catch(e =>{
              console.log(e);
              setLocation(`Unable to set Location`)
            });
         
          }

        )

      }else{
        setLocation('Geolocation is not supported by your browser')
      }
  }, []);



  return (
    <header className='header'>
       <div className='header-left'>
              <img src="logoecom.jpeg" alt='Logo JPEG'></img>
       </div>
       <div   className='header-center'>
        <h1 className='website-name'>E SHOP</h1>
       </div>
       <div className="header-right">
            <span classname='location-idicator'>{location}</span>
       </div>
    </header>
  )
}

export default Header