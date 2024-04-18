import React from "react";
import SignUpForm from "./SignUpForm";
import './LoginSignUp.css'
import 'bootstrap/dist/css/bootstrap.css';


const icon = "https://www.svgrepo.com/show/904/photo-camera.svg";

const LoginForm2 = () => {
    return(
        <>
             
                <div className="container main">
                    <div className="row">
                        <div className="col-md-6 side-image"> 
                            <img src={icon} alt="" style={{filter: 'invert(100%)'}}/>
                            <div className="text">
                                <p className="title" style={{fontWeight:'bold'}}>PIXELITE</p>
                                <p className="subtitle"style={{textAlign:'center', }}><i>Capture Your Moment</i></p>
                            </div>
                        </div>
                        <div className="col-md-6 right">
                            <SignUpForm/>
                        </div>
                    </div>
                </div>
            
        </>
    )
}

export default LoginForm2;