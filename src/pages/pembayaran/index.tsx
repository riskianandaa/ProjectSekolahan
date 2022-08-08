import { StackParamList } from '@navigator/StackParamList'
import { StackScreenProps } from '@react-navigation/stack'
import { BLUE_LIGTH, GRAY, GREEN_GRAY, JET_BLACK, LIGTH_BLUE, LIGTH_GREEN, ORANGE, WHITE, WHITESMOKE } from '@styles/colors'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { PaketPembayaran } from './components/paket-pembayaran'
import Price from './components/price'
import TypeItem from './components/type-item-pembayaran'
import TypePrice from './components/type-price'

function Pembayaran({ navigation, route }: StackScreenProps<StackParamList, 'Absensi'>) {
    const [isLoading, setIsLoading] = useState(false)
    const [packIndex, setPackgaeIndex] = useState<number>()
    const [itemPack, seItemPack] = useState<PaketPembayaran[]>([])

    const Data = [
        {
            id: 0,
            desc: 'Uang Gedung - 3.000.000'
        },
        {
            id: 1,
            desc: 'SPP - 99.000/bulan'
        }
    ]

    useEffect(() => {
        StatusBar.setBackgroundColor(WHITE)
    })

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: WHITESMOKE
            }}
        >
            <ScrollView
                style={{
                    flex: 1
                }}
            >
                <View
                    style={{
                        // flex : 1,
                        justifyContent: 'center',
                        flexDirection: 'row',
                        backgroundColor: WHITE,
                        padding: 20
                    }}
                >
                    <Text
                        style={{
                            color: JET_BLACK,
                            fontWeight: 'bold',
                            marginLeft: 10

                        }}
                    >
                        2020
                    </Text>
                    <Text
                        style={{
                            color: JET_BLACK,
                            fontWeight: 'bold',
                            marginLeft: 10

                        }}
                    >
                        2021
                    </Text>
                    <Text
                        style={{
                            color: JET_BLACK,
                            fontWeight: 'bold',
                            marginLeft: 10

                        }}
                    >
                        2022
                    </Text>
                </View>

                <View>
                    {
                        isLoading ?
                            <View
                                style={{
                                    justifyContent: 'center',
                                    height: 120
                                }}
                            >
                                <ActivityIndicator
                                    animating={isLoading}
                                    color={GRAY}
                                    size={'large'}
                                />

                            </View>
                            :
                            Data.map((item, index) => (
                                <TypeItem
                                    key={index.toString()}
                                    isSelected={packIndex == index}
                                    item={item}
                                    onPress={() => setPackgaeIndex(index)}
                                />
                            ))
                    }
                </View>

                <View>
                    <Price />
                    <TypePrice />
                </View>

                <View
                    style={{
                        flex: 1,
                        backgroundColor: WHITE,
                        padding: 15,
                        marginTop: 10
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: '300',
                                color: JET_BLACK
                            }}
                        >
                            Perulangan
                        </Text>
                        <Text
                            style={{
                                fontWeight: '300',
                                color: JET_BLACK
                            }}
                        >
                            2 Bulan
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 8
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: '300',
                                color: JET_BLACK
                            }}
                        >
                            Total Pembayaran
                        </Text>
                        <Text
                            style={{
                                fontWeight: '300',
                                color: JET_BLACK
                            }}
                        >
                            Rp. 180.000
                        </Text>
                    </View>
                </View>

            </ScrollView>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: WHITE,
                    padding: 20,
                    marginTop: 5
                }}
            >
                <View>
                    <Text>
                        Total Bayar
                    </Text>
                    <Text
                        style={{
                            color: ORANGE,
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}
                    >
                        Rp. 180.000
                    </Text>
                </View>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('MetodePembayaran')
                    }}
                >
                    <View
                        style={{
                            padding: 15,
                            backgroundColor: LIGTH_GREEN,
                            borderRadius: 10
                        }}
                    >
                        <Text
                            style={{
                                color: WHITE
                            }}
                        >
                            Pilih Pembayaran
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default Pembayaran
