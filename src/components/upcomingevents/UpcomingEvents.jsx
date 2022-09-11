import "./UpcomingEvents.scss";
import React, { useState, useEffect } from "react";
import "antd/dist/antd.min.css";
import { Image, Carousel, Typography, Space } from "antd";
import axios from "axios";

function UpcomingEvent() {
  const { Title, Text, Paragraph } = Typography;
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://rmit-club-dhyty.ondigitalocean.app/api/clubs/events/all",
    })
      .then((response) => {
        setEvents(response.data);
        console.log("Event", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // return events.map((event) => {
  return (
    <div className="upComingContainer">
      {events.length > 0 &&
        events.map((event) => (
          <div className="event-card" key={event._id}>
            <div className="event-pic">
              <Carousel autoplay dots={false}>
                {event.imageUrl.map((picture) => {
                  return <Image key={event.key} height="auto" src={picture} />;
                })}
              </Carousel>
            </div>
            <div className="event-content">
              <Title level={5}> {event?.name} </Title>
              <Text>{event?.location}</Text>
              <Text>{event?.startDate}</Text>
            </div>
          </div>
        ))}

      {events.length === 0 && <Title level={4}>Events List</Title>}
    </div>

    // <div className="upComingContainer" key={event._id}>
    // <div className="EventImage">
    // <Carousel
    // >

    /* {event.imageUrl.map((pic) => {
              return (
                <Image
                  key={pic.index}
                  width="100%"
                  src={pic}
                  style={{
                    objectFit: "contain",
                  }}
                  alt="event"
                />
              );
            })} */

    //   </Carousel>
    // </div>

    /* <div className="EventInfo">
          <Title
            level={4}
            // style={{
            //   fontSize:"15px",
            //   fontWeight:"bold",
            //   opacity:"0.6"
            // }}
          >
            Event
          </Title>

          <Title
            Title
            level={4}
            // style={{
            //   fontSize:"20px",
            //   fontWeight:"bold"

            // }}
          >
            {event.name}
          </Title>

          <p
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              opacity: "0.6",
            }}
          >
            {event._id}
          </p>
        </div> */
    // </div>
  );
  // });
}

export default UpcomingEvent;
