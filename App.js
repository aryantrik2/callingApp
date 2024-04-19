import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, TextInput, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <View style={styles.logoContainer}>
            <Image
              source={require('./assets/logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
        />
      </View>
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>For you</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Trending</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Tv Shows</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Regional</Text>
        </TouchableOpacity>
      </View>
      {/* Add your other components here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'start',
    alignItems:'center'
  },
  logoContainer: {
    marginTop: 30,
    paddingHorizontal: 10,
    justifyContent:'start',


  },
  logo: {
    width: 130,
    height: 30,
  },
  searchBar: {
    width: '100%',

    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  input: {
    height: 30,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    height: 60,
    width: '100%',
    paddingHorizontal: 10,
  },
  menuItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});