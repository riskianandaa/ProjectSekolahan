import { GRAY, JET_BLACK, ORANGE, PURPLE, WHITE, WHITESMOKE } from '@styles/colors'
import React from 'react'
import { Text, View } from 'react-native'
import { ListItemDataAbsen } from './list-item-data-absensi'

export type ListDataAbsenType = {
    data: ListItemDataAbsen
}

function ListDataAbsen(props: ListDataAbsenType) {
    const { data } = props
    const { type, date_time, descriptions, typeData } = data

    return (
        <View
            style={{
                backgroundColor: WHITE,
                padding: 20,
                marginHorizontal: 20,
                marginVertical: 10,
                borderRadius: 20
            }}
        >
            <View
                style={{
                    flexDirection: 'row'
                }}
            >
                <View
                    style={{
                        backgroundColor: WHITE,
                        height: 12,
                        width: 12,
                        borderRadius: 6,
                        borderColor: typeData ? PURPLE : ORANGE,
                        borderWidth: 2,
                        top: 4
                    }}
                />
                <Text
                    style={{
                        marginLeft: 10,
                        fontWeight: 'bold',
                        color: JET_BLACK
                    }}
                >
                    {type}
                </Text>
            </View>

            <View
                style={{
                    marginLeft: 20
                }}
            >
                <Text
                    style={{
                        marginTop: 5
                    }}
                >
                    {date_time}
                </Text>

                <View
                    style={{
                        padding: 10,
                        borderWidth: 1,
                        borderColor: GRAY,
                        borderRadius: 20,
                        marginTop: 10,
                        width: 130,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'monospace',
                            color: typeData ? PURPLE : ORANGE,
                            textAlign: 'center'
                        }}
                    >
                        {descriptions}
                    </Text>
                </View>
            </View>

        </View>
    )
}
export default ListDataAbsen
