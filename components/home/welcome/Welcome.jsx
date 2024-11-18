import React from 'react'
import { View, Text, TouchableOpacity, TextInput, Image, FlatList } from 'react-native'
import { useState } from 'react'
import styles from './welcome.style'
import { icons, SIZES } from '@/constants'
import { useRouter } from 'expo-router'


// job types
// job types
const jobTypes = [
  'Full-Time',
  'Part-Time',
  'Freelancer',
  'Internship',
  'Contract',
  'Temporary',
  'Remote',
  'Gig'
];

const Welcome = () => {

  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full-Time');

  return (
    <View>
      <View style={styles.container}>

        <Text style={styles.userName}>Hello Mainak (: </Text>
        <Text style={styles.welcomeMessage}>Find Your Perfect Job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput}
            value=''
            onChange={() => { }}
            placeholder='what are you looking for?'
          ></TextInput>
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => { }}>
          <Image source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome