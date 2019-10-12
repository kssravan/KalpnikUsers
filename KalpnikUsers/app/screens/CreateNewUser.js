import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text, Alert } from 'react-native';
import { connect } from 'react-redux';
import NavigationComponent from '../components/NavigationComponent'
import { StackActions } from "react-navigation";

class CreateNewUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: -1,
            firstName: "",
            lastName: "",
            email: "",
        }
    }

    componentDidMount() {
        const { navigation } = this.props;
        navigation.setParams({ onCreateNewUserClicked: this.onClickOfNewUserHandler, onBackClicked:this.onBackClickedHandler });
    }

    static navigationOptions = ({ navigation }) => (
        {
            header: () =>
                <NavigationComponent
                    title="Create New User"
                    isCreateNewUser={true}
                    onCreateNewUserClicked={navigation.getParam('onCreateNewUserClicked') || null}
                    onBackClicked={navigation.getParam('onBackClicked') || null}

                />,
            headerStyle: {
                backgroundColor: "transparent",
                // height: 0,
            }
        });

    validate = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            return false;
        }
        else {
            return true;
        }
    }

    onClickOfNewUserHandler = () => {
        //do save action
        console.log("new user clicked")
        const { usersList } = this.props;
        const { firstName, lastName, email } = this.state

        if (firstName.length === 0) {
            Alert.alert(
                'Message',
                'Please enter first name',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ]
            )
        }
        else if (lastName.length < 2) {
            Alert.alert(
                'Message',
                'Please enter last name',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ]
            )
        }
        else if (email.length === 0) {
            Alert.alert(
                'Message',
                'Please enter email address',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ]
            )
        }
        else if (this.validate(email) === false) {
            Alert.alert(
                'Message',
                'Please enter valid email address',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ]
            )
        }
        else {
            const id = usersList.length + 1
            const name = firstName.concat(" " , lastName);
            const user = ({
                id: id,
                email: this.state.email,
                firstName: firstName,
                lastName: lastName,
                name: name
            });
            console.log(user)
            this.props.createNewUser(user)
            Alert.alert(
                'Message',
                'New User saved successfully!',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ]
            )
            this.props.navigation.pop();

        }
    }

    onBackClickedHandler = () => {            
        this.props.navigation.pop();
    }

    onFirstNameChangeHandler = (text) => {
        this.setState({ firstName: text })
    }

    onLastNameChangeHandler = (text) => {
        this.setState({ lastName: text })
    }

    onEmailChangeHandler = (text) => {
        this.setState({ email: text })
    }

    render() {
        const { firstName, lastName, email } = this.state;

        return (
            <View style={styles.container}>

                <View style={styles.nameHeadingView}>
                    <Text style={styles.nameHeading}> Name </Text>
                    <View style={styles.textViewUnderLine}>
                        <TextInput
                            style={styles.textInput}
                            text={firstName}
                            placeholder="First Name"
                            placeholderTextColor="grey"
                            autoCapitalize="none"
                            onChangeText={this.onFirstNameChangeHandler} />
                    </View>

                    <View style={styles.textViewUnderLine}>
                        <TextInput
                            style={styles.textInput}
                            text={lastName}
                            placeholder="Last Name"
                            placeholderTextColor="grey"
                            autoCapitalize="none"
                            onChangeText={this.onLastNameChangeHandler} />
                    </View>

                    <View style={styles.textViewUnderLine}>
                        <TextInput
                            style={styles.textInput}
                            text={email}
                            placeholder="Email"
                            placeholderTextColor="grey"
                            autoCapitalize="none"
                            onChangeText={this.onEmailChangeHandler} />
                    </View>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    usersList: state.Users.usersList,
});

function mapDispatchProps(dispatch) {
    return {
        createNewUser: (data) => dispatch({ type: 'CREATE_NEW_ROOM', payload: { data } }),
    }
}

export default connect(mapStateToProps, mapDispatchProps)(CreateNewUser)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    nameHeadingView: {
        margin: 20,
        // alignContent:'center'
    },
    nameHeading: {
        color: "black",
        alignContent: 'center',
        textAlign: 'left',
        fontSize: 30,
    },
    textInput: {
        marginTop: 10,
        alignContent: 'center',
        textAlign: 'left',
        fontSize: 20,
        color: 'black'
    },
    textViewUnderLine: {
        marginLeft: 10,
        marginTop: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        opacity: 0.4,
    }

});


