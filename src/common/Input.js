import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, noLabel }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  const centerStyle = noLabel ? { textAlign: 'center'} : null

  return (
    <View style={containerStyle}>
      {noLabel ? null : <Text style={labelStyle}>{label}</Text>}
      <TextInput
        secureTextEntry={secureTextEntry}
        style={[inputStyle, centerStyle ]}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        placeholder={placeholder}
      />
    </View>
  )
}

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    height: 40,
  }

};

export { Input };
