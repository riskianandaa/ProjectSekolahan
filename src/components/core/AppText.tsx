/**
 * This is an example of wrapping react-native component.
 * To start, wrap react-native (or anything else you want) component, customize it.
 * Then use it on every aspect of your app
 */

import React from "react";
import { Text, TextProps } from "react-native";
import { JET_BLACK } from "@styles/Colors";

interface Props {
	textProps: TextProps
}

function AppText({ textProps }: Props) {
	return (
		<Text
			{...textProps}
			style={[
				{ ...textProps }.style,
				{
					color: JET_BLACK,
					fontWeight: 'bold'
				}
			]}
		/>
	)
}

export default AppText
