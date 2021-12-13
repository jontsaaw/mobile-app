import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, Image } from 'react-native';
export default function App() {
  let [title, setTitle] = useState('');
  let [rating, setRating] = useState('');
  const [keyword, setKeyword] = useState('');
  let [year, setYear] = useState('');
  let [poster, setPoster] = useState('');
  let [id, setId] = useState('');
  
  const fetchId = () => {
    fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?s=${keyword}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
		    "x-rapidapi-key": "b1cfb397bcmshef892c2d6c3e9c0p170482jsnd1972098c9df"
      }
    })
      .then(response => response.json())
      .then(response => {
        setId(response.Search[0].imdbID);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const fetchMovie = () => {
    fetchId();
    fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?r=json&i=${id}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
		    "x-rapidapi-key": "b1cfb397bcmshef892c2d6c3e9c0p170482jsnd1972098c9df"
      }
    })
      .then(response => response.json())
      .then(response => {
        setTitle(response.Title);
        setYear(response.Year)
        setPoster(response.Poster)
        setRating(response.imdbRating)
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Search movies or TV series </Text>
      
    <TextInput style={{fontSize: 18, marginTop: 20}} placeholder='keyword' 
      onChangeText={text => setKeyword(text)} />
    <TouchableHighlight onPress={fetchMovie}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Search</Text>
        </View>
      </TouchableHighlight>
        <Image source={{uri: `${poster}`}}
       style={{width: 300, height: 300}} />
        <Text>Title: {title}</Text>
        <Text>Year: {year}</Text>
        <Text>IMDb Rating: {rating}</Text>
  </View>
  
      
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebede4',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff'
  },
  title: {
    fontSize: 30,
    color: '#262b2a'
  },
  button: {
    alignItems: "center",
    backgroundColor: "#9fcf11",
    padding: 10
  },
  buttonText: {
    color: '#fff'
  }
});