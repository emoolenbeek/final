import axios from "axios/index";

export const GET_LIST = "GET_LIST";
export const SHOW_LIST = "SHOW_LIST";
export const INFO = "INFO";


// actions.js
export function getGeolocalizedList() {
    return (dispatch)=> {
        dispatch(isFetching(2));
        console.log("here");
        navigator.geolocation.getCurrentPosition(
            (position) => {
                dispatch(fetchList(position.coords.latitude, position.coords.longitude));
            },
            (error) => {
                console.log("Error", error);
            },
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
    }
}

export function fetchList(lat, long) {
    return (dispatch) => {

        axios.get("https://api.yelp.com/v3/businesses/search?sort_by=distance&latitude="+lat+"&longitude="+long,
            {headers:{"Authorization":"Bearer 8jIgABFnqb6-zSpxkp9qImY-EF8vlk1FW1oCNQLAIdrCgq8-HIU_5GzEfaxMW0Jeo3pCnuwcAWFzCUgLppDY6xQ8opCkOLYcTUkWDYxCiyQzPCpGKkOMrHrucY9XWnYx"}})
            .then(function (response) {
                console.log(response.data.businesses);
                dispatch(isFetching(3));
                dispatch(saveData(response.data.businesses));
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export function isFetching(a) {
    return{
        type: GET_LIST,
        display: a
    }
}

export function saveData(list){
    return{
        type: SHOW_LIST,
        myData: list
    }
}

export function displayView(id) {
    return(dispatch)=>{
        dispatch(changeView(id));
        dispatch(isFetching(4))
    }

}

export function changeView(id) {
    return{
        type: INFO,
        item: id
    }
}