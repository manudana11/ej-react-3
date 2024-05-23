import React, { useEffect, useState } from 'react'
import './Reserve.css'

const Reserve = () => {
    const initialValue = {
        name: '',
        email: '',
        phone: '',
        reservationDate: '',
        reservationTime: '',
        numPeople: '',
        location: '',
        comments: ''
    };

    const [data, setData] = useState(initialValue);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");

    const handleInputChange = (e) => {
        console.log(e.target.value)
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    };
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        let allReserves = JSON.parse(localStorage.getItem('All Reserves')) || [];
        allReserves.push(data);
        localStorage.setItem('All Reserves', JSON.stringify(allReserves));
        setData(initialValue);
    }
    const validationForm = () => {
        switch (true) {
            case !data.name:
                setMessage("")
                break;
            case data.name.length < 3:
                setMessage("Name must be at least 3 characters");
                setBtnDisabled(true)
                break;
            case !data.reservationDate:
                setMessage("You must select a date");
                setBtnDisabled(true)
                break;
            case !data.reservationTime:
                setMessage("You must select the hour");
                setBtnDisabled(true)
                break;
            case !data.phone:
                setMessage("Phone number is required");
                setBtnDisabled(true)
                break;
            case !data.location:
                setMessage("You must select a place to eat");
                setBtnDisabled(true)
                break;
            case !data.numPeople:
                setMessage("How many people are with you?");
                setBtnDisabled(true)
                break;
            default:
                setMessage('');
                setBtnDisabled(false);
                break;
        }
    };
    useEffect(() => {
        validationForm();
    }, [data])
  return (
    <form onSubmit={handleOnSubmit}>
        <fieldset>
            <legend>Reservation</legend>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" placeholder='Jōichirō Yukihira' onChange={handleInputChange} value={data.name}/>
            <br /><label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" placeholder='JoichiroYukihira@gmail.com'onChange={handleInputChange}value={data.email}/>
            <br /><label htmlFor="phone">Phone:</label>
            <input type="text" name="phone" id="phone" placeholder='+81 (03) 1234-5678'onChange={handleInputChange} value={data.phone}/>
            <br /><label htmlFor="reservationDate">Reservation Date:</label>
            <input type="date" name="reservationDate" id="reservationDate"onChange={handleInputChange} value={data.reservationDate}/>
            <br /><label htmlFor="reservationTime">Reservation Time:</label>
            <input type="time" name="reservationTime" id="reservationTime"onChange={handleInputChange} value={data.reservationTime}/>
            <br /><label htmlFor="numPeople">Number of people:</label>
            <select name="numPeople" id="numPeople" onChange={handleInputChange}>
                <option>Select</option>
                <option value="1" >1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            <br /><label htmlFor="location">Location:</label>
            <select name="location" id="location" onChange={handleInputChange}>
                <option value="">Select place</option>
                <option value="interior">Interior</option>
                <option value="terrace">Terrace</option>
                <option value="private_room">Private Room</option>
            </select>
            <br /><label htmlFor="comments">Comments:</label>
            <textarea name="comments" id="comments" placeholder='Write here your comments...'onChange={handleInputChange} value={data.comments}/>
        </fieldset>
            <p>{message}</p> <br />
            <button disabled={btnDisabled}>Send</button>
    </form>
  )
}

export default Reserve