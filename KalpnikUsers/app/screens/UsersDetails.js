import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';

class UsersDetails extends Component {

    onDeleteHandler = () => {
        const user = this.props.navigation.getParam('user');
        this.props.deleteUser(user.id)
        Alert.alert(
            'Message',
            'User Deleted successfully!',
            [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]
        )
        this.props.navigation.pop();

    }

    render() {
        const user = this.props.navigation.getParam('user');
        console.log(user)

        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>First Name :</Text>
                    <Text style={styles.title}> {user.firstName} </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>Last Name :</Text>
                    <Text style={styles.title}> {user.lastName} </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>Email :</Text>
                    <Text style={styles.title}> {user.email} </Text>
                </View>
                <TouchableOpacity
                    style={styles.rectangleButton}
                    onPress={this.onDeleteHandler} >
                    <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const mapStateToProps = (state) => ({
    usersList: state.Users.usersList,
});

function mapDispatchProps(dispatch) {
    return {
        deleteUser: (id) => dispatch({ type: 'DELETE_USER', payload: { id } }),
    }
}

export default connect(mapStateToProps, mapDispatchProps)(UsersDetails)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textContainer: {
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        marginLeft: 20

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
    rectangleButton: { 
        margin: 20, 
        borderWidth: 2, 
        borderColor: "blue", 
        alignItems: 'center', 
        height: 60, 
        justifyContent: 'center', 
        backgroundColor: "blue" 
    },
    buttonText: {
        color: "white",
        alignContent: 'center',
        textAlign: 'center',
        fontSize: 20,

    }
       
});

