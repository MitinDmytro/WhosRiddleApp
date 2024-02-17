import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function NotificationsHeader() {
  return (
    <View style={[styles.width50, styles.height100]}>
        <TouchableOpacity style={styles.starIconContainer}>
            <LinearGradient 
                colors={["#F8B469", "#FF876D"]}
                locations={[0, 1]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }} style={[styles.width100, styles.rowDirection, styles.height100, styles.basicRadius, styles.alignCenter]}>
                <Image source={require(`../assets/star-icon.png`)} resizeMode='center' style={[styles.starIconImage, styles.alignCenter]}/>
                <Text style={styles.starButtonText}>954</Text>
            </LinearGradient>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    width50: {
        width: "50%"
    },
    height100: {
        height: "100%"
    },
    starIconContainer: {
        width: "38%"
    },
    width100: {
        width: "100%"
    },
    rowDirection: {
        flexDirection: "row"
    },
    basicRadius: {
        borderRadius: 14
    },
    alignCenter: {
        justifyContent: "center", 
        alignItems: "center"
    },
    starIconImage: {
        width: "25%",
        marginRight: "7%"
    },
    starButtonText: {
        fontFamily: "PoppinsSemiBold",
        fontSize: 11,
        color: "#FFFFFF"
    }
});

export default NotificationsHeader;