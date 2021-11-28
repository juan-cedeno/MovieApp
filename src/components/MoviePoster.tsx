import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Movies } from '../interfaces/Movie';


interface Props {
    movie : Movies,
    height? : number,
    width? : number
}

export const MoviePoster = ({movie , height = 420 , width = 300} : Props) => {
    
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

    const navigation = useNavigation()

    return (
            <TouchableOpacity 
                style = {Styles.Shadow}
                onPress = {() => navigation.navigate('Detail' as never , movie as never)}
                activeOpacity = {0.9}
            >
                <View style = {{height , width}}>
                    <Image
                        source = {{
                            uri
                        }}
                        style = {Styles.Image}
                    />
                </View>
            </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    Shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 10,
    },
    Image : {
        flex : 1,
        borderRadius : 12,
        marginHorizontal : 5,
    }
});
