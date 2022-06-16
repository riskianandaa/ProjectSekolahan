import { StackParamList } from "@navigator/StackParamList";
import { StackScreenProps } from "@react-navigation/stack";
import { JET_BLACK, WHITE } from "@styles/colors";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

function Jadwal({navigation, route}:  StackScreenProps<StackParamList, 'Jadwal'>) {
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
				children={"Jadwal"}
				style={{
					color: JET_BLACK,
					fontSize: 18
				}}
			></Text>

		</View>
	)
}

export default Jadwal
