import axios from "axios";



export const getUsers = async () => {
    const token = localStorage.getItem("token");
    const response = await axios({
        method: "GET",
        url: "https://rmit-club-dhyty.ondigitalocean.app/api/user/getall",
        headers: { 'Authorization': `Bearer ${token}` },
    })

    if (response.status === 200) {
        return response.data
    }
    else if (response.status === 400) {
        return response.data
    }
}


export const deleteStudent = async (userId) => {
    const token = localStorage.getItem("token");
    const response = await axios({
        method: 'DELETE',
        url: `https://rmit-club-dhyty.ondigitalocean.app/api/admin/users/delete/${userId}`,
        headers: { 'Authorization': `Bearer ${token}` },
    })
        .then((response) => {
            // console.log(response.status);
            return response.status;
        })
        .catch((err) => {
            console.log(err);
        });
    return response;
}