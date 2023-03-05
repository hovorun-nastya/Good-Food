import {useAuth0} from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";


const LogoutButton = () => {
    const {logout, isAuthenticated} = useAuth0();

    return (
        isAuthenticated && (
            <Button variant="primary" style={{margin: '20px'}} onClick={() => logout()}>
                Sing Out
            </Button>
        )
    );
};

export default LogoutButton;
