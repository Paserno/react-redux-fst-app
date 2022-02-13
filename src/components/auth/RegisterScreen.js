import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from 'validator';
import { removeError, setError } from '../../actions/ui';


export const RegisterScreen = () => {
    
    const dispatch = useDispatch(); // hook de React Redux
    
    const [formValue, handleInputChange ] = useForm({
        name: 'Pedro',
        email: 'nan@gmail.com',
        password: '123456',
        confirm: '123456',
    });

    const { 
            name,
            email,
            password,
            confirm } = formValue;


    const handleRegister = (e) => {
        e.preventDefault();
        
        if ( isFormValid() ){
            console.log('Formulario correcto');
        }
        
    }

    const isFormValid = () => {

        if ( name.trim().length === 0 ){
            dispatch(setError('Name is Required'));
            return false;
        } else if ( !validator.isEmail( email ) ){
            dispatch(setError('Email is not valid'));
            return false;
        } else if( password !== confirm || password.length < 6 ){
            dispatch(setError('Password should be at least 6 character and match each other'));
            return false;
        }
        dispatch( removeError() );
        return true;
    }


    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={ handleRegister }>

                <div className="auth__alert-error">
                    Hola Mundo

                </div>

                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={ password }
                    onChange={ handleInputChange }
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirm"
                    className="auth__input"
                    value={ confirm }
                    onChange={ handleInputChange }
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"

                >
                    Register
                </button>


                <Link to="/auth/login" className="register-btn link"
                >
                    Already registered
                </Link>

            </form>
        </>
    )
};

