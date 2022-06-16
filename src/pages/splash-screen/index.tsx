import { Illustration } from '@assets/illustration'
import { StackParamList } from '@navigator/StackParamList'
import { StackScreenProps } from '@react-navigation/stack'
import { JET_BLACK } from '@styles/colors'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, SafeAreaView, View } from 'react-native'

import { StatusBar } from 'react-native'


function SplashScreen({navigation, route}: StackScreenProps<StackParamList, 'SplashScreen'>) {
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        StatusBar.setBarStyle('dark-content')
        StatusBar.setBackgroundColor('white')

        setTimeout(() =>{
            navigation.replace('Login')
        }, 3000)
    }, [navigation])

    return (
        <SafeAreaView
            style = {{
                backgroundColor: 'white',
                flex: 1
            }}
        >
            <View
                style = {{
                    flex: 1,
                    padding: 20
                }}
            >
                <View
                    style = {{
                        alignItems: 'center',
                        flex: 1,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        resizeMode = "contain"
                        source = {Illustration.ic_app}
                        style = {{
                            height: 45,
                            width: 200
                        }}
                    />
                </View>

                {
                    isLoading ?
                        <ActivityIndicator
                            color = {JET_BLACK}
                            size = "large"
                            style = {{
                                marginTop: 20
                            }}
                        />
                        :
                        null
                }
            </View>
        </SafeAreaView>
    )
}

export default SplashScreen
