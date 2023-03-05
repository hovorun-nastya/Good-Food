import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {DLT, ADD, REMOVE} from '../redux/actions/action'
import CardDetails from "./CardDetails";


const CardsDetails = () => {

    const [data, setData] = useState([]);

    const {id} = useParams();

    const history = useNavigate();

    const dispatch = useDispatch();


    const getdata = useSelector((state) => state.cartreducer.carts);

    const compare = () => {
        let comparedata = getdata.filter((e) => {
            return e.id === id
        });
        setData(comparedata);
    }

    // add data


    const send = (e) => {
        // console.log(e);
        dispatch(ADD(e));
    }

    const dlt = (id) => {
        dispatch(DLT(id));
        history("/");
    }

// remove one
    const remove = (item) => {
        dispatch(REMOVE(item))
    }


    useEffect(() => {
        compare();
    }, [id])

    return (
        <>
            <div className="container mt-2">
                <h2 className='text-center'>Items Details Page
                </h2>
                <section className='container mt-3'>
                    <div className="items-details">
                        {
                            data.map((ele) => {
                                return (
                                    <CardDetails key={ele.id} ele={ele} dlt={dlt} remove={remove} send={send}/>
                                )
                            })
                        }
                    </div>
                </section>
            </div>
        </>
    )
}

export default CardsDetails;
