import axios from "axios";





export const getClubMembers = async () => {
    const token = localStorage.getItem("token")
    const res = await axios({
        method: 'get',
        url: "https://rmit-club-dhyty.ondigitalocean.app/api/president/myclub/members",
        headers: { 'Authorization': `Bearer ${token}` }
    })
    if (res.status === 200) {
        return res.data
    }
}

export const getClubDetail = async () => {
    const token = localStorage.getItem("token")
    const res = await axios({
        method: 'get',
        url: "https://rmit-club-dhyty.ondigitalocean.app/api/president/myclub",
        headers: { 'Authorization': `Bearer ${token}` }
    })

    if (res.status === 200) {
        return res.data
    } else {
        console.log(res)
    }

}

export const getJoinClubReques = async () => {
    const token = localStorage.getItem("token")
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
    const token = localStorage.getItem("token")
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


export const setMemberRoleInClub = async (record, updatedRole) => {
    const token = localStorage.getItem("token")
    const res = await axios({
        method: 'put',
        url: "https://rmit-club-dhyty.ondigitalocean.app/api/president/myclub/members",
        headers: { 'Authorization': `Bearer ${token}` },
        data: {
            userId: record.key,
            role: updatedRole
        }
    })

    if (res.status === 200) {
        console.log(res.data.message)
    }
}

export const kickClubMember = async (record) => {
    const token = localStorage.getItem("token")
    const res = await axios({
        method: 'delete',
        url: `https://rmit-club-dhyty.ondigitalocean.app/api/president/myclub/members/${record.key}`,
        headers: { 'Authorization': `Bearer ${token}` },
    })

    if (res.status === 200) {
        console.log(res.data.message)
    }
}

