import React, { Component } from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';

class Loading extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="blue" style={{ marginTop: 100 }} />
                <Text style={styles.message}>{this.props.message}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: { 
        flex:1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        // backgroundColor:'red' 
    },
    message: { 
        color: "blue", 
        width: '100%',  
        marginLeft:20, 
        marginRight:20, 
        marginTop:20,
        backgroundColor:'white', 
        alignContent:'center', 
        textAlign:'center',
        fontSize:30
    }
});

export default Loading

