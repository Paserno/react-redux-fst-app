import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";


export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <img 
                src="https://pixabay.com/get/g783870eddca2adde9028e82262bfa2335ecb7e1b5d20553db045078ca460b809136d25be39c518f0c04286cb47769712.jpg"  
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
