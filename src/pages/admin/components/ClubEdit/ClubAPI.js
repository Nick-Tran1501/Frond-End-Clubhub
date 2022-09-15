import axios from 'axios'
import UserEdit from '../userEdit/UserEdit';




// get club data
export const getActiveClubData = async () => {
    const token = localStorage.getItem('token');
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
    const token = localStorage.getItem('token');
    const response = await axios({
        method: 'GET',
        url: `https://rmit-club-dhyty.ondigitalocean.app/api/clubs/${id}`,
    })

    if (response.status === 200) {
        return response.data
    }
};

// get club 
export const getStudent = async (sID, clubId) => {
    const token = localStorage.getItem('token');
    const response = await axios({
        method: 'POST',
        url: `https://rmit-club-dhyty.ondigitalocean.app/api/admin/users/search`,
        headers: { 'Authorization': `Bearer ${token}` },
        data: {
            clubId,
            value: sID
        }
    })

    if (response.status === 200) {
        return response.data
    }
};


// add new student to club
export const addStudentToClub = async (clubId, userId, role) => {
    const token = localStorage.getItem('token');
    const response = await axios({
        method: 'PUT',
        url: "https://rmit-club-dhyty.ondigitalocean.app/api/admin/members/add",
        headers: { 'Authorization': `Bearer ${token}` },
        data: {
            clubId,
            userId,
            role
        }
    })

    if (response.status === 200) {
        return response.data.message;
    }
}

export const removeUserFromClub = async (userId, clubId) => {
    const token = localStorage.getItem('token');
    const response = await axios({
        method: 'DELETE',
        url: "https://rmit-club-dhyty.ondigitalocean.app/api/admin/clubs/members/remove",
        headers: { 'Authorization': `Bearer ${token}` },
        data: {
            userId,
            clubId
        }
    })

    if (response.status === 200) {
        return response.data.message;
    }
}

export const updateRole = async (clubId, userId, role) => {
    const token = localStorage.getItem('token');
    const response = await axios({
        method: 'PUT',
        url: "https://rmit-club-dhyty.ondigitalocean.app/api/admin/clubs/members/role",
        headers: { 'Authorization': `Bearer ${token}` },
        data: {
            clubId,
            userId,
            role
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




