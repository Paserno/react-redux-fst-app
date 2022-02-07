import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";



export const AuthRouter = () => {
    const pathImage = require.context('../assets', true);
    return (
        <div className="auth__main ">
            <div className="auth__background"></div>
            <img 
                src={pathImage('./fondo.jpg')} 
                alt="Fondo"
                className="auth__main-back"
            />

            <div className="auth__box-container">
                <Switch>
                    <Route path="/auth/login" component={LoginScreen} />
                    <Route path="/auth/register" component={RegisterScreen} />

                    <Redirect to="/auth/login" />
                </Switch>

            </div>
            
        </div>
    )
};
