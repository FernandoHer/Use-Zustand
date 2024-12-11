import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../../../config'
import { useProfileStore } from '../../store/profile-store'
import { useCountStore } from '../../store/counter-store'

export const HomeScreen = () => {
  const name = useProfileStore( state => state.name )
  const email = useProfileStore( state => state.email )
  const count = useCountStore( state => state.count )
  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            {name}
        </Text>
        <Text style={styles.title}>
            {email}
        </Text>
        <Text style={styles.title}>
           Count: {count}
        </Text>
    </View>
  )
}

function useCounterStore(arg0: (state: any) => any) {
  throw new Error('Function not implemented.')
}

