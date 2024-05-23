import React from 'react'

function Reservations() {
    const reservesInfo = JSON.parse(localStorage.getItem('All Reserves')) || [];
    console.log(reservesInfo);
    const allReservationsInfo = reservesInfo.map((reserve) => {
        return (
            <div>
                <p>Name:{reserve.name}</p>
                <p>Email:{reserve.email}</p>
                <p>Phone:{reserve.phone}</p>
                <p>Number of people:{reserve.numPeople}</p>
                <p>Location:{reserve.location}</p>
                <p>Reservation Date:{reserve.reservationDate}</p>
                <p>Reservation Time:{reserve.reservationTime}</p>
                <p>Comments:{reserve.comments}</p>
            </div>
        )
    })
  return (
    <div>
        All Reservations
        {allReservationsInfo}
    </div>
  )
}

export default Reservations