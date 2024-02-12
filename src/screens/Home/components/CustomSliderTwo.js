import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CustomSliderTwo = ({selectedDotIndex, setSelectedDotIndex}) => {

  const handleDotPress = (index) => {
    setSelectedDotIndex(index);
    console.log(index);
  };

  const dotStyle = (index) => {
    const opacity = index < selectedDotIndex ? 1 : 0.3;
    return { ...styles.dot, opacity };
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.9} style={styles.slider}>
        <View style={[styles.track, { width: `${(selectedDotIndex + 0.65 ) * 10}%` }]}>
          <View style={styles.thumb}>
            <Text style={styles.thumbText}>{selectedDotIndex + 1}</Text>
          </View>
        </View>
        <View style={styles.dotContainer}>
          {[...Array(10)].map((_, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.9}
              style={styles.dotWrapper}
              onPress={() => handleDotPress(index)}
            >
                <View style={dotStyle(index)}>
                    <Text style={{  fontSize: 30, color: "#FF9843", textAlignVertical: "center", top: -3.9}}>•</Text>
                </View>        
            </TouchableOpacity>
          ))}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
  },
  slider: {
    height: 30,
    backgroundColor: "#F7D4B7",
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "center"
  },
  track: {
    height: 30,
    borderRadius: 10,
    backgroundColor: "#FDBF60",
    position: "absolute",
  },
  dot: {
  },
  selectedDot: {
    fontSize: 30,
    color: "#FF9843",
    fontWeight: "bold",
    display: "none",
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  dotWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  thumb: {
    width: 35,
    height: 30,
    backgroundColor: "#FF9843",
    borderRadius: 30,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    right: -13.5,
    zIndex: 1
  },
  thumbText: {
    color: "white",
    fontWeight: "900",
    fontSize: 18
  }
});

export default CustomSliderTwo;
