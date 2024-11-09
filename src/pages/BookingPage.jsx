import { useState } from 'react';
import '../styles/booking-page.css';
import { useNavigate } from 'react-router-dom';
import { addReservation } from '../actions/bookingActions';
import { useDispatch } from 'react-redux';

const BookingPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    dateTime: "",
    guests: "",
    occasion: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = e => {
    e.preventDefault();

    if (!formData.dateTime || !formData.guests) {
      alert('Please fill out all fields');
      return;
    }
    const reservationDetails = {
      ...formData,
      timestamp: new Date().toISOString()
    };
  
    dispatch(addReservation(reservationDetails));
    navigate('/confirmation');
  }

  return (
      <div className="booking-page-container">
        <section className="booking-section">
          <h1>Reserve a Table</h1>
          <form onSubmit={handleSubmit} className='booking-form'>
            <div className="form-group">
              <label htmlFor="book-datetime">Choose Date and Time:</label>
              <input 
                type="datetime-local" 
                name="dateTime" 
                id="book-datetime"
                value={formData.dateTime}
                required
                onChange={handleChange} 
              />
            </div>

            <div className="form-group">
              <label htmlFor="book-guests">Number of Guests:</label>
              <input 
                type="number" 
                name="guests" 
                id="book-guests"
                value={formData.guests}
                required min="1" max="10"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="book-occasion">Occasion:</label>
              <select 
                name="occasion" 
                id="book-occasion"
                value={formData.occasion}
                onChange={handleChange}
              >
                <option value="">Select an Occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="date">Date</option>
                <option value="business">Business Meeting</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <button type="submit" className='submit-btn'>Make Your Reservation</button>
            </div>

          </form>
        </section>
      </div>
  )
}

export default BookingPage