import { combineReducers } from "redux";
import postsReducer from "./postReducer";
import detailsReducer from "./detailsReducer";



const rootReducer = combineReducers({
    posts: postsReducer,
    detailsCard: detailsReducer
})

export default rootReducer;