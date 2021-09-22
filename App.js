/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  NativeModules,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const {Person} = NativeModules;
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: ""
    };
  }
  submitName = (name) => {
    var name = name

    if (name.length >= 3 ) {
      Person.retrieveFirstName(name);
      this.updateName();
    }
  };

  updateName = () => {
    Person.getFullName((error, fullName) => {
      this.setState({fullName: fullName})
    });
  };

  render() {
    return (
      <View style={styles.container}>
        
        <Text style={{fontSize: 24}}>
        Name is: {this.state.fullName ?? ''}
        </Text>

        <TextInput placeholder="Enter name"
          onChangeText={(value) => 
          {this.submitName(value),
          this.setState.fullName=value
          }}
          style={{fontSize: 24}}>
            
          </TextInput>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#d3d3d3',},
});
