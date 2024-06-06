import axios from 'axios'

const apiDataBase = axios.create({
    baseURL:'https://vue-demos-8c77b-default-rtdb.firebaseio.com'
})

export default apiDataBase