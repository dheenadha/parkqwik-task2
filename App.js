import React from 'react';
import { useRef, useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, Image, } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';



const slides = [
  {
    id: '1',
    title: 'Recharge FASTag',
    subtitle: 'Get exciting prizes',
    buttonText: 'Recharge Now',
    image: 'https://your-image-url.com/fastag.png', // Replace with actual image URL
  },
  {
    id: '2',
    title: 'Save on Fuel',
    subtitle: 'Exclusive discounts on petrol & diesel',
    buttonText: 'Claim Now',
    image: 'https://your-image-url.com/fuel.png',
  },
  {
    id: '3',
    title: 'Toll Cashback',
    subtitle: 'Get cashback on every toll payment',
    buttonText: 'Get Cashback',
    image: 'https://your-image-url.com/cashback.png',
  },
];
const SlideItem = ({ item }) => (
  <View style={styles.slide}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.subtitle}>{item.subtitle}</Text>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{item.buttonText}</Text>
    </TouchableOpacity>
    <Image source={{ uri: item.image }} style={styles.image} />
  </View>
);




const App = () => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };
  return (
    <ScrollView style={styles.container}>
      
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.addVehicleButton}>
          <Ionicons name="car-outline" size={20} color="#fff" />
          <Text style={styles.addVehicleText}>+ Add Vehicle</Text>
        </TouchableOpacity>
        <View style={styles.headerIcons}>
          <Ionicons name="notifications-outline" size={24} color="#fff" style={styles.icon} />
          <Ionicons name="chatbubble-ellipses-outline" size={24} color="#fff" style={styles.icon} />
          <Ionicons name="person-outline" size={24} color="#fff" />
        </View>
      </View>

      {/* Services Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Services</Text>
        <View style={styles.grid}>
          {[
            { icon: 'location', title: 'Nearby Parking' },
            { icon: 'car', title: 'EV Parking' },
            { icon: 'water', title: 'Car Wash' },
            { icon: 'shield-checkmark', title: 'Vehicle Insurance' },
            { icon: 'help-circle', title: 'Road Assistance' },
            { icon: 'cash', title: 'Pay Challan' },
            { icon: 'construct', title: 'Toll Estimator' },
            { icon: 'key', title: 'Valet Parking' }
          ].map((item, index) => (
            <TouchableOpacity key={index} style={styles.iconBox}>
              <Ionicons name={item.icon} size={30} color="#4CAF50" />
              <Text style={styles.iconText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

      </View>

      {/* FASTag Recharge Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>FASTag Recharge</Text>
        <Text style={styles.subText}>Get up to 100% cashback on first 3 FASTag Recharge</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Add vehicle or chassis number" />
          <TouchableOpacity style={styles.rechargeButton}>
            <Text style={styles.rechargeButtonText}>Recharge</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Others Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Others</Text>
        <View style={styles.grid}>
          {[
            { icon: 'bicycle', title: 'Rentout Helmet' },
            { icon: 'flame', title: 'Fuel Price' },
            { icon: 'cart', title: 'Shop Here' },
            { icon: 'car', title: 'My Vehicles' }
          ].map((item, index) => (
            <TouchableOpacity key={index} style={styles.iconBox}>
              <Ionicons name={item.icon} size={30} color="#4CAF50" />
              <Text style={styles.iconText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Deals Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Deals For You</Text>
        <View style={styles.dealContainer}>
          <TouchableOpacity style={styles.dealBox}>
            <Text style={styles.dealText}>Recharge FASTag & Get petrol worth ₹33</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.dealBox, styles.dealGreen]}>
            <Text style={styles.dealText}>Get 25% off on your first car wash</Text>
          </TouchableOpacity>
        </View>
      </View>
      

      {/* Premium Plans */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Premium Plans</Text>
        <View style={styles.dealContainer}>
          <TouchableOpacity style={[styles.dealBox, styles.dealGreen]}>
            <Text style={styles.dealText}>Monthly Parking</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.dealBox, styles.dealDarkGreen]}>
            <Text style={styles.dealText}>Elite Car Wash</Text>
          </TouchableOpacity>
        </View>

      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  slide: {
    width:15,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  buttonText: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 80,
    marginTop: 10,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#fff',
    width: 12,
    height: 12,
  },

  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addVehicleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  addVehicleText: {
    color: '#fff',
    marginLeft: 6,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 12,
  },
  section: {
    padding: 15,
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subText: {
    color: '#777',
    marginBottom: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  iconBox: {
    width: '22%',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    marginVertical: 5,
  },
  iconText: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 9,
    backgroundColor: '#E8E8E8',
    borderRadius: 5,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
  },
  rechargeButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  rechargeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  dealContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dealBox: {
    width: '48%',
    padding: 15,
    backgroundColor: '#1E90FF',
    borderRadius: 8,
  },
  dealGreen: {
    backgroundColor: '#4CAF50',
  },
  dealDarkGreen: {
    backgroundColor: '#2E7D32',
  },
  dealText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
});

export default App;