import { StackParamList } from "@navigator/StackParamList";
import { createStackNavigator, StackNavigationOptions, TransitionPresets } from "@react-navigation/stack";
import React, { useMemo } from "react";

import Absensi from "@pages/absensi";
import Pembayaran from "@pages/pembayaran";
import Login from "@pages/login";
import Chat from "@pages/chat";
// import Home from "@pages/home";
import BottomTab from "@pages/navigation/navigation";
import MetodePembayaran from "@pages/metode-pembayaran";
import Kwitansi from "@pages/kwitansi";
import HistoryPayments from "@pages/history-payments.tsx";
import Tugas from "@pages/tugas";
import SplashScreen from "@pages/splash-screen";
import DetailTugas from "@pages/tugas/components/detail-tugas";

const Stack = createStackNavigator<StackParamList>()

function StackNavigator() {
    const screenOptions = useMemo<StackNavigationOptions>(
        () => ({
            ...TransitionPresets.SlideFromRightIOS,
            gestureEnabled: true,
            headerShown: true
        }),
        []
    )

    return (
        <Stack.Navigator
            initialRouteName="SplashScreen"
            screenOptions={screenOptions}
        >
            <Stack.Screen 
                name="SplashScreen"
                component={SplashScreen}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="BottomTab"
                component={BottomTab}
                options={{
                    headerShown : false
                }}
            />

            {/* <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            /> */}

            <Stack.Screen
                name="Chat"
                component={Chat}
            />

            <Stack.Screen
                name="Absensi"
                component={Absensi}
                options={{
                    title: 'Riwayat Absensi'
                }}
            />

            <Stack.Screen
                name="Pembayaran"
                component={Pembayaran}
                options={{
                    title: 'Pembayaran Tagihan'
                }}
            />

            <Stack.Screen 
                name="MetodePembayaran"
                component={MetodePembayaran}
                options={{
                    title : 'Metode Pembayaran'
                }}
            />

            <Stack.Screen 
                name="Kwitansi"
                component={Kwitansi}
                options={{
                    headerShown : false
                }}
            />

            <Stack.Screen 
                name="HistoryPayments"
                component={HistoryPayments}
                options={{
                    title : 'Riwayat Pembayaran'
                }}
            />

            <Stack.Screen 
                name="Tugas"
                component={Tugas}
                options={{
                    title : 'Daftar Tugas'
                }}
            />

            <Stack.Screen 
                name="DetailTugas"
                component={DetailTugas}
                options={{
                    title : 'Detail Tugas'
                }}
            />

        </Stack.Navigator>
    )
}

export default StackNavigator
