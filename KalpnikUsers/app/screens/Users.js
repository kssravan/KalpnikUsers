import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import UserInfo from '../components/UserInfo';
import NetInfo from "@react-native-community/netinfo";
import { bindActionCreators } from 'redux';
import * as HomeActions from '../actions/UsersActions';
import Loading from '../components/Loading'
import NavigationComponent from '../components/NavigationComponent'
import { TouchableOpacity } from 'react-native-gesture-handler';

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isInternetConnected: true,
            isUsersListAvailable: false,
            isErrorOnFetchingUsersList: false
        }
    }

    static navigationOptions = ({ navigation }) => (
        {
            header: () =>
                <NavigationComponent
                    title="Users"
                    isCreateNewUser = {false}
                    onCreateNewUserClicked={navigation.getParam('onCreateNewUserClicked') || null}
                />,
            headerStyle: {
                backgroundColor: "transparent",
                // height: 0,
            }
        });

    async componentDidMount() {
        const { navigation } = this.props;
        navigation.setParams({onCreateNewUserClicked: this.onClickOfNewUserHandler });
        this.fetchUserList()
    }

    onClickOfNewUserHandler = () => {
        const { navigation } = this.props;
        navigation.push('CreateNewUser');
    }

    fetchUserList() {
        const { fetchUsersListAndSave } = this.props;

        NetInfo.fetch().then(state => {
            this.setState({ isInternetConnected: state.isConnected })

            if (state.isConnected) {
                fetchUsersListAndSave().then(() => {
                    const { usersList } = this.props;
                    console.log("check",usersList)
                    if (usersList.length > 0) {
                        this.setState({ isUsersListAvailable: true })
                        this.setState({ isErrorOnFetchingUsersList: false })
                    }
                    else {
                        this.setState({ isUsersListAvailable: false })
                        this.setState({ isErrorOnFetchingUsersList: true })
                    }
                });
            }
        });
    }

    renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => this.onUserDetailsHandler(item)}>
                <UserInfo
                    userDetail={item}
                    index={index}
                />
            </TouchableOpacity>
        );
    }

    reloadUsersList = () => {
        this.fetchUserList()
    }

    onUserDetailsHandler = (user) => {
        console.log(user)
        const {navigation} = this.props
        navigation.push('UsersDetails', {
            user: user,
        });
    }

    render() {
        const { usersList } = this.props;
        const { isInternetConnected, isUsersListAvailable, isErrorOnFetchingUsersList } = this.state;

        return (
            <View style={styles.container}>
                {isInternetConnected === false &&
                    <Loading
                        message="Internet Connection not available, Please connect to internet"
                        isReloadEnabled={true}
                        onReloadPress={this.reloadUsersList}
                    />
                }
                {isInternetConnected === true &&
                    <View style= {{flex:1}}>
                        {isUsersListAvailable === false &&
                            <Loading
                                message="Please wait, We are fetching the users list"
                                isReloadEnabled={true}
                            />
                        }
                        {isUsersListAvailable === true &&
                            <FlatList
                                data={usersList}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={this.renderItem}
                            />
                        }
                    </View>
                }



            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    usersList: state.Users.usersList,
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(

        HomeActions, dispatch

    ),

})

export default connect(mapStateToProps, mapDispatchToProps)(Users)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom:20,
    }
});


