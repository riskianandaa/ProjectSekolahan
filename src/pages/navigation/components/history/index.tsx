import { StackParamList } from "@navigator/StackParamList";
import { StackScreenProps } from "@react-navigation/stack";
import { JET_BLACK, WHITE } from "@styles/colors";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

function History({navigation, route}: StackScreenProps<StackParamList, 'History'>) {
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
				children={"History"}
				style={{
					color: JET_BLACK,
					fontSize: 18
				}}
			></Text>

		</View>
	)
}

export default History
