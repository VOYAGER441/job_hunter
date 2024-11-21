import React from 'react'
import { Image, View, Text } from 'react-native'

import styles from './company.style'
import { icons, SIZES, COLORS } from '@/constants'
// import


const Company = ({ companyLogo, jobTitle, companyName, location,time }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{ uri: companyLogo }}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>
          {jobTitle}
        </Text>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName} /</Text>
        <View style={styles.locationBox}>
          <Image source={icons.location} resizeMode='contain' style={styles.locationImage} />
          <Text style={styles.locationName}>{location}</Text>
        </View>
        <Text style={styles.time}>{time} </Text>
      </View>

    </View>
  )
}

export default Company