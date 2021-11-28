import React, { useEffect } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { Image, StyleSheet, Text, View, Dimensions, Platform , ScrollView , TouchableOpacity } from 'react-native';
import { MovieDetail } from '../components/MovieDetail';
import { RootStackParams } from '../navigator/StackNavigator'
import { Colors } from '../theme/Colors';
import { useMovieDetail } from '../hooks/useMovieDetail';
import { Loading } from '../components/Loading';
import  Icon from 'react-native-vector-icons/Ionicons';



interface Props extends StackScreenProps <RootStackParams , 'Detail'> {}

const {height} = Dimensions.get('window')


export const DetailScreen = ({route , navigation} : Props) => {

    const movie = route.params
    
    
    const { movieDetail , loading , getMovieFull , cast} = useMovieDetail(movie.id)


    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

    useEffect(() => {
        getMovieFull()
    }, [])

    return (
        <>
        <ScrollView>

            <View>
                <Image
                    source = {{uri}}
                    style = {Styles.Image}
                    />
            </View>
            <View style = {Styles.ContainerTitle}>
                <Text style = {Styles.Date}>{movie.title}</Text>
                <Text style = {Styles.TitleMovie}>{movie.original_title}</Text>
            </View>

            {
                loading ? <Loading/> : <MovieDetail movie = {movieDetail!} cast = {cast}/>
            }

            <View style = {Styles.ContainerBack}>
                <TouchableOpacity
                    onPress = {() => navigation.goBack()}
                >
                    <Icon
                        name = 'arrow-back-outline'
                        size = {40}
                        color = 'white'
                        />
                </TouchableOpacity>
            </View>
        </ScrollView>
        </>
    )
}

const Styles = StyleSheet.create({
    Image : {
        width : '100%',
        height : height * 0.70,
        borderBottomLeftRadius : 50,
        borderBottomRightRadius : 50,
    },
    ContainerTitle: {
        marginLeft : 10,
        marginTop : 10
    },
    Date: {
        color : Colors.Grey
    },
    TitleMovie : {
        color : Colors.Orange,
        fontSize : 17,
        fontWeight: 'bold',
        marginVertical : 4
    },
    ContainerBack : {
        position: 'absolute',
        marginTop : Platform.OS === 'ios' ? 20 : 10 ,
        marginLeft : 10
    }
});
