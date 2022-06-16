import { StackParamList } from '@navigator/StackParamList'
import { StackScreenProps } from '@react-navigation/stack'
import { JET_BLACK, LIGTH_GREEN, WHITE } from '@styles/colors'
import React, { useState } from 'react'
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import moment from 'moment'
import InstruksiModal from './components/instruksi-modal'
import { Icon } from '@assets/icon'

function Kwitansi({ navigation, route }: StackScreenProps<StackParamList, 'Kwitansi'>) {
    const date = new Date()

    const [isShowInstruksi, setIsShowInstruksi] = useState(false)
    return (
        <SafeAreaView
            style={{
                flex: 1,
                padding: 20
            }}
        >
            <ScrollView
                style={{
                    flex: 1
                }}
            >
                <View
                    style={{
                        padding: 15,
                        borderWidth: 1,
                        borderColor: '#C4C2CB',
                        borderRadius: 10
                    }}
                >
                    <Text
                        style={{
                            fontWeight: 'bold',
                            color: JET_BLACK,
                            fontSize: 18
                        }}
                    >
                        Kwitansi Pembayaran
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 20
                        }}
                    >
                        <Text>{moment(date).format('YY/MM/DD')}</Text>
                        <Text>{moment(date).format('hh:mm:ss')}</Text>
                    </View>
                    <Text
                        style={{
                            marginTop: 10
                        }}
                    >
                        Faktur Pembayaran
                    </Text>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            color: JET_BLACK,
                            marginTop: 10
                        }}
                    >
                        #ID-12345
                    </Text>
                    <Text
                        style={{
                            marginTop: 10
                        }}
                    >
                        Jenis Pembayaran
                    </Text>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            color: JET_BLACK,
                            marginTop: 10

                        }}
                    >
                        Tagihan SPP
                    </Text>
                    <Text
                        style={{
                            marginTop: 10

                        }}
                    >
                        Detail Pengiriman
                    </Text>
                    <View
                        style={{
                            flexDirection : 'row',
                            alignItems : 'center'
                        }}
                    >
                        <Image 
                            source={Icon.ic_bca}
                        />
                        <Text
                            style={{
                                fontWeight: '500',
                                color: JET_BLACK,
                                marginTop: 10,
                                top : -5

                            }}
                        >
                           - Virtual Account
                        </Text>
                    </View>
                    <Text
                        style={{
                            fontWeight : '500',
                            color : JET_BLACK
                        }}
                    >
                        326 571 531 812 101
                    </Text>
                    <Text
                        style={{
                            marginTop: 15

                        }}
                    >
                        Nominal
                    </Text>
                    <Text
                        style={{
                            fontWeight: '500',
                            color: JET_BLACK,
                            marginTop: 10

                        }}
                    >
                        Rp. 100.000
                    </Text>
                    <Text
                        style={{
                            marginTop: 10

                        }}
                    >
                        Status
                    </Text>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            color: '#FFCC00',
                            marginTop: 10

                        }}
                    >
                        Pending Pembayaran
                    </Text>

                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => {
                            setIsShowInstruksi(true)
                        }}
                    >
                        <View
                            style={{
                                padding: 15,
                                backgroundColor: LIGTH_GREEN,
                                borderRadius: 10,
                                alignItems: 'center',
                                marginTop: 32
                            }}
                        >
                            <Text
                                style={{
                                    color: WHITE
                                }}
                            >
                                Lihat Instruksi
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => {
                            navigation.navigate('Home')
                        }}
                    >
                        <View
                            style={{
                                padding: 15,
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: LIGTH_GREEN,
                                marginTop: 10,
                                alignItems: 'center'
                            }}
                        >
                            <Text
                                style={{
                                    color: LIGTH_GREEN
                                }}
                            >
                                Kembali ke tampilan awal
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <InstruksiModal
                // onAccept={}
                onVisibilityChange={setIsShowInstruksi}
                visible={isShowInstruksi}

            />

        </SafeAreaView>
    )
}
export default Kwitansi
