import { StyleSheet } from 'react-native';
import Color from '../colors';
import { tsParent as style } from './tsParent';


export const textStyle = StyleSheet.create({

    // App Color Style
    xsAppColor: { ...style.xs, color: Color.APP_COLOR },
    xsAppColorMedium: { ...style.xsMedium, color: Color.APP_COLOR },
    sAppColor: { ...style.s, color: Color.APP_COLOR },
    sAppColorMedium: { ...style.sMedium, color: Color.APP_COLOR },
    sAppColorBold: { ...style.sBold, color: Color.APP_COLOR },
    mAppColor: { ...style.m, color: Color.APP_COLOR },
    mAppColorMedium: { ...style.mMedium, color: Color.APP_COLOR },
    mAppColorBold:{...style.mBold,color:Color.APP_COLOR},
    lAppColor: { ...style.l, color: Color.APP_COLOR },
    lAppColorMedium: { ...style.lMedium, color: Color.APP_COLOR },
    lAppColorBold: { ...style.lBold, color: Color.APP_COLOR },
    xlAppColor: { ...style.xl, color: Color.APP_COLOR },
    xlAppColorMedium: { ...style.xlMedium, color: Color.APP_COLOR },
    xlAppColorBold: { ...style.xlBold, color: Color.APP_COLOR },

    // Deep Blue Color Style
    xsDBlue: { ...style.xs, color: Color.D_BLUE },
    xsDBlueMedium: { ...style.xsMedium, color: Color.D_BLUE },
    sDBlue: { ...style.s, color: Color.D_BLUE },
    sDBlueMedium: { ...style.sMedium, color: Color.D_BLUE },
    sDBlueBold: { ...style.sBold, color: Color.D_BLUE },
    mDBlue: { ...style.m, color: Color.D_BLUE },
    mDBlueMedium: { ...style.mMedium, color: Color.D_BLUE },
    mDBlueBold:{...style.mBold,color:Color.D_BLUE},
    lDBlue: { ...style.l, color: Color.D_BLUE },
    lDBlueMedium: { ...style.lMedium, color: Color.D_BLUE },
    lDBlueBold: { ...style.lBold, color: Color.D_BLUE },
    xlDBlue: { ...style.xl, color: Color.D_BLUE },
    xlDBlueMedium: { ...style.xlMedium, color: Color.D_BLUE },
    xlDBlueBold: { ...style.xlBold, color: Color.D_BLUE },

    // White Color Style
    xsWhite: { ...style.xs, color: Color.WHITE },
    xsWhiteMedium: { ...style.xsMedium, color: Color.WHITE },
    sWhite: { ...style.s, color: Color.WHITE },
    sWhiteMedium: { ...style.sMedium, color: Color.WHITE },
    sWhiteBold: { ...style.sBold, color: Color.WHITE },
    mWhite: { ...style.m, color: Color.WHITE },
    mWhiteMedium: { ...style.mMedium, color: Color.WHITE },
    mWhiteBold:{...style.mBold,color:Color.WHITE},
    lWhite: { ...style.l, color: Color.WHITE },
    lWhiteMedium: { ...style.lMedium, color: Color.WHITE },
    lWhiteBold: { ...style.lBold, color: Color.WHITE },
    xlWhite: { ...style.xl, color: Color.WHITE },
    xlWhiteMedium: { ...style.xlMedium, color: Color.WHITE },
    xlWhiteBold: { ...style.xlBold, color: Color.WHITE },

    // Yellow Color Style    
    lYellow: { ...style.l, color: Color.YELLOW },
    lYellowMedium: { ...style.lMedium, color: Color.YELLOW },
    lYellowBold: { ...style.lBold, color: Color.YELLOW },
    xlYellow: { ...style.xl, color: Color.YELLOW },
    xlYellowMedium: { ...style.xlMedium, color: Color.YELLOW },
    xlYellowBold: { ...style.xlBold, color: Color.YELLOW },

    // Light AppColor Style
    sLightAppColor: { ...style.s, color: Color.L_App_Color },
    lLightAppColoMedium: { ...style.lMedium, color: Color.L_App_Color },
    lLightAppColoBold: { ...style.lBold, color: Color.L_App_Color },
})