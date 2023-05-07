import React, { useEffect, useState } from "react";
import axios from "axios";
import { css } from "../styles/styles";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import EditDisplay from "../components/editarticle";
const { API_ENDPOINT } = require("../config");
const Cookie = require("js-cookie");

interface Props {};

interface User {
  id: string,
  name: string,
}
interface Comment {
  id: string,
  user: User,
  text: string,
}
interface ArticleModel {
  title: string,
  body: string,
  author: User,
  comments: Comment[],
};

export default function Article(props: Props){
    const navigate = useNavigate();

    const [userId, setUserId] = useState();

    useEffect(() => {
      axios.get(API_ENDPOINT + '/api/auth/auth', {
        headers: {
          'Authorization': Cookie.get('token'),
        }
      })
      .then((res) => {
        setUserId(res.data.user.id);
      })
      .catch((err) => {
      })
    }, []);

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<ArticleModel>();
    const [commentInput, setCommentInput] = useState("");
    const { id } = useParams();
    // const [query, data] = useQuery

    const [editDisplay, setEditDisplay] = useState(false);
    const handleEditDisplay = () => {
      setEditDisplay(!editDisplay);
    };
    const afterEdited = () => {
      setIsLoading(true);
      handleEditDisplay();
    }

    const handleCommentInputOnChange = (e: any) => {
      setCommentInput(e.target.value);
    }

    const handleSendComment = () => {
      if (userId === undefined) {
        navigate('/login');
      }
      if (commentInput === '') alert("comment is required");
      setCommentInput("");
      setIsLoading(true);
      axios.post(API_ENDPOINT + '/api/articles/comments/' + id, {
        text: commentInput,
      }, {
        headers: {
          'Authorization': Cookie.get('token'),
        }
      })
    }

    const deleteComment = (e: any) => {
      let commentId = e.target.parentNode.id;
      axios.delete(API_ENDPOINT + '/api/articles/comments/' + commentId, {
        headers: {
          'Authorization': Cookie.get('token'),
        }
      })
      .then((res) => {
        setIsLoading(true);
        alert("comment deleted");
      })
      .catch((err) => {
        alert("internal server error");
      })
    }

    useEffect(() => {
      axios.get(API_ENDPOINT + '/api/articles/' + id)
      .then((res: any) => {
        setData(res.data.data);
        setIsLoading(false);
      })
      .catch((err: any) => {
        console.log(err);
          alert("Internal server error");
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
                    Created by: {data.author.name}
                  </div>{/* untuk isi data author */}
                  {
                    data.author.id === userId
                    ?
                    <span onClick={handleEditDisplay}>
                      <FaEdit color="gray" size={25} style={{margin: "0 5"}} />
                    </span>
                    :
                    <></>
                  }

                  <div className={styles.text()}>{/* untuk isi data author */}
                    {data.body}
                  </div>
                  <hr style={{marginTop: 30, marginBottom: 30}} />
                  <div className={styles.comment()}>
                    <div className={styles.comtitle()}>Comments</div>

                    <div className={styles.commentlist()}>
                      {
                        data.comments.map((item, idx) => {
                          console.log(item.user.id, userId);
                          return (
                            <div className={styles.commentDiv()} id={item.id}>
                              <p className={styles.comment()} key={idx}>{item.text}</p>
                              {
                                item.user.id === userId
                                ?
                                <button onClick={deleteComment}>
                                  Delete
                                </button>
                                :
                                <></>
                              }
                              
                            </div>
                          );
                        })
                      }
                    </div>
                    
                    <div className={styles.row()}>
                      <input className={styles.input()} name="Comment" placeholder="Write your comment ..." value={commentInput} onChange={handleCommentInputOnChange} />
                      <button className={styles.button()} onClick={handleSendComment}>Send</button>
                    </div>
                      
                    <div className={styles.commentlist()}>
                      {/* List comments yang sudah ditulis bakalan muncul disini */}
                    </div>
                  </div>
                </div>
              </div>
            :
            'loading...'
          } 
          {
            editDisplay && <EditDisplay data={data} onClose={afterEdited} message={""} articleId={""} />
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
      commentDiv: css({
        display: "flex",
        alignItems: "center",
      }),
      comment: css({
        marginRight: 12,
      }),
      commentlist: css({
        margin: "30px 0",
        textAlign: "justify"
      }),
      row: css({
        width: "100%",
        display: "flex",
        height: 40,
        marginTop: 10,
      }),
      input: css({
        display: "block",
        width: "100%",
        resize: "none",
        border: "none",
        outline: "none",
        borderRadius: 5,
        height: 36,
        padding: "0 12px",
        boxSizing: "border-box",
      }),
      button: css({
        marginLeft: 8,
        height: 36,
      }),
}