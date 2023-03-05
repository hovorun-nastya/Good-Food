import React, {useCallback, useEffect, useState} from 'react'
import {useDispatch} from 'react-redux';
import {ADD} from '../redux/actions/action';
import {useAuth0} from "@auth0/auth0-react";
import {Alert, Modal, Portal} from "@mui/material";
import LoginButton from "./auth/LoginButton";
import OneCard from "./OneCard";

const Cards = () => {

    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();
    const {isAuthenticated} = useAuth0();
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);


    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch(process.env.REACT_APP_FIREBASE_REALTIME_DB);
            if (!response.ok) {
                throw new Error('Something went wrong!')
            }
            const responseData = await response.json();
            const loadedMeals = [];
            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    imgdata: responseData[key].imgdata,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                })
            }
            setMeals(loadedMeals);
            setIsLoading(false)
            return meals;
        };

        fetchMeals().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });
    }, []);

    const dispatch = useDispatch();

    const send = (e) => {
        dispatch(ADD(e));
    }
    const showModal = useCallback((element) => {
        if (isAuthenticated) send(element)
        else setOpen(true)
    }, [isAuthenticated])

    if (isLoading) {
        return <section>
            <p>Loading...</p>
        </section>
    }
    if (httpError) {
        return <section>
            <p>{httpError}</p>
        </section>
    }

    return (
        <div className='container mt-3'>
            <h2 className='text-center'>Perfect Ukrainian Food</h2>
            <div className="row d-flex justify-content-center align-items-center">
                {meals.map((element) => {
                    return (
                        <OneCard element={element} key={element.id} showModal={showModal}/>
                    )
                })}
                {open &&
                    <Portal>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        sx={{
                            display: 'flex', p: 1, alignItems: 'center', justifyContent: 'center',
                        }}
                    >
                        <Alert severity="error"
                        >You must Sing Up or Log In to order food
                            <LoginButton/>
                        </Alert>

                    </Modal>
                </Portal>}
            </div>
        </div>
    )
}

export default Cards;
