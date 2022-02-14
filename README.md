> __Elemento Anterior 👀:__ __[HeroesApp - React](https://github.com/Paserno/react-router-hero-app)__
# App de React con SASS - Redux - Firebase
App de diario que tiene la función de grabar lo que sucede en la vida, la primera parte sera la Estructura y Diseño con __SASS__. Uso de los siguientes elementos

SASS
* __[Node SASS](https://www.npmjs.com/package/node-sass)__

Redux
* __[Redux](https://es.redux.js.org)__
* __[React Redux](https://react-redux.js.org)__
* __[Redux Thunk](https://www.npmjs.com/package/redux-thunk)__

FireBase
* __[Firebase](https://firebase.google.com)__
* Documentación para Actualizar __[Firebase Web 8 a 9](https://firebase.google.com/docs/auth/web/start#web-version-8)__

Otros
* __[Validator.js](https://www.npmjs.com/package/validator)__


----

Recordar que si se desea ejecutar esta aplicación, deben de reconstruir los módulos de node así:
````
npm install
````
Y luego para hacerla correr.
````
npm start
````
<br>

----
### 1.- Inicio del Proyecto - Rutas
En este punto se crearán las carpetas con los archivos respectivos, ademas de establecer las rutas de __React Router v5__, proximamente actualizar a la version 6:

Pasos a Seguir
* Crear componente principal de la aplicación __JournalApp__.
* Crear 📂carpeta `components/` con 2 📂carpetas hijas llamadas `components/auth/` y `components/journal/`.
    * Crear componente __LoginScreen__ en `components/auth/LoginScreen.js`.
    * Crear componente __RegisterScreen__ en `components/auth/RegisterScreen.js`.
    * Crear componente __JournalScreen__ en `components/journal/JournalScreen.js`.
* Crear 📂carpeta `routers/` para almacenar las rutas.
    * Crear componente __AppRouter__ en `routers/AppRouter.js`.
    * Crear componente __AuthRouter__ en `routers/AuthRouter.js`.
* Crear 📂carpeta `styles/` donde se almacenará los archivos de __SASS__.
    * Crear archivo donde se manejaran los estilos `styles/styles.scss`

En `components/` 
* En los 3 componente iniciamos con `rafc` para crear los componentes con ayuda del snippet, un ejemplo a continuación del componente __LoginScreen__.
````
export const LoginScreen = () => {
    return (
        <div>
            <h1>LoginScreen</h1>
        </div>
    )
};
````
En `routers/AppRouter.js`
* Importamos los elementos de React Router v5, ademas del componente __JournalScreen__ y __AuthRouter__.
````
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from "./AuthRouter";
````
* Utilizamos los coponentes de React Router v5 para implementar un __Redirect__, __Route__ con las rutas de los componentes __AuthRouter__ y __JournalScreen__.
````
return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth" component={AuthRouter} />
                    <Route exact path="/" component={JournalScreen} />

                    <Redirect to="/auth/login" />

                </Switch>
            </div>
        </Router>
    )
````
En `routers/AuthRouter.js`
* Importamos los elementos de React Router que se usaran, el componente __LoginScreen__ y __RegisterScreen__.
````
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";
````
* Implementamos los 2 componentes, ademas de un __Redirect__.
````
return (
        <div>
            <Switch>
                <Route path="/auth/login" component={LoginScreen} />
                <Route path="/auth/register" component={RegisterScreen} />

                <Redirect to="/auth/login" />
            </Switch>
        </div>
    )
````
En `styles/styles.scss`
* Agregamos un pequeño estilo.
````
html, body {
    background-color: #282c34;
    color: #f7f7f7;
}
````
---- 
### 2.- Estilos de AuthRouter
Se agregan algunos estilos de __SASS__ para __AuthRouter__.

Paso a Seguir
* Crear elementos __SCSS__.
* Implementar clases y `<div>` en __AutRouter__.
* Crear estructura de __LoginScreen__.

En `routers/AuthRouter.js`
* Se agrega la clase `auth__main` y un `<div>` adicional con la clase `auth__box-container`.
````
return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route path="/auth/login" component={LoginScreen} />
                    <Route path="/auth/register" component={RegisterScreen} />

                    <Redirect to="/auth/login" />
                </Switch>

            </div>
        </div>
    )
````
En `components/auth/LoginScreen.js`
* Creamos un formulario dentro del return del componente __LoginScreen__, con 2 input y un boton.
````
<>
    <h3>Login</h3>

    <form>

    <input 
        type="text"
        placeholder="email"
        name="email"
    />

    <input 
        type="password"
        placeholder="Password"
        name="password"
    />

    <button
        type="submit"
    >
        Login                
    </button>

    <hr/>
    Google

    </form>  
</>
````
----
## 3.- Componente Adicionales
Se crearon diferentes componente en la aplicación y con ayuda se SASS se estilizo:

Pasos a Seguir
* Crear 📂carpeta `notes/` que se almacenará algunos componentes nuevos.
    * Se crea el componente __NotesAppBar__ en `components/notes/NotesAppBar.js`.
    * Se crea el componente __NotesScreen__ en `components/notes/NotesScreen.js`.
* Componentes adicionales en el directorio `journal/` con los componentes SASS correspondientes.
    * Componente __JournalEntries__ agregado.
    * Componente __JournalEntry__ agregado.
    * Componente __NothingSelected__ agregado.
    * Componente __Sidbar__ agregado.



En estos puntos simplemente se creo la estructura base con el diseño.

----
# Redux - Autenticación
En este punto de la aplicaición se implementará Redux, para esto se descargará y usará, ademas de añadir la funciónalidad del Login y Register.

<img src="https://redux.js.org/img/redux-logo-landscape.png" alt="Logo Redux" width="320"/>

----
### 1.- Implementación de Redux
Se crea los archivos donde se dejará el Reducer ademas de otros elementos.

Pasos a Seguir:
* Crear __types__ en `types/types.js`.
* Crear __store__ en `store/store.js` que usará __Redux__.
* Crear __authReducer__ en `reducers/aithReducer.js` que estará el reducer de la aplicación.
* Modificar __JournalApp__, para proveer información.

En `types/types.js`
* Se crea la centralización de las opciones que se usaran en el Reducer.
````
export const types = {

    login: '[Auth] Login',
    logout: '[Auth] Logout',
}
````
En `reducers/authReducer.js`
* Se realiza la importación de los types.
````
import { types } from "../types/types";
````
* Se crea el reducer para la autenticación de la aplicación, recibiendo como parametros el estado y la acción.
* Se implementa las dos principales acciones, de login y logout.
````
export const authReducer = ( state = {}, action ) => {

    switch ( action.type ) {
        case types.login:
          return {
              uid: action.payload.uid,
              name: action.payload.displayName
          }
        
        case types.logout:
                return { }
           
        default:
            return state;
    }
}
````
En `store/store.js`
* Se importan elementos propios de __Redux__ como el __createStore__,  __combineReducers__ y agregamos la importación del reducer creado.
````
import { createStore, combineReducers } from 'redux';
import { authReducer } from '../reducers/authReducer';
````
* Este elemento combinará los diferentes reducer que se cree en la aplicación.
````
const reducers = combineReducers({
    auth: authReducer
})
````
* Este elemento recibirá un reducer.
````
export const store = createStore(reducers);
````
En `JournalApp`
* Se hara la imprtación de __Provider__ que viene de React Redux y el __store__ que se creo recientemente.
````
import { Provider } from 'react-redux';

import { AppRouter } from "./routers/AppRouter";
import { store } from './store/store';
````
* Este elemento __Provider__ hace lo mismo que el Context, proveer información a la aplciación, para esto le mandamos el __store__.
````
<Provider store={ store }>
    <AppRouter />
</Provider>
````
----
### 1,5.- Redux DevTools
Agregamos una configuración para que función una herramienta llamada __Redux DevTools__

En `store/store.js`
````
export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
````
----
### 2.- Redux - dispatch para Store
Se agregará un CustomHook para el formulario de login, para luego crear la primera acción que se activará con el Hook de __React Redux__ que es llamado __useDispatch__.

Pasos a Seguir:
* Crear CustomHook llamado __useForm__.
* Crear el primer action de __auth__.
* Implementar __useForm__ y __useDispatch__ en el componente __LoginScreen__.

En `hooks/useForm`
* Importamos el __useState__.
* Creamos el hook, y recibimos por parametro el `initialState` que estará igualado a un objeto vacío.
* Implementamos el useState, recibiendo el `initialState`.
* Creamos la función `rest` que deja el useState con el estado original.
* Y creamos la función `handleInputChange` que recibe por parametro `target`.
    * Esta función es para permitir que se escriba en el formulario, recibiendo el estado que tenga y agregandole el valor que se le vaya ingresando.
* Finalmente se retorna el `value`, y las dos funciones.
````
import { useState } from 'react';

export const useForm = ( initialState = {} ) => {
    const [values, setValues] = useState(initialState);

    const rest = () => {
        setValues( initialState );
    }

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [ target.name ]: target.values
        });
    }

    return [ values, handleInputChange, rest ];
}
````
En `actions/auth.js`
* Importamos los types.
````
import { types } from '../types/types'
````
* En el actions de login, se recibira por parametro el `uid` y `displayName`.
* Luego se retornará que acción se ejecutará, que vendría en el `type` y en el payload se recibe el `uid` y `displayName` que es requerido en el Reducer.
````
export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}
````
En `components/auth/LoginScreen`
* Importamos 3 elementos nuevos, el Hook de __React Redux__ llamado __useDispatch__, login que corresponde a la acción y __useForm__ el CustomHook.
```` 
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { login } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
```` 
* Se recibe el __useDispatch__ en una constante.
* Se implementa el CustomHook __useForm__ y se la da valores iniciales como el `email` y `password`.
    * Luego se desestructura el `email` y `password` del __formValue__.
* Se crea una función `handleLogin`, para mandarle el __dispatch__ con los valores requeridos. 
````
const dispatch = useDispatch(); 
const [ formValue, handleInputChange ] = useForm({
    email: 'hola@gmail.com',
    password: '123456'
});
const { email, password } = formValue;

const handleLogin = (e) => {
    e.preventDefault();
    dispatch( login(12345, 'Felipe') );
    
}
````
* Se le agrega la función al `<form>`, se le pasa los valores a los input ademas de la función `handleInputChage` que viene del CustomHook __useForm__. 
````
<form onSubmit={ handleLogin }>

                <input
                    ...
                    value={ email }
                    onChange={ handleInputChange }
                />

                <input
                    ...
                    value={ password }
                    onChange={ handleInputChange }
                />
````
----
### 3.- Configuración Redux Thunk
Se instalo Thunk, la cual es un __middleware__ para Redux. Permite escribir funciones con lógica interna que puede interactuar con el __stone__ de Redux.

Pasos a Seguir:
* Agregar configuración __[Redux DevTools Extension](https://github.com/reduxjs/redux-devtools/tree/main/extension#1-for-chrome)__ para poder utilizar la herramienta y ademas del Redux Thunk.
* En `actions/auth.js` agregamos el disparador asincronico gracias a la ayuda de __Thunk__ con un callback.
* En el componente __LoginScreen__ se incluye el __dispatch__ con la función asincronico que retorna el callback.


En `store/store.js`
* Importamos 2 elementos adicionales de Redux que son `applyMiddleware` y `compose`.
* Finalmente importamos __thunk__ el __middleware__ que permitirá acciones asincronicas.
````
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'

import { authReducer } from '../reducers/authReducer';
````
* Agregar la configuración de __[Redux DevTools Extension](https://github.com/reduxjs/redux-devtools/tree/main/extension#1-for-chrome)__ para permitir que la herramienta Redux Devtool con __Thunk__ pueda usarse.
````
const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
    auth: authReducer
})
````
* Agregamos al store la nueva configuración `composeEnhancers()` agregando el __thunk__ con `applyMiddleware()`. 
````
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);
````
En `actions/auth.js`
* Agregamos acciones asincrona para el __dispatch__ con un callback, recibiendo por los parametros del return el dispatch, con el callback de 3.5s, y enviamos algunos datos al login.
````
export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {

        setTimeout(() => {

            dispatch( login(123, 'Pepe') );

        }, 3500);
    }
} 
````
En `components/auth/LoginScreen.js`
* Agregamos una importación de la función nueva llamada `startLoginEmailPassword`.
````
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
````
* En la función `handleLogin` hacemos el dispatch de la función recien importada y se envía el `email` y `password` para a futuro realizar el login y luego enviar los valores necesarios en la acción.
````
 const handleLogin = (e) => {
        e.preventDefault();
        dispatch( startLoginEmailPassword(email, password) );
        
    }
````
----
### 4.- Configurar Firebase - Google Sing-in
En este punto se agregará la configuración recomendada de __Firebase v8__.

Pasos a Seguir
* Crear la 📂carpeta `firebase/` con su archivo `firabes/firbaseConfig.js` donde se tendra la configuración que proviene de __Firebase__.
* Crear otra acción en `actions/auth.js` llamada `startGoogleLogin` que permitirá realizar el login con Google Sign-in.
* Crear la función que permita el login en el componente __LoginScreen__.

En `firabes/firbaseConfig.js`
* Se realiza las importaciones de __firebase__, __firestore__ y __auth__, que viene de __Firebase__.
````
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
````
* Extraemos el contenido de __Firebase__ al agregar una app, para la creación de la BD.
````
const firebaseConfig = {
    apiKey: "AIzaSyBUDkAVKHXfziqmS6AmucfRDupO1nu0UvI",
    authDomain: "react-redux-app-fst.firebaseapp.com",
    projectId: "react-redux-app-fst",
    storageBucket: "react-redux-app-fst.appspot.com",
    messagingSenderId: "859300626170",
    appId: "1:859300626170:web:c193360b5c4f6f21255343"
  };
  
  firebase.initializeApp(firebaseConfig);
````
* Realizamos la referencia a __firestore__ y la __autentificación__ con Google Sign-in.
* Exportamos los diferentes elementos que se utilizaran.
````
const db = firebase.firestore(); 
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
   
  export {
    db,
    googleAuthProvider,
    firebase
  }
````
En `actions/auth.js`
* Se agrega 2 nuevas importaciones, de `firebase` y `googleAuthProvider`.
````
import { firebase, googleAuthProvider } from '../firebase/firebaseConfig';
import { types } from '../types/types';
````
* Se Crea la nueva acción `startGoogleLogin()`, que retornará un callback que tiene como propiedad el dispatch.
* Utilizamos el Google Sing-in que retornará una promesa, realizamos la desestructuración de `{ user }` que vendrá el contenido necesario para el __dispatch__, que seria el `user.uid` y `user.displayName`.
````
export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                dispatch(
                    login( user.uid, user.displayName)
                )
            });
    }
}
````
En `components/auth/LoginScreen.js`
* Importamos un nuevo elemento en el componente __LoginScreen__, la función `startGoogleLogin` que servirá para realizar la acción del login con Google.
````
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
````
* Creamos la función que disparará la acción.
````
const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
    }
````
* Agregamos la función `handleGoogleLogin` en el botón que se usará.
````
<div
    className="google-btn"
    onClick={ handleGoogleLogin }
>
````
----
### 5.- Formulario de Registro - Errores
Ahora implementaremos el formulario de registro y agregarle algunas validaciones.

Pasos a Seguir: 
* Instalar __[Validator.js](https://www.npmjs.com/package/validator)__.
* Implementar CustomHook llamado __useForm__ en __RegisterScreen__ para la implementación del formulario.
* Implementación de __validator.js__ para realizar algunas validaciones en el componente __RegisterScreen__.

En `components/auth/RegisterScreen.js`
* Importamos 2 nuevos elementos en el componente, el CustomHook __useForm__ y la nueva instalación de __validator__.
```` 
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from 'validator';
```` 
* Implementamos el CustomHook, asignando el `name`, `email`, `password`, `confirm` y le asginamos valores por defecto.
* Ademas de desestructurtar el `formValue` que viene del __useForm__ para luego usarlo en los input del formulario.
````
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
````
* Creamos la función `handleRegister`, agreganod el metodo `e.preventDefault()` para evitar el refresh o que los valores se le asignen al URL.
* Realizamos una validación de una función que mostraremos a continuación, para realizar la validaciones del formulario.
````
const handleRegister = (e) => {
        e.preventDefault();
        
        if ( isFormValid() ){
            console.log('Formulario correcto');
        }
    }
````
* Realizamos la función para validar el formulario.
    * En el caso que no se mande el nombre en el formulario, se mandará un `return false`.
    * Usando la instalación de __validator.js__, para evaluar el email.
    * Realizamos la ultima validación, en el caso que el `password` sea diferente de `confirm` o que el `password` sea menor a 6 caracter. 
````
const isFormValid = () => {

        if ( name.trim().length === 0 ){
            console.log('Name is Required');
            return false;
        } else if ( !validator.isEmail( email ) ){
            console.log('Email is not valid');
            return false;
        } else if( password !== confirm || password.length < 6 ){
            console.log('Password should be at least 6 character and match each other')
            return false;
        }
        return true;
    }
````
* Agregamos un `<div>` donde agregaremos una alerta.
* En cada input agregamos los valores de la desestructuración del estado del __useForm__ con la función que viene del CustomHook.
````
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
````
----
### 5.- Acciones de UI
En este punto se crearán las nuevas acciones para los errores del formulario de Registrar, ademas de crear un nuevo Reducer que maneje los errores.

Pasos a Seguir:
* Crear nuevas opciones en `types/types.js`, para el manejo de errores de UI.
* Crear el nuevo Reducer en `reducers/uiReducer.js`.
* Agregar nuevo Reducer en el __store__, para la combinación de todos los Reducer, con ayuda de Redux. 
* Crear la nuevas acciones UI, para disparar el __Reducer__.
* Implementar errores del formulario de Registrar y crear los __dispatch__ de las acciones.

En `types/types.js`
* Se agregan las nuevas opciones en el `types`.
````
uiSetError: '[UI] Set Error',
uiRemoveError: '[UI] Remove Error',
````
En `reducers/uiReducer.js`
* Importamos las opciones nuevas que estan centralizadas en `types`.
````
import { types } from '../types/types';
````
* Creamos un objeto literal con los estados iniciales del nuevo __Reducer__.
````
const initialState = {
    loading: false,
    msgError: null
}
````
* Creamos el reducer en las propiedades le pasamos el estado inicial, ademas de la acción.
* Se crea el `switch` con las 2 nuevas opciones.
    * La primera opción `types.uiSetError` recibirá un nuevo payload que vendra el error.
    * La segunda opcion `types.uiRemoveError` cambiará el `msgError` en null, queriendo decir que no existe error en los formularios. 
    * Final mente el estado por defecto que retornará el estado.
````
export const uiReducer = ( state = initialState, action ) => {
    switch ( action.type) {
        case types.uiSetError:
            return {
                ...state,
                msgError: action.payload
            }

        case types.uiRemoveError:
            return {
                ...state,
                msgError: null
            }
            
        default:
            return state;
    }
} 
````
En `store/store.js`
* Se importa el nuevo Reducer.
````
import { uiReducer } from '../reducers/uiReducer';
````
* Agregamos el nuevo reducer en el store del __Redux__.
````
const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer
})
````
En `actions/ui.js`
* Importamos `types` para usar las opciones centralizadas.
* Creamos las dos opciones a disparar.
    * El primero recibe el error y lo manda por el payload.
    * El segundo solo activa la opción, que esto hará que se mande un null en el `msgError`.
````
import { types } from '../types/types';

export const setError = (err) => ({
    type: types.uiSetError,
    payload: err
})

export const removeError = () => ({
    type: types.uiRemoveError
   
})
````
En `components/auth/RegisterScreen.js`
* Agregamos 3 nuevas importaciones.
    * Importamos `useDispatch` que realizará el diesparo de la acción.
    * Importamos las 2 funciónes que disparán las acciones hacia el Reducer recien creado.
````
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from 'validator';
import { removeError, setError } from '../../actions/ui';
````
* Invocamos el CustomHook de Redux.
````
const dispatch = useDispatch(); 
````
* Modificamos la función `isFormValid`.
    * Remplazamos las impresiones por consola por disparadores, y le pasamos por parametro el mensaje por ejemplo en `setError('Name is Required')`, así con cada error.
    * En el caso que no ingrese a las validaciones se disparará la acción `removeError()`.
````
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
````
----
### 6.- Register en Firebase
Lo que haremos es buscar la información del estado del reducer, para desplegar los errores en el formulario, y ademas de realizar el registro en firebase de un nuevo usuario.

Pasos a Seguir:
* Utilizar otro CustomHook de __Redux__ llamado __useSelect__ que buscará el estado del Reducer, para mostrar si existe algun error en el formulario del componente __RegisterScreen__.
* Se creará una acción asincrona para almacenar la información en Firebase.

En `actions/auth.js`
* Creamos la función que manejara el registro del nuevo usuario en Firebase.
    * Retornamos el callback utilizando `.createUserWithEmailAndPassword()`.
    * Le mandamos en una promesa el await de `user.updateProfile({ displayName: name})`, para luego hacer el login.
    * Controlamos el error con el `.cathc()`.
````
export const startRegisterWithForm = ( email, password, name ) => {
    return( dispatch ) => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async({ user }) => {
                await user.updateProfile({ displayName: name });

                dispatch(
                    login( user.uid, user.displayName )
                )
            })
            .catch( e => {
                console.log(e);
            })
    }
}
````
En `components/auth/RegisterScreen.js`
* Importamos 2 elementos nuevos, __useSelector__ que es el __CustomHook__ y la acción asincronica `startRegisterWithForm`. 
````
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from 'validator';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithForm } from '../../actions/auth';
````
* Implementamos el CustomHook __useSelector__ para conseguir el `msgError` que viene del `state.ui`.
````
const { msgError } = useSelector( state => state.ui );
````
* Remplazamos la impresión por consola por el __dispatch__ con la acción de registrar.
````
const handleRegister = (e) => {
        e.preventDefault();
        
        if ( isFormValid() ){
            dispatch( startRegisterWithForm(email, password, name) );
        }
    }
````
* Realizamos una condición en el caso que `msgError` tenga algun error, se mostrará una alerta con el mensaje del error que viene del state que se obtuvo con el __useSelect__ de Redux.  
````
{
    msgError &&
    (
        <div className="auth__alert-error">
            <li>{msgError}</li>
        </div>
    )
}
````
Implementar Validación de campos en el componente __LoginScreen__.

----
### 6,5.- Acción de Login a Firebase
En este punto se realizará la acción de login hacia firebase, ya que en el anterior punto se realizo el registro de usuario, esta vez se hara el login con ese usuario.

Pasos a Seguir:
* Eliminar el contenido que habia en el callback de `startLoginEmailPassword`, para remplazar por el nuevo login hacia FireBase.

En `actions/auth.js`
* Utilizamos el metodo `signInWithEmailAndPassword` de __Firebase__ auth, para realizar el login del usuario, enviandole el `email` y `password` por parametro.
    * En el dispatch utilizamos la acción `login()` pasandole los parametros de `user.uid` y `user.displayName`.
    * Usamos el `.catch` en el caso de tener un error lo manipularemos con una impresión por consola.
````
firebase.auth().signInWithEmailAndPassword( email, password )
    .then( ({user})=> {
        dispatch(
            login( user.uid, user.displayName )
        )
    })
    .catch( e => {
        console.log(e);
    })
````
----
### 7.- Loading state 
Ahora se hará el bloqueo del botón de login en el componente __RegisterScreen__ y __LoginScreen__ cuando este en el proceso de autentificación de parte del Firebase.

Paso a Seguir:
* Crear dos tipos nuevos en `types/types.js`
* Crear dos nuevas acciones que modificarán el state del `uiReducer`.
* Modificar la acción en `auth`, para cuando se realize el registro o el login se dispare el estado `loading` en `true` y cuando termine los procedimientos se cambiará `loading` en `fasle`.
* En los componentes __RegisterScreen__ y __LoginScreen__ obtener el estado de `loading` para bloquear el botón.

En `types/types.js`
* Agregar las nuevas opciones.
````
uiStartLoading: '[UI] Start Loading',
uiFinishLoadin: '[UI] Finish Loading'
````
En `reducers/uiReducer.js`
* Agregamos las dos nuevas acciones en el __uiReducer__. 
````
case types.uiStartLoading:
    return { 
        ...state,
        loading: true
    }

case types.uiFinishLoadin:
    return { 
        ...state,
        loading: false
    }
````
En `actions/ui`
* Creamos las 2 nuevas disparadores de las acciones.
````
export const startLoading = () => ({
    type: types.uiStartLoading
});

export const finishLoading = () => ({
    type: types.uiFinishLoadin   
});
````
En `actions/auth.js`
* Tanto en la función `startLoginEmailPassword` y `startRegisterWithForm` agregaremos los `dispatch` nuevos, como en el ejemplo que se muestra _(El ejemplo muestra el login con __Firebase__)_.
    * Agregamos el primer dispatch con la función `startLoading()` al inicio de la llamada al callback.
    * Agregamos 2 dispatch con la función `finishLoading()` en el final de la promesa del `.then` y otro en el caso que aparezca un error con el `.catch`.
````
return (dispatch) => {
    dispatch( startLoading() );

    firebase.auth().signInWithEmailAndPassword( email, password )
        .then( ({user})=> {
                dispatch( login( user.uid, user.displayName ) )
                dispatch( finishLoading() )
        })
        .catch( e => {
            console.log(e);
            dispatch( finishLoading() );
        })
}
````
En `components/auth/LoginScreen.js`
* Ahora adicionalmente necesitamos el estado del `loading` para el bloqueo del botón.
````
const { msgError, loading } = useSelector( state => state.ui );
````
* Agregamos la propiedad `disabled` con el elemento que se obtuvo del Reducer, llamado `loading`, en el caso que sea `false` el estado estará disponible el botón, en el caso que sea `true` se deshabilitará el botón, hasta que cambie nuevamente de estado `loading`.
````
<button
    type="submit"
    className="btn btn-primary btn-block"
    disabled={ loading }
>
````
----
### 7,5.- Mantener estado de la autentificación al recargar la página
En este punto se utilizo uno de los metodos de Firebase _("observable")_, que capture el registro aunque se le haga un recargo a la página _(F5)_.

Pasos a Seguir:
* Implementar el elemento de __Firebase__, en el caso que tenga algun contenido se disparará  el estado de login.

En `routers/AppRouter.js`
* Se importan 4 nuevos elementos.
    * __useEffect__ de React para disparar 1 sola vez el contenido en la aplicación.
    * __useDispatch__ para disparar el nuevo estado en Reducer.
    * `firebase` para agregar el nuevo metodo que hará de observable y verificará si ya hubo un login anteriromente.
    * `login` que es una función definida como una acción que se puede disparar.
````
import { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { firebase } from '../firebase/firebaseConfig';

import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { login } from '../actions/auth';
````
* Implementamos el __useDispatch__ para activar la acción.
* Se implementa el __useEffect__ con una dependencia del dispatch, cada vez que se renderize la aplicación por primera vez se activará el efecto que se tenga dentro.
    * Usando uno de los metodos de firebase llamado `.onAuthStateChanged()` podemos ver si hubo un inicio de sesión.
    * Realizamos una condición en el caso que el `user` traiga conteido se ingresará a la condición, en el caso que `user` devuelva un `null`, no pasará nada.
    * Si entra a la condición se enviará el `user.uid` y `user.displayName` a la función login _(que es una acción)_.
````
const dispatch = useDispatch();

useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {

        if (user?.uid) {
            dispatch( login(user.uid, user.displayName) );
        }
    });

}, [dispatch])
````
----
### 8.- Loading en la aplicación
Se agregará una pantalla de carga ya que la aplicación se ejecuta de una manera sincrona e instantaniamente, excepto el efeco, para dar un momento de espera en la aplicación y darle tiempo a __Firebase__ en recibir alguna respuesta, se creará ese momento de espera.  

Pasos a Seguir:
* Agregar useState en el componente __AppRouter__, para generar un momento de espera.

En `routers/AuthRouter.js`
* Se Agregan 1 nuevas importaciones, __useState__ para manejar nuevos estados en el componente. 
````
import { useEffect, useState } from 'react';
````
* Se crean 2 manejos de estado.
    * El primero verificará que __Firebase__ devuelva alguna respuesta, en el caso que se reciba una respuesta se mostrará las pantallas correspondiente _(Login o Register)_.
    * El segundo permitirá el manejo de las futuras rutas privadas y publicas
````
const [checking, setChecking] = useState(true);
const [isLoggedIn, setIsLoggedIn] = useState(false);
````
* Agregamos el `setIsLoggedIn(true)` en el caso que entre en la condición, eso significará que esta autenticado, en el caso que caiga en el `else`, no estará autenticado.
* Se agrego afuera de las condiciones `setChecking(false)` para que la futura pantalla de carga se elimine cuando se tenga respuesta. 
* Se añadio 2 nuevas dependencias del __useEffect__ estas son `setChecking` y `setIsLoggedIn`.
````
useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {

            if (user?.uid) {
                dispatch( login(user.uid, user.displayName) );
                setIsLoggedIn(true);
            }else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        });

    }, [dispatch, setChecking, setIsLoggedIn])
````
* En el caso que el estado de `checking` este en `true` se mostrará en pantalla `Espera...`, en el caso que cambie a `false` _(o se obtenga resultados de __Firebase__)_ se quitará.
````
if( checking ){
        return(
            // <LoadingScreen/>
            <h1>Espere...</h1>
        )
    }
````
----
### 8,5.- Logout de Firebase
Se implementa el botón logout del componente __Sidbar__, creando una nueva acción a disparar, para eliminar el estado en Redux.

Pasos a Seguir:
* Crear 2 acciones nuevas en `acitons/auth.js` una sincrona y otra asincronica.
* Agregar el disaprador en el componente __Sidbar__.

En `actions/auth.js`
* Se crea la acción asincronica, que retorna un callback.
    * Esta acción hará el logout en __Firebase__.
    * El __dispatch__ ejecuta la acción sincronica que se mostrará a continuación. 
````
export const starLogout = () =>{
    return async( dispatch ) => {
        await firebase.auth().signOut();

        dispatch( logout() );
    }
}
````
* Esta acción pertenece al logout, que provocará que se limpie el contenido de Reducer. 
````
export const logout = () => ({
    type: types.logout
})
````
En `components/journal/Sidbar.js`
* Se importan 2 nuevo elementos __useDispatch__ y `startLogout`. 
````
import { useDispatch } from 'react-redux';

import { startLogout } from '../../actions/auth';
import { JournalEntries } from './JournalEntries';
````
* Implementamos el __useDispatch__ para ejecutar las acciones.
* Creamos la acción `handleLogout` que realizará el disparo del la acción `startLogout()`.
````
const dispatch = useDispatch();

const handleLogout = () =>{
    dispatch( startLogout() )
} 
````
* Se agrega la función `handleLogout` en el botón `Logout`.
````
<button 
    className="btn"
    onClick={ handleLogout }
>
    Logout
</button>
````
----
