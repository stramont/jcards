import React from 'react';
import './login.css';


function Register(props) {


    return (
        <div class="login">
            <div class="logo centered">
                <img src="jcards_logo.png" alt="j*cards" width="300" />
            </div>
            <div id="registerbox" class="centered">
                <div>
                    <form class="loginform" >
                        <label>
                            Firstname (feel free to use kana) <br></br>
                            <input class="logininput" type="text" /> <br></br>
                        </label>
                        <label>
                            Username <br></br>
                            <input class="logininput" type="text" /> <br></br>
                        </label>
                        <label>
                            Password <br></br>
                            <input class="logininput" type="password" /> <br></br>
                        </label>
                        <label>
                            Re-type password <br></br>
                            <input class="logininput" type="password" /> <br></br>
                        </label>
                        <input class="logininput submit-btn-login" type="submit" value="Sign up" />
                    </form>
                </div>
            </div>
            <div class="bottom_info">
                <a href="https://www.google.com/">Contact us</a>
            </div>
        </div>
    );
}

export default Register;