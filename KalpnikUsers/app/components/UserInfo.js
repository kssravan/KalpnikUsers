import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

class UserInfo extends Component {
    render() {
        return (
            <View style = {styles.container} >
                <View style = {styles.NameContainer}> 
                    <Text style= {styles.heading}>First Name :</Text>
                    <Text style= {styles.title}>{this.props.userDetail.firstName} </Text>
                </View>

                <View style = {styles.NameContainer}> 
                    <Text style= {styles.heading}>Last Name :</Text>
                    <Text style= {styles.title}>{this.props.userDetail.lastName} </Text>
                </View>

                <View style = {styles.NameContainer}> 
                    <Text style= {styles.heading}>Email :</Text>
                    <Text style= {styles.title}>{this.props.userDetail.email} </Text>
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
    NameContainer: {
        flexDirection: 'row',
        margin:10,
    },
    heading: {
        color: "black",
        alignContent: 'center',
        textAlign: 'center',
        fontSize: 20,

    },
    title: {
        color: "black",
        alignContent: 'center',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
});
