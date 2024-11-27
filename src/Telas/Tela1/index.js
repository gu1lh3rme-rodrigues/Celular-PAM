import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Tela1 ({navigation})
{
    return(
      <View style={styles.container}>
        <Text>Futebol</Text>
        <Button
        title="Ir para a Tela2"
        onPress={()=> navigation.navigate("Tela2")}
        >
        </Button>
        
        <Text>O</Text>
      </View>
    )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'justify'
  },
});
/*
Teste esse e corrija, de Guilherme do dia 21/11


import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function Tela1 ({navigation})
{
    return(
      <View style={styles.container}>
        <Text style={styles.Texto}>Login</Text>


        <TextInput
              style={styles.input}
              placeholder="Insira seu Email"
              value={email}
              onChangeText={(email) => setEmail(email)}
            />

<TextInput
              type="text"
              style={styles.input}
              placeholder="Insira um Senha"
              value={Senha}
              onChangeText={(Senha) => setSenha(Senha)}
            />
        <Button
        title="Ir para a Tela2"
        onPress={()=> navigation.navigate("Tela2")}
        >
        </Button>
        
        <Text>O</Text>
      </View>
    )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'justify'
  },
  Texto: {
    borderColor:'black',
    fontStyle:'italic',
    backgroundColor: 'red',
    fontSize: 50,
    justifyContent: 'center',
    alignItems: 'center',
  } ,
TextInput:{
backgroundColor:'white'
  }
}); */