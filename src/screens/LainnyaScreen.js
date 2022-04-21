import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'

export default function LainnyaScreen() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'white'}}>
            <View style={styles.profil}>
                <Text style={styles.teks1}>Profil Saya</Text>
                <Image style={styles.image} source={require('../picture/Profil.jpg')}></Image>
                <Text style={styles.teks2}>Intan Wulandari</Text>
                <Text style={styles.teks2}>119140077</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    profil: {
        width:200,
        height:200,
        backgroundColor:'#D64829',
        alignItems: 'center',
        flexDirection:'column',
        justifyContent: 'center',
        borderRadius:50
    },
    teks1:{
        fontSize:25,
        fontWeight:'bold',
        fontFamily: 'monospace',
        color:'white',
    },
    image: {
        height: 80,
        width: 80,
        borderRadius:50,
        alignItems: 'center',
        marginTop:20,
        marginBottom:10,
    },
    teks2:{
        fontSize:15,
        fontFamily: 'monospace',
        color:'white',
        marginBottom:5,
    }
});