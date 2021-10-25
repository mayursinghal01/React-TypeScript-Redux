
import { createStore } from "redux";
import {blogReducer} from "./Reducers/blogReducer";


const store = createStore(blogReducer)


export default store;
