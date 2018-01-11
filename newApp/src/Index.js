import React, { Component } from 'react';
import { Spinner,Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import List from "./List";
import DetailView from "./DetailView";
import * as actions from "./Actions";
import {connect} from "react-redux";

class Index extends Component {
    render() {
        var output = "";

        const myState = this.props.myState

        if(myState == 1){
        output = <Text>Press button to load some restaurants!</Text>
        }
        if(myState == 2){
        output = <Spinner/>
        }
        if(myState == 3){
        output = <List/>
        }
        if(myState == 4){
        output = <DetailView/>
        }

        return (
            <Container>
                <Header>
                    <Left/>
                    <Body>
                    <Title>Restaurants+</Title>
                    </Body>
                    <Right>
                        <Button onPress={this.props.getGeolocalizedList}><Text>Load</Text></Button>
                    </Right>
                </Header>
                <Content>
                    {output}
                </Content>
                <Footer>
                    <Text>Eric Moolenbeek</Text>
                </Footer>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return{
        myState: state.display
    }
}

function mapDispatchToProps(dispatch){
    return{
        getGeolocalizedList: () => dispatch(actions.getGeolocalizedList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);