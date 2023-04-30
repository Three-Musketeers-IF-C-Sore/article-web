import React from "react";
import { css } from "../styles/styles";

interface Props {};

export default function Home(props: Props) {

    return (
        <div className={styles.body()}>
            <div className={styles.container()}>
                <h1>Article Web</h1>
            </div> 
        </div>
    );
}

const styles = {
    body: css({
        backgroundColor: "#3E5461",
        height: '100vh',
        fontFamily: 'Helvetica',
        display: 'flex',
        margin: '0 auto',
        paddingTop: 50
    }),
    container: css({
        margin: '0 auto',
        display: 'flex',
    }),
}

