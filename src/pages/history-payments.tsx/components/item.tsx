import { GRAY, JET_BLACK, WHITE } from '@styles/colors'
import React from 'react'
import { View, Text, Image } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

export type ItemType = {
    icon: any,
    tugas: string,
    mapel: string
}

type PropsType = {
    item: ItemType
}

function Item(props: PropsType) {
    const { item } = props

    return (
        <View
            style={{
                marginTop: 20,
                flexDirection: 'row',
                alignItems: 'center'
            }}
        >
            <Image
                source={item.icon}
            />
            <View
                style={{
                    marginLeft: 10
                }}
            >
                <Text
                    style={{
                        fontWeight : '500',
                        color : JET_BLACK
                    }}
                >
                    {item.tugas}
                </Text>
                <Text
                    style={{
                        fontSize : 12,
                        marginTop : 5
                    }}
                >
                    {item.mapel}
                </Text>
            </View>
        </View>
    )
}
export default Item
