import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

class UserInfo extends Component {
    render() {
        return (
            <View style = {styles.container} >
                <View style = {styles.userInfo}> 

                <View style = {styles.NameContainer}> 
                    <Text style= {styles.textColor}>FirstName</Text>
                    <Text style= {styles.textColor}>{this.props.userDetail.firstName} </Text>
                </View>

                </View>
            </View>
        );
    }
}

export default UserInfo

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white',
        borderWidth: 1.0,
        borderColor: 'grey',
    },
    userInfo: {
        flex:1,
        flexDirection:'row'
    },
    NameContainer: {
        flex:1,
        flexDirection:'row'
    },
    headingLabel: {
        
    },

    textColor: {
        flex:1,
        margin:20
    }
});
