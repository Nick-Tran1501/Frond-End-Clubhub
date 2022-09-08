import axios from 'axios'


const token = localStorage.getItem('token');

// get club data
export const getActiveClubData = async () => {
    const response = await axios({
        method: 'GET',
        url: "https://rmit-club-dhyty.ondigitalocean.app/api/clubs",
    })

    if (response.status === 200) {
        return response.data
    }
};


// search club by ID
export const getClubID = async (id) => {
    const response = await axios({
        method: 'GET',
        url: `https://rmit-club-dhyty.ondigitalocean.app/api/clubs/${id}`,
    })

    if (response.status === 200) {
        return response.data
    }
};


// get club 
export const getStudent= async (sID,clubId) => {
    const response = await axios({
        method: 'POST',
        url: `https://rmit-club-dhyty.ondigitalocean.app/api/admin/users/search`,
        headers:{ 'Authorization': `Bearer ${token}`},
        data: {
            clubId,
            value: sID
        }
    })

    if (response.status === 200) {
        return response.data
    }
};






