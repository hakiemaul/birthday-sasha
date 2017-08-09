import React from 'react'
import { Carousel, Image } from 'react-bootstrap'

export default class PhotoGallery extends React.Component {
  state = {
    photos: [
      {
        uri: "/img/carousel-sasha.jpg",
        msg: "May you're granted with health and success.",
        msg2: "Keep smiling and shine the world with it..."
      },
      {
        uri: "/img/carousel-teman.jpg",
        msg: "May you're granted a lasting friendships.",
        msg2: "Be grateful to know that your friends will always be there for you..."
      },
      {
        uri: "/img/carousel-keluarga.jpg",
        msg: "May your family is blessed and loved by Allah SWT.",
        msg2: "Be grateful that your family loves you as much as you love them..."
      },
      {
        uri: "/img/carousel-hakiem.jpg",
        msg: "Happy 21st birthday.",
        msg2: "From your annoying faraway boyfriend, who will always love you.",
        side: "PS: Sorry I'm not there.. :(",
        side2: "PS2: Real present in our next meeting! ;)"
      }
    ]
  }

  render () {
    return (
        <Carousel>
          { this.state.photos.map((photo, index) => (
            <Carousel.Item key={index}>
              <Image alt="900x500" src={photo.uri}/>
              <Carousel.Caption style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', color: 'black', padding: 40}}>
                <h1>Happy birthday to you...</h1>
                <h3>{photo.msg}</h3>
                <h3>{photo.msg2}</h3>
                { photo.side ? (<div>
                    <h5>{photo.side}</h5>
                    <h5>{photo.side2}</h5>
                  </div>) : ''}
              </Carousel.Caption>
            </Carousel.Item>
          )) }
        </Carousel>
    )
  }
}
