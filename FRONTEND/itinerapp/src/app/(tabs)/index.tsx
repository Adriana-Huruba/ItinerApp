import { use, useState } from 'react';
import { Platform, View, StyleSheet, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ImageViewer from '@/components/image-viewer';
import Button from '@/components/button';
import * as ImagePicker from 'expo-image-picker';


const PlaceholderImage = require('@/assets/images/background.png');

const mockTrips =[
  { id: '1', title: 'City Break Rome', date: '15 Dec 2026 - 18 Dec 2026', status: 'Coming soon' },
  { id: '2', title: 'Prague', date: '10 Jan 2027 - 17 Jan 2027', status: 'Coming soon' },
  { id: '3', title: 'Greece', date: '12 Aug 2026 - 20 Aug 2026', status: 'Past' },
]

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);

  const renderTripCard= ({item}: {item: any}) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDate}>{item.date}</Text>
      <Text style={styles.cardStatus}>{item.status}</Text>
    </View>
  );

  const pickImageAsync = async() => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true, //alows cropping the photo on Andr & Ios
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image!');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={mockTrips}
          keyExtractor={(item) => item.id}
          renderItem={renderTripCard}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* Will be used for creating an vaction */}
      <View style={styles.imageContainer}> 
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      {showAppOptions ? (<View/>) : 
      (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: Platform.select({ web: 96, default: 20 }),
  },
  card:{
    backgroundColor: '#33383d', 
    padding: 20,
    borderRadius: 15,
    marginTop: 15,
  },
  cardTitle: {
    color: '#ffd33d',
    fontSize: 22,
    fontWeight: 'bold',
  },
  cardDate:{
    color: '#fff',
    fontSize: 16,
    marginTop: 8,
  },
  cardStatus:{
    color: '#aaa',
    fontSize: 14,
    marginTop: 5,
    fontStyle: 'italic',
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  }
});
