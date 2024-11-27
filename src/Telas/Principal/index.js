import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Principal({ navigation }) {
  return (
    <View style={styles.container}>


      <Text style={styles.Texto}> RedLine </Text>
<Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>



      <Button
        title="Acessar"
        onPress={() => navigation.navigate("Tela1")}>
      </Button>

      <Text>

      </Text>

    </View>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  Texto: {
    color: '#de162a',
    borderRadius: 25,
    borderColor:'',
    fontStyle:'italic',
    backgroundColor: '#faf7f8',
    fontSize: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

});