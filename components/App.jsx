import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useState } from 'react';
import { Pressable, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../css/home.js';
import * as DocumentPicker from 'expo-document-picker';
import axios from "axios";
import * as FileSystem from 'expo-file-system/legacy';
import { encode } from 'base-64';
if (typeof btoa === 'undefined') {
  global.btoa = encode;
}
export default function App({ navigation }) {
  const [text, setText] = useState('');
  const [style, setStyle] = useState('');
  const [color, setColor] = useState('');
  const [background, setBackground] = useState('plane');
  const [planetext, setPlanetext] = useState(true);
  const [file, setFile] = useState();

  const handlefile = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: ['text/plain'],
    });

    if (result.assets && result.assets.length > 0) {
      const response = result.assets[0];
      setFile(response);

      try {
        const fileContent = await FileSystem.readAsStringAsync(response.uri);

        setText(fileContent);

      } catch (e) {
        console.error("File read karne mein error:", e);
        alert('File read nahi kar paaye.');
      }

    } else {
      console.log("No file selected");
    }
  };
  const handlegenerate = async () => {
    try {
      const postData = {
        text: text,
        fontStyle: style,
        penColor: color,
        background: planetext ? 'Plain' : 'Lined'
      };

      const response = await axios.post("https://handwritten-app-backend.onrender.com/api/generateimage",
        postData,
        {
          responseType: 'arraybuffer'
        }
      );

      const base64Data = btoa(
        new Uint8Array(response.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ''
        )
      );

      const fileUri = FileSystem.cacheDirectory + 'handwriting.png';
      await FileSystem.writeAsStringAsync(fileUri, base64Data, {
        encoding: "base64",
      });
      setText("");
      setStyle("");
      setColor("");
      setFile("");
      const cacheBustedUri = `${fileUri}?v=${new Date().getTime()}`;

      navigation.navigate('preview', {
        imageUriForPreview: cacheBustedUri,
        imageUriForSharing: fileUri,
        originalData: postData
      });
    } catch (error) {
      console.error("Generate error:", error);
      if (error.response) {
        console.error(error.response.data);
      } else {
        console.error("Network Error:", error.message);
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.headtext}>Text to Handwriting   <FontAwesome6 name="pencil" size={24} color="#333333" /></Text>
        </View>
        <TextInput style={styles.inputarea} placeholder='Type or Paste your code here...' multiline={true} numberOfLines={5} onChangeText={setText} value={text} />
        <Text style={styles.text}>Customize</Text>
        <View style={styles.fontstyle}>
          <Text style={styles.fontstyletext}> Font Style </Text>
          <View style={styles.fontstylecontainer}>
            {['Kalam', 'Great Vibes', 'Indie Flower'].map(font => (
              <TouchableOpacity
                key={font}
                onPress={() => setStyle(font)}
                style={[
                  styles.fontchild,
                  style === font && styles.selectedfont
                ]}
              >
                <Text>{font}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.fontstyle}>
          <Text style={styles.fontstyletext}>Choose Pen Color </Text>
          <View style={styles.fontstylecontainer}>
            {[
              { code: '#000000', style: styles.color1 },
              { code: '#00539C', style: styles.color2 },
              { code: '#D40000', style: styles.color3 },
              { code: '#056608', style: styles.color4 },
              { code: '#6A0DAD', style: styles.color5 },
              { code: '#704214', style: styles.color6 },
            ].map((c) => (
              <TouchableOpacity key={c.code} onPress={() => setColor(c.code)}>
                <View style={[styles.color, c.style, color === c.code && styles.selectedcolor]}>
                  <Text style={styles.colortext}>{c.code}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.fontstyle}>
          <Text style={styles.fontstyletext}>Paper Background </Text>
          <View style={styles.fontstylecontainer}>
            <View><FontAwesome5 name="file" size={30} color="#4682B4" /></View>

            <Switch value={planetext} onValueChange={() => setPlanetext(!planetext)}></Switch>
            <View><FontAwesome5 name="file-alt" size={30} color="#4682B4" /></View>
            <Switch value={!planetext} onValueChange={() => setPlanetext(!planetext)}></Switch>
          </View>
        </View>
        <View style={styles.sumbitcontainer}>
          <View>
            <Pressable style={styles.submit} onPress={handlefile}>
              <AntDesign name="cloud-upload" size={28} color="#ADD8E6" />
              <Text style={styles.filename} numberOfLines={2}>{file ? file.name : "Upload .txt File"}</Text>
            </Pressable>
          </View>
          <Pressable style={[styles.submit, styles.generate]} onPress={handlegenerate}>
            <Text style={{
              fontSize: 16,
              color: "white"
            }}>Generate Document</Text>
          </Pressable>
          <View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
