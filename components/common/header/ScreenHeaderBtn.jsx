import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from './screenheader.style';

const ScreenHeaderBtn = ({ icons, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={icons}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
