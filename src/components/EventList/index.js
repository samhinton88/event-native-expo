import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Card, CardSection} from '../../common'
import { connect } from 'react-redux';
import { fetchEvents, selectEvent } from '../../actions';
import EventListItem from '../EventListItem';

class EventList extends Component {
  componentDidMount() {
    this.props.fetchEvents()
  }

  renderItem = ({item}) => {
    console.log(item)
    if(!item) {return }
    // const {event} = data.item
    // console.log('event in renderItem', event)

    return (
      <EventListItem
        onPress={() => this.props.selectEvent(item._id)}
        data={item}
        style={styles.item}
      />
    )
  }

  render() {
    console.log(this.props)
    return (

        <FlatList
          contentContainerStyle={styles.list}
          data={this.props.events}
          renderItem={this.renderItem}
          keyExtractor={(event) => `${event._id}`}
        />

    )
  }
}

const styles = StyleSheet.create({
  // container: {
  //   // backgroundColor: 'blue',
  //   // flexDirection: 'row',
  //   // flexWrap: 'wrap'
  // },
  item: {
    minWidth: 170,
    maxWidth: 200,
    height: 204,
    maxHeight:204,
    margin: 5,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    flex: 1
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
})

const mapStateToProps = (state) => {
  const { list } = state.events;
  return {
    events: list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
    selectEvent: (id) => dispatch(selectEvent(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
