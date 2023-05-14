import { useRef, useState } from "react";
import "./register.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passRef = useRef();

  const handleStart = (e) => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = () => {
    setPassword(passRef.current.value);
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src="/img/logo.png" alt="" />
          <button className="loginButton">Sign in</button>
        </div>
      </div>
      <div className="container">
        <h1>H1 unlimited movies</h1>
        <h2>H2 watch a nything</h2>
        <p>
          P Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          aspernatur.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              get started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="password" ref={passRef} />
            <button className="registerButton" onClick={handleFinish}>
              get started
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
