import React, { forwardRef, memo } from "react";
import { Portal } from "react-native-portalize";
import { Modalize, ModalizeProps } from "react-native-modalize";
import { Easing, View } from "react-native";

interface Props {
    children?: React.ReactNode
    sheetProps: ModalizeProps
}

function AppBottomSheetGrip() {
    return (
        <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                borderTopEndRadius: 20,
                borderTopStartRadius: 20,
                height: 28
            }}
        >
            <View
                style={{
                    backgroundColor: 'lightgray',
                    borderRadius: 20,
                    height: 4,
                    width: 50,
                }}
            />

        </View>
    )
}

const AppBottomSheet = forwardRef<Modalize, Props>((props, ref) => {
    const {children, sheetProps} = props
    return (
        <Portal>
            <Modalize
                {...sheetProps}
                ref={ref}
                adjustToContentHeight
                closeAnimationConfig={{
                    timing: {
                        duration: 350,
                        delay: 0,
                        easing: Easing.ease,
                        isInteraction: true
                    }
                }}
                modalStyle={{
                    borderRadius: 20,
                    borderTopEndRadius: 20,
                    borderTopStartRadius: 20,
                    margin: 20,
                    overflow: 'hidden'
                }}
                overlayStyle={{
                    backgroundColor: 'rgba(0, 0, 0, 0.4)'
                }}
                HeaderComponent={AppBottomSheetGrip}
                handlePosition={'inside'}
                handleStyle={{
                    backgroundColor: 'transparent'
                }}
                closeOnOverlayTap
                panGestureEnabled
                tapGestureEnabled={false}
                threshold={75}
                withHandle
            >
                {children}

            </Modalize>

        </Portal>
    )
})

export default memo(AppBottomSheet)
