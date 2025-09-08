import React from "react";
import { Link } from "react-router-dom";

export function Registration() {
  const blocks = Array.from({ length: 105 }, (_, i) => (
    <div key={i} className="block"></div>
  ));

  return (
    <>
      <style>{`
         body {
          margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        }

        .grid-container { 
         display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-auto-rows: 1fr;       
  box-sizing: border-box;
  width: 100%;
  height: 87vh;

}

        .block {
          background-color: #00070c;
        border: 1px solid rgb(1, 7, 8);
        width: 100%;  
        transition: background-color 3s ease, border 0.3s ease;
        }

        .block:hover {
          background-color: cyan;
        border: 1px solid black;
        transition: background-color 0s ease, border 0s ease;
        z-index:1;
        }

        .form {
          position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 4;

        background-color:black;
        border-radius: 8px;
        }

        form {
          display: flex;
        flex-direction: column;
        gap: 5px;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(66, 210, 233, 0.3);
        }

        h1.sign {
          text - align: center;
        margin-bottom: 10px;
        }

        label {
          font-weight: bold;
        margin-bottom:2px;
        }

        input, button {
          padding: 6px;
        border-radius: 4px;
        border: 1px solid #ccc;
        font-size: 15px;
        color:black;
        margin-bottom:5px;
        }

        .btn {
          background: #0a3d62;
        color: black;
        border: none;
        cursor: pointer;
        margin-top:4px;
        margin-bottom:5px;
        transition: background 0.3s ease;
        width:40%;
        text-align:center;
        }

        .btn:hover {
          background: cyan;
        }

        p {
          margin: 0;
        font-size: 12px;
        font-weight: normal;
        line-height: 1.2;
        display:flex;
        justify-content:end;
        align-items:center;
        margin-bottom:15px;
        }

        p a {
          text - decoration: none;
        color: blue;
        vertical-align: middle;
        align-self:flex-end;
        padding-left:3px;
        transistion: 3s linear;
        }

        a:active{
          transform:scale(1.1);
      }
      @media (max-width: 480px) {
        .grid-container {
          grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
          grid-auto-rows: 1fr;
        }

        .form {
          width: 70%;  
        }

        form {
          padding: 20px;
          gap: 5px;
        }

        h1.sign {
          font-size: 20px;
          text-align: center;
          color: cyan;
        }

        input, button {
          font-size: 13px;
          padding: 5px;
          font-weight: normal;
        }

        .btn {
          width: 38%;
          font-size: 14px;
        }

        p {
          font-size: 11px;
        }
      }

      `}</style>

      <div className="grid-container">
        {blocks}

        <div className="form">
          <form>
            <h1 className="sign">Sign Up</h1>

            <label htmlFor="username">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              required
            />

            <input type="submit" value="Register" className="btn" />
            <p>Already have an account? <Link to={'/login'}>Login</Link></p>
          </form>
        </div>
      </div>
    </>
  );
}
