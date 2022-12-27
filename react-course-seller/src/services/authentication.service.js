import axios from "axios";
import { BASE_API_URL } from "../common/Constants";

const BASE_URL = BASE_API_URL + '/api/authentication';

class AuthenticationService {

    //sending user object as form data.

    login(user){
        return axios.post(BASE_URL + '/login', user);
    }

    register(user){
        return axios.post(BASE_URL + '/register', user);
    }

}
export default new AuthenticationService();