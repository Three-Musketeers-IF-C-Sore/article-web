import React from "react";
import { useState } from "react";
import { css } from "../styles/styles";
import { FaHeart, FaRegHeart, FaEdit, FaTrash } from "react-icons/fa";

interface Props {
    title: string,
    // id: string,
    // color?: string,
    // onClick: (e: any) => void,
};


  
    

export default function Cards(props: Props){
    const [liked, setLiked] = useState(false);
  
    const handleClick = () => {
      setLiked(!liked);
    };
    return(
        <div className={styles.card()}>
            <div className={styles.topcard()}>{props.title}</div>
            <div className={styles.bottomcard()}>
                <div className={styles.component()}>
                    <span onClick={handleClick}>
                        {liked ? (
                            <FaHeart color="red" size={25} style={{margin: "0 5"}} />
                        ) : (
                            <FaRegHeart color="gray" size={25} style={{margin: "0 5"}} />
                        )}
                    </span>
                    <span><FaEdit color="gray" size={25} style={{margin: "0 5"}}/></span>
                    <span><FaTrash color="gray" size={25} style={{margin: "0 5"}}/></span>
                </div>
                
            </div>
        </div>
    )
}

const styles = {
    card: css({
        display: "block",
        width: "300px",
        height: "300px",
        margin: 20
    }),
    topcard: css({
        width: "300px",
        height: "250px",
        backgroundColor: "#6577a1",
        borderRadius: 15
    }),
    bottomcard: css({
        height: "40px",
        marginTop: "5px",
    }),
    component: css({
        marginLeft: "auto",
        marginRight: 0,
        textAlign: "right"
    }),
}