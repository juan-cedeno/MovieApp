import React from 'react'
import { Text, View , FlatList, StyleSheet} from 'react-native';
import { Movies } from '../interfaces/Movie';
import { Colors } from '../theme/Colors';
import { MoviePoster } from './MoviePoster';


interface Props {
    Title? : string
    movie : Movies[]
}

export const HorizontalSlide = ({Title , movie} : Props) => {
    return (
        <View style = {Styles.Container}>
            <Text style = {Styles.Title}>{Title}</Text>

            <FlatList
                data = {movie}
                renderItem = {({item}) => 
                <MoviePoster movie = {item} height = {230} width = {140}/>}
                keyExtractor = {(item) =>  item.id.toString()}
                horizontal = {true}
                showsHorizontalScrollIndicator = {false}
            />
        </View>
    )
}

const Styles = StyleSheet.create({
    Container: {
        marginTop : 30,
        height : 285,
    },

    Title: {
        color : Colors.Orange,
        fontWeight : 'bold',
        fontSize : 27,
        marginLeft : 8,
        marginBottom : 10
    }

});
