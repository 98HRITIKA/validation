import React from 'react';
import TextField from 'textfield'
import validation from 'validation'
import validate from 'validation_wrapper'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default class Login extends React.Component {

  constructor(props) {
    super(props)
  state = { email: '', password: '', errorMessage: null }

  register() {
    const emailError = validate('email', this.state.email)
    const passwordError = validate('password', this.state.password)

    this.setState({
      emailError: emailError,
      passwordError: passwordError
    })
  }
    if (!emailError && !passwordError) {
      alert('Details are valid!')
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
          <TextField
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          value={this.state.email}
          onChangeText={value => this.setState({email: value.trim()})}
          onBlur={() => {
            this.setState({
              emailError: validate('email', this.state.email)
            })
          }}
          error={this.state.emailError}/>
        />
        <TextField
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          value={this.state.password}
          onChangeText={value => this.setState({password: value.trim()})}
          onBlur={() => {
            this.setState({
              passwordError: validate('password', this.state.password)
            })
          }}
          error={this.state.passwordError}
          secureTextEntry={true}/>
        />
        <Button title="Login" onPress={this.validateRegister}/>
 />
        <Button
          title="Don't have an account? Sign Up"
          onPress={() => this.props.history.push("/signup")}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})