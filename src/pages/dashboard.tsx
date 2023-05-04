import React, { useState } from "react";
import { css } from "../styles/styles";
import axios from "axios";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import FavArticle from "./favouritearticle";
import MyArticle from "./myarticle";
import CreateDisplay from "../components/createdisplay";
const { API_ENDPOINT } = require("../config");


interface Props {};


export default function Dashboard(props: Props) {
    const [selected, setSelected] = useState("My Articles");
  
  
    const navigate = useNavigate();
  
    const goBackButton = () => {
      navigate("/");
    };
  
    const handleSelect = (name: string) => {
      setSelected(name);
    };

  
    return (
      <div className={styles.body()}>
        <div className={styles.wrapper()}>
          <div className={styles.topbar()}>
            <div className={styles.left()}>
              <div style={{ marginRight: 20 }} onClick={goBackButton}>
                <IoChevronBack />
              </div>
              Dashboard
            </div>
            <div className={styles.right()}>
              <div
                className={`${styles.elements()} ${
                  selected === "My Articles" ? styles.selected : ""
                }`}
                onClick={() => handleSelect("My Articles")}
              >
                My Articles
              </div>
              <div
                className={`${styles.elements()} ${
                  selected === "Favourite Articles" ? styles.selected : ""
                }`}
                onClick={() => handleSelect("Favourite Articles")}
              >
                Favourite Articles
              </div>
            </div>
          </div>
          <div className={styles.content()}>
            {selected === "My Articles" && <div><MyArticle /></div>}
            {selected === "Favourite Articles" && <div><FavArticle /></div>}
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
      left: css({
        marginLeft: 0,
        fontSize: 38,
        fontWeight: "bolder",
        display: "flex"
      }),
      right: css({
        marginLeft: "auto",
        marginRight: 0,
        fontsize: 20,
        display: "flex",
        color: "#7d838c",
      }),
      elements: css({
        margin: 10,
        "&:hover": {color: "black"}
      }),
      selected: css({
        color: "black",
      }),
      content: css({
        width: "100%"
      })
}