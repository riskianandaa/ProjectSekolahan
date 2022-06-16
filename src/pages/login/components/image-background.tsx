import { Illustration } from '@assets/illustration'
import React from 'react'
import { Dimensions, ImageBackground } from 'react-native'

function BackgroundImage() {
    return (
        <ImageBackground
            resizeMode='contain'
            source={Illustration.ic_login}
            style={{
                height: 330,
                width: Dimensions.get('window').width / 16 * 13,
                marginLeft : 40,
                alignSelf: 'center',
            }}
        />
    )
}
export default BackgroundImage
