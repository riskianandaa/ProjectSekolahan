import { StackParamList } from '@navigator/StackParamList'
import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StatusBar, Text, View, TextInput, ImageBackground } from 'react-native'

import { Illustration } from '@assets/illustration'
import { TouchableOpacity } from 'react-native-gesture-handler'
import BackgroundImage from './components/image-background'
import LinearGradient from 'react-native-linear-gradient'

function Login({ navigation, route }: StackScreenProps<StackParamList, 'Login'>) {
    const [Nis, setNis] = useState('')
    const [Password, setPassword] = useState('')

    useEffect(() => {
        StatusBar.setBackgroundColor('rgba(0,0,0,0)')
        StatusBar.setBarStyle('dark-content')
        StatusBar.setTranslucent
    }, [])

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: '#b5e4e8'
            }}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS == 'ios' ? 'padding' : undefined}
                style={{
                    flex: 1
                }}
            >
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    style={{
                        flex: 1
                    }}
                >
                    <LinearGradient
                        colors={['#f2d5de','#FAFAFA', '#c4c7f5']}
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 1.5}}
                        style = {{
                                flex : 1
                            }}
                    >
                    
                        <BackgroundImage />
                    </LinearGradient>

                    <View
                        style={{
                            // flex : 1,
                            marginTop : -25,
                            padding: 20,
                            backgroundColor: '#f7f7f5',
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,
                            elevation : 2
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: 24,
                                color: 'black'
                            }}
                        >
                            Selamat Datang
                        </Text>
                        <Text
                            style={{
                                fontSize: 14,
                                marginTop: 10
                            }}
                        >
                            Masukkan detail informasi NIS dan Password untuk melanjutkan.
                        </Text>

                        <View
                            style={{
                                // marginTop : 20
                                marginTop: 30
                            }}
                        >
                            <TextInput
                                placeholder='Nis'
                                onChangeText={newValue => setNis(newValue)}
                                style={{
                                    borderWidth: 1,
                                    borderColor: 'white',
                                    borderRadius: 15,
                                    padding: 10,
                                    backgroundColor: 'white'
                                }}
                                value={Nis}
                            />
                        </View>
                        <View
                            style={{
                                marginTop: 20
                            }}
                        >
                            <TextInput
                                placeholder='Password'
                                secureTextEntry={true}
                                onChangeText={newValue => setPassword(newValue)}
                                style={{
                                    borderWidth: 1,
                                    borderColor: 'white',
                                    borderRadius: 15,
                                    padding: 10,
                                    backgroundColor: 'white'
                                }}
                                value={Password}
                            />
                        </View>

                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => {
                                navigation.navigate('BottomTab')
                            }}
                        >
                            <View
                                style={{
                                    // marginTop : 40,
                                    marginTop: 60,
                                    marginBottom: 200,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 10,
                                    backgroundColor: '#47CEC7'
                                }}
                            >
                                <Text
                                    style={{
                                        padding: 15,
                                        color: 'white',
                                        fontSize: 16
                                    }}
                                >
                                    Log In
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </KeyboardAvoidingView>

        </SafeAreaView>
    )
}
export default Login
