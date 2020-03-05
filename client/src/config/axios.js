import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://keer-notes-app.herokuapp.com'
    //baseURL: 'http://localhost:3030/'
})

// don't put the forward slash

export default axios