import {useAuth0} from "@auth0/auth0-react";
import {Alert, Modal} from "@mui/material";
import React from "react";
import {Navigate} from 'react-router-dom';

const Profile = () => {
    const {user, isAuthenticated, loginWithRedirect} = useAuth0();
    const [open, setOpen] = React.useState(true);
    const handleClose = () => setOpen(false);

    return (
        isAuthenticated ?
            <article style={{justifyContent: "center"}}>
                {user?.picture && <img src={user.picture} alt={user?.name}/>}
                <h2>{user.name}</h2>
                <h3>{user.email}</h3>
            </article>
            : <>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    sx={{
                        display: 'flex',
                        p: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Alert severity="error" style={{height: "80px", fontSize: '25px'}}>You must Sing Up or Log In to see
                        info on this page </Alert>
                </Modal>
                {
                    setTimeout(
                        <Navigate to={loginWithRedirect()}/>,
                        400)
                }
            </>


    )
        ;
};

export default Profile;
