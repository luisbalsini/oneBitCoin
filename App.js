import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView, Platform } from 'react-native';

// import CurrentPrice from './src/components/CurrentPrice/';
// import HistoryGraphic from './src/components/HistoryGraphic';
import QuotationsList from './src/components/QuotationsList';

function addZero (number) {
  if (number <= 9) {
    return "0" + number
  }

  return number
}

function url (qtdDays) {

  const date = new Date();
  const listLastDays = qtdDays;
  
  const end_date = `${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDate())}`;
  date.setDate(date.getDate() - listLastDays)
  const start_date = `${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDate())}`;
  return `http://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`;
}

async function getListCoins (url) {

  let response = await fetch(url);
  let returnApi = await response.json();
  let selectListQuotations = returnApi.bpi;

  const queryCoinsList = Object.keys(selectListQuotations).map((key) => {
    return {
      data: key.split("-").reverse().join("/"),
      value: selectListQuotations[key]
    }
  })
  return queryCoinsList.reverse();
}

async function getPriceCoinsGraphic (url) {

  let responseGraphic = await fetch(url);
  let returnApiGraphic = await responseGraphic.json();
  let selectListQuotationsGraphic = returnApiGraphic.bpi;

  const queryCoinsListGraphic = Object.keys(selectListQuotationsGraphic).map((key) => {
    return selectListQuotationsGraphic[key]
  })
  return queryCoinsListGraphic;
}

export default function App() {

  const [coinsList, setCoinsList] = useState([]);
  const [coinsGraphicList, setCoinsGraphicList] = useState([0]);
  const [days, setDays] = useState(365);
  const [updateData, setUpdateData] = useState(true);
  const [price, setPrice] = useState(0);

  function updateDay(number) {
    setDays(number);
    setUpdateData(true);
  }

  function getPriceCotation () {
    setPrice(coinsGraphicList.pop())
  }

  useEffect(() => {
     
    getListCoins(url(days)).then((data) => {
      setCoinsList(data)
    })

    getPriceCoinsGraphic(url(days)).then((dataGraphic) => {
      setCoinsGraphicList(dataGraphic)
    })

    getPriceCotation()
    
    if (updateData) {
      setUpdateData(false)
    }

  }, [updateData]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#F50d41"
        barStyle="dark-content"
      />
      {/* <CurrentPrice lastCotation={price} /> */}
      {/* <HistoryGraphic infoDataGraphic={coinsGraphicList} /> */}
      <QuotationsList filterDay={updateDay} listTransaction={coinsList} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 40 : 0
  },
});
