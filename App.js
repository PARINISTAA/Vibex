import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { API_BASE_URL } from './config';

export default function App() {
  const [farmers, setFarmers] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/farmers`)
      .then(res => res.json())
      .then(data => setFarmers(data))
      .catch(() => setFarmers([]));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>You to Us</Text>
      <Text style={styles.subtitle}>Independence Day Special 🇮🇳</Text>
      <Text style={styles.offer}>Freedom Box - 5% off for next 30 mins!</Text>
      <FlatList
        data={farmers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
      />
      <Button title="Checkout (COD)" onPress={() => alert('COD order placed!')} />
      <Text style={styles.footer}>API: {Constants.manifest.extra.apiBaseUrl}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#e76f00' },
  subtitle: { fontSize: 18, marginVertical: 10, color: '#138808' },
  offer: { fontSize: 16, marginBottom: 15, color: '#e76f00' },
  item: { padding: 10, fontSize: 18, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  footer: { marginTop: 20, fontSize: 10, color: '#999' }
});
