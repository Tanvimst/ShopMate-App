//IMPORT react
import React from "react";
//IMPORT components we will use
import { View, Text, Button, Image, StyleSheet } from "react-native";
//Import Use Naviagation Hook
import { useNavigation } from '@react-navigation/native';

//CREATE Landing function
function Landing() {
    //CREATE the page navigation hook to track navigation state
    const pageNavigation = useNavigation();

    //RETURN the content
    return (
        //CREATE a container to hold content
        <View style={styles.container}>
            {/* CREATE the image logo */}
            <Image style={styles.logoStyle} source={require('../../assets/projectImages/pirateparrot.png')} />
            {/* TEXT element for heading */}
            <Text style={styles.textStyle}>Shopmate App</Text>
            
            {/* CREATE a container for Buttons */}
            <View style={styles.buttonContainer}>
                {/* CREATE button for Log In - navigates to the sign in page*/}
                <Button color='#0f3d3d' title="LOG IN" onPress={() => pageNavigation.navigate("SignInPage")} />
                {/* ADDING a space between the buttons */}
                <View style={styles.spaceStyle}></View>
                {/* CREATE button for Registration - navigates to the registration page*/}
                <Button color='#0f3d3d' title="REGISTER" onPress={() => pageNavigation.navigate("RegisterPage")} />
                {/* END Button Container */}
            </View>
            {/* END Content Container */}
        </View>
        //END return
    );
    //END Landing Function
}

//CREATE styles
const styles = StyleSheet.create({
    //Start Container Styles
    container: {
        //Flex to Screen
        flex: 1,
        //Background color
        backgroundColor: '#d6f5f5',
        //Centers whole ele
        alignItems: 'center',
        //Centers children
        justifyContent: 'center',
        //END Container Style
    },
    //Start Logo Styles
    logoStyle: {
        //Image Height
        height: 250,
        //Image Width
        width: 250,
        //Resize the Image
        resizeMode: 'contain',
        //Adding space at the bottom
        bottom: 35,
        //END Logo Container
    },
    //Start Styles for Text
    textStyle: {
        //Make it Bold
        fontWeight: 'bold',
        //Color for the text
        color: '#0f3d3d',
        //Text size
        fontSize: 35,
        //Adding Space at the Bottom
        bottom: 10,
        //END Text Style
    },
    //Start Styles for Buttons
    buttonContainer: {
        //Button Width
        width: '90%',
    },
    //Start Styles for Space between Buttons
    spaceStyle: {
        //Width of 10
        width: 10,
        //Height of 10
        height: 10,
    },
    //END Styles
});

//EXPORT Landing
export default Landing;