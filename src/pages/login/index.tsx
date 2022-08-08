import { StackParamList } from '@navigator/StackParamList'
import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect, useRef, useState } from 'react'
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StatusBar, Text, View, TextInput, ImageBackground, ActivityIndicator, Image, Alert } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Illustration } from '@assets/illustration'
import { TouchableOpacity } from 'react-native-gesture-handler'
import BackgroundImage from './components/image-background'
import LinearGradient from 'react-native-linear-gradient'
import { ROBOTO_BOLD, ROBOTO_MEDIUM, ROBOTO_REGULAR } from '@styles/fonts'
import { DARK_GRAY, GREEN_DARK, LIGHT_GRAY, WHITE, WHITESMOKE } from '@styles/colors'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Fetcher from '@handlers/api/Fetch'
import LocalStorage from '@handlers/LocalStorage'
import Snackbar from 'react-native-snackbar'
import { ResponseProcessor } from '@handlers/api/response-processor'
import { Icon } from '@assets/icon'
import AppTextInput from '@components/core/app-text-input'

function Login({ navigation, route }: StackScreenProps<StackParamList, 'Login'>) {
    const refPassword = useRef<TextInput>(null)

    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isFocusToInputEmail, setIsFocusToInputEmail] = useState(false)
    const [isFocusToInputPassword, setIsFocusToInputPassword] = useState(false)
    const [isSecurePasswordEntry, setIsSecurePasswordEntry] = useState(true)
    const [errorField, setErrorField] = useState<'email' | 'password'>()

    useEffect(() => {
        StatusBar.setBackgroundColor('rgba(0,0,0,0)')
        StatusBar.setBarStyle('dark-content')
        StatusBar.setTranslucent(true)
    }, [])

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: WHITESMOKE
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
                    showsVerticalScrollIndicator={false}
                    style={{
                        flex: 1
                    }}
                    contentContainerStyle={{
                        flexGrow: 1,
                    }}
                >
                    <LinearGradient
                        colors={['#f2d5de', '#FAFAFA', '#c4c7f5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1.5 }}
                        style={{
                            flex: 1,
                            justifyContent: 'center'
                        }}
                    >

                        <BackgroundImage />
                    </LinearGradient>
                    <View
                        style={{
                            marginTop: -25,
                            padding: 20,
                            backgroundColor: WHITESMOKE,
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,
                            elevation: 2
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: 24,
                                color: 'black',
                                fontFamily: ROBOTO_BOLD
                            }}
                        >
                            Selamat Datang
                        </Text>
                        <Text
                            style={{
                                fontSize: 14,
                                marginTop: 10,
                                fontFamily: ROBOTO_MEDIUM
                            }}
                        >
                            Masukkan detail informasi NIS dan Password untuk melanjutkan.
                        </Text>

                        <TextInput
                            placeholder='Nis'
                            onChangeText={newValue => setEmail(newValue)}
                            value={email}
                            returnKeyType='next'
                            onFocus={() => {
                                setIsFocusToInputEmail(true)
                                setIsFocusToInputPassword(false)
                            }}
                            onBlur={() => {
                                setIsFocusToInputEmail(false)
                            }}
                            onSubmitEditing={() => {
                                refPassword.current?.focus()
                            }}
                            style={{
                                borderWidth: 1,
                                borderColor: isFocusToInputEmail ? GREEN_DARK : WHITE,
                                borderRadius: 10,
                                padding: 10,
                                backgroundColor: 'white',
                                marginTop: 30
                            }}
                        />
                        {/* <AppTextInput
                            viewProps={{}}
                            label={'email'}
                            inputProps={{
                                autoCapitalize: "none",
                                onChangeText: setEmail,
                                onSubmitEditing: function onSubmit() {
                                    refPassword.current?.focus();
                                },
                                placeholder: 'enter ',
                                placeholderTextColor: LIGHT_GRAY,
                                returnKeyType: "next",
                                value: email
                            }}
                            isError={errorField == 'email'}
                            errorText={'error email'}
                        /> */}
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                borderWidth: 1,
                                borderColor: isFocusToInputPassword ? GREEN_DARK : WHITE,
                                borderRadius: 10,
                                backgroundColor: WHITE,
                                marginTop: 20,
                            }}
                        >
                            <TextInput
                                ref={refPassword}
                                placeholder='Password'
                                secureTextEntry={isSecurePasswordEntry}
                                returnKeyType='done'
                                onChangeText={newValue => setPassword(newValue)}
                                onBlur={() => {
                                    setIsFocusToInputPassword(false)
                                }}
                                onFocus={() => {
                                    setIsFocusToInputPassword(true)
                                    setIsFocusToInputEmail(false)
                                }}
                                style={{
                                    padding: 10,
                                    flex: 1
                                }}
                                value={password}
                            />
                            <MaterialIcons
                                name={isSecurePasswordEntry ? 'visibility' : 'visibility-off'}
                                size={24}
                                onPress={() => {
                                    setIsSecurePasswordEntry(!isSecurePasswordEntry)
                                }}
                                style={{
                                    marginEnd: 16
                                }}
                            />
                        </View>
                        {
                            errorField ?
                                <View
                                    style={{
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        marginTop: 10
                                    }}
                                >
                                    <Image
                                        source={Icon.ic_notif}
                                        style={{
                                            height: 16,
                                            resizeMode: 'contain',
                                            width: 16
                                        }}
                                    />

                                    <Text
                                        style={{
                                            color: LIGHT_GRAY,
                                            fontFamily: ROBOTO_REGULAR,
                                            fontSize: 12,
                                            marginStart: 6
                                        }}
                                    >
                                        password
                                    </Text>

                                </View>
                                :
                                null
                        }

                        <RectButton
                            rippleColor={DARK_GRAY}
                            underlayColor={DARK_GRAY}
                            onPress={() => {
                                // fetchLogin()
                                navigation.navigate('BottomTab')
                            }}
                            enabled={!validateForm() || isLoading}
                            style={{
                                marginTop: 60,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 10,
                                flexDirection: 'row',
                                backgroundColor: !validateForm() ? GREEN_DARK : LIGHT_GRAY
                            }}
                        >
                            {/* {
                                isLoading &&
                                <ActivityIndicator
                                    animating
                                    hidesWhenStopped
                                    size={'small'}
                                    color={WHITE}
                                />
                            } */}
                            <Text
                                style={{
                                    padding: 15,
                                    color: 'white',
                                    fontSize: 16
                                }}
                            >
                                Log In
                            </Text>
                        </RectButton>
                    </View>
                </ScrollView>

            </KeyboardAvoidingView>

        </SafeAreaView>
    )
    function validateForm() {
        return (isLoading || !email.trim() || !password.trim())
    }
    async function fetchLogin() {
        setIsLoading(true)
        const res = await Fetcher.Login({
            email,
            password
        })
        const json = await res.json()
        if (json.api_status == 1) {
            await LocalStorage.setItem('BACKEND_TOKEN_KEY', JSON.stringify(json.data.token))

            console.log('token-data : ', JSON.stringify(JSON, null, 2))
            navigation.replace('BottomTab')
        } else {
            Alert.alert(json.api_message)
        }

        // await Fetcher.Login({
        //     email,
        //     password
        // })
        // ResponseProcessor(
        //     await Fetcher.Login({
        //         email,
        //         password
        //     }),
        //     {
        //         async onFullFilled(json) {
        //             const { token }: { token: string } = json.data
        //             if (token) {
        //                 LocalStorage.setItem('BACKEND_TOKEN_KEY', token)
        //             }

        //             navigation.replace('BottomTab')
        //             setIsLoading(false)
        //         },
        //         onNotFullFilled(json) {
        //             setIsLoading(false)
        //         },
        //         onNetworkError(error) {
        //             setIsLoading(false)
        //         },
        //     })
    }

}
export default Login
