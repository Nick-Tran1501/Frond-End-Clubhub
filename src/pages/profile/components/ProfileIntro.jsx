import React, {useState, useEffect} from 'react';
import "../profile.css";
import "antd/dist/antd.css";
import { Button, Modal } from 'antd';

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

const ProfileIntro = () => {
    const [info, setInfo] = useState(getStoredInfo)

    useEffect(() => {
        localStorage.setItem("studentID", JSON.stringify(info));
    }, [info])

  return (
    <div>
        <div className='ab'>
            <div className="ml intro">
                <div className="it it-row1">
                    <h3>About</h3>
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
            </div>
        </div>
    </div>
  )
}

export default ProfileIntro