import React from 'react';
import './style.css';


function Login(props) {

    return (
        <div class="login">
            <div id="logo" class="centered">
                <img src="jcards_logo.png" alt="j*cards" width="300" />
            </div>
            <div id="loginbox" class="centered">
                <div>
                    <form id="loginform" >
                        <label>
                            Username <br></br>
                            <input class="logininput" type="text" /> <br></br>
                        </label>
                        <label>
                            Password <br></br>
                            <input class="logininput" type="password" /> <br></br>
                        </label>
                        <input class="logininput" id="submit-btn-login" type="submit" value="Sign in" />
                    </form>
                </div>

            </div>
            <div id="newuserbox" class="centered">
                New to jcards?
                <a id="create_acct_link" href="https://www.google.com/">  Create an account.</a>

            </div>
            <div id="bottom_info" class="centered">
                <a href="https://www.google.com/">Contact us</a>
            </div>
        </div>
    );

}

export default Login;