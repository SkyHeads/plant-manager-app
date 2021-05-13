import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

const PlantSelect: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />

        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subTitle}>você quer colocar sua planta?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15,
  },
  subTitle: {
    fontSize: 17,
    lineHeight: 20,
    fontFamily: fonts.text,
    color: colors.heading,
  },
  header: {
    paddingHorizontal: 30,
  },
});

export default PlantSelect;
