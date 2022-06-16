import { StackParamList } from '@navigator/StackParamList'
import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import { StatusBar, ScrollView, SafeAreaView, View, Text, Image } from 'react-native'
import { TextInput } from 'react-native-paper'

import { Icon } from '@assets/icon'
import { WHITE, JET_BLACK, GRAY } from '@styles/colors'
import Item, { ItemType } from './components/item'

function Tugas({ navigation, route }: StackScreenProps<StackParamList, 'Tugas'>) {
    const [setQuery, setSearchQuery] = useState('')

    const Items = [
        {
            icon: Icon.ic_payment,
            tugas: 'SPP',
            mapel: 'Bulan Mei'
        } as ItemType,
        {
            icon: Icon.ic_payment,
            tugas: 'Uang Praktik',
            mapel: 'Cicilan Uang Praktik'
        } as ItemType,
        {
            icon: Icon.ic_payment,
            tugas: 'Uang Gedung',
            mapel: 'Cicilan Uang Gedung'
        } as ItemType,
        {
            icon: Icon.ic_payment,
            tugas: 'SPP',
            mapel: 'Bulan Mei'
        } as ItemType,
        {
            icon: Icon.ic_payment,
            tugas: 'Uang Praktik',
            mapel: 'Cicilan Uang Praktik'
        } as ItemType,
        {
            icon: Icon.ic_payment,
            tugas: 'Uang Gedung',
            mapel: 'Cicilan Uang Gedung'
        } as ItemType,
        {
            icon: Icon.ic_payment,
            tugas: 'SPP',
            mapel: 'Bulan Mei'
        } as ItemType,
        {
            icon: Icon.ic_payment,
            tugas: 'Uang Praktik',
            mapel: 'Cicilan Uang Praktik'
        } as ItemType,
        {
            icon: Icon.ic_payment,
            tugas: 'Uang Gedung',
            mapel: 'Cicilan Uang Gedung'
        } as ItemType,
    ]

    useEffect(() => {
        StatusBar.setBackgroundColor('rgba(0,0,0,0)')
        StatusBar.setTranslucent
    })

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: WHITE,
                marginTop: 50,
                padding: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
            }}
        >
            <TextInput
                keyboardType="web-search"
                mode="outlined"
                outlineColor={GRAY}
                onChangeText={(text) => setSearchQuery(text)}
                // onSubmitEditing={() => {
                //     fetchEmployerList()
                // }}
                placeholder="Searh Riwayat"
                returnKeyType={'search'}
                left={(
                    <TextInput.Icon
                        name={Icon.ic_search}
                        // onPress={() => {
                        //     fetchEmployerList()
                        // }}
                        rippleColor={GRAY}
                        size={20}
                    />
                )}
                right={(
                    <TextInput.Icon
                        name={Icon.ic_filter}
                        // onPress={() => {
                        //     fetchEmployerList()
                        // }}
                        ripleColor={GRAY}
                        size={20}
                    />
                )}
                selectionColor="lightgray"
                style={{
                    backgroundColor: WHITE,
                    top: -55
                }}
                theme={{
                    colors: { primary: 'black' },
                    fonts: {
                        regular: { fontFamily: 'monoscape' }
                    },
                    roundness: 20
                }}
            />
            <ScrollView
                style={{
                    flex: 1,
                    marginTop : -55
                }}
            >
                {
                    Items.map((item, index) =>
                        <Item
                            item={item}
                            key={index.toString()}
                        />
                    )
                }
            </ScrollView>
        </View>

    )
    // async function fetchEmployerList() {
    //     setIsLoading(!isPaginating)

    //     const param = {page} as any
    //     if (searchQuery.trim() != '') param.search = searchQuery

    //     const response = await API.EmployerList(param)

    //     const {json} = response

    //     if (json && json.status == 1) {
    //         setIsLoading(false)
    //         setIsFailed(false)
    //         setIsPaginating(false)

    //         const {data: newData}: { data: FindEmployerItemModel[] } = json

    //         if (isRefreshing) setData(newData)
    //         else setData([...data, ...newData])

    //         setIsRefreshing(false)
    //         setIsLastPage(newData.length < Num.PER_PAGE)

    //         if (newData.length >= Num.PER_PAGE) setPage(current => current + 1)

    //     } else {
    //         if (isRefreshing) setData([])

    //         setIsLoading(false)
    //         setIsFailed(true)
    //         setIsRefreshing(false)
    //         setIsPaginating(false)
    //         setIsLastPage(false)
    //     }
    // }
}
export default Tugas

