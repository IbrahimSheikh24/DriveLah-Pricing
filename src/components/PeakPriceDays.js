import React from 'react';
import { View, Text, FlatList, TouchableWithoutFeedback, Dimensions } from 'react-native';
import Color from '../assets/colors';
import {textStyle, pricingStyle} from '../assets/styles';

const PeakPriceDays = ({peakPriceDays, onPeakDayPress}) => {
    _renderItem = ({index, item}) => {
        let width = (Dimensions.get("screen").width -90)/7  // 90 is the margin(used in parent 30) and padding as (7*(5+5))-10 used in this component.
        return(
            <TouchableWithoutFeedback 
            onPress = {()=> {
                onPeakDayPress(index)}
            }
            >
                <View style = {{width: width, height: width, borderRadius: width/2, backgroundColor: item.isSelected ? Color.APP_COLOR: Color.L_BLUE, marginStart: (index == 0 ? 0 : 5), marginEnd: (index == 6 ? 0 : 5), justifyContent: 'center', alignItems: 'center'}}>
                    <Text style = {[textStyle.lAppColor, { color: item.isSelected ? Color.WHITE : Color.D_BLUE}]}>{item.day}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    return(
        <View style = {pricingStyle.leftTopSpacing}>
            <Text style = {textStyle.mAppColor}>Peak Price Days</Text>
            <FlatList
                style = {{marginTop: 10}}
                data = {peakPriceDays}
                extraData = {peakPriceDays}
                keyExtractor={(item, index) => index.toString()}
                horizontal = {true}
                renderItem = {_renderItem}
            />
        </View>
    )
}

export default React.memo(PeakPriceDays);   
// only React.memo is not sufficient to stop rerendering of this component even props are not 
// changing, because we are passing one callback as second argument of props from parent component 
// and each time a new callback method is created and passed to this component which leads to 
// re-render of this component. 
// To overcome this issue, useCallback is used to memoize the callback, that function will not change 
// on every render unless the value passed in dependency changes.