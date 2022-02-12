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