import * as React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import NotificationsHeader from '../components/NotificationsHeader';

function OpenWeeklyScreen(): React.JSX.Element {
  return (
    <View style={styles.height100}>
    <LinearGradient 
      colors={["#F0F2FF", "#E7EBFF"]}
      locations={[0, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.flex, styles.marginsLinearGradient]}>
        <View style={[styles.rowDirection, styles.spaceBetween, styles.headerContainer ]}>
          <NotificationsHeader />

          <View style={[styles.rowDirection, styles.width50, styles.justifyContentEnd]}>
            <View style={[ styles.height100, styles.bellContainer]}>
              <TouchableOpacity style={[styles.alignCenter, styles.width100, styles.height100, styles.basicRadius, { backgroundColor: "#F8F9FD"}]}>
                <ImageBackground source={require(`../assets/bell-icon.png`)} resizeMode='center' style={[styles.width100, styles.height100]}>
                  <View style={[styles.absolutePosition, styles.justifyContentStart, styles.alignItemsEnd]}>
                    <View style={[styles.basicRadius, styles.width50, {backgroundColor: "#E75AC8", bottom: "25%"}]}>
                      <Text style={[styles.textAlign, styles.whiteText, styles.notificationCounterText]}>2</Text>
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={[ styles.height100, styles.lampContainer]}>
              <TouchableOpacity style={[styles.alignCenter, styles.width100, styles.height100, styles.basicRadius, { backgroundColor: "#F8F9FD"}]}>
                  <ImageBackground source={require(`../assets/lamp-icon.png`)} resizeMode='center' style={[styles.width100, styles.height100]}>
                    <View style={[styles.absolutePosition, styles.justifyContentStart, styles.alignItemsEnd]}>
                      <View style={[styles.basicRadius, styles.width50, {backgroundColor: "#7DCB44", bottom: "25%"}]}>
                        <Text style={[styles.textAlign, styles.whiteText, styles.notificationCounterText]}>5</Text>
                      </View>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={[styles.rowDirection, styles.spaceBetween, styles.dateButtonContainer]}>
          <TouchableOpacity style={[styles.dateButton, styles.alignCenter, styles.activeBorderColor]}>
            <Text style={[styles.dateButtonText, styles.activeTextColor]}>Weekly</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.dateButton, styles.alignCenter, styles.inactiveBorderColor]}>
            <Text style={[styles.dateButtonText, styles.inactiveTextColor]}>3 days</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.dateButton, styles.alignCenter, styles.inactiveBorderColor]}>
            <Text style={[styles.dateButtonText, styles.inactiveTextColor]}>1 days</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.dateButton, styles.alignCenter, styles.inactiveBorderColor]}>
            <Text style={[styles.dateButtonText, styles.inactiveTextColor]}>Special</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.columnDirection, styles.textContainer]}>
          <Text style={styles.titleText}>Weekly Riddles{"\n"}</Text>
          <Text style={styles.descriptionText}>I can add to several hundred. But can’t subtract multiply or divide. Whatever I add to, it’s always in front of you but never behind. And the number I add to You can’t really hide!{"\n"}</Text>
          <Text style={styles.questionText}>Who am I?</Text>
        </View>

        <View style={[styles.rowDirection, styles.spaceBetween, styles.answerContainer]}>
          <TouchableOpacity style={styles.input}>
            <Text style={styles.inputTextColor}>Your Answer</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.rowDirection, styles.submitContainer ]}>
          <TouchableOpacity style={[styles.submitButton, styles.alignCenter]}>
            <Text style={[styles.buttonTextColor, styles.whiteText]}>Submit</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.alignCenter, styles.attemptsContainer]}>
          <Text style={styles.attemptsText}>5 attempts remaining</Text>
        </View>

    </LinearGradient>
  </View>
  )
}

const styles = StyleSheet.create({
  questionText: {
    fontSize: 16,
    fontFamily: "PoppinsBold",
    color: "#5F6F89"
  },
  descriptionText: {
    fontSize: 16, 
    fontFamily: "PoppinsRegular",
    color: "#5F6F89"
  },
  titleText: {
    fontSize: 24,
    fontFamily: "PoppinsExtraBold",
    color: "#3D444F"
  },
  alignItemsEnd: {
    alignItems: "flex-end"
  },
  headerContainer: {
    height: "6%"
  },
  justifyContentStart: {
    justifyContent: 'flex-start'
  },
  justifyContentEnd: {
    justifyContent: "flex-end"
  },
  bellContainer: {
    width: "22%",
    marginRight: "7%"
  },
  lampContainer: {
    width: "22%"
  },
  submitContainer: {
    height: "9%",
    marginTop: "5%"
  },
  attemptsContainer: {
    marginTop: "6%"
  },
  textContainer: {
    height: "42%",
    marginTop: "6%"
  },
  answerContainer: {
    height: "9%",
    marginTop: "5%"
  },
  dateButtonContainer: {
    height: "7%", 
    marginTop: "5%"
  },
  notificationCounterText: {
    fontSize: 11,
    fontFamily: "PoppinsSemiBold"
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
  absolutePosition: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  whiteText: {
    color: "#FFFFFF"
  },
  textAlign: {
    textAlign: "center"
  },
  spaceBetween: {
    justifyContent: "space-between"
  },
  rowDirection: {
    flexDirection: "row"
  },
  columnDirection: {
    flexDirection: "column"
  },
  alignCenter: {
    justifyContent: "center", 
    alignItems: "center"
  },
  attemptsText: {
    color: "#5F6F89",
    fontSize: 12,
    fontFamily: "PoppinsMedium"
  },
  submitButton: {
    backgroundColor: "#8FD45B",
    width: "100%",
    borderRadius: 18
  },
  buttonTextColor: {
    fontSize: 14,
    fontFamily: "PoppinsBold"
  },
  inputTextColor: {
    fontSize: 14,
    fontFamily: "PoppinsRegular",
    color: "#5F6F89"
  },
  input: {
    width: "100%",
    backgroundColor: "#F1F3FF",
    borderRadius: 18,
    justifyContent: "center", 
    alignItems: "flex-start",
    paddingLeft: "6.5%",
    borderColor: "#FFFFFF",
    borderWidth: 1
  },
  dateButton: {
    backgroundColor: "#F4F5FD",
    width: "20%",
    borderWidth: 1, 
    borderRadius: 18
  },
  activeBorderColor: {
    borderColor: "#7ECC45"
  },
  inactiveBorderColor: {
    borderColor: "#F8F9FD"
  },
  activeTextColor: {
    color: "#7ECC45",
  },
  inactiveTextColor: {
    color: "#3D444F",
  },
  dateButtonText: {
    fontSize: 12,
    fontFamily: "PoppinsSemiBold"
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

export default OpenWeeklyScreen