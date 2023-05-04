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
          alert("Internal server error");
        }
      });
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
                  <div className={styles.author()}>
                    Created by: {data.user.name}
                  </div>{/* untuk isi data author */}
                  <div className={styles.text()}>{/* untuk isi data author */}
                    {data.body}
                  </div>
                  <hr style={{marginTop: 30, marginBottom: 30}} />
                  <div className={styles.comment()}>
                    <div className={styles.comtitle()}>Comments</div>
                    <textarea className={styles.textarea()} name="Comment" placeholder="Write your comment ...">
                      
                    </textarea>
                    <div className={styles.commentlist()}>
                      {/* List comments yang sudah ditulis bakalan muncul disini */}
                    </div>
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
        width: "100%",
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
        height: "auto",
        margin: "0 auto",
        padding: 30,
        paddingLeft: 70,
        paddingRight: 70,
        display: "block",
        flexWrap: "wrap",
        backgroundColor: "rgb(0,0,0,0.2)"
      }),
      title: css({
        fontSize: 50,
        fontWeight: "bolder",
        marginTop: 10,
        marginBottom: 6,
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center"
      }),
      author: css({
        fontsize: 15,
        fontWeight: "lighter",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
      }),
      text: css({
        marginTop: 50,
        fontSize: 20,
        textAlign: "justify"
      }),
      comtitle: css({
        fontSize: 25,
        fontWeight: "bold",
      }),
      comment: css({
        
      }),
      textarea: css({
        display: "block",
        width: "100%",
        padding: 10,
        marginTop: 10,
        height: 100 ,
        resize: "none",
        border: "none",
        outline: "none",
        borderRadius: 5,
      }),
      commentlist: css({
        fontSize: 20,
        textAlign: "justify"
      })
}