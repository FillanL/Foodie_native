/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Navigator,
  TouchableHighlight
} from 'react-native';
// import { createBottomTabNavigator } from 'react-navigation';
import Home from './Components/home'

let ScreenHeight = Dimensions.get("window").height;
class App extends React.Component {

  render() {

    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView >
          <ScrollView
            horizontal={true}
            contentInsetAdjustmentBehavior="automatic"
          >

            <View style={styles.topView}>
              <Text style={styles.topViewtext}> hello world</Text>
            </View>
            <View style={styles.topView}>
              <Text style={styles.topViewtext}> hello world</Text>
            </View>
            <View style={styles.topView}>
              <Text style={styles.topViewtext}> hello world</Text>
            </View>

          </ScrollView>
          <ScrollView style={styles.scrollView}>

            <View style={styles.topView}>
              <Text style={styles.topViewtext}> hello world</Text>
            </View>
            <View style={styles.topView}>
              <Text style={styles.topViewtext}> hello world</Text>
            </View>
            <View style={styles.topView}>
              <Text style={styles.topViewtext}> hello world</Text>
            </View>


            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
              <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
              <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
};

const styles = StyleSheet.create({
  topView: {
    width: 500,
    backgroundColor: 'yellow',
    justifyContent: "center",
    height: 50,
  },
  topViewtext: {
    textAlign: "center",
    fontSize: 24,
    color: "crimson",
  },
  scrollView: {
    height: ScreenHeight,
    backgroundColor: 'grey',
  }

});

export default App;
