

import axios from "axios";



// get club data
export const getRequestList = async () => {
    const token = localStorage.getItem('token');
    const response = await axios({
        method: 'GET',
        url: "https://rmit-club-dhyty.ondigitalocean.app/api/admin/clubrequests",
        headers: { 'Authorization': `Bearer ${token}` },
    })

    if (response.status === 200) {
        return response.data
    }
};

export const acceptRequest = async (requestID) => {
    const token = localStorage.getItem('token');
    const response = await axios({
        method: 'PUT',
        url: `https://rmit-club-dhyty.ondigitalocean.app/api/admin/clubs/${requestID}`,
        headers: { 'Authorization': `Bearer ${token}` },
        data: {
            status: "Active"
        }
    })

    if (response.status === 200) {
        console.log(response.data.message);
        return true;
    }

};

export const cancelRequest = async (requestID) => {
    const token = localStorage.getItem('token');
    const response = await axios({
        method: 'DELETE',
        url: `https://rmit-club-dhyty.ondigitalocean.app/api/admin/clubs/${requestID}`,
        headers: { 'Authorization': `Bearer ${token}` },
    })

    if (response.status === 200) {
        console.log(response.data.message);
        return true;
    }
};