import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>News</Text>
        </View>

        <View style={styles.border}>
          <Image style={styles.img} source={require('./image/Bulls.png')} />
          <Text style={styles.head}>Bulls Exit BitMEX Bitcoin Futures Market</Text>
          <Text style={styles.parag}>Since the announcement from U.S regulators, BitMEX has witnessed an outflow of more than 40,000 bitcoins, currebtly worth more than $422 million.</Text>
        </View>

        <View style={styles.border}>
          <Image style={styles.img} source={require('./image/Coinbase.png')} />
          <Text style={styles.head}>Coinbase customers can now dodge bank</Text>
          <Text style={styles.parag}>New update from Coinbase quickens the transmutation of crypto into fiat.Coinbase has unveiled a faster way for its customers to move digital currencies out of crypto and into their bank accounts.</Text>
        </View>

        <View style={styles.border}>
          <Image style={styles.img} source={require('./image/Hacker.png')} />
          <Text style={styles.head}>Hacker stole 336 BTC from Crypto exchange Cashaa</Text>
          <Text style={styles.parag}>Cryptocurrency exchange Cashaa said hackers took 336 bitcoin from one of its wallets. The company has stopped all crypto-related transactions.</Text>
        </View>
      </View>
    </ScrollView>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: "#f5f5f5",
  },
  header: {
    padding: 10,
  },
  text: {
    color: "black",
    fontSize: 40,
    fontWeight: "700",
  },
  head: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "justify",
    padding: 5,
  },
  border: {
    borderWidth: 2,
    borderColor: "#c0c0c0",
    borderRadius: 10,
    marginTop: 10,
  },
  parag: {
    textAlign: "justify",
    padding: 5,
  },
  img: {
    width: 370,
    height: 230,
    borderRadius: 10,
    margin: 10,
  }
});