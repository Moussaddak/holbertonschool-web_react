import React from "react";

const Login = () => {
    return (
        <React.Fragment>
            <div className="App-body">
                <p>Login to access the full dashboard</p>

                <form className="">
                    <div className="form-container">
                        <div className="box">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className="box">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" autoComplete="true"/>
                        </div>
                    </div>
                    <input type="submit" value="OK"/>
                </form>
            </div>
        </React.Fragment>

    );
}

export default Login;
