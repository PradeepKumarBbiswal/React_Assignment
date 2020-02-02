import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import AppNavigater from './navigations/AppNavigater';
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#7734EC" barStyle="light-content" />
        <AppNavigater />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
