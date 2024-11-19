import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ResultItem = (props) => {
    const {result} = props
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{result.name}</Text>
            <Image style={styles.img} source={{uri: result.image_url}} />
            <Text style={styles.rating}>
                {result.rating} Stars, 
                {result.review_count} Reviews
            </Text>
        </View>
    )
}

export default ResultItem

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    name: {
        FontWeight: "bold",
    },
    img: {
        width: 250,
        height: 150,
        borderRadius: 5,
        marginBottom: 5
    },
    rating: {
        color: '#555',
    }
})