import React from "react"
import { View, Text, Image } from 'react-native'
import styles from './style'

export default function QuotationsItems (props) {
    return (
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image source={require('../../img/logo.png')} style={styles.logoBitCoin} />
                    <Text style={styles.dayCotation}>{props.data}</Text>
                </View>
            </View>
            <View style={styles.contextRigth}>
                <Text style={styles.price}>$ {props.value}</Text>
            </View>
        </View>
    )
}