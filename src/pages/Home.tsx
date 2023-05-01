import React from "react";
import { useState } from "react";
import { css } from "../styles/styles";
import Cards from "../components/card";

interface Props {};

export default function Home(props: Props) {
    // const [showDiv, setShowDiv] = useState(false);

    // const handleButtonClick = () => {
    //     console.log("styles.myDiv:", styles.myDiv);
    //     setShowDiv(true);
    // };

    // const handleButtonClickAgain = () => {
    //     console.log("styles.myDiv:", styles.myDiv);
    //     setShowDiv(false);
    // };

    {/* <div>
                <button onClick={handleButtonClick}>Show Div</button>
                {showDiv && (
                    <div className={styles.myDiv()}>
                    <button onClick={handleButtonClickAgain}>Close Div</button>
                    
                    </div>
                )}
            </div> */}

    return (
        <div className={styles.body()}>
            <div className={styles.wrapper()}>
                <div className={styles.topbar()}>
                    <div className={styles.left()}>Add new article</div>
                    <div className={styles.center()}>Article</div>
                    <div className={styles.right()}>Profile</div>
                </div>
                <div className={styles.content()}>
                    <Cards title="" />
                    <Cards title="" />
                    <Cards title="" />
                    <Cards title="" />
                    <Cards title="" />
                    <Cards title="" />
                    <Cards title="" />
                    <Cards title="" />
                    <Cards title="" />
                </div>
            </div>
        </div>
    );
}

const styles = {
    body: css({
        backgroundColor: "white",
        height: '100vh',
        fontFamily: 'Helvetica',
        display: 'flex',
        margin: '0 auto',
    }),
      wrapper: css({
        display: "block",
        width: "100%"
      }),
      topbar: css({
        height: "10%",
        width: "100%",
        fontSize: 15,
        backgroundColor: "white",
        padding: 25,
        display: "flex",
        borderBottom: "2px solid #E5E4E4"
      }),
      left: css({
        marginLeft: 0,
      }),
      center: css({
        margin: "0 auto",
      }),
      right: css({
        marginRight: 0
      }),
      content: css({
        width: "94%",
        height: "90%",
        margin: "0 auto",
        padding: 30,
        display: "flex",
        flexWrap: "wrap"
      })
}

