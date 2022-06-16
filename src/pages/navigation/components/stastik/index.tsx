import { StackParamList } from "@navigator/StackParamList";
import { StackScreenProps } from "@react-navigation/stack";
import { JET_BLACK, WHITE } from "@styles/colors";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

function Stastik({navigation, route}: StackScreenProps<StackParamList, 'Stastik'>) {
	return (
		<View
			style={{
				backgroundColor: WHITE,
				alignItems: 'center',
				flex: 1,
				justifyContent: 'center'
			}}
		>

			<Text
				children={"Stastik"}
				style={{
					color: JET_BLACK,
					fontSize: 18
				}}
			></Text>

		</View>
	)
}

export default Stastik
