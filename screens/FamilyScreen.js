// /FamilyScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FamilyScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Family Services</Text>
      <Text>Nearby Parking</Text>
      <Text>CY Parking</Text>
      <Text>Car Wash</Text>
      <Text>Warranty</Text>
      <Text>Nicosia</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FamilyScreen;