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
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="upComingContainer">
      {events.length > 0 &&
        events.map((event) => (
          <div className="event-card" key={event._id}>
            <div className="event-pic" key= {event._id} >
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

  );
}

export default UpcomingEvent;
