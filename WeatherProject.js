import React, { Component } from "react";

import { StyleSheet, Text, View, TextInput, Image, ImageBackground } from "react-native";

import Forecast from "./Forecast";
import OpenWeatherMap from "./open_weather_map";

class WeatherProject extends Component {
  constructor(props) {
    super(props);
    this.state = { zip: "", forecast: null };
  }

  _handleTextChange = event => {
    let zip = event.nativeEvent.text;
    OpenWeatherMap.fetchForecast(zip).then(forecast => {
      this.setState({ forecast: forecast });
    });
  };

  render() {
    let content = null;
    if (this.state.forecast !== null) {
      content = (
        <Forecast
          main={this.state.forecast.main}
          description={this.state.forecast.description}
          temp={this.state.forecast.temp}
        />
      );
    }
    return (
     
     <ImageBackground
  source={require('./wonosobo.jpg')}
  style={{width: '100%', height: '100%'}}
> 
      
          <View style={styles.overlay}>
            <View style={styles.row}>
              <Text style={[styles.mainText, styles.textStyle]}>
                2015150115
              </Text>
              <View style={styles.zipContainer}>
                <TextInput
                  style={[styles.zipCode, styles.mainText]}
                  onSubmitEditing={this._handleTextChange}
                  placeholder="Masukkan Kota Kelahiran Anda"
                />
              </View>
            </View>
            {content}
          </View>
       
      </ImageBackground>
    );
  }
}

const baseFontSize = 16;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justify: "center" },
  backdrop: { flex: 1, flexDirection: "column" },
  overlay: {
    paddingTop: 5,
    backgroundColor: "#000000",
    opacity: 0.5,
    flexDirection: "column",
    alignItems: "center"
  },
  row: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "flex-start",
    padding: 100
  },
  textStyles: {
	textAlign: 'center'
	},
  zipContainer: {
    height: 40,
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 20
  },
  zipCode: { flex: 1, flexBasis: 1, width: 100, height: baseFontSize },
  mainText: { fontSize: baseFontSize, color: "#FFFFFF" }
});

export default WeatherProject;
