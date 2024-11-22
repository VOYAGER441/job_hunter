import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'
import { checkImageURL } from "../../../../utils/index";
const PopularJobCard = ({ item, selectJob, handleCardPress }) => {

  console.log("item.job_country");
  console.log(item.job_location);
  
  return (
    <TouchableOpacity
      style={styles.container(selectJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectJob, item)}>
      <Image source={{ uri: item.employer_logo }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectJob,item)} numberOfLines={1}>
          {item.job_title}
        </Text>
      <Text style={styles.location}>{item.job_location}

      </Text>
      </View>

    </TouchableOpacity>
  )
}

export default PopularJobCard