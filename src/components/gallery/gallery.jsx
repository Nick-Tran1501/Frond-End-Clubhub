import React from 'react';
import './gallery.css';
import club_1 from "../../image/clubs-cheer.jpg"
import club_2 from "../../image/club-cheer_2.png"
import avatar from "../../image/avatar.png"
// import Aos from 'aos';
// import "aos/dist/aos.css"
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react';
import teammate from './team_data'

function Gallery() {

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         initialSlide: 0
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };

  // useEffect(() => {
  //   Aos.init({duration: 2000});
  // }, []);

  return (
    <div className='galleryContainer'>
      <div className='gallery'>

        {/* Skewed card */}
        <section className='galleryContent_1'>
          <div className="splitview skewed">
            <div className="panel bottom">
                <div className="content">
                    <div className="description">
                        <h1>Events</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia mollitia saepe et, voluptatum labore tempora nulla veritatis officiis, explicabo nemo error beatae perferendis, odit iusto quo veniam commodi consectetur doloremque?</p>
                    </div>

                    <img src={club_1} alt="Original" />
                </div>
            </div>

            <div className="panel top">
                <div className="content">
                    <div className="description">
                        <h1>Announcement</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis reprehenderit sequi dolore eum inventore sint nisi reiciendis hic, maiores dignissimos minus eaque ut impedit nihil asperiores soluta esse? Voluptatibus!</p>
                    </div>

                    <img src={club_2} alt="Duotone" />
                </div>
            </div>

            <div className="handle"></div>
          </div>
        </section>

        {/* Left card */}
        <section className='galleryContent_2'>
          <div className="splitview skewed">
            <div className="panel left">
                <div className="content">
                    <div className="description">
                        <h1>Clubhub</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod exercitationem provident suscipit cum saepe facere consequatur fugit quas, excepturi, ipsum itaque praesentium unde inventore. Dolores optio ducimus quidem sequi ex?</p>
                    </div>
                </div>
            </div>

            <div className="panel left_2">
                <div className="content">
                    <img src={club_2} alt="Duotone" />
                </div>
            </div>
          </div>
        </section>
        
        {/* Right card */}
        <section className='galleryContent_3'>
          <div className="splitview skewed">
            <div  className="panel right">
                <div className="content">
                    <div className="description">
                        <h1>Features</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore repellat, facere impedit odit perspiciatis minus omnis veritatis totam quos voluptas, placeat dolore, deserunt ad! Illum repellendus illo assumenda laborum cum?</p>
                    </div>
                </div>
            </div>

            <div className="panel right_2">
                <div className="content">
                    <img src={club_2} alt="Duotone" />
                </div>
            </div>
          </div>
        </section>

        {/* Left card */}
        <section className='galleryContent_4'>
          <div className="splitview skewed">
            <div className="panel left">
                <div className="content">
                    <div className="description">
                        <h1>Work with us</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium in nobis reprehenderit, fuga praesentium ratione, alias quod impedit nam a provident vero porro eum dolore, voluptas quaerat unde architecto eveniet.</p>
                    </div>
                </div>
            </div>

            <div className="panel left_2">
                <div className="content">
                    <img src={club_2} alt="Duotone" />
                </div>
            </div>
          </div>
        </section>

        {/* Team card */}
        <section className='team' id='team'>
          <div className='max-width'>
            <h2 className='tag'>Our Team</h2>
              <div className="imgslider">
                {/* <Slider {...settings}> */}
                  {teammate.map((mate) => (
                    <div className='card_team'>
                      <img src={avatar}  alt={mate.name} />
                      <h2>{mate.name}</h2>
                      <p>{mate.role}</p>
                    </div>
                 ))}
                {/* </Slider> */}
              </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Gallery;