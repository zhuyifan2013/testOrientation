/**
 * Created by Yifan Zhu on 2017/6/8.
 * Mail: zhu_yifan@me.com
 */
import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation'
import Orientation from 'react-native-orientation'

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class SecondPage extends Component {

    static navigationOptions = {
        title: 'SecondPage',
    };

    componentDidMount() {
        Orientation.unlockAllOrientations();
        Orientation.lockToLandscapeLeft();
    }

    render() {
        return (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 20}}>
                    This Page should Landscape-Left
                </Text>
            </View>
        );
    }

}