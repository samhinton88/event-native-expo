import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../../actions';
import { Input, CardSection, Card, Button, Spinner } from '../../common';
import { Text } from 'react-native'


class LogInForm extends Component {
  renderButton = () => {
    if(this.props.loading) {
      return <Spinner size='large' />
    }
    return (
      <Button
        onPress={this.onButtonPress}
      >
        Log in
      </Button>
    )
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='name@example.com'
            value={this.props.email}
            onChangeText={this.props.onEmailChange}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label='Password'
            placeholder='password'
            value={this.props.password}
            onChangeText={this.props.onPasswordChange}
          />
        </CardSection>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const { email, password, error, loading } = state.auth;

  return {
    email: email,
    password: password,
    error: error,
    loading: loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEmailChange: val => dispatch(emailChanged(val)),
    onPasswordChange: val => dispatch(passwordChanged(val)),
    onButtonPress: () => dispatch(loginUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
