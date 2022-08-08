import { Icon } from '@assets/icon'
import { LIGHT_GRAY } from '@styles/colors'
import { ROBOTO_REGULAR } from '@styles/fonts'
import React, { memo } from 'react'
import { ColorValue, Image, ImageSourcePropType, Text, View } from 'react-native'

interface Props {
	icon?: ImageSourcePropType
	caption: string
	textColor?: ColorValue
}

function HelperText({ caption, icon, textColor }: Props) {
	return (
		<View
			style={{
				alignItems: 'center',
				flexDirection: 'row',
				marginTop: 10
			}}
		>
			<Image
				source={icon ?? Icon.ic_back}
				style={{
					height: 16,
					resizeMode: 'contain',
					width: 16
				}}
			/>

			<Text
				style={{
					color: textColor != undefined ? textColor : LIGHT_GRAY,
					fontFamily: ROBOTO_REGULAR,
					fontSize: 12,
					marginStart: 6
				}}
			>{caption}
			</Text>

		</View>
	)
}

export default memo(HelperText)
