import { Icon } from '@assets/icon'
import { JET_BLACK, LIGTH_BLUE, WHITE } from '@styles/colors'
import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { PaketPembayaran } from './paket-pembayaran'

interface TypeItemProps {
    item: PaketPembayaran
    isSelected: boolean
    onPress: Function
}

// export type data = {
//     id: number,
//     desc: string
// }

function TypeItem(props: TypeItemProps) {
    const { isSelected, item, onPress } = props
    // const { id, desc } = item
    // console.log('data:', JSON.stringify(item, null, 2))

    return (
        <View
            style={{
                marginTop: 10,
                padding: 20,
                backgroundColor: WHITE
            }}
        >
            <Text
                style={{
                    fontWeight: '500',
                    color: JET_BLACK,

                }}
            >
                Daftar Tagihan Siswa
            </Text>

            <View
                style={{
                    marginTop: 10,
                    padding: 10,
                    borderRadius: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#EEEEEE'
                }}
            >
                <TouchableOpacity
                    onPress={() => {
                        onPress()
                    }}
                >
                    <Image
                        source={isSelected ?  Icon.ic_radio_button : Icon.ic_outer}
                        style={{
                            height: 15,
                            width: 15
                        }}
                    />
                </TouchableOpacity>
                <Text
                    style={{
                        marginLeft: 5
                    }}
                >
                    {item.desc}
                </Text>
            </View>

        </View>
    )
}
export default TypeItem
