import React from 'react';
import {NavLink} from "react-router-dom";

const ItemInCard = ({e, dlt, handleClose}) => {
    return (
        <>
            <tr>
                <td><NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                    <img src={e.imgdata}
                         style={{width: "5rem", height: "5rem"}} alt=""/>
                </NavLink></td>
                <td>{e.name} <br/> Price : ₴ {e.price} <br/> Quantity : {e.qnty}</td>
                <td>
                    <button type="button" className="btn-close" aria-label="Close"
                            style={{backgroundColor: "red", cursor: "pointer"}}
                            onClick={() => dlt(e.id)}>
                    </button>
                </td>
            </tr>
        </>
    );
};

export default ItemInCard;
