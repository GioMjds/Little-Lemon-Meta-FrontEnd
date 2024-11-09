import { useNavigate } from "react-router-dom"
import '../styles/confirmation.css';

const Confirmation = () => {
  const navigate = useNavigate();
  const handleGoHome = () => navigate('/');

  return (
    <div className="confirmation-container">
      <h1>Reservation Confirmed!</h1>
      <p>Thank you for reserving a table at Little Lemon! We look forward to serving you!</p>
      <button className="home-btn" onClick={handleGoHome}>
        Go To Homepage
      </button>
    </div>
  )
}

export default Confirmation