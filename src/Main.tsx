
import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './config'
import { NavigationContainer } from '@react-navigation/native'
import { BottomTabsNavigator } from './presentation/routes/ButtonTabsNavigation'


export const Main = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text style={styles.title}>
          Bienvenido Juan
        </Text>
      </View>
      <BottomTabsNavigator />
    </NavigationContainer>

  )
}


