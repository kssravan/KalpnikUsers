import React from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const statusBarHeight = getStatusBarHeight()

const NavigationComponent = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.navBar}>
                {props.isCreateNewUser === false &&
                    <Image style={styles.logo} source={{ uri: 'https://cdn2.sonosim.com/wp-content/uploads/2015/10/fa-Users.png' }} />
                }
                 {props.isCreateNewUser === true &&
                    <TouchableOpacity onPress={props.onBackClicked}>
                        <Text style={styles.button}>{"< Users"}</Text>
                    </TouchableOpacity>
                }

                <Text style = {styles.message}>{props.title}</Text>
                {!props.isCreateNewUser === true &&
                    <TouchableOpacity onPress={props.onCreateNewUserClicked}>
                        <Text style={styles.button}>Add</Text>
                    </TouchableOpacity>
                }
                 {props.isCreateNewUser === true &&
                    <TouchableOpacity onPress={props.onCreateNewUserClicked}>
                        <Text style={styles.button}>Save</Text>
                    </TouchableOpacity>
                }
            </View>

        </View>
    );
}

export default NavigationComponent

const styles = StyleSheet.create ({
    container: { 
        flex:1, 
        backgroundColor:'blue'
    },
    logo: {
        width: 30,
        height: 30,
    },
    navBar: {
        flex:1,
        flexDirection:'row',
        height: (Platform.OS === 'ios') ? 44 : 44,
        alignContent:'center',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop: (Platform.OS === 'ios') ? statusBarHeight : 0,
        marginLeft:20,
        marginRight:20,
    },
    message: { 
        color: "white", 
        alignContent:'center', 
        textAlign:'center',
        fontSize:20
    },
    button: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
    },

});