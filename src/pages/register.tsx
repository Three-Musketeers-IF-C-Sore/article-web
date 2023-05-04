import React, { useState } from "react";
import { css } from "../styles/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const { API_ENDPOINT } = require("../config");

const RegImage = require("../assets/register.jpg")
interface Props {};

export default function Register(props: Props) {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");

    const handleNameOnChange = (e: any) => {
        setName(e.target.value);
    }
    const handleEmailOnChange = (e: any) => {
        setEmail(e.target.value);
    }
    const handlePasswordOnChange = (e: any) => {
        setPassword(e.target.value);
    }
    const handleCPasswordOnChange = (e: any) => {
        setCPassword(e.target.value);
    }

    const onRegisButtonClick = () => {
        if (password !== cPassword) {
            alert("Password does not match!");
            setPassword('');
            setCPassword('');
            return;
        }

        axios.post(API_ENDPOINT + '/api/auth/register', {
            name: name,
            email: email,
            password: password,
        })
        .then((res: any) => {
            alert(res.data.message);
            navigate('/login');
        })
        .catch((err) => {
            if (err.response.status === 400) {
                alert("Validation error: " + err.response.data.errors[0].msg);
                return;
            }
            alert("Internal server error");
        })
    }


    return (
        <div className={styles.body()}>
            <div className={styles.container()}>
                <div className={styles.left()}>
                    <div className={styles.title()}>Register</div>
                    <div className={styles.textbox()}>
                    <label className={styles.inputtext()} htmlFor="Name">Name</label>
                        <div className={styles.inputtextbox()}><input style={{ width: "100%", height: 39, outline: "none", borderRadius: 4, border: "none"}} type="text" id="Name" value={name} onChange={handleNameOnChange} /></div>
                        <label className={styles.inputtext()} htmlFor="Email">Email</label>
                        <div className={styles.inputtextbox()}><input style={{ width: "100%", height: 39, outline: "none", borderRadius: 4, border: "none"}} type="text" id="Email" value={email} onChange={handleEmailOnChange} /></div>
                        <label className={styles.inputtext()} htmlFor="Password">Password</label>
                        <div className={styles.inputtextbox()}><input style={{ width: "100%", height: 39, outline: "none", borderRadius: 4, border: "none"}} type="password" id="Password" value={password} onChange={handlePasswordOnChange} /></div>
                        <label className={styles.inputtext()} htmlFor="CPassword">Confirm Password</label>
                        <div className={styles.inputtextbox()}><input style={{ width: "100%", height: 39, outline: "none", borderRadius: 4, border: "none"}} type="password" id="CPassword" value={cPassword} onChange={handleCPasswordOnChange} /></div>
                        <button className={styles.loginbutton()} onClick={onRegisButtonClick}>Sign Up</button>
                        <div className={styles.signuptext()}>
                            Already have an account? <a href="/login" className={styles.href()}>Log In</a>
                        </div>
                    </div>
                </div>
                <div className={styles.right()}>
                    <img src={RegImage} style={{width: "100%", height: "100%",borderTopRightRadius: 15, borderBottomRightRadius: 15}} alt="" />
                </div>
            </div>
        </div>
    );
}

const styles = {
    body: css({
        height: "100vh",
        backgroundColor: "#F0EFEF",
        fontFamily: "Helvetica"
    }),
    container: css({
        height: "80%",
        width: "50%",
        alignItems: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        borderRadius: 25
    }),
    right: css({
        width: "45.1%",
        height: "100%",
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
    }),
    left: css({
        width: "54.9%",
        height: "100%",
        color: "white",
        backgroundColor: "#292727",
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15
    }),
    title: css({
        fontSize: 48,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        marginTop: 80
    }),
    textbox: css({
        display: "block",
        width: "80%",
        margin: "0 auto",
        marginTop: 20,
    }),
    inputtext: css({
        margin: 5,
        fontSize: 20,
    }),
    inputtextbox: css({
        margin: 5,
        marginBottom: 10
    }),
    loginbutton: css({
        width: "97%",
        fontSize: 16,
        height: 39, 
        outline: "none", 
        borderRadius: 4, 
        border: "none",
        margin: 5,
        marginTop: 30,
        backgroundColor: "#A09D9D",
        color: "#fefefe",
        "&:hover": {backgroundColor: "#726E6E"}
    }),
    signuptext: css({
        fontSize: 14,
        margin: "0 auto",
        textAlign: "center",
        marginTop: 40,
    }),
    href: css({
        color: "white",
        "&:hover": {
            textShadow: "none",
            color: "#d3d0cf"
        },
    })
}