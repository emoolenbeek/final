// components/Main.js
import React, {Component} from "react";
import {Provider} from "react-redux";
import Index from "./src/Index";
import {createStore, applyMiddleware} from "redux";
import { StyleSheet, Text, View } from 'react-native';
import thunk from 'redux-thunk';
import RestaurantFinder from "./src/Reducers"

let state = {display:1, myData:[]};
let store = createStore(RestaurantFinder,state, applyMiddleware(thunk));

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
        <Index/>
        </Provider>
    )
  }
}




