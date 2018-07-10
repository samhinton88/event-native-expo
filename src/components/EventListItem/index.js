import React, { Component } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, Image, Text, ImageBackground } from 'react-native';
import imageDecoder from '../../helpers/image_decoder'

class EventListItem extends Component {
  render() {
    const { data: {title, image, _id, venue }, onPress, style } = this.props

    const uri = imageDecoder(image)
    return (
      <TouchableWithoutFeedback onPress={() => onPress(_id)}>
        <View style={styles.container}>
          <Image
            source={{uri}}
            style={styles.imageBackground}
           >
          </Image>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.venue}>{venue}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 20
  },
  imageBackground: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain'
  },
  venue: {
    fontSize: 15,
    color: 'white'
  },
  container: {
    minWidth: 170,
    maxWidth: 200,
    height: 200,
    maxHeight:204,
    margin: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.6)',
    shadowOpacity: 1,
    shadowOffset: { width: 1, height: 1},
    padding: 10
  },
  textContainer: {
    position: 'absolute',
    bottom: 5,
    left: 5
  }
})

export default EventListItem
