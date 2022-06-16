import { JET_BLACK, WHITE } from '@styles/colors'
import React from 'react'
import { Image, Text, View } from 'react-native'

import { Icon } from '@assets/icon'

function Price() {
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
                    marginTop: 15,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <View
                    style={{
                        backgroundColor: '#EFF2FF',
                        padding: 10,
                        paddingHorizontal : 35

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
                        <Text>
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
                            3
                        </Text>
                        <Text
                            style={{
                                marginLeft: 5
                            }}
                        >
                            x bulan
                        </Text>
                    </View>
                </View>

                <View
                    style={{
                        backgroundColor: '#FFE6E7',
                        padding: 10,
                        paddingHorizontal : 25
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            source={Icon.ic_x}
                        />
                        <Text
                            style={{
                                marginLeft: 5
                            }}
                        >
                            Belum Dibayar
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
                            9
                        </Text>
                        <Text
                            style={{
                                marginLeft: 5
                            }}
                        >
                            x bulan
                        </Text>
                    </View>
                </View>
            </View>


            <View
                style={{
                    flexDirection: 'row',
                    // justifyContent : 'space-between'
                }}
            >
                <View>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 20,
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            source={Icon.ic_checklist}
                            style={{
                                height : 22
                            }}
                        />
                        <Text
                            style={{
                                fontWeight: '700',
                                color: JET_BLACK,
                                marginLeft : 5
                            }}
                        >
                            Januari
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 20,
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            source={Icon.ic_checklist}
                            style={{
                                height : 22
                            }}
                        />
                        <Text
                            style={{
                                fontWeight: '700',
                                color: JET_BLACK,
                                marginLeft : 5
                            }}
                        >
                            Februari
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 20,
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            source={Icon.ic_rectangle}
                        />
                        <Text
                            style={{
                                fontWeight: '700',
                                color: JET_BLACK,
                                marginLeft : 5
                            }}
                        >
                            Maret
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 20,
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            source={Icon.ic_rectangle}
                        />
                        <Text
                            style={{
                                fontWeight: '700',
                                color: JET_BLACK,
                                marginLeft : 5
                            }}
                        >
                            April
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 20,
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            source={Icon.ic_rectangle}
                        />
                        <Text
                            style={{
                                fontWeight: '700',
                                color: JET_BLACK,
                                marginLeft : 5
                            }}
                        >
                            Mei
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 20,
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            source={Icon.ic_rectangle}
                        />
                        <Text
                            style={{
                                fontWeight: '700',
                                color: JET_BLACK,
                                marginLeft : 5
                            }}
                        >
                            Juni
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        marginLeft : 100
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 20,
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            source={Icon.ic_rectangle}
                        />
                        <Text
                            style={{
                                fontWeight: '700',
                                color: JET_BLACK,
                                marginLeft : 5
                            }}
                        >
                            Juli
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 20,
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            source={Icon.ic_rectangle}
                        />
                        <Text
                            style={{
                                fontWeight: '700',
                                color: JET_BLACK,
                                marginLeft : 5
                            }}
                        >
                            Agustus
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 20,
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            source={Icon.ic_rectangle}
                        />
                        <Text
                            style={{
                                fontWeight: '700',
                                color: JET_BLACK,
                                marginLeft : 5
                            }}
                        >
                            September
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 20,
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            source={Icon.ic_rectangle}
                        />
                        <Text
                            style={{
                                fontWeight: '700',
                                color: JET_BLACK,
                                marginLeft : 5
                            }}
                        >
                            Oktober
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 20,
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            source={Icon.ic_rectangle}
                        />
                        <Text
                            style={{
                                fontWeight: '700',
                                color: JET_BLACK,
                                marginLeft : 5
                            }}
                        >
                            November
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 20,
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            source={Icon.ic_rectangle}
                        />
                        <Text
                            style={{
                                fontWeight: '700',
                                color: JET_BLACK,
                                marginLeft : 5
                            }}
                        >
                            Desember
                        </Text>
                    </View>
                </View>
            </View>

        </View>
    )
}
export default Price