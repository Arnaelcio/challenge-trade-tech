import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { DataContext } from "../Context";
import "../css/Login.css";

function Login() {
  const { setUser, user, users, setAuth, registerEmail } = useContext(
    DataContext
  );
  const history = useHistory();

  const authe = (user) => {
    const isAuth = users.filter((item) => item.user === user);
    if (isAuth.length === 0) {
      setAuth(false);
      alert("email não cadastrado");
    } else {
      setAuth(true);
      history.push("/home");
    }
  };

  return (
    <div className="container-home">
      <form className="card">
        <fieldset>
          <legend>Email</legend>
          <label>
            <input
              data-testid="input-login-register"
              onChange={(e) => setUser(e.target.value)}
              value={user}
            />
          </label>

          <br></br>
          <br></br>
          <input
            className="btn-login"
            data-testid="btn-login"
            onClick={() => authe(user)}
            readOnly={true}
            value="logar"
            style={{ width: "100%" }}
            type="button"
          />
          <input
            data-testid="btn-register"
            className="btn-register"
            onClick={() => registerEmail(user)}
            readOnly={true}
            value="cadastrar email"
            style={{ width: "100%" }}
            type="button"
          />
        </fieldset>
      </form>
    </div>
  );
}
export default Login;
