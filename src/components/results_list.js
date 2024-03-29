import React from 'react';
import { View, Text, StyleSheet, FlatSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ResultsDetail from './results_details.js';
import { withNavigation } from 'react-navigation';
const ResultsList = ({ title, results, navigation }) => {
    if(!results.length){
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={results}
                //this is for increasing performance
                keyExtractor={(results) => results.id}
                //for showing data
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShowScreen', { id: item.id })}>
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>

    )
}
const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 15,
        marginBottom: 5,
    },
    container: {
        marginBottom: 10,
    }

})
export default withNavigation(ResultsList);