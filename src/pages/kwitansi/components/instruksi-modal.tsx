// import React from 'react'
// import { Modal, Text, TouchableOpacity, View } from 'react-native'

// type PropsType = {
//     // onAccept: () => void,
//     onVisibilityChange: (visible: boolean) => void,
//     visible: boolean
// }

// export default function(props: PropsType) {
//     return (
//         <Modal
//             onRequestClose = {() => props.onVisibilityChange(false)}
//             transparent
//             visible = {props.visible}
//         >
//             <View
//                 style = {{
//                     flex: 1
//                 }}
//             >
//                 <TouchableOpacity
//                     activeOpacity = {0.9}
//                     onPress = {() => props.onVisibilityChange(false)}
//                     style = {{
//                         backgroundColor: 'rgba(0, 0, 0, 0.6)',
//                         bottom: 0,
//                         left: 0,
//                         position: 'absolute',
//                         right: 0,
//                         top: 0
//                     }}
//                 />

//                 <View
//                     pointerEvents = "box-none"
//                     style = {{
//                         alignItems: 'center',
//                         flex: 1,
//                         justifyContent: 'center'
//                     }}
//                 >
//                     <View
//                         style = {{
//                             backgroundColor: 'white',
//                             padding: 20,
//                             width: 300,
//                             borderRadius :10
//                         }}
//                     >
//                         <Text
//                             style = {{
//                                 fontWeight: 'bold',
//                                 fontSize: 18,
//                                 marginBottom: 20,
//                                 textAlign: 'center'
//                             }}
//                         >
//                             Instruksi Pembayaran
//                         </Text>

//                         <Text>
//                             Pengajuan CV ta'aruf akan dikirimkan, lanjutkan?
//                         </Text>

//                         <View
//                             style = {{
//                                 flexDirection: 'row',
//                                 marginTop: 20
//                             }}
//                         >
//                             <TouchableOpacity
//                                 onPress = {() => props.onVisibilityChange(false)}
//                                 style = {{
//                                     flex: 1,
//                                     paddingTop: 10
//                                 }}
//                             >
//                                 <Text
//                                     style = {{
//                                         color: 'deepskyblue',
//                                         textAlign: 'center'
//                                     }}
//                                 >
//                                     BATALKAN
//                                 </Text>
//                             </TouchableOpacity>

//                             {/* <TouchableOpacity
//                                 onPress = {props.onAccept}
//                                 style = {{
//                                     flex: 1,
//                                     paddingTop: 10
//                                 }}
//                             >
//                                 <Text
//                                     style = {{
//                                         color: 'red',
//                                         textAlign: 'center'
//                                     }}
//                                 >
//                                     YA
//                                 </Text>
//                             </TouchableOpacity> */}
//                         </View>
//                     </View>
//                 </View>
//             </View>
//         </Modal>
//     )
// }
import { Icon } from '@assets/icon'
import { JET_BLACK, WHITE } from '@styles/colors'
import React, { useState } from 'react'
import { Image, Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native'

type PropsType = {
    // onAccept: () => void,
    onVisibilityChange: (visible: boolean) => void,
    visible: boolean
}

{/* Login ke internet banking Bank BCA Anda
Pilih menu Transaksi lalu klik menu Virtual Account Billing
Masukkan Nomor VA (326571531812101) lalu pilih Rekening Debit
Detail transaksi akan ditampilkan, pastikan data sudah sesuai
Masukkan respon key BCA appli 2
Transaksi sukses, simpan bukti transaksi Anda */}

export default function (props: PropsType) {
    const [step] = useState([
        {
            text: '- Masukkan kartu Anda'
        },
        {
            text: '- Pilih Bahasa'
        },
        {
            text: '- Masukkan PIN ATM Anda'
        },
        {
            text: '- Kemudian, pilih Menu Lainnya'
        },
        {
            text: '- Pilih Transfer dan pilih jenis rekening yang akan digunakan (Contoh: Dari rekening Tabungan)'
        },
        {
            text: '- Pilih Virtual Account Billing.Masukkan Nomor VA(326571531812101)'
        },
        {
            text: '- Tagihan yang harus dibayarkan akan muncul pada layar konfirmasi'
        },
        {
            text: '- Konfirmasi, apabila telah selesai, lanjutkan transaksi'
        },
        {
            text: '- Transaksi Anda telah selesai'
        }
    ])
    const [stepPayment] = useState([
        {
            text: '- Login ke internet banking Bank BCA Anda'
        },
        {
            text: '- Pilih menu Transaksi lalu klik menu Virtual Account Billing'
        },
        {
            text: '- Masukkan Nomor VA (326571531812101) lalu pilih Rekening Debit'
        },
        {
            text: '- Detail transaksi akan ditampilkan, pastikan data sudah sesuai'
        },
        {
            text: '- Masukkan respon key BCA appli 2'
        },
        {
            text: '- Transaksi sukses, simpan bukti transaksi Anda'
        }
    ])
    return (
        <Modal
            onRequestClose={() => props.onVisibilityChange(false)}
            transparent
            visible={props.visible}
        >
            <View
                style={{
                    flex: 1,
                    justifyContent : 'center'
                }}
            >
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => props.onVisibilityChange(false)}
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        bottom: 0,
                        left: 0,
                        position: 'absolute',
                        right: 0,
                        top: 0
                    }}
                />

                <View
                    pointerEvents="box-none"
                    style={{
                        alignItems: 'center',
                        padding: 20,
                        justifyContent: 'center'
                    }}
                >
                    <ScrollView
                        style={{
                            backgroundColor: WHITE,
                            padding: 15,
                            borderRadius : 10
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                        >
                            <TouchableOpacity
                                onPress={() => props.onVisibilityChange(false)}
                            >
                                <Image
                                    source={Icon.ic_path}
                                />
                            </TouchableOpacity>
                            <Text
                                style={{
                                    marginLeft: 10,
                                    fontWeight: '700',
                                    color: JET_BLACK
                                }}
                            >
                                Instruksi Pembayaran
                            </Text>
                        </View>
                        <Text
                            style={{
                                marginTop: 10,
                                fontWeight: '700',
                                color: JET_BLACK
                            }}
                        >
                            ATM BCA
                        </Text>

                        {
                            step.map((item, index) => {
                                return (
                                    <Text
                                        key={index}
                                        style={{
                                            fontSize : 12
                                        }}
                                    >
                                        {item.text}
                                    </Text>
                                )
                            })
                        }
                        <View
                            style={{
                                marginTop: 20
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: '700',
                                    color : JET_BLACK
                                }}
                            >
                                Internet Banking
                            </Text>
                            {
                                stepPayment.map((item, index) => {
                                    return (
                                        <Text
                                            key={index}
                                            style={{
                                                fontSize : 12
                                            }}
                                        >
                                            {item.text}
                                        </Text>
                                    )
                                })
                            }
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    )
}
