import React, { useState, useEffect, useCallback } from 'react';
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import Color from './src/assets/colors';
import String from './src/assets/string';
import PricingComponent from './src/components/PricingComponent';
import PeakPriceDays from './src/components/PeakPriceDays';
import { getPeakPriceDays } from './src/utils/Data';
import Divider from './src/components/common/Divider';
import LongTermPeakPrice from './src/components/LongTermPeakPrice';
import MeterComponent from './src/components/MeterComponent';
import Header from './src/components/Header';
import Navigation from './src/components/Navigation';

const App = () => {
  const [peakPriceDays, setPeakPriceDays] = useState(getPeakPriceDays())
  const [regularPrice, setRegularPrice] = useState(0);
  const [peakPrice, setPeakPrice] = useState(0);
  const [peakPriceToggle, setPeakPriceToggle] = useState(false);
  const [longTermToggle, setLongTermToggle] = useState(false);
  const [ffCriteriaCount, setFFCriteriaCount] = useState(0);

  useEffect(()=> {
    let count = 0;
    if(regularPrice >55 && regularPrice <70) {
      count++;
    }
    if(peakPrice >75 && peakPrice <90) {
      count++;
    }
    if(peakPriceToggle) {
      count++;
    }
    if(longTermToggle) {
      count++;
    }
    setFFCriteriaCount(count);
  }, [regularPrice, peakPrice, peakPriceToggle, longTermToggle])

  const onPeakDayPress = useCallback((index)=> {
    let peakDay = [...peakPriceDays];
    peakDay[index].isSelected = !peakDay[index].isSelected
    setPeakPriceDays(peakDay);
  }, [peakPriceDays])

  return (
    <SafeAreaView style = {{flex:1}}>
      <StatusBar 
        barStyle={'dark-content'} 
        backgroundColor={Color.APP_COLOR}
      />
      <Header/>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        keyboardShouldPersistTaps = 'always'
        keyboardDismissMode='on-drag'
        style = {{marginTop: 10, flex:1}}
        >
        <View>
          <PricingComponent
            headingText = {String.regular_price}
            priceDesc = {String.regular_pricing_desc}
            price = {regularPrice}
            setPrice = {setRegularPrice}
          />

          <PricingComponent
            headingText = {String.peak_price}
            priceDesc = {String.peak_price_desc}
            price = {peakPrice}
            setPrice = {setPeakPrice}
          />

          <PeakPriceDays
            peakPriceDays = {peakPriceDays}
            onPeakDayPress = {onPeakDayPress}
          />

          <Divider/>

          <LongTermPeakPrice
            title = {String.set_peak_price}
            description = {String.peak_price_description}
            isToggleOn = {peakPriceToggle}
            setTogglevalue = {setPeakPriceToggle}
          />

          <Divider/>

          <LongTermPeakPrice
            title = {String.long_term_rental}
            description = {String.long_term_description}
            isToggleOn = {longTermToggle}
            setTogglevalue = {setLongTermToggle}
            showLongTerm = {true}
            headingText = {String.long_term_rental_price}
            price = {"$1200"}
          />

          <Divider/>

          <View style = {{marginVertical: 20}}/>

        </View>
      </ScrollView>
      <MeterComponent
        criteriaCount = {ffCriteriaCount}
      />
      <Navigation />
    </SafeAreaView>
  );
};

export default App;
