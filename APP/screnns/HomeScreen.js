import React, { Component } from 'react'
import { View, StatusBar, Image } from 'react-native'
import SearchBar from '../component/SearchBar';
import { ScrollView } from 'react-native-virtualized-view';
import Suabot from '../component/Suabot';
import Suatuoi from '../component/Suatuoi';
import Suachua from '../component/Suachua';


const HomeScreen = () => {
    return (
        <ScrollView style={{ backgroundColor: '#fff', paddingHorizontal: 15, flex: 1 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                <Image
                    style={{ height: 70, width: 320, marginTop: 30 }}
                    source={require('../img/logobansua.webp')}
                />
            </View>
            <SearchBar />
            <Image
                style={{ height: 200, width:'100%',borderRadius:5 }}
                resizeMode="contain"
                source={require('../img/banner.webp')}
            />
            <Suabot />
            <Suatuoi />
            <Suachua />
        </ScrollView>
    )
}

export default HomeScreen;