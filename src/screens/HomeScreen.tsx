import React, { useEffect } from 'react'
import { Dimensions, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlide } from '../components/HorizontalSlide';
import { Loading } from '../components/Loading';
import { MoviePoster } from '../components/MoviePoster';
import { useMovie } from '../hooks/useMovie';

const {width} = Dimensions.get('window')

export const HomeScreen = () => {
    
    const {loading ,  getMovies, movieNow , moviePopular , movieTopRate , movieUpComing} = useMovie()
    
    const {top} = useSafeAreaInsets()
    
    useEffect(() => {
         getMovies()
    }, [])

    if (loading) {
        return <Loading/>
    }

    
    return (
        <ScrollView>

            <View style = {{marginTop : top + 20}}>
            
                <Carousel
                    data = {movieNow}
                    renderItem = {({item}) => <MoviePoster movie = {item}/>}
                    sliderWidth = {width}
                    itemWidth = {300}
                    inactiveSlideOpacity = {0.8}
                    
                />

                <HorizontalSlide movie = {moviePopular} Title = 'Popular'/>
                <HorizontalSlide movie = {movieTopRate} Title = 'Top rated'/>
                <HorizontalSlide movie = {movieUpComing} Title = 'Up coming'/>


            </View>
        </ScrollView>
    )
}


