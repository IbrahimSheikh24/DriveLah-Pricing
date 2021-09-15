import React from 'react';
import {View, Text} from 'react-native';
import Color from '../assets/colors';
import { textStyle, pricingStyle } from '../assets/styles';
import AntDesign from 'react-native-vector-icons/FontAwesome5';
import String from '../assets/string';

const Header = ({}) => {
    return(
        <View style = {pricingStyle.headerContainer}>
            <View style = {pricingStyle.flexRowTop8}>
                <View style = {pricingStyle.flex1Row}>
                    <Text style = {textStyle.xlWhiteMedium}>{String.pricing}</Text>
                    <AntDesign
                        style = {pricingStyle.headerArrowDown}
                        name = "chevron-down"
                        size = {16}
                        color = {Color.WHITE}
                    />
                </View>
                <Text style = {[textStyle.lYellowMedium, {textDecorationLine: 'underline'}]}>{String.save_and_exit}</Text>
            </View>
            <Text style = {[textStyle.mWhite, pricingStyle.top10Bottom20]}>{String.priceingHeader}</Text>
        </View>
    )
}

export default Header;