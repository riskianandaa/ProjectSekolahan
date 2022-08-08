import { GRAY, JET_BLACK, LIGHT_GRAY, WHITE } from '@styles/colors'
import React from 'react'
import { View, Text, Image} from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

export type ItemType = {
    icon: any,
    tugas: string,
    mapel: string,
    onPress : () => void
}

type PropsType = {
    item: ItemType
}

function Item(props: PropsType) {
    const { item } = props

    return (
        <RectButton
            onPress={item.onPress}
            rippleColor={LIGHT_GRAY}
            activeOpacity={0.5}
            style={{
                borderRadius: 6,
                marginTop : 10
            }}
        >
            <View
                style={{
                    marginTop: 10,
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
                            marginTop : 5,
                            fontSize : 12
                        }}
                    >
                        {item.mapel}
                    </Text>
                </View>
            </View>
        </RectButton>
    )
}
export default Item
