import React, { useState } from "react";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { firebaseAuth } from "./../utils/firbase-config";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {});

  return (
    <Container showPassword={showPassword}>
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="form-container flex-column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>Login</h3>
            </div>
            <div className="container flex column">
              <div className="form">
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={formValues.email}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      [e.target.name]: e.target.value,
                    })
                  }
                />

                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formValues.password}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      [e.target.name]: e.target.value,
                    })
                  }
                />

                <button>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;

    .body {
      gap: 1rem;
      text-align: center;
      font-size: 2rem;

      h1 {
        padding: 0 25 rem;
      }
    }
    .form {
      display: grid;
      grid-template-columns: ${({ showPassword }) =>
        showPassword ? "1fr 1fr" : "2fr 1fr"};
      width: 60%;
      input {
        color: black;
        border: none;
        padding: 1.5rem;
        font-size: 1.2rem;
        border: 1px solid black;
        &:focus {
          outline: none;
        }
      }
      button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        font-weight: bolder;
        font-size: 1.05rem;
      }
    }
    button {
      padding: 0.5rem 1rem;
      background-color: #e50914;
      border: none;
      cursor: pointer;
      color: white;
      border-radius: 0.2rem;
      font-weight: bolder;
      font-size: 1.05rem;
    }
  }
`;
