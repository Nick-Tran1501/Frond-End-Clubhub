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



// get club 

export const getStudent= async () => {
    const response = await axios({
        method: 'GET',
        url: "https://rmit-club-dhyty.ondigitalocean.app/api/clubs",
    })

    if (response.status === 200) {
        return response.data
    }
};






