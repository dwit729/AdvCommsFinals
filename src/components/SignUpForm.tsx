import React from "react";
import './LoginSignUp.css'

const SignUpForm = () => {
    return(
        <>
        
            <div className="input-box">
                            
                            <header>Create account</header>
                            <div className="input-field">
                                    <input required type="text" className="input" id="email" />
                                    <label htmlFor="email">Email</label> 
                                </div> 
                            <div className="input-field">
                                    <input required type="password" className="input" id="pass" />
                                    <label htmlFor="pass">Password</label>
                                </div> 
                            <div className="input-field">
                                    
                                    <input type="submit" className="submit" value="Sign Up"/>
                            </div> 
                            <div className="signin">
                                <span>Already have an account? <a href="#">Log in here</a></span>
                            </div>
                </div>  
            
                        
        </>
    )
};

export default SignUpForm;