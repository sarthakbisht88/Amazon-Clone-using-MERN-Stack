import "./Login.css";
import Logo from "../../assets/logo3.png";

function Login() {
  const Logo3 = Logo;
  return (
    <div className="login">
      <img src={Logo3} alt="amazon logo" className="logo" />
      <div className="Box"> 
        <h2 className="h2">Sign in or create account</h2>
        <p className="p">Enter mobile number or email</p>
        <input className="input" type="text" />
        <button className="button">Continue</button>
        <p className="end">By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
      </div>
      
      <hr className="line"></hr>
      <div className="last"><p>Conditions of Use &nbsp;&nbsp;&nbsp;&nbsp; Privacy Notice &nbsp;&nbsp;&nbsp;&nbsp; Help</p></div>
      <p>© 1996–2026, Amazon.com, Inc. or its affiliates</p>
    </div>
  );
}

export default Login;