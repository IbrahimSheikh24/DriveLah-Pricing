import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, Keyboard } from 'react-native';
import Color from '../../assets/colors';
import { textStyle } from '../../assets/styles';

const DriveLahTextInput = ({style, inputTextStyle, handleChangeText, keyboardType, returnKeyType, value, showHint, editable=true, showDollar})=> {

    const [returnKType, setReturnKType] = useState('next')
    
    useEffect(() => {
        if(returnKeyType) {
            setReturnKType(returnKeyType)
        }
    }, [])
    
    return (
        <View style={style}>
            {showDollar && value ? <Text style = {[textStyle.lDBlueMedium, {alignSelf: 'center'}]}>$</Text> : null}
            <TextInput
                style={inputTextStyle}
                onChangeText={handleChangeText}
                keyboardType={keyboardType}
                returnKeyType={returnKType}
                value={value}
                placeholder={showHint}
                placeholderTextColor={Color.D_GRAY}
                blurOnSubmit={false}
                onSubmitEditing={() => Keyboard.dismiss()}
                textContentType={'none'}
                autoCapitalize={'none'}
                autoCorrect={false}
                editable={editable}
            />
        </View>
    )
}
export default DriveLahTextInput