import React, { useEffect } from 'react'
import { Pressable, Text, View } from 'react-native'
import { styles } from '../../../config'
import { useCountStore } from '../../store/counter-store'
import { useNavigation } from '@react-navigation/native'

const SettingsScreen = () => {
  const count = useCountStore( state => state.count )
  const incCount = useCountStore( state => state.incrmentBy )

  const navigation = useNavigation();

  useEffect( () => {
    navigation.setOptions({
      title: `Count: ${count}`
    })
  })

  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Count: {count}
        </Text>
        <Pressable
        style={ styles.primaryButton}
        onPress={() => incCount(1)}
        >
          <Text>+1</Text>
        </Pressable>
        <Pressable
        style={ styles.primaryButton}
        onPress={() => incCount(-1)}
        >
          <Text>-1</Text>
        </Pressable>
    </View>
  )
}

export default SettingsScreen
