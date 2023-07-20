// src/components/SendRequests.js
import React, { useState } from 'react';
import axios from 'axios';
import './SendRequests.css';

const SendRequests = () => {

    const defaultFormData = {
        'canned-responses': '712',
        'item_type': 'customerprofile',
        'core_body': 'test {customer_name} {trading_name}',
        'customer_list': '',
        'contractors_list': '',
        'item_id': '1023992',
        'user_id': '1023992',
        'send_anyway': 'false',
        to: '+201012391979',
    };

    const [formData, setFormData] = useState(defaultFormData);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const response = await sendRequest(formData);
            const API_BASE_URL = 'https://admin.octopuspro.com';
            const response = await axios.post(
                `${API_BASE_URL}/send-canned-responses-form-email/sms/customer/1023992`,
                formData
            );


            // const response = await axios.post('/api/send-canned-responses-form-email/sms/customer/1023992', formData);
            console.log('Response:', response);
            // Do something with the response data if needed
        } catch (error) {
            console.log('Error:', error);
            // Handle error if needed
        }
    };

    return (
        <div className="form-container">
            <h2>Send Requests</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Content:</label>
                    <input
                        type="text"
                        name="content"
                        value={formData.content || ''}
                        onChange={handleInputChange}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">To:</label>
                    <input
                        type="text"
                        name="to"
                        value={formData.to}
                        onChange={handleInputChange}
                        className="form-input"
                    />
                </div>
                <button type="submit" className="form-submit">
                    Send Request
                </button>
            </form>
        </div>
    );
};

export default SendRequests;
