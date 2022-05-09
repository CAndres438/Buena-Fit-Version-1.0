import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { guardarLocalStorage, obtenerLocalStorage } from "../../utils/LocalStorage";
import { fisicsReducer } from "../reducers/fisicsReducer";
import { productsReducer } from "../reducers/productsReducer";
import { loginReducer } from "../reducers/loginReducer";
import { shoppingCartReducer } from "../reducers/shoppingCartReducer";
import { modalReducer } from "../reducers/modalReducer";
import { registerReducer } from "../reducers/registerReducer";
import { usuariosReducer } from "../reducers/usuariosReducer";
import { commentsReducer } from "../reducers/commentsReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const storageState = obtenerLocalStorage();

const reducersEnviar = combineReducers({
    login: loginReducer,
    register: registerReducer,
    products: productsReducer,
    cart: shoppingCartReducer,
    modal: modalReducer,
    fisics: fisicsReducer,
    usuarios: usuariosReducer,
    comments: commentsReducer,
})

export const store = createStore(
    reducersEnviar,
    storageState,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

store.subscribe(() => {
    guardarLocalStorage(
        {
           modal: store.getState().modal
        },
   )
})

