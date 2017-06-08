/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Button} from 'react-native'
import {StackNavigator} from 'react-navigation'
import SecondPage from './SecondPage'
import Orientation from 'react-native-orientation'

import {
    AppRegistry,
    View
} from 'react-native';

export default class HomeScreen extends Component {

    static navigationOptions = {
        title: 'Home',
    };

    componentDidMount() {
        Orientation.lockToPortrait();
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Button
                    onPress={() => {
                        this.props.navigation.navigate('Second');
                    }}
                    style={{width: 200, height: 50}}
                    title="Go to Second Page"/>
            </View>
        );
    }
}

const SimpleApp = StackNavigator({
    Home: {screen: HomeScreen},
    Second: {screen: SecondPage}
});

AppRegistry.registerComponent('testPosition', () => SimpleApp);
