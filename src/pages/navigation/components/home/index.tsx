import { StackScreenProps } from "@react-navigation/stack";
import { JET_BLACK, LIGHT_GRAY, WHITE, ORANGE, GRAY, LIGTH_BLUE } from "@styles/colors";
import { StackParamList } from "@navigator/StackParamList";
import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, FlatList, Image, ListRenderItemInfo, RefreshControl, Text, View, TouchableOpacity, StatusBar, SafeAreaView, ScrollView, Dimensions, ImageBackground } from 'react-native';
import { RectButton } from "react-native-gesture-handler";
import { Modalize } from "react-native-modalize";

import { Illustration } from "@assets/illustration";

import ListOptionsMenu, { ListOptionsMenuType } from "./components/list-options-menu";
import { Icon } from '@assets/icon'
import Chart from './components/chart'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useIsFocused } from "@react-navigation/native";

function Home({ navigation, route }: StackScreenProps<StackParamList, 'Home'>) {

    const [isRefreshing, setIsRefreshing] = useState(false)
    const height = Dimensions.get('window').height / 3
    const inset = useSafeAreaInsets()
    const isFocus = useIsFocused()

    const Menus = [
        {
            name: 'Absensi',
            icon: Icon.ic_absen,
            onPress: (() => {
                navigation.navigate('Absensi')
            })
        } as ListOptionsMenuType,
        {
            name: 'Tugas',
            icon: Icon.ic_tugas,
            onPress: (() => {
                navigation.navigate('Tugas')
            })
        } as ListOptionsMenuType,
        {
            name: 'Nilai',
            icon: Icon.ic_nilai,
            onPress: (() => {
                navigation.navigate('Chat')
            })
        } as ListOptionsMenuType,
        {
            name: 'E-rapor',
            icon: Icon.ic_raport,
            onPress: (() => {
                navigation.navigate('Chat')
            })
        } as ListOptionsMenuType,
    ]

    const Menuss = [
        {
            name: 'Bayar',
            icon: Icon.ic_nilai,
            onPress: (() => {
                navigation.navigate('Pembayaran')
            })
        } as ListOptionsMenuType,
        {
            name: 'Riwayat',
            icon: Icon.ic_tugas,
            onPress: (() => {
                navigation.navigate('HistoryPayments')
            })
        } as ListOptionsMenuType

    ]

    useEffect(function onFocus() {
        if (isFocus) {
            setTimeout(() => {
                StatusBar.setBackgroundColor('#7dc278')
                StatusBar.setBarStyle('dark-content')
                StatusBar.setTranslucent(true)
            }, 200)
        } else {
            StatusBar.setBackgroundColor(WHITE)
            StatusBar.setBarStyle('dark-content')
        }
    }, [isFocus])

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: 'white'
            }}
        >
            <View
                style={{
                    height: inset.top,
                    backgroundColor: '#7dc278',
                    borderBottomLeftRadius: 30
                }}
            />
            <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: 'white'
                }}
            >
                <View
                    style={{
                        // height: 200,
                        height: height,
                        backgroundColor: '#7dc278',
                        borderBottomLeftRadius: 30
                    }}
                >
                    <ImageBackground
                        source={Illustration.ic_pattern}
                        style={{
                            // height: 200
                            height: height
                        }}
                    />
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingHorizontal: 20,
                        paddingTop: 20,
                        top: 0,
                        right: 0,
                        left: 0,
                        position: 'absolute'
                    }}
                >
                    <RectButton
                        rippleColor={LIGHT_GRAY}
                        onPress={() => {
                            navigation.navigate('Chat')
                        }}
                        style={{
                            borderRadius: 30
                        }}
                    >
                        <Image
                            source={Icon.ic_profile}
                            style={{
                                height: 40,
                                width: 40
                            }}
                        />
                    </RectButton>
                    <View>
                        <RectButton
                            rippleColor={LIGHT_GRAY}
                            onPress={() => {
                                navigation.navigate('Chat')
                            }}
                        >
                            <Image
                                source={Icon.ic_notif}
                                style={{
                                    height: 22,
                                    width: 22
                                }}
                            />
                        </RectButton>

                        <View
                            style={{
                                backgroundColor: ORANGE,
                                height: 12,
                                width: 12,
                                borderRadius: 6,
                                position: 'absolute',
                                right: 0,
                                top: 0
                            }}
                        />
                    </View>
                </View>

                <View
                    style={{
                        paddingHorizontal: 20,
                        top: 0,
                        right: 0,
                        left: 0,
                        position: 'absolute',
                        marginTop: 100
                    }}
                >
                    <Text
                        style={{
                            fontSize: 18,
                            color: '#E3F1E3'
                        }}
                    >
                        Hi, Riski Ananda
                    </Text>
                    <Text
                        style={{
                            color: WHITE,
                            fontSize: 20,
                            paddingTop: 10,
                            fontWeight: 'bold'
                        }}
                    >
                        Anda belum melakukan pembayaraan bulan ini.
                    </Text>
                </View>

                <View
                    style={{
                        padding: 20,
                        borderTopRightRadius: 15,
                        // marginTop : -10,
                        backgroundColor: WHITE
                    }}
                >
                    <Text
                        style={{
                            fontWeight: '500',
                            color: JET_BLACK
                        }}
                    >
                        Daftar Menu
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 10,
                            marginLeft: -18
                            // justifyContent : 'space-around',
                        }}
                    >
                        {
                            Menus.map((item, index) =>
                                <ListOptionsMenu
                                    item={item}
                                    key={index.toString()}
                                />
                            )
                        }
                    </View>

                    <View style={{ width: '50%' }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                marginTop: 10,
                                marginLeft: -18
                                // justifyContent : 'space-around',
                            }}
                        >
                            {
                                Menuss.map((item, index) =>
                                    <ListOptionsMenu
                                        item={item}
                                        key={index.toString()}
                                    />
                                )
                            }
                        </View>
                    </View>
                </View>

                <View
                    style={{
                        padding: 20
                    }}
                >
                    <View
                        style={{
                            backgroundColor: WHITE,
                            borderRadius: 15,
                            elevation: 4,
                            // padding : 5
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: 'bold',
                                color: JET_BLACK,
                                fontSize: 16,
                                paddingHorizontal: 20,
                                marginTop: 10
                            }}
                        >
                            Grafik Absensi
                        </Text>
                        <View
                            style={{
                                backgroundColor: LIGHT_GRAY,
                                height: 2,
                                marginTop: 20,
                                marginHorizontal: 20
                            }}
                        />
                        <View
                            style={{
                                marginTop: 20
                            }}
                        >
                            <Chart />
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingHorizontal: 55,
                                paddingBottom: 10
                            }}
                        >
                            <View
                                style={{
                                    height: 12,
                                    width: 12,
                                    borderRadius: 6,
                                    backgroundColor: '#289FFF'
                                }}
                            />
                            <Text
                                style={{
                                    marginLeft: 5,
                                    fontSize: 8
                                }}
                            >
                                MASUK
                            </Text>
                            <View
                                style={{
                                    height: 12,
                                    width: 12,
                                    borderRadius: 6,
                                    backgroundColor: '#F9C300',
                                    marginLeft: 20
                                }}
                            />
                            <Text
                                style={{
                                    marginLeft: 5,
                                    fontSize: 8
                                }}
                            >
                                TIDAK MASUK
                            </Text>
                        </View>
                    </View>
                </View>

            </ScrollView>

        </SafeAreaView >
    )
}

export default Home

