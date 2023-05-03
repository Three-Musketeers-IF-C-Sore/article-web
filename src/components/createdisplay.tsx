import { css } from "../styles/styles";
import GrClose from "react-icons/gr";
import IoCloseOutline from "react-icons/io";
import React from 'react';
import Cards from "./card";

interface Props {
  message: string;
  onClose: () => void;
}

export default function CreateDisplay(props: Props){
    return (
        <div className={styles.body()}>
          <div className={styles.container()}>
            <button className={styles.closebutton()} onClick={props.onClose}>
              X
            </button>
            <div className={styles.content()}>
              <label className={styles.label()} htmlFor="title">Title</label>
              <input className={styles.input()} id="title" type="text" placeholder="Title ... "/>
              <label className={styles.label()} htmlFor="author">Author</label>
              <input className={styles.input()} id="author" type="text" placeholder="Author ... "/>
              <label className={styles.label()} htmlFor="content">Content</label>
              <textarea className={styles.textarea()} id="content" placeholder="Content ... "/>
              <button className={styles.savebutton()} >Save</button>
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
    height: '100%',
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


  

