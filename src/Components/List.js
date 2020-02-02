import React, {Component} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
const Films_First = [
  {
    title: 'Star Wars: The Last Jedi',
    image: 'https://api.androidhive.info/json/movies/starwars.jpg',
    price: '₹ 160',
  },
  {
    title: 'Shape Of Water',
    image: 'https://api.androidhive.info/json/movies/shape_of_water.jpg',
    price: '₹ 130',
  },
  {
    title: 'Baahubali: The Conclusion',
    image: 'https://api.androidhive.info/json/movies/baahubali2.jpg',
    price: '₹ 210',
  },
  {
    title: 'Thor: The Ragnarok',
    image: 'https://api.androidhive.info/json/movies/thor_ragnarok.jpg',
    price: '₹ 170',
  },
  {
    title: 'Justice League',
    image: 'https://api.androidhive.info/json/movies/justice_league.jpg',
    price: '₹ 120',
  },
  {
    title: 'Coco',
    image: 'https://api.androidhive.info/json/movies/coco.jpg',
    price: '₹ 110',
  },
  {
    title: 'Jumanji: Welcome To The Jungle',
    image: 'https://api.androidhive.info/json/movies/jumanji.jpg',
    price: '₹ 120',
  },
  {
    title: 'Murder On The Orient Express',
    image: 'https://api.androidhive.info/json/movies/murder_on_express.jpg',
    price: '₹ 160',
  },
  {
    title: 'Spider-Man: Homecoming',
    image: 'https://api.androidhive.info/json/movies/spiderman_homecoming.jpg',
    price: '₹ 190',
  },
  {
    title: 'Ferdinand',
    image: 'https://api.androidhive.info/json/movies/ferdinand.jpg',
    price: '₹ 100',
  },
  {
    title: 'The Disaster Artist',
    image: 'https://api.androidhive.info/json/movies/disaster_artist.jpg',
    price: '₹ 90',
  },
  {
    title: 'Lady Bird',
    image: 'https://api.androidhive.info/json/movies/lady_bird.jpg',
    price: '₹ 80',
  },
];
const Films_Second = [
  {
    title: 'Thor: The Ragnarok',
    image: 'https://api.androidhive.info/json/movies/thor_ragnarok.jpg',
    price: '₹ 170',
  },
  {
    title: 'Justice League',
    image: 'https://api.androidhive.info/json/movies/justice_league.jpg',
    price: '₹ 120',
  },
  {
    title: 'Coco',
    image: 'https://api.androidhive.info/json/movies/coco.jpg',
    price: '₹ 110',
  },
  {
    title: 'Jumanji: Welcome To The Jungle',
    image: 'https://api.androidhive.info/json/movies/jumanji.jpg',
    price: '₹ 120',
  },
  {
    title: 'Murder On The Orient Express',
    image: 'https://api.androidhive.info/json/movies/murder_on_express.jpg',
    price: '₹ 160',
  },
  {
    title: 'Spider-Man: Homecoming',
    image: 'https://api.androidhive.info/json/movies/spiderman_homecoming.jpg',
    price: '₹ 190',
  },
  {
    title: 'Ferdinand',
    image: 'https://api.androidhive.info/json/movies/ferdinand.jpg',
    price: '₹ 100',
  },
  {
    title: 'The Disaster Artist',
    image: 'https://api.androidhive.info/json/movies/disaster_artist.jpg',
    price: '₹ 90',
  },
  {
    title: 'Lady Bird',
    image: 'https://api.androidhive.info/json/movies/lady_bird.jpg',
    price: '₹ 80',
  },
  {
    title: 'Star Wars: The Last Jedi',
    image: 'https://api.androidhive.info/json/movies/starwars.jpg',
    price: '₹ 160',
  },
  {
    title: 'Shape Of Water',
    image: 'https://api.androidhive.info/json/movies/shape_of_water.jpg',
    price: '₹ 130',
  },
  {
    title: 'Baahubali: The Conclusion',
    image: 'https://api.androidhive.info/json/movies/baahubali2.jpg',
    price: '₹ 210',
  },
];

const Films_Third = [
  {
    title: 'Jumanji: Welcome To The Jungle',
    image: 'https://api.androidhive.info/json/movies/jumanji.jpg',
    price: '₹ 120',
  },
  {
    title: 'Murder On The Orient Express',
    image: 'https://api.androidhive.info/json/movies/murder_on_express.jpg',
    price: '₹ 160',
  },
  {
    title: 'Spider-Man: Homecoming',
    image: 'https://api.androidhive.info/json/movies/spiderman_homecoming.jpg',
    price: '₹ 190',
  },
  {
    title: 'Ferdinand',
    image: 'https://api.androidhive.info/json/movies/ferdinand.jpg',
    price: '₹ 100',
  },
  {
    title: 'The Disaster Artist',
    image: 'https://api.androidhive.info/json/movies/disaster_artist.jpg',
    price: '₹ 90',
  },
  {
    title: 'Lady Bird',
    image: 'https://api.androidhive.info/json/movies/lady_bird.jpg',
    price: '₹ 80',
  },
  {
    title: 'Star Wars: The Last Jedi',
    image: 'https://api.androidhive.info/json/movies/starwars.jpg',
    price: '₹ 160',
  },
  {
    title: 'Shape Of Water',
    image: 'https://api.androidhive.info/json/movies/shape_of_water.jpg',
    price: '₹ 130',
  },
  {
    title: 'Baahubali: The Conclusion',
    image: 'https://api.androidhive.info/json/movies/baahubali2.jpg',
    price: '₹ 210',
  },
  {
    title: 'Thor: The Ragnarok',
    image: 'https://api.androidhive.info/json/movies/thor_ragnarok.jpg',
    price: '₹ 170',
  },
  {
    title: 'Justice League',
    image: 'https://api.androidhive.info/json/movies/justice_league.jpg',
    price: '₹ 120',
  },
  {
    title: 'Coco',
    image: 'https://api.androidhive.info/json/movies/coco.jpg',
    price: '₹ 110',
  },
];
export default class List extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#615BFF',
    },
    headerTitleStyle: {
      color: 'white',
    },
    // headerTitleAlign: {
    //   headerLayoutPreset: 'center',
    //   color: 'white',
    // },
  };
  ShowMovie(item) {
    Alert.alert(item.title);
  }
  _renderItem(item) {
    return (
      <TouchableOpacity
        style={styles.ImageContainer}
        onPress={() => this.ShowMovie(item)}>
        <View>
          <Image style={styles.MovieImage} source={{uri: item.image}} />
        </View>
        <View style={styles.MovieTitle}>
          <Text>{item.title}</Text>
        </View>
        <View style={styles.MoviePrices}>
          <Text style={styles.MoviePrice}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.text}> New Release Films</Text>
          <View style={styles.MovieList}>
            <View style={styles.FirstList}>
              <FlatList
                horizontal
                ItemSeparatorComponent={() => (
                  <View style={styles.MoveSeparation} />
                )}
                renderItem={({item}) => this._renderItem(item)}
                data={Films_First}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            <View style={styles.SecondList}>
              <FlatList
                horizontal
                ItemSeparatorComponent={() => (
                  <View style={styles.MoveSeparation} />
                )}
                renderItem={({item}) => this._renderItem(item)}
                data={Films_Second}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            <View style={styles.SecondList}>
              <FlatList
                horizontal
                ItemSeparatorComponent={() => (
                  <View style={styles.MoveSeparation} />
                )}
                renderItem={({item}) => this._renderItem(item)}
                data={Films_Third}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF1F7',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
    paddingLeft: 10,
  },
  ImageContainer: {
    backgroundColor: 'white',
    height: 270,
    width: 135,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  MovieImage: {
    width: 135,
    height: 200,
    resizeMode: 'cover',
  },
  MovieTitle: {
    width: 130,
    height: 35,
    paddingLeft: 15,
    marginTop: 8,
  },
  MoviePrices: {
    alignSelf: 'flex-end',
    paddingRight: 15,
  },
  MoviePrice: {
    color: '#FB1F89',
  },
  MovieList: {
    marginTop: 10,
    marginLeft: 10,
  },
  MoveSeparation: {
    width: 15,
  },
  SecondList: {
    marginTop: 20,
  },
});
