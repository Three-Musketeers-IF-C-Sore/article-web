import React, { useEffect } from "react";
import { useState } from "react";
import { css } from "../styles/styles";
import Cards from "../components/card";
import CreateDisplay from "../components/createdisplay";
import axios from "axios";
const { API_ENDPOINT } = require("../config");

interface Props {};

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
                            <Cards title={article.title} id={""} />
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
      }),
      center: css({
        fontSize: 34,
        fontWeight: "bolder",
        margin: "0 auto",
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

