import { combineReducers } from "redux";
import { searchReducer } from "./searchReducer";
import { updateReducer } from "./updateReducer";

const rootReducer = combineReducers({
    search : searchReducer,
    update : updateReducer
});

export default rootReducer;