import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


const rootStore = combineReducers({

});

const store = createStore(
    rootStore,

    composeWithDevTools(applyMiddleware(thunk))
);
export default store;