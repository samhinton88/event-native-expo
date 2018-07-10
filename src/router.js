import React from 'react';
import {View} from 'react-native'
import { Scene, Router, Actions } from 'react-native-router-flux';
// import components
import LogInForm from './components/LogInForm';
import EventListPage from './components/EventListPage';
import EventPage from './components/EventPage';


const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root' hideNavBar>
        <Scene key='auth' >
          <Scene
            key='login'
            component={LogInForm}
            initial
            navigationBarStyle={{backgroundColor: 'white'}}
            renderTitle={() => <View style={{height: 20, width: 20, backgroundColor: 'white'}}/>}/>
        </Scene>
        <Scene key='main'>
          <Scene
            key='eventList'
            component={EventListPage}
            initial
          />
          <Scene
            key='eventPage'
            component={EventPage}
          />
        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComponent;
