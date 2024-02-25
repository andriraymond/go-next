import Carousell from "./carousell/carousell";

const Login = () => {
    return (
        <div className="go-login-container">
            <Carousell/>
            <div className="go-field-login">
                <div className="go-name-brand">GOCAPJE
                    {/* <span>gocapje</span> */}
                </div>
                <div className="go-text-welcome">
                    <span>Welcome to gocapje</span>
                </div>
                <div>
                    <div className="go-form-login">
                        <label htmlFor="username">User name or Email</label>
                        <input type="text" name="" id="username" />
                        <label htmlFor="password">Password</label>
                        <input type="password" name="" id="password" />
                        <a href="/forget-password">Forget password?</a>
                    </div>
                    <div className="go-form-button">
                        <div className="go-login-button">
                        <button type="submit">Sign In</button>
                        </div>
                        <div className="line-container">
                            <div className="left-line"></div>
                            <span className="text-line">or</span>
                            <div className="right-line"></div>
                        </div>
                        <div className="go-sign-with-Google">
                            <button><img src="/assets/icon-google.webp" alt="" />Sign in With Google</button>
                        </div>
                    </div>
                </div>
                <div className="go-label-register">
                    <span>New Gocapje?
                        <a href="/register">Create Account</a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Login