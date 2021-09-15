import React from 'react';
import { View, Text } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto';
import Color from '../assets/colors';
import String from '../assets/string';
import { pricingStyle, textStyle } from '../assets/styles';
import DriveLahTextInput from './common/DriveLahTextInput';

const LongTermPeakPrice = ({title, description, isToggleOn, setTogglevalue, showLongTerm, headingText, price}) => {
    return(
        <View style = {pricingStyle.leftTopSpacing}>
            <View style = {pricingStyle.flexRowAlignCenter}>
                <Text style = {[{flex: 1}, textStyle.lDBlueMedium]}>{title}</Text>
                <Fontisto onPress = {()=> {
                    setTogglevalue(!isToggleOn)
                }}
                    name = {isToggleOn ? "toggle-on" : "toggle-off"}
                    size = {40}
                    color = {isToggleOn ? Color.APP_COLOR : Color.L_GRAY}
                />
            </View>
            <Text style={textStyle.sAppColor}>{description}</Text>
            {showLongTerm &&
                <View style={{ marginVertical: 15 }}>
                    <Text style={textStyle.sLightAppColor}>{headingText}</Text>
                    <DriveLahTextInput
                        style={pricingStyle.longTermInputContainer}
                        inputTextStyle={[textStyle.lLightAppColoMedium, { marginHorizontal: 8 }]}
                        handleChangeText={()=>{}}
                        keyboardType='number-pad'
                        value={price}
                        showHint={String.enter_price}
                        editable={false}
                    />
                </View>
            }
        </View>
    )
}

export default React.memo(LongTermPeakPrice);