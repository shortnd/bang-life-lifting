import React from 'react'
import { View, Text } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

type HomeProps = {
  navigation: StackScreenProps<any, 'Home'>
}

function Home() {
  return (
    <View>
      <Text>Homescreen</Text>
    </View>
  )
}

export default Home
