import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import EnviromentButton from '../components/EnviromentButton';
import Header from '../components/Header';
import api from '../services/api';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnviromentsProps {
  key: string;
  title: string;
}

const PlantSelect: React.FC = () => {
  const [enviroments, setEnviroments] = useState<EnviromentsProps[]>([]);

  useEffect(() => {
    async function fetchEnviroment() {
      const { data } = await api.get('plants_environments');
      setEnviroments([
        {
          key: 'all',
          title: 'Todos',
        },
        ...data,
      ]);
    }

    fetchEnviroment();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />

        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subTitle}>você quer colocar sua planta?</Text>
      </View>
      <View>
        <FlatList
          keyExtractor={item => String(item.key)}
          data={enviroments}
          renderItem={({ item }) => <EnviromentButton title={item.title} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.enviromentList}
        />
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
    paddingHorizontal: 32,
  },
  enviromentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 28,
    marginVertical: 32,
    paddingRight: 32,
  },
});

export default PlantSelect;
