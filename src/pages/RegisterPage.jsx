/* eslint-disable react/prop-types */
import Register from "./Register"

const RegisterPage = ({ setIsLoggedIn }) => {
  return (
    <div>
        <Register setIsLoggedIn={setIsLoggedIn} />
    </div>
  )
}

export default RegisterPage;