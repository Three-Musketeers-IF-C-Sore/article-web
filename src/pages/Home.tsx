import React, { useEffect } from "react";
import { useState } from "react";
import { css } from "../styles/styles";
import Cards from "../components/card";
import CreateDisplay from "../components/createdisplay";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const { API_ENDPOINT } = require("../config");

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

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingError, setIsLoadingError] = useState(false);

    const [display, setDisplay] = useState(false);

    const handleDisplay = () => {
      setDisplay(!display);
    };

    useEffect(() => {
      axios.get(API_ENDPOINT + '/api/articles')
      .then((res) => {
        setArticles(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoadingError(true);
      })
    }, [display]);

    {/* <div>
                <button onClick={handleButtonClick}>Show Div</button>
                {showDiv && (
                    <div className={styles.myDiv()}>
                    <button onClick={handleButtonClickAgain}>Close Div</button>
                    
                    </div>
                )}
            </div> */}
            
          
    const navigate = useNavigate();

    const goDashboard = () => {
      navigate("/dashboard");
    };

    return (
        <div className={styles.body()}>
            <div className={styles.wrapper()}>
                <div className={styles.topbar()}>
                    <div className={styles.center()}>Article</div>
                    <div className={styles.right()} onClick={goDashboard}>Dashboard</div>
                </div>
                <div className={styles.content()}>
                  {display && (
                    <CreateDisplay onClose={handleDisplay} message={""} />
                  )}
                  {
                    isLoadingError 
                    ?
                    "Loading error. \nPlease try again later"
                    :
                    (
                      isLoading
                      ?
                      "Loading..."
                      :
                      articles.map((article: any, idx: any) => {
                        return (
                            <Cards id={article.id} title={article.title} />
                        )
                      })
                    )
                  }
                </div>
            </div>
        </div>
    );
}

const styles = {
    body: css({
        backgroundColor: "white",
        height: '100vh',
        display: 'flex',
        margin: '0 auto',
    }),
      wrapper: css({
        display: "block",
        width: "100%"
      }),
      topbar: css({
        height: 90,
        width: "100%",
        backgroundColor: "white",
        padding: 25,
        borderBottom: "2px solid #E5E4E4",
        display: "flex",
      }),
      center: css({
        fontSize: 50,
        fontWeight: "bolder",
        margin: "0 auto",
        marginLeft: "auto",
        marginRight: "60",
        alignItems: "center"
      }),
      right: css({
        marginRight: 0,
        marginLeft: "60",
        fontsize: 50,
      }),
      content: css({
        width: 1200,
        height: "90%",
        margin: "0 auto",
        padding: 15,
        paddingTop: 10,
        display: "flex",
        flexWrap: "wrap",
      })
}

