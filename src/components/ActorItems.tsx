import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { CastElement } from '../interfaces/Cast';
import { Colors } from '../theme/Colors';

interface Props {
    cast : CastElement
}

export const ActorItems = ({cast} : Props) => {

    const uri = `https://image.tmdb.org/t/p/w500/${cast.profile_path}`

    return (
        <>
          <View style = {Styles.Container}>
                <View style = {Styles.ContainerImage}>
                   {
                       cast.profile_path ? (
                        <Image
                            source = {{uri}}
                            style = {Styles.Image}
                         /> 
                       ) : (
                           <Image
                                source = {require('../assets/no-image.png')}
                                style = {Styles.Image}
                           />
                       )
                   }
                    <View style = {Styles.ContainerName}>
                        <Text style = {Styles.Name}>{cast.name}</Text>
                        <Text>{cast.character}</Text>
                    </View>
                </View>
          </View>  
        </>
    )
}

const Styles = StyleSheet.create({
    Container : {
        marginBottom : 70,
        marginRight : 20
    },
    Title: {
        fontSize : 20,
        fontWeight : 'bold',
        color : Colors.Orange,
        marginVertical : 10
    },
    ContainerImage: {
        flexDirection : 'row',
        borderWidth : 1,
        borderRadius: 3,
        borderColor : Colors.Blue
    },
    Image : {
        width :55,
        height : 75,
        marginRight : 8
    },
    ContainerName: {
        padding : 10
    },
    Name: {
        fontWeight : '500',
        marginBottom : 5
    }

});
