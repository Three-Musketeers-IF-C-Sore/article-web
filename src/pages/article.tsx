import React from "react";
import axios from "axios";
import { css } from "../styles/styles";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

interface Props {};


export default function Article(props: Props){
    const navigate = useNavigate();

    const goBackButton = () => {
        navigate("/");
    };

    return(
        <div className={styles.body()}>
            <div className={styles.wrapper()}>
                <div className={styles.topbar()}>
                    <div style={{marginRight: 20}} onClick={goBackButton}><IoChevronBack /></div>
                    Article
                </div>
                <div className={styles.content()}>
                  <div className={styles.title()}>Title</div>{/* untuk isi data title */}
                  <div className={styles.author()}>Author</div>{/* untuk isi data author */}
                  <div className={styles.text()}>{/* untuk isi data author */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    body: css({
        backgroundColor: "white",
        height: '100vh',
        display: 'flex',
        margin: '0 auto',
        fontFamily: "sans-serif-medium",
    }),
    wrapper: css({
        display: "block",
        width: "100%"
      }),
      topbar: css({
        height: 90,
        width: "100%",
        fontSize: 38,
        fontWeight: "bolder",
        backgroundColor: "white",
        padding: 25,
        borderBottom: "2px solid #E5E4E4",
        display: "flex",
      }),
      content: css({
        width: "82%",
        height: "90%",
        margin: "0 auto",
        padding: 30,
        display: "block",
        flexWrap: "wrap",
      }),
      title: css({
        fontSize: 50,
        fontWeight: "bolder",
        marginTop: 10,
        marginBottom: 6
      }),
      author: css({
        fontsize: 15,
        fontWeight: "lighter",
        marginLeft: 5
      }),
      text: css({
        marginTop: 50,
        fontSize: 20,
        textAlign: "justify"
      })
}