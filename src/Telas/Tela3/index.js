import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Tela3 ({navigation})
{
    return(
      <View style={styles.container}>
        <Text>Tela3</Text>
        <Button
        title="Ir para a Principal"
        onPress={()=> navigation.navigate("Principal")}
        >
        </Button>
      </View>
    )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});