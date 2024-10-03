import { Text, SafeAreaView, StyleSheet, View, Image,Button,TouchableOpacity,handlePress } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <View>
      <View style={styles.body}>
        <Image
          source={require('./IMG_20231012_202545_535.jpg')}
          style={styles.image}
        />
        <View>
          <Text style={styles.text2}>Bikash Kumar Agrawal</Text>
          <Text style={styles.text3}>Bikash Kumar Agrawal</Text>
        </View>
      </View>
      <View style={styles.text}>
        <Text  style={styles.text}>
          "Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum."
        </Text>
      </View>
      <View>
      <Image source={require('./OIP.jpeg')}
      style={styles.image1}/>
      </View>
      
       <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Image
          source={require('./1')}
          style={styles.image2}
        />
        <Text>Like</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image
          source={require('./2')}
          style={styles.image2}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image
          source={require('./3')}
          style={styles.image2}
        />
      </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    margin: 5,
    height: 60,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    margin: 5,
    height: 50,
    width: 50,
    borderRadius: 40,
  },
  text2: {
    flex: 1,
    fontSize: 20,
  },
  text:{
    padding:10,
    fontSize:15,
  },
  image1:{
    height:200,
    width:335,
    borderRadius:20,
  },

  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection:'row',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
  },
  image2: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
 
});
