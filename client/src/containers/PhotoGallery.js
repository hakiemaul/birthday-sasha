import React from 'react'
import { Carousel, Image } from 'react-bootstrap'

export default class PhotoGallery extends React.Component {
  state = {
    photos: [
      {
        uri: "/img/background-landing.png",
        msg: "caption pertama"
      },
      {
        uri: "/img/background-landing.png",
        msg: "caption kedua"
      },
      {
        uri: "/img/background-landing.png",
        msg: "caption ketiga"
      }
    ]
  }

  render () {
    return (
      <div className="container">
        <h1>Happy birthday to you, Sha.</h1>
        <Carousel>
          { this.state.photos.map(photo => (
            <Carousel.Item>
              <Image width={900} alt="900x500" src={photo.uri} responsive/>
              <Carousel.Caption style={{ backgroundColor: 'white', color: 'black'}}>
                <h3>{photo.msg}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          )) }
        </Carousel>
      </div>
    )
  }
}
