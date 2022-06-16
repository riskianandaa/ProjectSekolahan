import { StackParamList } from '@navigator/StackParamList'
import { StackScreenProps } from '@react-navigation/stack'
import { GRAY, JET_BLACK, WHITE } from '@styles/colors'
import React from 'react'
import { SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

function DetailTugas({ navigation, route }: StackScreenProps<StackParamList, 'DetailTugas'>) {
    return (
        <SafeAreaView
            style={{
                flex: 1
            }}
        >
            <ScrollView
                style={{
                    flex: 1
                }}
            >
                <View
                    style={{
                        flex: 1,
                        backgroundColor: WHITE,
                        padding: 20,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        marginTop: 50
                    }}
                >
                    <View
                        style={{
                            backgroundColor: WHITE,
                            padding: 20,
                            top: -60,
                            elevation: 2,
                            borderRadius: 15
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: '500',
                                fontSize: 20,
                                color: JET_BLACK
                            }}
                        >
                            Tugas Bab 1
                        </Text>
                        <Text
                            style={{
                                marginTop: 10
                            }}
                        >
                            Bahasa Inggris
                        </Text>
                    </View>
                    <View
                        style={{
                            marginTop: -40
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: '500',
                                color: JET_BLACK,
                                fontSize: 18
                            }}
                        >
                            Tipe Soal
                        </Text>
                        <Text
                            style={{
                                marginTop: 10
                            }}
                        >
                            Essay
                        </Text>
                        <Text
                            style={{
                                fontWeight: '500',
                                color: JET_BLACK,
                                fontSize: 18,
                                marginTop: 10
                            }}
                        >
                            Banyak Soal
                        </Text>
                        <Text
                            style={{
                                marginTop: 10
                            }}
                        >
                            1
                        </Text>
                        <Text
                            style={{
                                fontWeight: '500',
                                color: JET_BLACK,
                                fontSize: 18,
                                marginTop: 10
                            }}
                        >
                            Maksimal Nilai
                        </Text>
                        <Text
                            style={{
                                marginTop: 10
                            }}
                        >
                            70
                        </Text>
                        <Text
                            style={{
                                fontWeight: '500',
                                color: JET_BLACK,
                                fontSize: 18,
                                marginTop: 10
                            }}
                        >
                            Soal
                        </Text>
                        <Text
                            style={{
                                marginTop: 10
                            }}
                        >
                            Tropicasa De Hotel is high rated hotels with 1000+
                            reviews and we are always maintaning the quality
                            for better rating and high attitude service for you
                        </Text>
                        <Text
                            style={{
                                fontWeight: '500',
                                color: JET_BLACK,
                                fontSize: 18,
                                marginTop: 10
                            }}
                        >
                            Jawaban
                        </Text>
                        <TextInput
                            // placeholder='Isi Jawaban Anda'
                            numberOfLines={4}
                            multiline={true}
                            style={{
                                borderWidth: 1,
                                overflow: 'scroll',
                                borderColor: GRAY,
                                marginTop: 10,
                                borderRadius : 8
                            }}
                        />
                        <View
                            style={{
                                flexDirection: 'row',
                                marginTop: 20,
                                borderWidth: 1,
                                borderColor: '#EEEEEE'
                            }}
                        >
                            <View
                                style={{
                                    backgroundColor: '#EEEEEE',
                                    justifyContent: 'center',
                                    paddingHorizontal: 15
                                }}
                            >
                                <Text
                                    style={{
                                        fontWeight: '500',
                                        color: JET_BLACK
                                    }}
                                >
                                    File
                                </Text>
                            </View>

                            <TextInput
                                keyboardType='default'
                                placeholder='Tidak ada file terpilih'
                                style={{
                                    color: JET_BLACK
                                }}
                            />
                        </View>
                        <RectButton
                            style={{
                                backgroundColor: '#289FFF',
                                padding: 10,
                                marginTop: 30,
                                borderRadius : 10
                            }}
                        >
                            <Text
                                style={{
                                    textAlign: 'center',
                                    color : WHITE
                                }}
                            >
                                Kirim Jawaban
                            </Text>
                        </RectButton>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default DetailTugas
