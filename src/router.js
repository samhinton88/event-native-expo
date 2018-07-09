import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
// import components
import LogInForm from './components/LogInForm';
import EventList from './components/EventList';
import EventPage from './components/EventPage';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root' hideNavBar>
        <Scene key='auth'>
          <Scene key='login' component={LogInForm} initial/>
        </Scene>
        <Scene key='main'>
          <Scene
            key='eventList'
            component={EventList}
            initial
          />
          <Scene
            key='eventList'
            component={EventPage}
          />
        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComponent;
