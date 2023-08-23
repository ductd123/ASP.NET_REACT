import React, { Fragment, useEffect, useState } from "react";
import axios from 'axios';

export default function Registration() {
    const [name, setName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [address, setAddress] = useState('');

    const handleNameChange = (value) => {
        setName(value)
    }
    const handlePhoneNoChange = (value) => {
        setPhoneNo(value)
    }
    const handleAddressChange = (value) => {
        setAddress(value)
    }
    const handleSave = async () => {
        // const data = {
        //     Name: name,
        //     PhoneNp: phoneNo,
        //     Address: address,
        //     IsActive: 1
        // };
        // const url = 'https://localhost:44494/api/v1/Registration';
        // axios.post(url, data).then((result) => {
        //     console.log(result.data);
        // }).catch((error) => {
        //     alert(error);
        // })
        // const response = await fetch('https://localhost:44494/test/Registration');
        // const data = await response.json();
        // console.log(response);
        
    }
    const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:7287/weatherforecast', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              Name: 'John Doe',
              PhoneNo: '123456789',
              Address: '123 Street',
              IsActive: 1
            })
          });
          
          const data = await response.text();
          console.log(data); // Xử lý dữ liệu nhận được từ API ở đây
        } catch (error) {
          console.log(error);
        }
      };
    return (
        <Fragment>
            <div className="form-container sign-in-container">
                <form action="#">
                    <h1>Create Account</h1>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Xưng danh đi" onChange={(e) => handleNameChange(e.target.value)} />
                    <input type="text" placeholder="Số đt???" onChange={(e) => handlePhoneNoChange(e.target.value)} />
                    <input type="text" placeholder="Em ở đâu em ơi??" onChange={(e) => handleAddressChange(e.target.value)} />
                    {/* <input type="password" placeholder="Password" /> */}
                    <button onClick={(e) => fetchData()}>Sign Up</button>
                </form>
            </div>
        </Fragment>
    )
}