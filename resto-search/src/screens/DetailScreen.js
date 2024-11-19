import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import yelp from '../api/yelp'

const DetailScreen = (props) => {
  const {navigation} = props
  const id = navigation.getParam('id')
  const [result, setResult] = useState(null)
  const [images, setImages] = useState([])

  const getResult = async (id) => {
    try{
      const response = await yelp.get(`/${id}`)
      setResult(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(()=>{
    getResult(id)
  }, [])

  //Missing result.photos in businesses.api & yelp.api
  //setImages(result.photos)

  return (
    <View>
      {/* <Text>Detail Screen</Text> */}
      {/* <Text>ID: {id}</Text> */}
      {/* <FlatList
        horizontal
        data={images}
        keyExtractor={image}
        renderItem={<Image style={styles.img} source={{uri: image}} />}>
      </FlatList> */}

      <Text style={styles.header}>{result && result.name}</Text>
      <Image style={styles.img} source={{uri: result && result.image_url}} />
      <Text style={styles.location}>{result && result.location.display_address}</Text>
      <Text style={styles.phone}>{result && result.display_phone}</Text>
      {(result && result.hours[0].is_open_now) ? 
        <Text style={styles.open}>Open</Text> : 
        <Text style={styles.closed}>Closed</Text>}
      
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  img: {
    width: '90%',
    height: 200,
    borderRadius: 5,
    margin: 5,
  },
  header: {
    margin: 5,
    fontWeight: 'bold',
    fontSize: 20
  },
  location: {
    fontSize: 15,
    margin: 5
  },
  phone: {
    fontSize: 15,
    margin: 5
  },
  open: {
    fontSize: 15,
    color: 'green',
    margin: 5
  },
  closed: {
    fontSize: 15,
    color: 'red',
    margin: 5
  }
})