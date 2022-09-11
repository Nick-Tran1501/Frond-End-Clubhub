import axios from 'axios'

const token = localStorage.getItem("token")
// Create club api
export const sendCreateClubRequest = async (clubData) => {
    const response = await axios({
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        data: clubData
    })
}