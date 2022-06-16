import { StackParamList } from "@navigator/StackParamList";
import { JET_BLACK, WHITE } from "@styles/colors";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

function Chat() {
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
				children={"sen"}
				style={{
					color: JET_BLACK,
					fontSize: 18
				}}
			></Text>

		</View>
	)
}

export default Chat
