import { IContact } from "@app-types/IContact";
import { Icon } from "@assets/icon";
import { JET_BLACK, LIGHT_GRAY, WHITE } from "@styles/colors";
import React, { memo } from "react";
import { Image, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

interface PlaceholderItemProps {
    onPress: Function
    item: IContact
}

function PlaceholderItem({ item, onPress }: PlaceholderItemProps) {
    const { name, email, username } = item

    return (
        <RectButton
            rippleColor={LIGHT_GRAY}
            onPress={() => {
                onPress()
            }}
            style={{
                backgroundColor: WHITE,
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 20,
                borderRadius: 6,
                marginTop: 20,
                padding: 16
            }}
        >
            <View
                style={{
                    flex: 1
                }}
            >
                <Text
                    style={{
                        color: JET_BLACK,
                        fontSize: 15,
                        fontWeight: 'bold',
                        textTransform: 'capitalize'
                    }}
                >{name}
                </Text>

                <Text
                    style={{
                        color: JET_BLACK,
                    }}
                >Username: {username}
                </Text>

                <Text
                    style={{
                        color: 'rgba(0, 0, 0, 0.55)',
                    }}
                >Email: {email}
                </Text>

            </View>

            <View

            >
                <Image
                    source={Icon.ic_back}
                    style={{
                        height: 24,
                        resizeMode: 'contain',
                        width: 24,
                    }}
                />
            </View>

        </RectButton>
    )
}

export default memo(PlaceholderItem)
