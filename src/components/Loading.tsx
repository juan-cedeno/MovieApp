import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { Colors } from '../theme/Colors'

export const Loading = () => {
    return (
        <View style = {Styles.ContainerLoading}>
            <ActivityIndicator size = {25} color = {Colors.Orange}/>
        </View>
    )
}

const Styles = StyleSheet.create({
    ContainerLoading: {
        flex : 1,
        justifyContent : 'center'
    }
});
