import React, { Component } from 'react';
import { Spinner,Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {connect} from "react-redux";
import * as actions from "./Actions";

class ListItem extends React.Component {
    render(){
        <ListItem id={this.props.id} onPress={this.props.changeView}>
            <Text>{this.props.name}</Text>
            <Text note>{(this.props.distance/1000).toFixed(2)} KM</Text>

        </ListItem>
    }
}

function mapStateToProps(state) {
    return{
        myData: state.data
    }
}

function mapDispatchToProps(state){
    return{
        changeView: () => {console.log(ownProps.id);
        return dispatch(actions.displayView(ownProps))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListItem)