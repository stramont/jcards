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
                            <input class="logininput" type="text" /> <br></br>
                        </label>
                        <input class="logininput" id="submit-btn-login" type="submit" value="Sign in" />
                    </form>
                </div>

            </div>
        </div>
    );

}

export default Login;