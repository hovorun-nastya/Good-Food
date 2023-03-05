import React from 'react';
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card'
const OneCard = ({element, showModal}) => {
    return (
        <>
            <Card style={{width: '22rem', border: "none"}} className="mx-2 mt-4 card_style">
                <Card.Img  variant="top" src={element.imgdata} style={{height: "16rem"}}
                          className="mt-3"/>
                <Card.Body>
                    <Card.Title>{element.name}</Card.Title>
                    <Card.Text>
                        Price : ₴ {element.price}
                    </Card.Text>
                    <div className="button_div d-flex justify-content-center">
                        <Button variant="primary"
                                onClick={ () => showModal(element) }
                                className='col-lg-12'>Add to Cart</Button>
                    </div>
                </Card.Body>
            </Card>

        </>

    );
};

export default OneCard;
