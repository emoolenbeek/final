import React, { Component } from 'react';
import { Spinner,Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import ListItem from "./ListItem";
import {connect } from "react-redux";

class List extends React.Component{
    render(){
        console.log(this.props.myData);
         let show = this.props.myData.map((item)=>{
            return (
                <ListItem {...item} id={item.id}/>
            )
        });
         return (
             <List>{show}</List>
         )








        }

    }

  const mapStateToProps = (state) => {
    return{
        myData: state.myData
    }
  }
  

  export default connect(mapStateToProps)(List)
