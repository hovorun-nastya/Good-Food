import React, {useEffect, useState} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Nav from 'react-bootstrap/Nav'
import Menu from '@mui/material/Menu';
import Table from 'react-bootstrap/esm/Table';
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {DLT} from '../redux/actions/action';
import LoginButton from "./auth/LoginButton";
import LogoutButton from "./auth/LogoutButton";
import ItemInCard from "./ItemInCard";


const Header = () => {

    const [price, setPrice] = useState(0);

    const getdata = useSelector((state) => state.cartreducer.carts);

    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const dlt = (id) => {
        dispatch(DLT(id))
    }

    const total = () => {
        let price = 0;
        getdata.map((ele) => {
            return price = ele.price * ele.qnty + price
        });
        setPrice(price.toFixed(2));
    };

    useEffect(() => {
        total();
    })


    return (
        <>
            <Navbar bg="dark" variant="dark" style={{height: "60px"}}>
                <Container>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light">Home Page</NavLink>
                    </Nav>
                    <Nav className="me-auto">
                        <NavLink to="/userprofile" className="text-decoration-none text-light">User Profile</NavLink>
                    </Nav>
                    <LoginButton/>
                    <LogoutButton/>
                    <Badge badgeContent={getdata.length} color="primary"
                           id="basic-button"
                           aria-controls={open ? 'basic-menu' : undefined}
                           aria-haspopup="true"
                           aria-expanded={open ? 'true' : undefined}
                           onClick={handleClick}
                    >
                        <i className="fa-solid fa-cart-shopping text-light" style={{fontSize: 25, cursor: "pointer"}}>
                            <ShoppingCartIcon/>
                        </i>
                    </Badge>

                </Container>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {
                        getdata.length ?
                            <div className='card_details' style={{width: "24rem", padding: 10}}>
                                <Table>
                                    <thead>
                                    <tr>
                                        <th>Photo</th>
                                        <th>Details</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        getdata.map((e) => {
                                            return (
                                                <ItemInCard key={e.id} e={e} dlt={dlt} handleClose={handleClose}/>
                                            )
                                        })
                                    }
                                    <tr className='text-center'>
                                        <td>Total : ₴ {price}</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </div>
                            :
                            <div className='card_details d-flex justify-content-center align-items-center'
                                 style={{width: "24rem", padding: 10, position: "relative"}}>
                                <i className='fas fa-close smallclose'
                                   onClick={handleClose}
                                   style={{
                                       position: "absolute",
                                       top: 2,
                                       right: 20,
                                       fontSize: 23,
                                       cursor: "pointer"
                                   }}></i>
                                <p style={{fontSize: 22}}>Your carts is empty</p>
                                <img src="/cart.gif" alt="" className='emptycart_img'
                                     style={{width: "5rem", padding: 10}}/>
                            </div>
                    }
                </Menu>
            </Navbar>
        </>
    )
}

export default Header;
