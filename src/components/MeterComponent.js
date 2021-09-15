import React from 'react';
import {View, Text} from 'react-native';
import Color from '../assets/colors';
import { pricingStyle, textStyle } from '../assets/styles';
import RNSpeedometer from 'react-native-speedometer';

const MeterComponent = ({criteriaCount}) => {

    const getCriteriaTitle = ()=> {
        if(criteriaCount > 3) {
            return "Good";
        } else if(criteriaCount > 1) {
            return "Average";
        } else {
            return "Low";
        }
    }
    return(
        <View style = {pricingStyle.meterContainer}>
            <View style = {pricingStyle.flexRowAlignCenter}>
                <RNSpeedometer
                    value={criteriaCount}
                    size={100}
                    minValue={0}
                    maxValue={5}
                    labels={[{ activeBarColor: Color.RED }, { activeBarColor: Color.RED }, { activeBarColor: Color.YELLOW }, { activeBarColor: Color.YELLOW }, { activeBarColor: Color.GREEN }, { activeBarColor: Color.GREEN },]}
                    labelWrapperStyle={pricingStyle.labelWrapperStyle}
                    innerCircleStyle={pricingStyle.innerCircleStyle}
                    outerCircleStyle={{marginTop: 2}}
                />
                <Text style={[textStyle.mDBlueMedium, {flex: 1, marginStart: 10}]}>{getCriteriaTitle()} Demand: 
                    <Text style={textStyle.mAppColor}> Based on your settings you are on your way to attract {getCriteriaTitle().toLowerCase()} level of demand.</Text>
                </Text>
            </View>
        </View>
    )
}

export default MeterComponent;