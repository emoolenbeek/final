import {GET_LIST, SHOW_LIST, INFO} from "./Actions";

export default function RestaurantFinder(state, action) {
let newState = Object.assign({},state);

switch(action.type){
    case GET_LIST:
        let display = action.display
        console.log(display);
        newState = Object.assign({},state, {display});
        break;
    case SHOW_LIST:
        let myData = action.myData;
        newState = Object.assign({},state, {myData});
        break;
    case INFO:
        let item = action.item;
        newState = Object.assign({}, state, {item});
    default: return state;
}
return newState;
}