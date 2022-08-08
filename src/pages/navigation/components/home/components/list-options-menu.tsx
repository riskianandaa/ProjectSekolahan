import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import { GRAY, JET_BLACK, LIGHT_GRAY, WHITE } from '@styles/colors'
import { RectButton } from 'react-native-gesture-handler'

export type ListOptionsMenuType = {
    icon: any,
    name: string,
    onPress: () => void
}

type PropsType = {
    item: ListOptionsMenuType
}

function ListOptionsMenu(props: PropsType) {
    const { item } = props

    return (
        <View
            style={{
                flex: 1
            }}
        >
            <TouchableOpacity
                activeOpacity={0.7}
                key={item.icon}
                // rippleColor={LIGHT_GRAY}
                onPress={item.onPress}
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginTop: 10,
                    borderRadius: 30
                }}
            >
                <View
                    style={{
                        borderWidth: 1,
                        borderColor: '#E1DBDB',
                        borderRadius: 30,
                        padding: 10
                    }}
                >
                    <Image
                        resizeMode='contain'
                        source={item.icon}
                        style={{
                            height: 25,
                            width: 25
                        }}
                    />
                </View>
            </TouchableOpacity>
            <View
                style={{
                    justifyContent: 'center'
                }}
            >
                <Text
                    style={{
                        fontSize: 15,
                        textAlign: 'center',
                        marginTop: 8
                    }}
                >
                    {item.name}
                </Text>
            </View>
        </View>
    )
}

export default ListOptionsMenu
