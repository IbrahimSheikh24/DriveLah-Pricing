import { StyleSheet } from 'react-native';
import Color from '../colors';

export const pricingStyle = StyleSheet.create({

    textInputContainer: {
        flexDirection: 'row', 
        borderColor: Color.D_GRAY, 
        borderWidth: 1, 
        borderRadius: 4, 
        marginTop: 5, 
        paddingVertical: 6, 
        paddingHorizontal: 10
    },
    textInput: {
        flex: 1,
        padding: 0
    },
    headerContainer: {
        padding: 15, 
        backgroundColor: Color.APP_COLOR, 
        borderBottomStartRadius: 24, 
        borderBottomEndRadius: 24, 
        borderWidth: 0
    },
    flexRowTop8: {
        flexDirection: 'row', 
        marginTop: 8
    },
    flex1Row: {
        flexDirection: 'row', 
        flex: 1
    },
    headerArrowDown: {
        marginStart: 10, 
        marginTop: 4
    },
    leftTopSpacing: {
        marginTop: 15, 
        marginHorizontal:15
    },
    top10Bottom20: {
        marginTop: 10, 
        marginBottom: 20
    },
    dividerStyle: {
        height: 1, 
        backgroundColor: Color.D_GRAY, 
        marginTop: 20
    },
    flexRowAlignCenter: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    longTermInputContainer: { 
        borderColor: Color.D_GRAY, 
        borderWidth: 1, 
        borderRadius: 4, 
        marginTop: 5 
    },
    meterContainer: {
        backgroundColor: Color.L_BLUE, 
        paddingHorizontal: 15, 
        paddingVertical: 10,
        shadowColor: Color.BLACK,
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowRadius: 3,
        shadowOpacity: 0.3,
        elevation: 2
        },
    innerCircleStyle: { 
        height: 45, 
        width: 90, 
        backgroundColor: Color.L_BLUE 
    },
    labelWrapperStyle: { 
        height: 0, 
        width: 0 
    },
    navigationContainer: {
        paddingHorizontal: 15, 
        paddingVertical: 10, 
        flexDirection: 'row'
    },
    backArrowContainer: {
        borderColor: Color.APP_COLOR, 
        borderRadius: 4, 
        borderWidth: 2, 
        alignItems: 'center', 
        padding: 10 
    },
    nextButtonStyle: {
        flex: 1, 
        backgroundColor: Color.APP_COLOR, 
        justifyContent: 'center',
        alignItems: 'center', 
        marginStart: 15, 
        borderRadius: 4
    }
})