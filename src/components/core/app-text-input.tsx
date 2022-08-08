import { Icon } from '@assets/icon';
import { GREEN_DARK, GREEN_GRAY, JET_BLACK, LIGHT_GRAY } from '@styles/colors';
import { ROBOTO_REGULAR } from "@styles/fonts";
import React, { ForwardedRef, forwardRef, memo, useState } from 'react';
import { Text, TextInput, TextInputProps, View, ViewProps } from 'react-native';
import AppHelperTest from './app-helper-test';

interface Props {
  label: string
  inputProps: TextInputProps
  viewProps: ViewProps
  isError?: boolean
  errorText?: string
}

function DefaultTextInput(props: Props, ref: ForwardedRef<TextInput>) {
  const {
    label,
    inputProps,
    viewProps,
    isError,
    errorText
  } = props

  const [isFocus, setIsFocus] = useState(false)

  return (
    <View
      {...viewProps}
      style={[
        { ...viewProps }.style
      ]}
    >
      <Text
        style={{
          color: isError ? GREEN_DARK : LIGHT_GRAY,
          fontFamily: ROBOTO_REGULAR,
          fontSize: 14,
        }}
      >{label}
      </Text>

      <TextInput
        {...inputProps}
        ref={ref}
        onBlur={function onBlur() {
          setIsFocus(false)
        }}
        onFocus={function onFocus() {
          setIsFocus(true)
        }}
        style={[
          { ...inputProps }.style,
          {
            fontFamily: ROBOTO_REGULAR,
            minHeight: 50,
            borderColor: getBorderColor(),
            borderWidth: 1,
            borderRadius: 10,
            marginTop: 8,
            paddingHorizontal: 16,
            paddingVertical: 2
          }
        ]}
      />

      {
        isError ?
          <AppHelperTest
            caption={errorText ?? '-'}
            textColor={GREEN_GRAY}
            icon={Icon.ic_back}
          />
          :
          null
      }

    </View>
  )

  function getBorderColor() {
    if (isError) return GREEN_DARK
    if (isFocus) return JET_BLACK
    return 'pink'
  }
}

export default memo(forwardRef<TextInput, Props>(DefaultTextInput))
