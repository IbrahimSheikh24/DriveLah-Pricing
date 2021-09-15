import React from 'react';
import {View, Text} from 'react-native';
import DriveLahTextInput from '../components/common/DriveLahTextInput';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { textStyle, pricingStyle } from '../assets/styles';
import Color from '../assets/colors';
import String from '../assets/string';

const PricingComponent = ({headingText, priceDesc, price, setPrice}) => {
    return(
        <View style = {pricingStyle.leftTopSpacing}>
            <Text style = {textStyle.mAppColor}>{headingText}</Text>
            <DriveLahTextInput
                style = { pricingStyle.textInputContainer }
                inputTextStyle = {[textStyle.lDBlueMedium, pricingStyle.textInput]}
                handleChangeText = {price => setPrice(price)}
                keyboardType = 'number-pad'
                value = {price}
                showHint = {String.enter_price}
                showDollar = {true}
            />
            <View style = {pricingStyle.flexRowTop8}>
                <MaterialIcons
                    style = {{marginTop: 2}}
                    name = "info"
                    size = {18}
                    color = {Color.D_BLUE}
                />
                <Text style = {[textStyle.sAppColor, {marginStart: 5}]}>{priceDesc}</Text>
            </View>
        </View>
    )
}

export default React.memo(PricingComponent);