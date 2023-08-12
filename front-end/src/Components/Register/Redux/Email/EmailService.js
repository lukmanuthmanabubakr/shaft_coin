import axios from "axios"
import { API_URL } from "../Features/Auth/AuthService"

//Send Authomated email

const sendAuthomatedEmail = async (emailData) => {
    const response = await axios.post(API_URL + "sendAuthomatedEmail", emailData);
    return response.data.message;
}


const emailService = {
    sendAuthomatedEmail
}

export default emailService