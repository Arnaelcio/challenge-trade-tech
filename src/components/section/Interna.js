import React, { useContext } from "react";
import "../css/Interna.css";
import { DataContext } from "../Context";

function Interna() {
  const { cities } = useContext(DataContext);

  return (
    <>
      <div className="container-home">
        {cities.map(({ City, Zip_Code }, index) => (
          <div data-testid="card-posts" key={index} className="card">
            <form>
              <label>
                Cidade:
                <p data-testid="title-card">{City}</p>
              </label>
              <label>
                CEP:
                <p data-testid="title-card">{Zip_Code}</p>
              </label>
            </form>
          </div>
        ))}
      </div>
    </>
  );
}

export default Interna;
