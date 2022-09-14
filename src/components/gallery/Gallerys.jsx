import React from "react";
import "./Gallerys.css";
import club_1 from "../../image/clubs-cheer.jpg";
import club_2 from "../../image/club-cheer_2.png";
import avatar from "../../image/avatar.png";
import { useEffect } from "react";
import teammate from "./team_data";
import Aos from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="galleryContainer">
      <div className="gallery">
        {/* Skewed card */}
        <section className="galleryContent_1">
          <div data-aos="zoom-in-up" className="splitview skewed">
            <div className="panel bottom">
              <div className="content">
                <div className="description">
                  <h1>Events</h1>
                  <p>
                  A great place to help you manage your club and create a variety of trending events. Connect with content creators around the world. Get creative from other clubs and grow your own. Creating an international environment for learning while playing to improve the ability to integrate into globalization. Reduce stress from deadlines and improve concentration with diverse activities and friendly faces of the club. Where you can freely speak, freely express your true self and contribute ideas to improve the club's dynamism.
                  </p>
                </div>

                <img src={club_1} alt="Original" />
              </div>
            </div>

            <div className="panel top">
              <div className="content">
                <div className="description">
                  <h1>Announcement</h1>
                  <p>
                  Discover great and dynamic clubs according to your interests. Stay up to date with the latest news and announcements for your club. Every movement of the world, every change in trend will be instantly updated to your phone or computer through our application. Stay connected with friends around the world and discover new information, new faces from the Clubhub homepage. As a club president, Clubhub provides a means to link all club members at any physical distance. Organizing club meetings has never been easier.
                  </p>
                </div>

                <img src={club_2} alt="Duotone" />
              </div>
            </div>

            <div className="handle"></div>
          </div>
        </section>

        {/* Left card */}
        <section className="galleryContent_2">
          <div data-aos="fade-up" className="splitview skewed">
            <div className="panel left">
              <div className="content">
                <div className="description">
                  <h1>Clubhub</h1>
                  <p>
                  Give people the opportunity to build community and bring the world closer together. Connect with more people, build influence, and create compelling content that's distinctly yours. Where hundreds of people from all over the world come together to hang out, engage in dialogue, make friends, and learn new things — and leave feeling better than when they arrived. Encourage students to go beyond their comfort zone, develop soft skills, and build a solid relationship foundation for the future. Discover your hidden talent, meet talented people and role models.
                  </p>
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
        <section className="galleryContent_3">
          <div data-aos="fade-up" className="splitview skewed">
            <div className="panel right">
              <div className="content">
                <div className="description">
                  <h1>Features</h1>
                  <p>
                  Express yourself in new ways with the latest Clubhub features. Update your current status and share memorable moments with the post function. Find out information from every club as well as members easily with our user interface. Club presidents can create their own request to interact with their club. Each user can modify their own profile, so that everyone can get to know themselves. We offer a feature to create club events and notify your members whenever you want. And much more interesting actions – come with us to explore more.
                  </p>
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
        <section className="galleryContent_4">
          <div data-aos="fade-up" className="splitview skewed">
            <div className="panel left">
              <div className="content">
                <div className="description">
                  <h1>Work with us</h1>
                  <p>
                  We believe real change starts with new actions. Here, your voice matters. Come as you are and together we’ll do what’s right (not what"’"s easy) to serve the club community. Share and grow your club with our diverse, global stakeholders. If you have a desire to join a club that is right for you but don't know where to start, Clubhub is a perfect choice. Make your dream of running your own club come true. Join us to learn new things from around the world. We provide useful facilities for you to customize your own clubhouse.                  </p>
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
        <section className="team" id="team">
          <div className="max-width">
            <h2 className="tag">Our Team</h2>
          </div>
          <div className="imgslider">
            <Slider {...settings}>
             
              <div className="card_team">
                <img
                  src={require("../../image/Duan.jpeg")}
                  alt="profile"
                 
                />
                <h2>Hoang Ngoc Duan</h2>
                <p>Front-end Developer</p>
              </div>
              <div className="card_team">
                <img
                  src={require("../../image/Nick.jpg")}
                  alt="profile"
                  
                />
                <h2>Tran Chan Nam</h2>
                <p>Front-end Developer</p>
              </div>
              
              <div className="card_team">
                <img
                  src={require("../../image/LeAnhTuan.jpeg")}
                  alt="profile"
                  
                />
                <h2>Le Anh Tuan</h2>
                <p>Project Manager</p>
              </div>
              <div className="card_team">
                <img
                  src={require("../../image/NguyenQuocThang.jpg")}
                  alt="profile"
                  
                />
                <h2>Nguyen Quoc Thang</h2>
                <p>Back-end Developer</p>
              </div>

              <div className="card_team">
                <img
                  src={require("../../image/ThangNho.jpg")}
                  alt="profile"
                 
                />
                <h2>Do Quang Thang</h2>
                <p>Front-end Developer</p>
              </div>
            </Slider>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gallery;
