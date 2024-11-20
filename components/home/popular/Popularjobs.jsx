import React, { useState } from 'react'
// import { View, Text } from 'react-native'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './popularjobs.style'
import { COLORS, SIZES } from '@/constants'
import PopularJobCard from '@/components/common/cards/popular/PopularJobCard'
import { isLoading } from 'expo-font'
import useFetch from '../../../hook/useFetch';


const Popularjobs = () => {
  const router = useRouter();
  const {data,isLoading,error }=useFetch('search',{
    query:'React developer',
    num_pages:1
  })
  // const isLoading = false;
  // const error = false;
console.log(data);



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popularjobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}> Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (<ActivityIndicator size='large' color={COLORS.primary} />) : error ? (<Text>Something went wrong</Text>) : (<FlatList data={[1, 2, 3, 4]}
          renderItem={({ item }) => (<PopularJobCard
            item={item}
          />)}
          keyExtractor={item=>item?.job_id}
          contentContainerStyle={{columnGap:SIZES.medium}}
          horizontal
        />)}
      </View>
    </View>
  )
}

export default Popularjobs