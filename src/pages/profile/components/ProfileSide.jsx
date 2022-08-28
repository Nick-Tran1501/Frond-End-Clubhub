import React, {useState, useEffect} from 'react';
import "../ProfilePage.css";
import "antd/dist/antd.css";
import { Image, Button, Comment, Form, Input, List, Carousel, DatePicker, Modal } from "antd";

function getStoredInfo() {
    const storedInfo = localStorage.getItem("studentID");
    if (!storedInfo) return {
        name: "",
        education: "",
        work: "",
        live: "",
        email: "",
        description: "",
        birthday: "",
        graduation: ""
    }
    return JSON.parse(storedInfo);
}


const ProfileSide = () => {
    const [modal3, setModal3] = useState(false);
    const [modal4, setModal4] = useState(false);

    const [info, setInfo] = useState(getStoredInfo)

    useEffect(() => {
        localStorage.setItem("studentID", JSON.stringify(info));
    }, [info])

    const showModal3 = () => {
        setModal3(true);
    };

    const showModal4 = () => {
        setModal4(true);
    };
    const handleOk = () => {
        setModal3(false);
        setModal4(false);
    };

    const handleCancel = () => {
        setModal3(false);
        setModal4(false);
    };

    function handleSubmit (event) {
        event.preventDefault();
        alert("Hello")
    }

    function handleChange (event) {
        setInfo((prevInfo) => ({
            ...prevInfo,
            [event.target.name]: [event.target.value],
        }))
    }
  return (
    <div className="main-left">
        <div className="ml intro">
            <div className="it it-row1">
                <h3>Intro</h3>
                <a onClick={showModal3}>Edit</a>
            </div>
            <div className="it it-row2">
                <div className="p-row">
                    <i className="fa-solid fa-graduation-cap"></i>
                    <div className="p-note">
                    <p>Graduate at {info.education}</p>
                    </div>
                </div>
                <div className="p-row">
                    <i className="bi bi-briefcase-fill"></i>
                    <div className="p-note">
                    <p>Work in {info.work}</p>
                    </div>
                </div>
                <div className="p-row">
                    <i className="bi bi-house-fill"></i>
                    <div className="p-note">
                    <p>Live in {info.live}</p>
                    </div>
                </div>
                <div className="p-row">
                    <i className="bi bi-envelope-fill"></i>
                    <div className="p-note">
                    <p>{info.email}</p>
                    </div>
                </div>
                <div className="p-row">
                    <i className="bi bi-blockquote-left"></i>
                    <div className="p-note">
                    <p>
                        "{info.description}"
                    </p>
                    </div>
                </div>
            </div>
            <Modal title="Change personal information" visible={modal3} onOk={handleOk} onCancel={handleCancel}>
                <form onSubmit={handleSubmit} className="upload_image" id="post_form">
                    <div className="user_infor">
                        <div className="profile_picture">
                            <img src="image/default_avata_girl.png" alt="profile" />
                        </div>
                        <p>Doraemon</p>
                    </div>

                    <input type="text" placeholder='Enter your education' name="education" onChange={handleChange} value={info.education} /> {/* should declare the value = formData.name because sth called contrilled components */}
                    <input type="text" placeholder='Enter your workplace' name="work" onChange={handleChange} value={info.work} />
                    <input type="text" placeholder='Enter your place' name="live" onChange={handleChange} value={info.live} />
                    <input type="text" placeholder='Email' name="email" onChange={handleChange} value={info.email} />
                    <input type="text" placeholder='Enter your description' name="description" onChange={handleChange} value={info.description} />
                </form>
            </Modal>
        </div>

        <div className="ml media">
            <div className="md it-row1">
                <div className='row1-title'>
                    <h3>Media</h3>
                    <a href="#">All images</a>
                </div>
            </div>
            <div className="img-list md">
                
                <Image
                    width="100%"
                    height="5rem"
                    src={require("../../../image/Image1.jpg")}
                    className="Images img"
                />
                <Image
                    width="100%"
                    height="5rem"
                    src={require("../../../image/Image2.jpg")}
                    className="Images"
                />
                <Image
                    width="100%"
                    height="5rem"
                    src={require("../../../image/Image3.jpg")}
                    className="Images"
                />
                <Image
                    width="100%"
                    height="5rem"
                    src={require("../../../image/ClubHub_Trans.png")}
                    className="Images"
                />
                <Image
                    width="100%"
                    height="5rem"
                    src={require("../../../image/Galaxy-login.png")}
                    className="Images"
                />
                <Image
                    width="100%"
                    height="5rem"
                    src={require("../../../image/Image3.jpg")}
                    className="Images"
                />
               
            </div>
        </div>

        <div className="ml friend-list">
            <div className="fr it-row1">
                <div className='row1-title'>
                    <h3>Members</h3>
                    <a href="#">All members</a>
                </div>
            </div>
            <div className='p-row mem-tag'>
                <img src='image/Image1.jpg' />
                <div className='memInfo'>
                    <h3>Doraemon</h3>
                    <p>Role: Club President</p>
                </div>
            </div>
            <div className='p-row mem-tag'>
                <img src='image/Image1.jpg' />
                <div className='memInfo'>
                    <h3>Doraemon</h3>
                    <p>Role: Club President</p>
                </div>
            </div>
            <div className='p-row mem-tag'>
                <img src='image/Image1.jpg' />
                <div className='memInfo'>
                    <h3>Doraemon</h3>
                    <p>Role: Club President</p>
                </div>
            </div>
            <div className='p-row mem-tag'>
                <img src='image/Image1.jpg' />
                <div className='memInfo'>
                    <h3>Doraemon</h3>
                    <p>Role: Club President</p>
                </div>
            </div>
            {/* <div className="fr img-list">
                
                <div><img src="image/Image1.jpg" alt="Mrs Y" className="img" />Doraemon</div>
                <div><img src="image/Image1.jpg" alt="Mrs Y" className="img" />Shizuka</div>
                <div><img src="image/Image1.jpg" alt="Mrs Y" className="img" />Chaien</div>
                <div><img src="image/Image1.jpg" alt="Mrs Y" className="img" />Suneo</div>
            </div> */}
        </div>

        <div className="ml event">
            <div className="it it-row1">
                <h3>Events</h3>
                <a onClick={showModal4}>Edit</a>
            </div>
            {/* <div className="p-row">
                <i className="fas fa-birthday-cake"></i>
                <div className="p-note">
                    <h3>Birthday !</h3>
                    <p>{info.birthday}</p>
                </div>
            </div>
            <div className="p-row">
                <i className="fa-solid fa-user-graduate"></i>
                <div className="p-note">
                    <h3>Graduated from {info.education}</h3>
                    <p>{info.graduation}</p>
                </div>
            </div> */}
            <Modal title="Change events" visible={modal4} onOk={handleOk} onCancel={handleCancel}>
                <form onSubmit={handleSubmit} className="upload_image" id="post_form">
                    <div className="user_infor">
                        <div className="profile_picture">
                            <img src="image/default_avata_girl.png" alt="profile" />
                        </div>
                        <p>Doraemon</p>
                    </div>

                    {/* <DatePicker onChange={handleChange} /> */}
                    <input type="date" placeholder='Enter your birthday' name="birthday" onChange={handleChange} value={info.birthday} /> {/* should declare the value = formData.name because sth called contrilled components */}
                    <input type="date" placeholder='Enter your graduation' name="graduation" onChange={handleChange} value={info.graduation} />
                </form>
            </Modal>
        </div>
    </div>
  )
}

export default ProfileSide;