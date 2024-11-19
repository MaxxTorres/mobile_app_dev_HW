import React, {useState} from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'
import {businesses} from '../api/businesses'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const results = businesses
  //const [searchApi, results, errorMsg] = useResults()

  const filterResultsByPrice = (price) => {
    //price = $ || $$ || $$$
    return results.filter((result) => {
      return result.price === price
    })
  }

  return (
    <>
      <SearchBar 
        term={term} 
        onTermChange={setTerm} 
        //newTerm is given to setTerm by default
        onTermSubmit={() => searchApi(term)}
      />
      {/* {errorMsg ? <Text style={styles.error}>{errorMsg}</Text> : null}
      <Text>We found {results.length} results!</Text> */}
      <ScrollView>
      <ResultsList title="Cheap" results={filterResultsByPrice("$")}/>
      <ResultsList title="Normal" results={filterResultsByPrice("$$")}/>
      <ResultsList title="Bougie" results={filterResultsByPrice("$$$")}/>
      <ResultsList title="Moneybags" results={filterResultsByPrice("$$$$")}/>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    fontSize: 12,
    color: 'orangered',
    fontStyle: 'italic',
    marginHorizontal: 15
  }
});

export default SearchScreen;
