> __Elemento Anterior 👀:__ __[HeroesApp - React](https://github.com/Paserno/react-router-hero-app)__
# App de React con SASS - Redux - Firebase
App de diario que tiene la función de grabar lo que sucede en la vida, la primera parte sera la Estructura y Diseño con __SASS__. Uso de los siguientes elementos

SASS
* __[Node SASS](https://www.npmjs.com/package/node-sass)__

Redux
* __[Redux](https://es.redux.js.org)__
* __[React Redux](https://react-redux.js.org)__



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