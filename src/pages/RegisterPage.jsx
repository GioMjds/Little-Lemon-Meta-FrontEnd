/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Register from "./Register"

const RegisterPage = ({ setIsLoggedIn }) => {
  useEffect(() => {
    document.title = "Create Your Account | Little Lemon"
  })

  return (
    <div>
        <Register setIsLoggedIn={setIsLoggedIn} />
    </div>
  )
}

export default RegisterPage;