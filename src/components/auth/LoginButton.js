import {useAuth0} from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button'


const LoginButton = () => {
    const {loginWithRedirect, isAuthenticated} = useAuth0();
    return (
        !isAuthenticated && (
                <Button variant="primary" style={{margin: '20px'}} onClick={() => loginWithRedirect()}>
                    Sing In
                </Button>
        )
    );
};

export default LoginButton;
