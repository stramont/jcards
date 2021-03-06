import {React, useState, useEffect} from 'react';
import './login.css';


function Login(props) {

    return (
        <div class="login">
            <div class="logo centered">
                <img src="jcards_logo.png" alt="j*cards" width="300" />
            </div>
            <div id="loginbox" class="centered">
                <div>
                    <form class="loginform" >
                        <label>
                            Username <br></br>
                            <input class="logininput" type="text" /> <br></br>
                        </label>
                        <label>
                            Password <br></br>
                            <input class="logininput" type="password" /> <br></br>
                        </label>
                        <input onClick={props.logInSetter(true)} class="logininput submit-btn-login" type="submit" value="Sign in" />
                    </form>
                </div>

            </div>
            <div id="newuserbox" class="centered">
                New to jcards? <span>&nbsp;</span>
                <button class="link_button" onClick={props.registerFlagSetter(true)}>Create an account.</button>

            </div>
            <div class="bottom_info">
                <a href="https://www.google.com/">Contact us</a>
            </div>
        </div>
    );

}

export default Login;