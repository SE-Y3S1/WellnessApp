import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView className="bg-red-50 h-full">
     <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
      <View className="flex-1 items-center justify-center bg-primary">
            <Text className="text-3xl text-black font-bold text-center">
              Wellness{"\n"}
              Pioneers{" "}
            </Text>
            <Link href="/symptoms" style={{color:'blue'}}>Home</Link> 
          </View>  
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home