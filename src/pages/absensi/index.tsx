import { StackParamList } from '@navigator/StackParamList'
import { StackScreenProps } from '@react-navigation/stack'
import { GRAY, JET_BLACK, PURPLE, WHITE } from '@styles/colors'
import React, { useEffect } from 'react'
import { SafeAreaView, ScrollView, View, Text, StatusBar } from 'react-native'

import { Calendar, LocaleConfig } from 'react-native-calendars'
import { ListItemDataAbsen } from './components/list-item-data-absensi'
import ListAbsen from './components/listDataAbsen'

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
    dayNames: ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    today: "Today"
  };
  LocaleConfig.defaultLocale = 'Eng';

function Absensi ({navigation, route}: StackScreenProps<StackParamList, 'Absensi'>) {

    const Listabsen = [
        {
            type : 'Absen Masuk - Berhasil',
            date_time : '10 Juni 2022, 07:00 WIB',
            descriptions : 'Tepat Waktu',
            typeData : true
        } as ListItemDataAbsen,
        {
            type : 'Absen Keluar - Berhasil',
            date_time : '10 Juni 2022, 16:00 WIB',
            descriptions : 'Tepat Waktu',
            typeData : false
        } as ListItemDataAbsen
    ]

    useEffect(() =>{
    StatusBar.setBackgroundColor(WHITE)
    }, [])

    return(
        <SafeAreaView
            style={{
                flex : 1,
                backgroundColor : '#FAFAFA'
            }}
        >
            <ScrollView
                style={{
                    flex : 1,
                }}
                >

                <View
                    style={{
                        flex : 1,
                    }}
                    >
                        <Calendar
                            onDayPress={day => {
                                console.log('selected day', day);
                            }}
                            onDayLongPress={day => {
                                console.log('selected day', day);
                            }}
                            markingType={'custom'}
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
                            style={{
                                // marginTop : 5
                              }}
                              theme={{
                                backgroundColor: '#ffffff',
                                calendarBackground: '#ffffff',
                                textSectionTitleColor: '#b6c1cd',
                                textSectionTitleDisabledColor: '#d9e1e8',
                                selectedDayBackgroundColor: '#00adf5',
                                selectedDayTextColor: '#ffffff',
                                todayTextColor: '#00adf5',
                                dayTextColor: '#2d4150',
                                textDisabledColor: '#d9e1e8',
                                dotColor: '#00adf5',
                                selectedDotColor: '#ffffff',
                                arrowColor: JET_BLACK,
                                disabledArrowColor: '#d9e1e8',
                                monthTextColor: JET_BLACK,
                                indicatorColor: 'blue',
                                textDayFontFamily: 'monospace',
                                textMonthFontFamily: 'monospace',
                                textDayHeaderFontFamily: 'monospace',
                                textDayFontWeight: 'bold',
                                textMonthFontWeight: 'bold',
                                textDayHeaderFontWeight: 'bold',
                                textDayFontSize: 16,
                                textMonthFontSize: 16,
                                textDayHeaderFontSize: 16
                              }}
                        />
                
                        <Text
                            style={{
                                fontWeight : 'bold',
                                fontFamily : 'monospace',
                                color : JET_BLACK,
                                padding : 20
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

                </View>

            </ScrollView>

        </SafeAreaView>
    )
}
export default Absensi
