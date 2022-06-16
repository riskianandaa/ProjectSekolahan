import { JET_BLACK, WHITE } from '@styles/colors'
import React from 'react'
import { Image, Text, View } from 'react-native'

import { Icon } from '@assets/icon'
import { TextInput } from 'react-native-gesture-handler'

function TypePrice() {
    return (
        <View
            style={{
                flex: 1,
                marginTop: 5,
                padding: 20,
                backgroundColor: WHITE
            }}
        >
            <Text
                style={{
                    fontWeight: '500',
                    color: JET_BLACK
                }}
            >
                Detail Tagihan
            </Text>

            <View
                style={{
                    marginTop: 15
                }}
            >
                <View
                    style={{
                        backgroundColor: '#EFF2FF',
                        padding: 15
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            source={Icon.ic_checklist}
                        />
                        <Text
                            style={{
                                marginLeft : 15,
                                fontWeight : '500',
                                color : JET_BLACK
                            }}
                        >
                            Terbayar
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: 'bold',
                                color: JET_BLACK,
                                fontSize: 24
                            }}
                        >
                            RP. 50.000
                        </Text>
                        <Text
                            style={{
                                marginLeft: 5,
                                fontSize : 10,
                                top : 4
                            }}
                        >
                            / Rp. 3.000.000
                        </Text>
                    </View>
                </View>
            </View>

            <View
                style={{
                    flexDirection : 'row',
                    marginTop : 20,
                    borderWidth : 1,
                    borderColor : '#EEEEEE'
                }}
            >
                <View
                    style={{
                        backgroundColor : '#EEEEEE',
                        justifyContent : 'center',
                        padding : 10,
                        paddingHorizontal : 15
                    }}
                >
                    <Text
                        style={{
                            fontWeight : '500',
                            color : JET_BLACK
                        }}
                    >
                        Rp.
                    </Text>
                </View>
                
                <TextInput
                    keyboardType='phone-pad'
                    placeholder='Nominal Bayar'
                    style={{
                        color : JET_BLACK
                    }}
                />
            </View>
        </View>
    )
}
export default TypePrice