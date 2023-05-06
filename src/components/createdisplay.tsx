import { css } from "../styles/styles";
import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
const { API_ENDPOINT } = require("../config");
const Cookie = require("js-cookie");

interface Props {
  message: string;
  onClose: () => void;
  onSave: () => void;
}

export default function CreateDisplay(props: Props){

  const navigate = useNavigate();

    const [title, setTitle] = useState("");
    // const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");

    const handleTitleOnChange = (e: any) => {
      setTitle(e.target.value);
    }
    // const handleAuthorOnChange = (e: any) => {
    //   setAuthor(e.target.value);
    // }
    const handleContentOnChange = (e: any) => {
      setContent(e.target.value);
    }

    const handleSaveButtonClick = () => {
      axios.post(API_ENDPOINT + '/api/dashboard/articles', {
        title: title,
        body: content,
      }, {
        headers: {
          'Authorization': Cookie.get('token'),
        }
      })
      .then((res: any) => {
        alert(res.data.message);
        props.onClose();
      })
      .catch((err: any) => {
        if (err.response.status === 401) {
          alert(err.response.data.message);
          navigate('/login');
          return;
        }
        alert('Internal server error');
      });
      props.onSave();
    }

    return (
        <div className={styles.body()}>
          <div className={styles.container()}>
            <button className={styles.closebutton()} onClick={props.onClose}>
              X
            </button>
            <div className={styles.content()}>
              <label className={styles.label()} htmlFor="title">Title</label>
              <input className={styles.input()} id="title" type="text" placeholder="Title ... " value={title} onChange={handleTitleOnChange} />
              {/* <label className={styles.label()} htmlFor="author">Author</label>
              <input className={styles.input()} id="author" type="text" placeholder="Author ... " value={author} onChange={handleAuthorOnChange} /> */}
              <label className={styles.label()} htmlFor="content">Content</label>
              <textarea className={styles.textarea()} id="content" placeholder="Content ... " value={content} onChange={handleContentOnChange} />
              <button className={styles.savebutton()} onClick={handleSaveButtonClick}>Save</button>
            </div>
          </div>
            
        </div>
        
      );
}

const styles = {
  body: css({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  }),
  container: css({
    display: "block",
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  }),
  closebutton: css({
    marginRight: 0,
    alignItems: "right",
    border: "none",
    color: "White",
    backgroundColor: "transparent",
    fontSize: 20,
    fontWeight: "bold"
  }),
  content: css({
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    zIndex: 2,
    display: "block",
    padding: 10
  }),
  label: css({
    display: "block",
    margin: 10,
  }),
  input: css({
    margin: 10,
    padding: 10,
    display: "block",
    width: "98%",
    height: "6%",
  }),
  textarea: css({
    margin: 10,
    padding: 10,
    display: "block",
    width: "98%",
    height: "50%",
    resize: "none"
  }),
  savebutton: css({
    width: 80,
    height: 50,
    margin: 10,
    padding: 10,
    borderRadius: 15,
    color: "white",
    border: "none",
    backgroundColor: "#16c728",
    "&:hover": {backgroundColor: "#1e8728"}
  })
}


  

