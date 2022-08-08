import Strings from '@constants/strings'
import { StackParamList } from '@navigator/StackParamList'
import { StackScreenProps } from '@react-navigation/stack'
import { GRAY, GREEN_DARK, JET_BLACK, PURPLE, WHITE, WHITESMOKE } from '@styles/colors'
import moment from 'moment'
import React, { useEffect, useRef } from 'react'
import { SafeAreaView, ScrollView, View, Text, StatusBar, Dimensions } from 'react-native'

import { Calendar, CalendarList, LocaleConfig } from 'react-native-calendars'
import { ListItemDataAbsen } from './components/list-item-data-absensi'
import ListAbsen from './components/listDataAbsen'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

LocaleConfig.locales['Eng'] = {
    monthNames: [
        'Januari',
        'Februari',
        'Maret',
        'april',
        'Mei',
        'Juni',
        'Juli',
        'Agustus',
        'September',
        'Oktober',
        'November',
        'Desember'
    ],
    monthNamesShort: ['Jan.', 'Feb.', 'Mar', 'Apr', 'Mey', 'Jun', 'Jul.', 'Aug', 'Sep.', 'Oct.', 'Nov.', 'Des.'],
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    today: "Today"
};
LocaleConfig.defaultLocale = 'Eng';

function Absensi({ navigation, route }: StackScreenProps<StackParamList, 'Absensi'>) {
    const refCalendar = useRef<CalendarList>(null)
    const today = new Date()
    const todayString = moment(today).format(Strings.dateFormat)
    const Listabsen = [
        {
            type: 'Absen Masuk - Berhasil',
            date_time: '10 Juni 2022, 07:00 WIB',
            descriptions: 'Tepat Waktu',
            typeData: true
        } as ListItemDataAbsen,
        {
            type: 'Absen Keluar - Berhasil',
            date_time: '10 Juni 2022, 16:00 WIB',
            descriptions: 'Tepat Waktu',
            typeData: false
        } as ListItemDataAbsen
    ]

    useEffect(() => {
        StatusBar.setBackgroundColor(WHITE)
    }, [])

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: WHITESMOKE
            }}
        >
            <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: WHITESMOKE
                }}
            >

                <CalendarList
                    ref={refCalendar}
                    markingType={'period'}
                    horizontal
                    pagingEnabled
                    hideArrows={false}
                    calendarHeight={Dimensions.get('window').width - 40}
                    calendarWidth={Dimensions.get('window').width - 40}
                    maxDate={todayString}
                    markedDates={{
                        '2022-06-10': {
                            customStyles: {
                                container: {
                                    backgroundColor: PURPLE
                                },
                                text: {
                                    color: 'white',
                                    fontWeight: 'bold'
                                }
                            }
                        }
                    }}
                    // onDayPress={day => {
                    //     onDayClicked(day)
                    // }}
                    // markedDates={getMarkedDates()}
                    style={{
                        alignSelf: 'center',
                        height: Dimensions.get('window').width - 40,
                        width: Dimensions.get('window').width - 40,
                    }}
                    renderArrow={(direction) => (
                        <MaterialIcon
                            name={direction == 'left' ? 'chevron-left' : 'chevron-right'}
                            size={24}
                            color='dimgray'
                        />
                    )}
                    theme={{
                        todayTextColor: GREEN_DARK,
                        dayTextColor: '#2d4150'
                    }}
                />
                <Text
                    style={{
                        fontWeight: 'bold',
                        color: JET_BLACK,
                        padding: 20
                    }}
                >
                    Riwayat Absensi
                </Text>

                <View>
                    {
                        Listabsen.map((data, index) =>
                            <ListAbsen
                                data={data}
                                key={index.toString()}
                            />
                        )
                    }
                </View>

            </ScrollView>

        </SafeAreaView >
    )
}
export default Absensi
