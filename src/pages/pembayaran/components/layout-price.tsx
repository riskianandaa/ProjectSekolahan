import { Icon } from '@assets/icon'
import { JET_BLACK } from '@styles/colors'
import React from 'react'
import { Image, Text, View } from 'react-native'

export type NamaBulan = {
    nama : string,
    // nama1 : string
}

type PropsType = {
    item : NamaBulan
    // data : NamaBulan
}


function LayoutPrice(props : PropsType) {
    const { item } = props

    return(
        <View
        style={{
            flexDirection: 'row',
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
                />
                <View
                    style={{
                        flexDirection : 'column'
                    }}
                >
                <Text
                    style={{
                        fontWeight: '700',
                        color: JET_BLACK,
                        marginLeft : 5
                    }}
                >
                    {item.nama}
                </Text>
                </View>
            </View>
        </View>
        <View
            style={{
                marginLeft : 120
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
                    {/* {data.nama1} */}
                </Text>
            </View>
        </View>

    </View>
    )
}
export default LayoutPrice
