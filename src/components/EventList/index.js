import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchEvents } from '../../actions';

class EventList extends Component {
  componentDidMount() {
    this.props.fetchEvents()
  }

  render() {
    return (
      <View>
        <Text>Event List</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const { events } = state;
  return {
    events
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvents: () => dispatch(fetchEvents())
  }
}

export default connect(mapStateToProps)(EventList);
