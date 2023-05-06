import React, { useEffect } from "react";
import { useState } from "react";
import { css } from "../styles/styles";
import Cards from "../components/card";
import CreateDisplay from "../components/createdisplay";
import axios from "axios";
const { API_ENDPOINT } = require("../config");

interface Props {
};

export default function FavArticle(props: Props) {
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

    return (
        <div className={styles.body()}>
            <div className={styles.wrapper()}>
                <div className={styles.topbar()}>
                    <div className={styles.center()}>Favourite Article</div>
                </div>
                <div className={styles.content()}>
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
                          <a href={"/articles/" + article.id} style={{ color: 'black', textDecoration: 'none' }}>
                            <Cards isLiked={true} isLogged={true} title={article.title} id={""} component={""} />
                          </a>
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
        height: "10%",
        width: "100%",
        fontSize: 15,
        backgroundColor: "#F5F5F5",
        fontFamily: "sans-serif-medium",
        fontWeight: "bolder",
        padding: 25,
        display: "flex",
      }),
      center: css({
        fontSize: 34,
        fontWeight: "bolder",
        margin: "0 auto",
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
      })
}

