import React, { useEffect } from "react";
import { useState } from "react";
import { css } from "../styles/styles";
import Cards from "../components/card";
import CreateDisplay from "../components/createdisplay";
import { HiOutlineViewList } from "react-icons/hi";
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

    const goLogin = () => {
      navigate("/login");
    }

    return (
        <div className={styles.body()}>
            <div className={styles.wrapper()}>
                <div className={styles.topbar()}>
                    <div className={styles.left()} >
                      <div className={styles.elements()} style={{display
                      : "flex"}} onClick={goDashboard}>
                        <HiOutlineViewList />
                        Dashboard
                      </div>
                    </div>
                    <div className={styles.center()}>
                      <div>Article</div>
                    </div>
                    <div className={styles.right()} >
                      <div className={styles.elements()} onClick={goLogin}>Log Out</div>
                    </div>
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
                            <Cards id={article.id} title={article.title} component={""} />
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
    backgroundColor: "#F5F5F5",
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
    backgroundColor: "#FFFFFF",
    padding: "0 25px",
    borderBottom: "2px solid #E5E4E4",
    display: "flex",
  }),
  left: css({
    marginLeft: 0,
    marginRight: "auto",
    fontSize: 30,
    display: "flex",
    color: "#7d838c",
    cursor: "pointer",
    transition: "color 0.2s ease-in-out",
    "&:hover": {color: "#000000"}
  }),
  center: css({
    fontSize: 50,
    fontWeight: "bolder",
    margin: "auto",
    textAlign: "center",
  }),
  right: css({
    marginLeft: "auto",
    marginRight: 0,
    fontSize: 30,
    display: "flex",
    color: "#7d838c",
    cursor: "pointer",
    transition: "color 0.2s ease-in-out",
    "&:hover": {color: "#000000"}
  }),
  elements: css({
    fontSize: 27,
    margin: "auto",
    cursor: "pointer",
    transition: "color 0.2s ease-in-out",
    "&:hover": {color: "#000000"}
  }),
  content: css({
    maxWidth: 1200,
    width: "100%",
    height: "calc(100% - 120px)", // subtract height of topbar
    margin: "0 auto",
    padding: "15px 0",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gridGap: 20,
    "@media screen and (max-width: 768px)": {
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    }
    }),
  }
