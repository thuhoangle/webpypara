import axios from 'axios'

const axiosCreate = axios.create({
    baseURL: 'https://socialmedia-66ibb6pdga-uc.a.run.app'
})

// export const getPost = axiosCreate.get('/getPost/')

export const getUser = axiosCreate.get('/initiateUser/')


