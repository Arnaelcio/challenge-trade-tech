import React, { useContext } from "react";
import { DataContext } from "../Context";
import "../css/Home.css";

function Home() {
  const {
    inputCity,
    inputZipCode,
    setInputCity,
    setInputZipCode,
    validationZipCode,
  } = useContext(DataContext);

  return (
    <div className="container-home">
      <form className="card">
        <fieldset>
          <legend>Cidade</legend>
          <label>
            <input
              data-testid="input-city"
              onChange={(e) => setInputCity(e.target.value)}
              value={inputCity}
            />
          </label>
          <legend>CEP</legend>
          <label>
            <input
              data-testid="input-zip-code"
              onChange={(e) => setInputZipCode(e.target.value)}
              value={inputZipCode}
            />
          </label>
          <br></br>
          <br></br>
          <input
            data-testid="btn-zip-code-and-city"
            className="register"
            onClick={() => validationZipCode(inputZipCode)}
            readOnly={true}
            value="cadastrar"
            style={{ width: "100%" }}
            type="button"
          />
        </fieldset>
      </form>
    </div>
  );
}
export default Home;
