
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Container,InputGroup,Input, Header, Title, Content, Text, H3, Button, Icon,Badge, Footer, FooterTab, Left, Right, Body } from 'native-base';

import { openDrawer } from '../actions/drawer';
import styles from './styles/dashboard';

class Dashboard extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
           <InputGroup>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
           </InputGroup>
          <Right />

        </Header>


        <Content padder>
          <Text>
            Content Goes Here
          </Text>

        </Content>


        <Footer>
           <FooterTab>
                        <Button>
                            <Badge><Text>2</Text></Badge>
                             <Text> Apps</Text>
                            <Icon name='ios-apps-outline' />
                        </Button>
                        <Button>
                            <Text> Camera</Text>
                            <Icon name='ios-camera-outline' />
                        </Button>
                        <Button active>
                            <Text> Navigate</Text>
                            <Icon name='ios-compass' />
                        </Button>
                        <Button>
                            <Text> Contact</Text>
                            <Icon name='ios-contact-outline' />
                        </Button>
                    </FooterTab>
        </Footer>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  themeState: state.drawer.themeState,
});

export default connect(mapStateToProps, bindAction)(Dashboard);
