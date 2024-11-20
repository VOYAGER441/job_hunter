import React from 'react'
import { View, Text,TouchableOpacity,Image } from 'react-native'

import styles from './popularjobcard.style'

const PopularJobCard = ({item,selectJob,handleCardPress}) => {
  return (
    <TouchableOpacity 
    style={styles.container(selectJob,item)}
    onPress={()=>handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectJob,item)}>
    <Image source={{uri:item.employer_logo}}/>
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default PopularJobCard