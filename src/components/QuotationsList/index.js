import React, { Fragment } from "react"
import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import styles from './style'
import QuotationsItems from "../QuotationsItems";

export default function QuotationsList (props) {
    
    const daysQuery = props.filterDay;
    return (
        <Fragment>
            <View style={styles.filters}>
                <TouchableOpacity style={styles.buttomQuery} onPress={() => daysQuery(365)}>
                    <Text style={styles.textButtomQuery}>1 A</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttomQuery} onPress={() => daysQuery(730)}>
                    <Text style={styles.textButtomQuery}>2 A</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttomQuery} onPress={() => daysQuery(1095)}>
                    <Text style={styles.textButtomQuery}>3 A</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttomQuery} onPress={() => daysQuery(1460)}>
                    <Text style={styles.textButtomQuery}>4 A</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttomQuery} onPress={() => daysQuery(1825)}>
                    <Text style={styles.textButtomQuery}>5 A</Text>
                </TouchableOpacity>
            </View>
            <FlatList data={props.listTransaction} renderItem={({item}) => {
                return <QuotationsItems value={item.value} data={item.data}  />
            }}
            />
        </Fragment>
    )
}