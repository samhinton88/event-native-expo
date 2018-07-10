import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { searchBarChange } from '../../actions';
import { Input, CardSection } from '../../common';

class SearchBar extends Component {
  handleChange = () => {
    this.props.handleChange(this.props.value)
  }
  render() {
    return (
      <View style={styles.inputContainer}>
        <Input
          onChange={this.handleChange}
          value={this.props.value}
          placeholder='search events...'
          noLabel
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    position: 'absolute',
    top: 10,
    left: '5%',
    width: '90%',
    backgroundColor: 'rgba(25, 25, 25, 0.4)',
    borderRadius: 20,

  }
})

const mapStateToProps = (state) => {
  return {
    value: state.searchBar.value
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (value) => dispatch(searchBarChange(value))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
