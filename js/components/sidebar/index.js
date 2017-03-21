
import React, { Component } from 'react';
import { Image, Platform } from 'react-native';
import { connect } from 'react-redux';
import { Content, Text, List, ListItem, Icon, Container, Left, Right, Badge, Button, View, StyleProvider, getTheme, variables } from 'native-base';
import { Actions } from 'react-native-router-flux';

import material from '../../../native-base-theme/variables/material';
import { changePlatform, changeMaterial, closeDrawer } from '../../actions/drawer';
import navigateTo from '../../actions/sideBarNav';
import styles from './style';

const drawerCover = require('../../../img/drawer-cover.png');

const drawerImage = require('../../../img/logo-simba-app.png');


class SideBar extends Component {

  static propTypes = {
    navigateTo: React.PropTypes.func,
    themeState: React.PropTypes.string,
    changePlatform: React.PropTypes.func,
    changeMaterial: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4,
    };
  }

  navigateTo(route) {
    this.props.navigateTo(route, 'home');
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: '#fff', top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawerCover}>
            <Image
              square
              style={styles.drawerImage}
              source={drawerImage}
            />
          </Image>
          <List>

            <ListItem button noBorder onPress={() => { Actions['anatomy'](); this.props.closeDrawer() }} >
               {/* <Thumbnail source={require('./img/hyundai-logo.png')} />*/} 
                <Left>
                  <Icon active name='phone-portrait' style={{ color: '#777', fontSize: 26, width: 30 }} />
                  <Text style={styles.text}>Dashboard</Text>
                  <Text note>mainscreen - with all the suggestions of places to visit.like toruapp1-places </Text>
                </Left>
             </ListItem>
             <ListItem button noBorder onPress={() => { Actions['Discover/Map'](); this.props.closeDrawer() }} >
               {/* <Thumbnail source={require('./img/hyundai-logo.png')} />*/} 
                <Left>
                  <Icon active name='phone-portrait' style={{ color: '#777', fontSize: 26, width: 30 }} />
                  <Text style={styles.text}>Discover/Map</Text>
                  <Text note>map view with search - shows friends nearby n interesting places </Text>
                </Left>
                
            </ListItem>  

              <ListItem button noBorder onPress={() => { Actions[''](); this.props.closeDrawer() }} >
               {/* <Thumbnail source={require('./img/hyundai-logo.png')} />*/} 
                <Left>
                  <Icon active name='phone-portrait' style={{ color: '#777', fontSize: 26, width: 30 }} />
                  <Text style={styles.text}>Places</Text>
                  <Text note>shows places around you/popular places hotels etc - n comments/pics/likes</Text>
                </Left>
                
            </ListItem>
              <ListItem button noBorder onPress={() => { Actions[''](); this.props.closeDrawer() }} >
               {/* <Thumbnail source={require('./img/hyundai-logo.png')} />*/} 
                <Left>
                  <Icon active name='phone-portrait' style={{ color: '#777', fontSize: 26, width: 30 }} />
                  <Text style={styles.text}>Posts/Comments</Text>
                  <Text note>view thread of posts /comments of friends n ua threads</Text>
                </Left>
                </ListItem> 
             <ListItem button noBorder onPress={() => { Actions[''](); this.props.closeDrawer() }} >
               {/* <Thumbnail source={require('./img/hyundai-logo.png')} />*/} 
                <Left>
                  <Icon active name='phone-portrait' style={{ color: '#777', fontSize: 26, width: 30 }} />
                  <Text style={styles.text}>Chat/Messages</Text>
                  <Text note>inbox - talk to friends or nearby people</Text>
                </Left>
                
            </ListItem>
            <ListItem button noBorder onPress={() => { Actions[''](); this.props.closeDrawer() }} >
               {/* <Thumbnail source={require('./img/hyundai-logo.png')} />*/} 
                <Left>
                  <Icon active name='phone-portrait' style={{ color: '#777', fontSize: 26, width: 30 }} />
                  <Text style={styles.text}>Favorite/Friends</Text>
                  <Text note>list of favorited people n places - view their travels etc</Text>
                </Left>
                
            </ListItem>
          
            
            
             <ListItem button noBorder onPress={() => { Actions[''](); this.props.closeDrawer() }} >
               {/* <Thumbnail source={require('./img/hyundai-logo.png')} />*/} 
                <Left>
                  <Icon active name='phone-portrait' style={{ color: '#777', fontSize: 26, width: 30 }} />
                  <Text style={styles.text}>Settings</Text>
                  <Text note>change app settings here</Text>
                </Left>
                
            </ListItem>
             <ListItem button noBorder onPress={() => { Actions[''](); this.props.closeDrawer() }} >
               {/* <Thumbnail source={require('./img/hyundai-logo.png')} />*/} 
                <Left>
                  <Icon active name='phone-portrait' style={{ color: '#777', fontSize: 26, width: 30 }} />
                  <Text style={styles.text}>Profile</Text>
                  <Text note>view your profile - edit n ua travels n stats etc</Text>
                </Left>
                
            </ListItem>
             <ListItem button noBorder onPress={() => { Actions[''](); this.props.closeDrawer() }} >
               {/* <Thumbnail source={require('./img/hyundai-logo.png')} />*/} 
                <Left>
                  <Icon active name='phone-portrait' style={{ color: '#777', fontSize: 26, width: 30 }} />
                  <Text style={styles.text}>Logout</Text>
                  <Text note>main</Text>
                </Left>
                
            </ListItem>

             
          </List>

        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute)),
    closeDrawer: () => dispatch(closeDrawer()),
    changePlatform: () => dispatch(changePlatform()),
    changeMaterial: () => dispatch(changeMaterial()),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  themeState: state.drawer.themeState,
});

export default connect(mapStateToProps, bindAction)(SideBar);
