import React from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Colors } from '../theme/Colors';
import { MovieFull } from '../interfaces/MovieDetail';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter'
import { ActorItems } from './ActorItems';
import { CastElement } from '../interfaces/Cast';



interface Props {
    movie: MovieFull
    cast : CastElement[]
}

export const MovieDetail = ({movie , cast} : Props) => {
    return (
        <>  
                <View style = {Styles.Container}>
                    <View style = {Styles.ContainerAverage}>
                            <Icon
                                name = 'star-outline'
                                size = {20}
                                color = {Colors.Grey}
                                />

                            <Text 
                                style = {Styles.Average}>{movie.genres.map(gen => gen.name).join(', ')}
                            </Text>
                    </View>

                    <View>
                        <Text style = {Styles.Overview}>{movie.overview}</Text>
                    </View>

                    <View>
                        <Text style = {Styles.Title}>Budget</Text>
                        <Text>{currencyFormatter.format(movie.budget , {code : 'USD'})}</Text>
                    </View>
                    <Text style = {Styles.Title}>Actor</Text>
                    <FlatList
                        data = {cast}
                        renderItem = {({item}) => <ActorItems cast = {item}/>}
                        keyExtractor = {(item) => item.id.toString()}
                        horizontal = {true}
                        showsHorizontalScrollIndicator = {false}
                        
                    />
                </View>
        </>
    )
}

const Styles = StyleSheet.create({
    Container: {
        marginHorizontal : 10,
    },
    ContainerAverage : {
        flexDirection : 'row',
        alignItems : 'center',
        marginVertical : 10
    },
    Average: {
        marginLeft : 5,
        fontWeight : 'bold',
        color : Colors.Black,
    },
    Overview: {
        color : Colors.Blue
    },
    Title: {
        fontSize : 20,
        fontWeight : 'bold',
        color : Colors.Orange,
        marginVertical : 10,
    }

});

