import React, { createContext, useEffect, useState } from "react";
import firebase from "../services/firebase";

export const DataContext = createContext();

function DataProvider(props) {
  const [cities, setCities] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  const [auth, setAuth] = useState(false);
  const [inputCity, setInputCity] = useState("");
  const [inputZipCode, setInputZipCode] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("cities").get();
      setCities(data.docs.map((doc) => doc.data()));
      const users = await db.collection("users").get();
      setUsers(users.docs.map((doc) => doc.data()));
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(auth);
  }, [auth]);

  const validationZipCode = (inputZipCode) => {
    if (
      inputZipCode.length === 6 &&
      inputZipCode[0] !== inputZipCode[2] &&
      inputZipCode[1] !== inputZipCode[3] &&
      inputZipCode[2] !== inputZipCode[4] &&
      inputZipCode[3] !== inputZipCode[5]
    )
      register();
    else {
      alert(
        `1. O CEP é um número maior que 100.000 e menor que 999999. 2. O CEP não pode conter nenhum dígito repetitivo alternado em pares.`
      );
    }
  };

  const register = () => {
    const db = firebase.firestore();
    db.collection("cities")
      .add({
        City: inputCity,
        Zip_Code: inputZipCode,
      })
      .then(() => {
        alert(`Cidade Registrada com sucesso`);
      });
    setInputCity("");
    setInputZipCode("");
  };

  const registerEmail = () => {
    const db = firebase.firestore();
    db.collection("users")
      .add({
        user: user,
      })
      .then(() => {
        alert(`Email Registrado com sucesso`);
      });
    const fetchData = async () => {
      const users = await db.collection("users").get();
      setUsers(users.docs.map((doc) => doc.data()));
      setUser("");
    };
    fetchData();
  };

  const { children } = props;
  return (
    <DataContext.Provider
      value={{
        inputCity,
        inputZipCode,
        cities,
        users,
        user,
        auth,
        setUser,
        setInputCity,
        setInputZipCode,
        validationZipCode,
        registerEmail,
        setAuth,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
export default DataProvider;
