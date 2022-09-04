import axios from "axios";


const token = localStorage.getItem("token")


export const getClubMembers = async () => {
    const res = await axios({
        method: 'get',
        url: "http://localhost:8080/api/president/myclub/members",
        headers: { 'Authorization': `Bearer ${token}` }
    })
    if (res.status === 200) {
        return res.data
    }
}

export const getClubDetail = async () => {
    const res = await axios({
        method: 'get',
        url: "http://localhost:8080/api/president/myclub",
        headers: { 'Authorization': `Bearer ${token}` }
    })

    if (res.status === 200) {
        return res.data
    }

    if (res.status === 404) {
        return undefined
    }
}

export const getJoinClubReques = async () => {
    const res = await axios({
        method: 'get',
        url: "http://localhost:8080/api/president/myclub/request",
        headers: { 'Authorization': `Bearer ${token}` }
    })

    if (res.status === 200) {
        return res.data
    }
}

export const processJoinRequest = async (record, action) => {
    const res = await axios({
        method: 'post',
        url: "http://localhost:8080/api/president/myclub/request",
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
    const res = await axios({
        method: 'put',
        url: "http://localhost:8080/api/president/myclub/members",
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
    const res = await axios({
        method: 'delete',
        url: `http://localhost:8080/api/president/myclub/members/${record.key}`,
        headers: { 'Authorization': `Bearer ${token}` },
    })

    if (res.status === 200) {
        console.log(res.data.message)
    }
}

