import React from "react";
import { useState } from "react";
import { css } from "../styles/styles";
import { FaHeart, FaRegHeart, FaEdit, FaTrash, FaComment } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface Props {
    title: string,
    id: string,
    component?: string,
    onEdit: () => void;
    onDelete: () => void;
    isLogged: boolean,
    // color?: string,
    // onClick: (e: any) => void,
};

Cards.defaultProps = {
    component: '',
    onEdit: () => {},
    onDelete: () => {},
  }
    

export default function Cards(props: Props){
    const navigate = useNavigate();

    const [liked, setLiked] = useState(false);
  
    const handleClick = () => {
        if (!props.isLogged) {
            navigate('/login');
        } else {
            setLiked(!liked);
        }
    };



    const renderComponent = () => {
        switch(props.component) {
            case 'edit':
                return (
                    <div>
                        <span onClick={props.onEdit}>
                            <FaEdit color="gray" size={25} style={{margin: "0 5"}} />
                        </span>
                        <span onClick={props.onEdit}>
                            <FaTrash color="gray" size={25} style={{margin: "0 5"}} />
                        </span>
                    </div>
                    
                );
            default:
                return (
                    <span onClick={handleClick}>
                        {liked ? (
                            <FaHeart color="red" size={25} style={{margin: "0 5"}} />
                        ) : (
                            <FaRegHeart color="gray" size={25} style={{margin: "0 5"}} />
                        )}
                    </span>
                );
        }
    };

    return(
        <div className={styles.card()}>
            <a href={"/articles/" + props.id} style={{ color: 'black', textDecoration: 'none' }}>
                <div className={styles.topcard()}>{props.title}</div>
            </a>
            <div className={styles.bottomcard()}>
                <div className={styles.component()}>
                    {renderComponent()}
                </div>
            </div>
        </div>
    )
}

const styles = {
    card: css({
        display: "block",
        width: "250px",
        height: "250px",
        margin: 20,
        borderRadius: 15,
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        transition: "box-shadow 0.2s ease-in-out",
        "&:hover": {
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)"
        }
      }),      
    topcard: css({
        padding: 20,
        width: "250px",
        height: "200px",
        margin: "auto",
        textAlign: "center",
        backgroundColor: "#e0dede",
        borderRadius: 15,
        fontWeight: 600,
        fontSize: 20,
        color: "#333",
        display: "flex",
        alignItems: "center",
    justifyContent: "center",
        fontFamily: "Arial, sans-serif"
    }),
    bottomcard: css({
        height: "40px",
        marginTop: "5px",
    }),
    component: css({
        marginLeft: "auto",
        marginRight: "10px",
        marginTop: "5px",
        textAlign: "right",
        "& svg": {
            verticalAlign: "middle"
        },
    
    }),
}