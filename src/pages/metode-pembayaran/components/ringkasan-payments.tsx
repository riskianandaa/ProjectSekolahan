import { JET_BLACK, WHITE } from '@styles/colors'
import React from 'react'
import { View, Text } from 'react-native'

function RingkasanPayments(){
    return(
        <View
            style={{
                padding : 20,
                backgroundColor : WHITE,
            }}
        >
            <Text
                style={{
                    fontWeight : '500',
                    color : JET_BLACK
                }}
            >
                Ringkasan Pembayaran
            </Text>

            <View
                style={{
                    marginTop : 5,
                    flexDirection : 'row',
                    justifyContent : 'space-between'
                }}
            >
                <Text
                    style={{
                        fontFamily : 'poppins'
                    }}
                >
                    Total Tagihan
                </Text>
                <Text
                    style={{
                        fontFamily : 'poppins'
                    }}
                >
                    Rp. 100.000
                </Text>
            </View>
            <View
                style={{
                    marginTop : 5,
                    flexDirection : 'row',
                    justifyContent : 'space-between'
                }}
            >
                <Text
                    style={{
                        fontFamily : 'poppins'
                    }}
                >
                    Biaya Layanan
                </Text>
                <Text
                    style={{
                        fontFamily : 'poppins'
                    }}
                >
                    Rp. 3.000
                </Text>
            </View>
            <View
                style={{
                    marginTop : 5,
                    flexDirection : 'row',
                    justifyContent : 'space-between'
                }}
            >
                <Text
                    style={{
                        fontFamily : 'poppins'
                    }}
                >
                    Pajak PPN
                </Text>
                <Text
                    style={{
                        fontFamily : 'poppins'
                    }}
                >
                    Rp.0
                </Text>
            </View>

        </View>
    )
}
export default RingkasanPayments
