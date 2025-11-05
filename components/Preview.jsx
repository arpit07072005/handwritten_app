import { Text, View, Pressable, Image, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from '../css/preview.js';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import { useState } from 'react';
import axios from 'axios';
import * as FileSystem from 'expo-file-system/legacy';
import * as Sharing from 'expo-sharing';
import { encode } from 'base-64';

if (typeof btoa === 'undefined') {
  global.btoa = encode;
}


function Preview({ navigation, route }) {
  const { imageUriForPreview, imageUriForSharing, originalData } = route.params;

  const [isPdfLoading, setIsPdfLoading] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);

  const handleShareImage = async () => {
    if (isImageLoading) return;
    setIsImageLoading(true);

    try {
      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(imageUriForSharing, { // <-- FIX: Clean URI use karo
          mimeType: 'image/png',
          dialogTitle: 'Share Image',
        });
      }
    } catch (error) {
      console.error("Image share error:", error);
      Alert.alert('Error', 'Image share nahi kar paaye.');
    } finally {
      setIsImageLoading(false);
    }
  };

  const handleSavePdf = async () => {
    if (isPdfLoading) return;
    setIsPdfLoading(true);

    try {
      const response = await axios.post("https://handwritten-app-backend.onrender.com/api/generatepdf", originalData,
        {
          responseType: 'text'
        }
      );
      const base64Data = response.data;

      const uniqueFilename = `handwriting_${new Date().getTime()}.pdf`;
      const pdfUri = FileSystem.cacheDirectory + uniqueFilename;

      await FileSystem.writeAsStringAsync(pdfUri, base64Data, {
        encoding: "base64",
      });
      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(pdfUri, {
          mimeType: 'application/pdf',
          dialogTitle: 'Share PDF Document',
        });
      }

    } catch (error) {
      console.error('PDF generate error:', error);
      Alert.alert('Error', 'PDF nahi bana paaye. Server check karein.');
    } finally {
      setIsPdfLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.headtext}>Document Preview <FontAwesome6 name="pencil" size={24} color="#333333" /></Text>
        </View>
        <Pressable style={styles.back} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={24} color="black" />
          <Text style={styles.backtext}>Back</Text>
        </Pressable>
        <View style={styles.preimg}>
          {imageUriForPreview ? (
            <Image
              source={{ uri: imageUriForPreview }}
              style={{ width: '100%', height: '100%' }}
              resizeMode="contain"
            />
          ) : (
            <Text>Loading preview...</Text>
          )}
        </View>
        <View style={styles.buttons}>
          <View>
            <Pressable style={styles.pdf} onPress={handleSavePdf} disabled={isPdfLoading}>
              <FontAwesome6 name="file-pdf" size={24} color="#ADD8E6" />
              <Text>{isPdfLoading ? 'Saving...' : 'Save as PDF'}</Text>
            </Pressable>
          </View>
          <View>
            <Pressable style={[styles.pdf, styles.image]} onPress={handleShareImage} disabled={isImageLoading}>
              <Entypo name="image" size={24} color="#fdffff" />
              <Text style={styles.colortext}>{isImageLoading ? 'Exporting...' : 'Export as Image'}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Preview;