import React from "react";
import ReactDOM from "react-dom/client";
import {Helmet} from "react-helmet";
import App from './App';
import LoginForm from "./components/LoginForm";
import LoginForm2 from "./components/LoginSignUpForm";
import SearchBar from "./components/NavBar";
import Accordion from "./components/Accordion";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/collapse.js';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <>
        <Helmet>
           
        </Helmet>
           <SearchBar/>
           <LoginForm2/>
        </>
      
    </React.StrictMode>
)