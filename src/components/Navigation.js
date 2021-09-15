import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import Color from '../assets/colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { pricingStyle, textStyle } from '../assets/styles';

const Navigation = () => {
    return(
        <View style = {pricingStyle.navigationContainer}>
            <TouchableWithoutFeedback>
                <View style = {pricingStyle.backArrowContainer}>
                    <FontAwesome5
                        name = "arrow-left"
                        size = {24}
                        color = {Color.APP_COLOR}
                    />
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <View style = {pricingStyle.nextButtonStyle}>
                    <Text style = {textStyle.lWhiteBold}>Next</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}
export default Navigation;