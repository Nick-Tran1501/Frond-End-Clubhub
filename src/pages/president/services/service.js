import axios from "axios";


const token = localStorage.getItem("token")


export const getClubMembers = async () => {
    const res = await axios({
        method: 'get',
        url: "https://rmit-club-dhyty.ondigitalocean.app/api/president/myclub/members",
        headers: { 'Authorization': `Bearer ${token}` }
    })
    if (res.status === 200) {
        return res.data.members
    }
}

export const getClubDetail = async () => {
    const res = await axios({
        method: 'get',
        url: "https://rmit-club-dhyty.ondigitalocean.app/api/president/myclub",
        headers: { 'Authorization': `Bearer ${token}` }
    })

    if (res.status === 200) {
        return res.data
    }
}

export const getJoinClubReques = async () => {
    const res = await axios({
        method: 'get',
        url: "https://rmit-club-dhyty.ondigitalocean.app/api/president/myclub/request",
        headers: { 'Authorization': `Bearer ${token}` }
    })

    if (res.status === 200) {
        return res.data
    }
}

export const processJoinRequest = async (record, action) => {
    const res = await axios({
        method: 'post',
        url: "https://rmit-club-dhyty.ondigitalocean.app/api/president/myclub/request",
        headers: { 'Authorization': `Bearer ${token}` },
        data: {
            requestId: record.key,
            action: action
        }
    })

    if (res.status === 200) {
        console.log(res.data)
    }
}

export const kickClubMember = async (record) => {
    const res = await axios({
        method: 'delete',
        url: `https://rmit-club-dhyty.ondigitalocean.app/api/president/myclub/members/${record.key}`,
        headers: { 'Authorization': `Bearer ${token}` },
    })

    if (res.status === 200) {
        console.log(res.data)
    }
}

