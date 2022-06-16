import React from 'react'
import { View, Image } from 'react-native'
import { Icon } from '@assets/icon'

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import { StackScreenProps } from '@react-navigation/stack'
import { StackParamList } from '@navigator/StackParamList'

import Home from './components/home'
import Chat from '@pages/chat'
import Stastik from './components/stastik'
import Jadwal from './components/jadwal'
import History from './components/history'
import { ORANGE, WHITE } from '@styles/colors'

const MaterialBottomTab = createMaterialBottomTabNavigator()

function BottomTab({}: StackScreenProps<StackParamList, 'BottomTab'>) {
  return(
    <MaterialBottomTab.Navigator
        // shifting={true}
        // labeled={false}
        initialRouteName="Home"
        activeColor= {ORANGE}
        inactiveColor="#8A94A4"
        barStyle={{ 
          backgroundColor: WHITE, 
          // position : 'absolute',
          // bottom : 20,
          // left : 20,
          // right : 20,
          elevation : 5,
          // borderRadius : 15,
          justifyContent : 'center',
          // height : 90 ,
          paddingVertical : 5,
          shadowColor: 'black',
          shadowOffset:{
            width : 0,
            height : 10
          },
          shadowOpacity : 0.5,
          shadowRadius : 3.5
        }}
      >
        <MaterialBottomTab.Screen name="Home" component={Home} 
          options={{
              tabBarIcon: ({ focused }) => (
                <View style={{ alignItems : 'center' }}>
                  <Image 
                    source={Icon.ic_home} 
                    resizeMode='contain'
                    style={{
                      height : 25,
                      width :25,
                      tintColor : focused ? ORANGE : '#8A94A4'
                    }}
                  />
                </View>
              )
            }}
        />

      <MaterialBottomTab.Screen  name='History' component={History}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{ alignItems : 'center' }}>
              <Image 
                source={Icon.ic_love} 
                resizeMode='contain'
                style={{
                  height : 25,
                  width :25,
                  tintColor : focused ? ORANGE : '#8A94A4'
                }}
              />
            </View>
          )
        }}
       />  

      <MaterialBottomTab.Screen  name='Jadwal' component={Jadwal}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{ alignItems : 'center' }}>
              <Image 
                source={Icon.ic_date} 
                resizeMode='contain'
                style={{
                  height : 25,
                  width :25,
                  tintColor : focused ? ORANGE : '#8A94A4'
                }}
              />
            </View>
          )
        }}
       />  

      <MaterialBottomTab.Screen  name='Stastik' component={Stastik}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{ alignItems : 'center' }}>
              <Image 
                source={Icon.ic_stastik} 
                resizeMode='contain'
                style={{
                  height : 25,
                  width :25,
                  tintColor : focused ? ORANGE : '#8A94A4'
                }}
              />
            </View>
          )
        }}
       /> 

    </MaterialBottomTab.Navigator>
  )
}
export default BottomTab
