import React, { Component } from 'react';
import { View } from 'react-native';
import SearchBar from '../SearchBar';
import EventList from '../EventList';


class EventListPage extends Component {
  render() {
    return (
      <View>
        <EventList />
        <SearchBar />
      </View>
    )
  }
}

export default EventListPage;
