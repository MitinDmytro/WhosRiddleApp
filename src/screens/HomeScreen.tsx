import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import NotificationsHeader from '../components/NotificationsHeader';

function HomeScreen(): React.JSX.Element {
  const navigation = useNavigation();

  return (
    <View style={styles.height100}>
      <LinearGradient 
        colors={["#F0F2FF", "#E7EBFF"]}
        locations={[0, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.flex, styles.marginsLinearGradient]}>
          <View style={[styles.rowDirection, styles.headerContainer]}>
            <NotificationsHeader />

            <View style={[styles.rowDirection, styles.width50, styles.justifyContentEnd]}>
              <View style={[styles.height100, styles.bellContainer]}>
                <TouchableOpacity style={[styles.width100,  styles.height100, styles.basicRadius, styles.alignCenter, { backgroundColor: "#F8F9FD"}]}>
                  <ImageBackground source={require(`../assets/bell-icon.png`)} resizeMode='center' style={[styles.width100, styles.height100]}>
                    <View style={[styles.absolutePosition, styles.alignItemsEnd, styles.justifyContentStart]}>
                      <View style={[styles.width50, styles.basicRadius, {backgroundColor: "#E75AC8", bottom: "25%"}]}>
                        <Text style={[styles.textAlign, styles.whiteText, styles.notificationCounterText]}>2</Text>
                      </View>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              </View>

              <View style={[ styles.height100, styles.lampContainer]}>
                <TouchableOpacity style={[styles.width100, styles.height100, styles.basicRadius, styles.alignCenter, { backgroundColor: "#F8F9FD"}]}>
                    <ImageBackground source={require(`../assets/lamp-icon.png`)} resizeMode='center' style={[styles.width100, styles.height100]}>
                      <View style={[styles.absolutePosition, styles.alignItemsEnd, styles.justifyContentStart]}>
                        <View style={[styles.width50, styles.basicRadius, {backgroundColor: "#7DCB44", bottom: "25%"}]}>
                          <Text style={[styles.textAlign, styles.whiteText, styles.notificationCounterText]}>5</Text>
                        </View>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.questionContainer}>
            <TouchableOpacity onPress={()=> navigation.navigate('Leaderboard')}> 
              <ImageBackground source={require(`../assets/question-mark-transparent.png`)} resizeMode='stretch' style={[styles.width100,  styles.height100, styles.imageBackgroundQuestion]}>
                <View style={[styles.absolutePosition, styles.justifyContentStart, styles.questionSubContainer]}>
                  <Text style={styles.questionTitle}>Weekly{"\n"}Riddle{"\n"}</Text>
                  <Text style={styles.questionDescriptionText}>Riddles you need to {"\n"}solve weekly</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>

          <View style={[styles.rowDirection, styles.expirationDaysContainer]}>
            <View style={[styles.height100, styles.dayContainer]}>
            <TouchableOpacity>
              <ImageBackground source={require(`../assets/three-transparent.png`)} resizeMode='stretch' style={[styles.width100, styles.height100, {  bottom: "5%"}]}>
                <View style={[styles.absolutePosition, styles.justifyContentStart, styles.expirationDaysSubContainer]}>
                  <Text style={styles.boldTitle}>3 Days{"\n"}Exp. Riddles{"\n"}</Text>
                  <Text style={styles.descriptionText}>3 days {"\n"}for solving</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            </View>
            <View style={[ styles.height100, styles.dayContainer]}>
              <TouchableOpacity>
                <ImageBackground source={require(`../assets/one-transparent.png`)} resizeMode='stretch' style={[styles.width100, styles.height100, { bottom: "5%"}]}>
                  <View style={[styles.absolutePosition, styles.justifyContentStart, styles.expirationDaysSubContainer]}>
                    <Text style={styles.boldTitle}>1 Days{"\n"}Exp. Riddles{"\n"}</Text>
                    <Text style={styles.descriptionText}>1 days {"\n"}for solving</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.brandContainer}>
            <TouchableOpacity>
              <ImageBackground source={require(`../assets/brand-transparent.png`)} resizeMode='stretch' style={[styles.width100, styles.height100, styles.imageBackgroundContainer]}>
                <View style={[styles.absolutePosition, styles.textContainer]}>
                  <Text style={styles.brandTitle}>Special Brand{"\n"}Riddles</Text>
                  <Text style={styles.brandDescription}>Riddles related with {"\n"}popular brands{"\n"}such as{"\n"}</Text>
                  <View style={[styles.rowDirection, styles.height100]}>
                    <Image source={require(`../assets/nike-logo.png`)} resizeMode='contain' style={styles.logoImage}/>
                    <Image source={require(`../assets/mc-logo.png`)} resizeMode='contain' style={styles.logoImage}/>
                    <Image source={require(`../assets/lego-logo.png`)} resizeMode='contain' style={styles.logoImage}/>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>

      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  whiteText: {
    color: "#FFFFFF"
  },
  questionSubContainer: {
    alignItems: 'flex-start',
    paddingTop: "5.3%",
    paddingLeft: "7.2%"
  },
  imageBackgroundQuestion: {
    borderColor: "#FFFFFF",
    borderRadius: 37,
    borderWidth: 1
  },
  notificationCounterText: {
    fontSize: 11,
    fontFamily: "PoppinsSemiBold",

  },
  textAlign: {
    textAlign: "center"
  },
  questionDescriptionText: {
    fontSize: 12, 
    color: "#5F6F89", 
    fontFamily: "PoppinsMedium"
  },
  questionTitle: {
    fontSize: 24,
    color: "#3D444F",
    fontFamily: "PoppinsExtraBold"
  },
  starIconContainer: {
    width: "38%"
  },
  headerContainer: {
    height: "6%",
    justifyContent:"space-between"
  },
  descriptionText: {
    fontSize: 12,
    color: "#5F6F89",
    fontFamily: "PoppinsMedium"
  },
  boldTitle: {
    fontSize: 14,
    color: "#3D444F",
    fontFamily: "PoppinsExtraBold"
  },
  textContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: "4%",
    paddingLeft: "7.2%"
  },
  alignItemsEnd: {
    alignItems: "flex-end"
  },
  lampContainer: {
    width: "22%"
  },
  bellContainer: {
    width: "22%",
    marginRight: "7%"
  },
  imageBackgroundContainer: {
    borderColor: "#FFFFFF",
    borderRadius: 37,
    borderWidth: 1
  },
  logoImage: {
    width: "10%",
    height: "15%"
  },
  justifyContentStart: {
    justifyContent: 'flex-start'
  },
  justifyContentEnd: {
    justifyContent: "flex-end"
  },
  expirationDaysSubContainer: {
    alignItems: 'flex-start',
    paddingTop: "25%",
    paddingLeft: "7.2%"
  },
  alignCenter: {
    justifyContent: "center", 
    alignItems: "center"
  },
  brandDescription: {
    fontSize: 12, 
    color: "#5F6F89"
  },
  brandTitle: {
    fontSize: 16,
    color: "#3D444F",
    fontFamily: "PoppinsExtraBold"
  },
  absolutePosition: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  brandContainer: {
    marginTop: "4%",
    height: "30%",
    borderColor: "#FFFFFF"
  },
  dayContainer: {
    borderRadius: 37,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    width: "47.75%"
  },
  expirationDaysContainer: {
    marginTop: "4%",
    height: "26%",
    justifyContent: "space-between"
  },
  questionContainer: {
    marginTop: "6%",
    height: "29%"
  },
  basicRadius: {
    borderRadius: 14
  },
  width100: {
    width: "100%"
  },
  width50: {
    width: "50%"
  },
  height100: {
    height: "100%"
  },
  rowDirection: {
    flexDirection: "row"
  },
  flex: {
    flex: 1
  },
  marginsLinearGradient: {
    paddingTop: "5%",
    paddingRight: "10.7%",
    paddingBottom: "14%",
    paddingLeft: "5.8%"
  }
});

export default HomeScreen;