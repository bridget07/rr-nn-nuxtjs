import { request } from '@/plugins/request'

export const login = data => {
    return request({
        method: 'POST',
        url: '/api/users/login',
        data
    })
}

export const register = data => {
    return request({
        method: 'POST',
        url: '/api/users',
        data
    })
}

export const followUser = (username) => {
    return request({
      method: 'POST',
      url: `/api/profiles/${username}/follow`,
    })
}
  
export const unfollowUser = (username) => {
    return request({
        method: 'DELETE',
        url: `/api/profiles/${username}/follow`,
        data
    })
}
export const getCurrentUser = () => {
    return request({
      method: 'GET',
      url: '/api/user'
    })
}
  
export const updateCurrentUser = (data) => {
    return request({
        method: 'PUT',
        url: '/api/user',
        data
    })
}

export const getProfile = (username) => {
    return request({
        method: 'GET',
        url: `/api/profiles/${username}`
    })
}