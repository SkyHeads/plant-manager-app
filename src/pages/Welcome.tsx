import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  // Image,
  // TouchableOpacity,
  // Dimensions,
  SafeAreaView,
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

const Welcome: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {'\n'}
          suas plantas de {'\n'}
          forma fácil
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
    lineHeight: 34,
    fontFamily: fonts.heading,
  },
});

export default Welcome;
