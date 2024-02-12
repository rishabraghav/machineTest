import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const CustomSlider = () => {
  const [value, setValue] = useState(5);
  const [point, setPoint] = useState(0);

  const handlePress = (newValue) => {
    if (newValue >= 0 && newValue <= 10) {
      setValue(newValue);
    }
  };

  return (
    <>
    <TouchableOpacity activeOpacity={0.9} style={styles.slider}
    onPress={(e) => handlePress(Math.round((e.nativeEvent.locationX / 300) * 10))}>
      <TouchableOpacity
        activeOpacity={0.9}
        style={[styles.track, { width: `${value * 10}%` }]}
        onPress={(e) => handlePress(Math.round((e.nativeEvent.locationX / 300) * 10))}
      >
        <View style={styles.thumb(value)}>
          <Text style={styles.valueText}>{value}</Text>
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
    <Text>{point}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  slider: {
    height: 40,
    width: '100%',
    backgroundColor: '#F7D4B7',
    borderRadius: 13,
    overflow: 'hidden',
  },
  track: {
    height: '100%',
    backgroundColor: '#E9B824',
    zIndex: 0,
    borderRadius: 20,
    borderTopLeftRadius: 13,
    borderBottomLeftRadius: 13,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  thumb: (value) => ({
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FF9843',
    zIndex: 1,
    borderWidth: 1,
    borderColor: 'grey',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    pointerEvents: 'none',
  }),
  valueText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomSlider;
