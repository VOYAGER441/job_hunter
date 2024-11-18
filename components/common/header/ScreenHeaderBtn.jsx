import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity,Image } from 'react-native'
import styles from './screenheader.style'

const ScreenHeaderBtn = ({icons,dimension,handelPress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Image source={icons}
      resizeMode='cover'
      style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn