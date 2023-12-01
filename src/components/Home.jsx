import React, { useContext } from 'react'
import { Carousel } from 'react-bootstrap'
import bgimage from '../assets/home.jpg'
import { Newcontext } from '../App';
function Home() {
  const { latest, setLatest, movie, setMovie } = useContext(Newcontext);


  return (
    <div>
     
        <Carousel>
      <Carousel.Item>
       <img src={bgimage} alt="" style={{width:'100%',height:'90vh'}} />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img src="https://wallpapertag.com/wallpaper/full/d/1/3/946175-top-movie-poster-wallpaper-1920x1080-1080p.jpg" alt=""  style={{width:'100%',height:'90vh'}} />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://cutewallpaper.org/21/movie-collage-wallpapers/Index-of-wallpapersvideo-addons.jpg" alt=""  style={{width:'100%',height:'90vh'}} />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Home