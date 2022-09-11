import axios from "axios";


const token = localStorage.getItem("token");

export const getAdminData = async () => {  
    const response = await axios({
        method: "GET",
        url: "https://rmit-club-dhyty.ondigitalocean.app/api/user/profile",
        headers:{ 'Authorization': `Bearer ${token}`},
    })
    .then((response) => {
        console.log(response.data);
        return response.data;
    })
    .catch((err) => {
        console.log(err.message);
        return err.response.status;
    })
    return response;
}

