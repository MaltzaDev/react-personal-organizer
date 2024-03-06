import '../../App.css'
import './Register.css'

export default function Register() {
    return (
        <div>
            <div className="container">
                <input
                    type="checkbox"
                    id="check"
                    className="login-check"
                    aria-hidden="true"
                />
                <div className="signup">
                    <form id="signupForm">
                        <label htmlFor="check" className="form-label" aria-hidden="true"
                        >Sign up</label
                        >
                        <input
                            type="text"
                            name="username"
                            id="signUsername"
                            placeholder="Username"
                        />
                        <input type="email" name="email" id="signEmail" placeholder="Email" />
                        <input
                            type="password"
                            name="password"
                            id="signPassword"
                            placeholder="Password"
                        />
                        <input
                            type="password"
                            name="confirm-password"
                            id="signConfirmPassword"
                            placeholder="Confirm Password"
                        />
                        <div className="terms">
                            <input type="checkbox" name="terms" id="signTerms" />
                            <label htmlFor="signTerms"
                            >I accept the
                                <a href="html/terms-of-services.html"
                                >terms and conditions</a
                                ></label
                            >
                        </div>
                        <button type="submit">Sign up</button>
                        <p id="registerMessage" className="disabled">Test</p>
                    </form>
                </div>
                <div className="login">
                    <form id="loginForm">
                        <label htmlFor="check" className="form-label" aria-hidden="true">Login</label>
                        <input
                            type="text"
                            name="username"
                            id="loginUsername"
                            placeholder="Username"
                        />
                        <input
                            type="password"
                            name="password"
                            id="loginPassword"
                            placeholder="Password"
                        />
                        <div className="terms">
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember" id="remember-label">Remember me</label>
                        </div>
                        <button type="submit">Login</button>
                        <p id="loginMessage" className="disabled">Test Message</p>
                    </form>
                </div>
            </div>
        </div>
    )
}