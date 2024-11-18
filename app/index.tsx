import { View,Text,ScrollView,SafeAreaView } from "react-native";
import { useState } from "react";
import { Stack,useRouter } from "expo-router";
import { COLORS,icons,images,SIZES } from "@/constants";
import {Nearbyjobs,Popularjobs,ScreenHeaderBtn,Welcome} from "@/components"

const Home=()=>{

    const route =useRouter();
    return(
        // may nav bar section
        <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
            <Stack.Screen options={{
                headerStyle:{backgroundColor:COLORS.lightWhite},
                headerShadowVisible:false,
                headerLeft:()=>(
                    <ScreenHeaderBtn icons={icons.menu} dimension="60%" handelPress={undefined} />
                ),
                headerRight:()=>(
                    <ScreenHeaderBtn icons={images.profile} dimension="100%" handelPress={undefined} />
                ),
                headerTitle:""
            }}/>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                style={{flex:1,padding:SIZES.medium}}>
                    <Welcome/>

                    <Popularjobs/>
                    <Nearbyjobs/>

                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Home;