import React, { useEffect, useState } from "react";
import axios from "axios";
import { css } from "../styles/styles";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
const { API_ENDPOINT } = require("../config");

interface Props {};

interface User {
  name: string,
}
interface ArticleModel {
  title: string,
  body: string,
  user: User,
};

export default function Article(props: Props){
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<ArticleModel>();
    const { id } = useParams();
    // const [query, data] = useQuery

    useEffect(() => {
      axios.get(API_ENDPOINT + '/api/articles/' + id)
      .then((res: any) => {
        setData(res.data.data);
        setIsLoading(false);
      })
      .catch((err: any) => {
        if (err) {
          console.log(err);
          alert("Internal server error");
        }
      });
      console.log(isLoading);
    }, [isLoading, id]);

    const goBackButton = () => {
        navigate("/");
    };

    return(
        <div className={styles.body()}>
          {
            data
            ?
              <div className={styles.wrapper()}>
                <div className={styles.topbar()}>
                    <div style={{marginRight: 20}} onClick={goBackButton}><IoChevronBack /></div>
                    Article
                </div>
                <div className={styles.content()}>
                  <div className={styles.title()}>{data.title}</div>{/* untuk isi data title */}
                  <div className={styles.author()}>{data.user.name}</div>{/* untuk isi data author */}
                  <div className={styles.text()}>{/* untuk isi data author */}
                    {data.body}
                    </div>
                </div>
            </div>
            :
            'loading...'
          } 
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