// src/api.js
import axios from 'axios';

const API_BASE_URL = 'https://admin.octopuspro.com'; // Update the base URL if needed

export async function sendRequest(data) {
    try {
        const response = await axios.post(
            `${API_BASE_URL}/send-canned-responses-form-email/sms/customer/1023992`,
            data
        );

        return response.data; // Return the response data to the caller
    } catch (error) {
        throw error; // Rethrow the error to the caller
    }
}

