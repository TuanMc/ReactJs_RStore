import React from "react";
import firebaseApp from "../../firebase.config";
import { Redirect } from "react-router-dom";
import WelcomeLogo from "../../assets/images/welcome-new-member.jpg";

class EmailVerify extends React.Component {
    state = {
        load: true,
        user: null
    }

    async componentDidMount() {
        const loginUser = await firebaseApp.auth().currentUser;
        this.setState({
            load: false,
            user: loginUser
        });
    }

    sendVerificationEmail = async () => {
        try {
            await this.state.user.sendEmailVerification();
            alert("Email verification has sent successfully.")
        } catch (err) {
            console.log(err, "err");
        }
    }

    render() {
        return (
            <>
                {this.state.load && <h1>Loading...</h1>}
                {!this.state.user && !this.state.load && <Redirect to={{ pathname: "/login" }} />}
                {
                    this.state.user && !this.state.load &&
                    <div>

                        <img src={WelcomeLogo} alt="IMG_WELCOME" />
                        <div className="p-t-15">
                            <h3>You have successfully registered new account.</h3>
                            Click
                            <a onClick={() => this.sendVerificationEmail()}> here </a >
                            to verify your email
                        </div>
                    </div>
                }
            </>
        )
    }
}

export default EmailVerify;