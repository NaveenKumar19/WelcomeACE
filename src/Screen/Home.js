import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Button,
  ScrollView,
  InteractionManager,
  FlatList,
} from 'react-native';
import Card from './Card';
import CardSection from './CardSection'
import Dimensions from 'Dimensions';


 class Home extends Component {
   state = {
      names: [
         {'name': 'Naveen', 'id': 1},
         {'name': 'Vino', 'id': 2},
         {'name': 'Deepi', 'id': 3},
         {'name': 'Vicky', 'id': 4},
         {'name': 'Hari', 'id': 5},
         {'name': 'Laura', 'id': 6},
         {'name': 'John', 'id': 7},
         {'name': 'Debra', 'id': 8},
         {'name': 'Aron', 'id': 9},
         {'name': 'Ann', 'id': 10},
         {'name': 'Steve', 'id': 11},
         {'name': 'Olivia', 'id': 12}
      ],
      value:[
        {'name': 'Daniel', 'id': 5},
        {'name': 'Laura', 'id': 6},
        {'name': 'John', 'id': 7},
        {'name': 'Debra', 'id': 8},
        {'name': 'Aron', 'id': 9},
        {'name': 'Ann', 'id': 10},
      ]

   }

  render() {
    const {title}= this.props

    return (
      <View style={styles.fullContainer}>
      <ScrollView>
      <View style={styles.fullContainer}>
      <FlatList
        horizontal ={true}
        data={this.state.names}
        renderItem = {({item}) =>(
                       <View key = {item.id} style = {styles.item}>
                          <Text>{item.name}</Text>
                       </View>
                    )
        }
        keyExtractor = {(item,index) => (item.id)}
        />
        <FlatList
          horizontal ={true}
          data={this.state.names}
          renderItem = {({item}) =>(
                         <View key = {item.id} style = {styles.item}>
                            <Text>{item.name}</Text>
                         </View>
                      )
          }
          keyExtractor = {(item,index) => (item.id)}
          />
        <FlatList
          vertical ={true}
          data={this.state.names}
          numColumns={2}
          renderItem = {({item}) =>(
                         <View key = {item.id} style ={styles.card}>
                            <Text>{item.name}</Text>
                         </View>
                      )
          }
          keyExtractor = {(item,index) => (item.id)}
          />
        </View>
        <View>
        <Text>HAI</Text>
        </View>
        </ScrollView>
      </View>


    );
  }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({

  fullContainer:{
      flex: 1,
      margin:5
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:20,
  },
  welcome: {
    color: '#8BC34A',
  },
  item: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     padding: 30,
     margin: 2,
     borderColor: '#2a4944',
     borderWidth: 1,
     backgroundColor: '#d2f7f1'
  },
card: {
  backgroundColor: 'red',
  width: (DEVICE_WIDTH / 2) - 20,
  height: 200,
  marginLeft: 10,
  marginTop: 10
}

});

export default Home
