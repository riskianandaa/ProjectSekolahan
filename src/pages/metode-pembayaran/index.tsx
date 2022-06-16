import { Icon } from '@assets/icon'
import { StackParamList } from '@navigator/StackParamList'
import { StackScreenProps } from '@react-navigation/stack'
import { GRAY, JET_BLACK, LIGTH_GREEN, ORANGE, WHITE } from '@styles/colors'
import React, { useState } from 'react'
import { Image, SafeAreaView, ScrollView, Text, View, TouchableOpacity } from 'react-native'

import RingkasanPayments from './components/ringkasan-payments'

function MetodePembayaran({ navigation, route }: StackScreenProps<StackParamList, 'MetodePembayaran'>) {
    const [expandDetail, setExpandDetail] = useState(false)

    const [payment] = useState([
        {
            icon: Icon.ic_bca,
            desc: 'BCA Virtual Account',
            pilih: Icon.ic_radio_button
        },
        {
            icon: Icon.ic_briva,
            desc: 'BRI  Virtual Account',
            pilih: Icon.ic_outer
        },
        {
            icon: Icon.ic_alfa,
            desc: 'Alfamart',
            pilih: Icon.ic_outer
        }
    ])
    const [payments] = useState([
        {
            icon: Icon.ic_briva,
            desc: 'BNI  Virtual Account',
            pilih: Icon.ic_outer
        },
        {
            icon: Icon.ic_briva,
            desc: 'Permata  Virtual Account',
            pilih: Icon.ic_outer
        },
        {
            icon: Icon.ic_briva,
            desc: 'Maybank  Virtual Account',
            pilih: Icon.ic_outer
        },
    ])

    return (
        <SafeAreaView
            style={{
                flex: 1
            }}
        >
            <ScrollView
                style={{
                    flex: 1
                }}
            >
                <View
                    style={{
                        backgroundColor: WHITE,
                        padding: 20,
                        marginTop: 5
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
                                fontWeight: '500',
                                color: JET_BLACK
                            }}
                        >
                            Metode Pembayaran
                        </Text>
                        {
                            expandDetail ?
                                <TouchableOpacity
                                    onPress={() => setExpandDetail(!expandDetail)}
                                >
                                    <Text style={{ color: expandDetail ? GRAY : LIGTH_GREEN, textDecorationLine: 'underline' }} >
                                        {expandDetail ? 'Lihat Lebih Sedikit' : '+ Lihat Semua'}
                                    </Text>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity
                                    onPress={() => setExpandDetail(!expandDetail)}
                                >
                                    <Text style={{ color: expandDetail ? GRAY : LIGTH_GREEN, textDecorationLine: 'underline' }} >
                                        {expandDetail ? 'Lihat Lebih Sedikit' : 'Lihat Semua'}
                                    </Text>
                                </TouchableOpacity>
                        }
                    </View>
                    <View
                        style={{
                            marginTop: 15
                        }}
                    >
                        {
                            payment.map((pay, index) => {
                                return (
                                    <View
                                        key={index}
                                        style={{
                                            flex: 1,
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            margin: 8,
                                            padding: 8,
                                            borderBottomWidth: 1,
                                            borderBottomColor: '#EEEEEE'
                                        }}
                                    >
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center'
                                            }}
                                        >
                                            <Image
                                                resizeMode='contain'
                                                source={pay.icon}
                                                style={{

                                                }}
                                            />
                                            <Text
                                                style={{
                                                    fontWeight: '500',
                                                    color: '#1E3354',
                                                    top: -2,
                                                    marginLeft: 5
                                                }}

                                            >
                                                {pay.desc}
                                            </Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={()=>{
                                                
                                            }}
                                        >
                                            <Image
                                                resizeMode='contain'
                                                source={pay.pilih}
                                                style={{
                                                }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                )
                            })
                        }
                        {
                            expandDetail ?
                                <>
                                    {
                                        payments.map((pay, index) => {
                                            return (
                                                <View
                                                    key={index}
                                                    style={{
                                                        flex: 1,
                                                        flexDirection: 'row',
                                                        justifyContent: 'space-between',
                                                        margin: 8,
                                                        padding: 8,
                                                        borderBottomWidth: 1,
                                                        borderBottomColor: '#EEEEEE'
                                                    }}
                                                >
                                                    <View
                                                        style={{
                                                            flexDirection: 'row',
                                                            alignItems: 'center'
                                                        }}
                                                    >
                                                        <Image
                                                            resizeMode='contain'
                                                            source={pay.icon}
                                                            style={{

                                                            }}
                                                        />
                                                        <Text
                                                            style={{
                                                                fontWeight: '500',
                                                                color: '#1E3354',
                                                                top: -2,
                                                                marginLeft: 5
                                                            }}

                                                        >
                                                            {pay.desc}
                                                        </Text>
                                                    </View>
                                                    <Image
                                                        resizeMode='contain'
                                                        source={pay.pilih}
                                                        style={{
                                                        }}
                                                    />
                                                </View>
                                            )
                                        })
                                    }
                                    <Text
                                        style={{
                                            marginTop: 10,
                                            fontWeight: '500',
                                            color: JET_BLACK
                                        }}
                                    >
                                        Offline Merchant
                                    </Text>
                                </>
                                : null
                        }
                    </View>
                </View>

                <View
                    style={{
                        marginTop: 2
                    }}
                >
                    <RingkasanPayments />
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
                    <Text
                        style={{
                            fontFamily: 'monospace'
                        }}
                    >
                        Total Bayar
                    </Text>
                    <Text
                        style={{
                            color: ORANGE,
                            fontSize: 20,
                            fontWeight: 'bold',
                            fontFamily: 'roboto'
                        }}
                    >
                        Rp. 180.000
                    </Text>
                </View>

                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                        navigation.navigate('Kwitansi')
                    }}
                >
                    <View
                        style={{
                            padding: 10,
                            backgroundColor: LIGTH_GREEN,
                            borderRadius: 10,
                            flexDirection: 'row',
                            justifyContent: 'center'
                        }}
                    >
                        <Image
                            source={Icon.ic_vector}
                        />
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
export default MetodePembayaran
