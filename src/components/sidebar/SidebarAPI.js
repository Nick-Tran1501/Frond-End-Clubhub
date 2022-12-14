import axios from "axios";



export const editUser = async (username, name, dob, phone, gender) => {
    const token = localStorage.getItem("token");
    const response = await axios({
        method: 'PUT',
        url: "https://rmit-club-dhyty.ondigitalocean.app/api/user/profile",
        headers: { 'Authorization': `Bearer ${token}` },
        data: {
            username,
            name,
            dob,
            phone,
            gender
        }
    })
        // return response.status;
        .then((response) => {
            console.log(response.status);
            return response.status;
        })
        .catch((err) => {
            console.log(err);
            return err.response.status;
        })
    return response;
}