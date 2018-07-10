import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import { registerInterest } from '../../actions';
import { Button } from '../../common';
import imageDecoder from '../../helpers/image_decoder';

class EventPage extends Component {
  handlePress = () => {
    const { userId, event: { _id } } = this.props;

    this.props.registerInterest(userId, _id)
  }

  render() {
    const { image, venue, time, title, text } = this.props.event;
    console.log('props in eventpage', this.props)


    const uri = imageDecoder(image);

    console.log(uri)
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri}}
            style={styles.image}
          />
          <Text style={styles.textTitle}>{title}</Text>
        </View>
        <View style={styles.eventBody}>
          <Text style={styles.textVenue}>{venue}</Text>
          <View style={styles.horizontal}/>
          <Text style={styles.textTime}>{time}</Text>
          <View style={styles.horizontal}/>
          <View style={styles.descriptionContainer}>
            <Text style={styles.textDescription}>{text}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={this.handlePress}>Interested!</Button>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1
  },
  imageContainer: {
    height: 300,
    width: '100%',
  },
  horizontal: {
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.4)'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  eventBody: {
    padding: 20
  },
  textTitle: {
    position: 'absolute',
    color: 'white',
    fontWeight: "bold",
    bottom: 10,
    left: 10,
    fontSize: 40,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowRadius: 5,
    textShadowOffset: { width: 1, height: 1}

  },
  descriptionContainer: {
    padding: 10
  },
  textVenue: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.4)'
  },
  textTime: {
    fontSize: 20
  },
  textDescription: {
    fontSize: 12
  },
  buttonContainer: {
    height: 50
  }
})

const mapStateToProps = (state) => {
  console.log('state in mapStateToProps eventpage', state)
  return {
    event: state.events.selectedEvent,
    userId: state.auth.user._id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerInterest: (uId, eId) => dispatch(registerInterest(uId, eId))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(EventPage)
