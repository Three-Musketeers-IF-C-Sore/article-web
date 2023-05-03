import React, { useEffect } from "react";
import { useState } from "react";
import { css } from "../styles/styles";
import Cards from "../components/card";
import CreateDisplay from "../components/createdisplay";
import axios from "axios";
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

    useEffect(() => {
      axios.get(API_ENDPOINT + '/api/articles')
      .then((res) => {
        setArticles(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoadingError(true);
      })
    }, []);

    {/* <div>
                <button onClick={handleButtonClick}>Show Div</button>
                {showDiv && (
                    <div className={styles.myDiv()}>
                    <button onClick={handleButtonClickAgain}>Close Div</button>
                    
                    </div>
                )}
            </div> */}
            const [display, setDisplay] = useState(false);

            const handleDisplay = () => {
              setDisplay(!display);
            };
          
            

    return (
        <div className={styles.body()}>
            <div className={styles.wrapper()}>
                <div className={styles.topbar()}>
                    <div className={styles.left()}>
                      <button onClick={handleDisplay}>Add new article</button>
                    </div>
                    <div className={styles.center()}>Article</div>
                    <div className={styles.right()}>Profile</div>
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
                          <Cards title={article.title} />
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
        fontFamily: "sans-serif-medium",
        fontWeight: "bolder",
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

