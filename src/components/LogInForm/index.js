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

  onButtonPress = () => {
    const { email, password } = this.props;

    this.props.loginUser({ email, password })
  }

  renderError = () => {
    if(!this.props.loginError) { return}

    return <Text>{this.props.loginError}</Text>
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
          {this.renderError()}
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const { email, password } = state.auth;
  const { loading, loginError } = state.UX;

  return {
    email,
    password,
    loginError,
    loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEmailChange: val => dispatch(emailChanged(val)),
    onPasswordChange: val => dispatch(passwordChanged(val)),
    loginUser: (data) => dispatch(loginUser(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
