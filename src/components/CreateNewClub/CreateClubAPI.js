import axios from 'axios'

const token = localStorage.getItem("token")
// Create club api
export const sendCreateClubRequest = async (clubData) => {
    const response = await axios({
        url: "https://rmit-club-dhyty.ondigitalocean.app/api/clubs/",
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        data: {
            name: clubData.name,
            email: clubData.email,
            slogan: clubData.slogan,
            description: clubData.description,
            category: clubData.category
        }
    })
        .then(success => {
            return {
                success: true,
                message: 'Request sent successfully, please wait for approval'
            }
        })
        .catch(err => {
            if (err.response.status === 403)
                return {
                    success: false,
                    message: 'You already create a club, each account is limiting to manage one club'
                }

            if (err.response.status >= 500) {
                console.log(err.response)
                return {
                    success: false,
                    message: 'An error occur while sending your request, please try again'
                }
            }

        })

    return response


}