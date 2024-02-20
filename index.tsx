import React, { useEffect, useState, useRef } from "react";
import { Pressable, Text, Box, HStack, Circle, Input } from "native-base";
import {
  ColorValue,
  Platform,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import {
  ColorType,
  ResponsiveValue,
} from "native-base/lib/typescript/components/types";
import { ILinearGradientProps } from "native-base/lib/typescript/components/primitives/Box/types";

type PropType = {
  chipsData: Array<String>;
  setChipsData: React.Dispatch<React.SetStateAction<String[]>>;
  searchText: string;
  setSearchText: (value: React.SetStateAction<string>) => void;
  numberOfVisibleNames?: number;
  label?: string;
  labelTextColor?: ColorValue;
  inputTextColor?: ColorType;
  containerStyles?: StyleProp<ViewStyle>;
  focusedContainerStyles?: StyleProp<ViewStyle>;
  inputStyles?: StyleProp<TextStyle>;
  blurredContainerStyles?: StyleProp<ViewStyle>;
  blurredTextStyles?: StyleProp<TextStyle>;
  chipBackgroundColor?: ResponsiveValue<ColorType | ILinearGradientProps>;
  chipTextColor?: ColorType;
  selectedChipBackgroundColor?: ResponsiveValue<
    ColorType | ILinearGradientProps
  >;
  selectedChipTextColor?: ColorType;
};

export const ChipsInput = (props: PropType) => {
  const [canDeleteLastone, setCanDeleteLastone] = useState<boolean>(false);
  const [isLastRecipientSelected, setIsLastRecipientSelected] =
    useState<boolean>(false);
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const [blurredNameStr, setBlurredNameStr] = useState<string>("");

  const inputRef = useRef();

  const onKeyboardBackPress = () => {
    if (canDeleteLastone) {
      let tempData = props.chipsData;
      tempData = tempData.slice(0, -1);
      props.setChipsData(tempData);
      setCanDeleteLastone(false);
      setIsLastRecipientSelected(false);
    } else {
      setIsLastRecipientSelected(true);
      setCanDeleteLastone(true);
    }
  };

  useEffect(() => {
    if (props.chipsData?.length > 0) {
      let tempStr = "";
      //Create string with all names
      props.chipsData.map((name, index) => {
        tempStr = tempStr + name;
        if (index + 1 !== props.chipsData?.length) {
          tempStr += ", ";
        }
      });

      //Show names according to user requirement
      let numberOfVisibleNames = 2;
      //Checking for valid visible names number
      if (props?.numberOfVisibleNames) {
        if (
          props?.numberOfVisibleNames > 0 &&
          props?.numberOfVisibleNames <= props.chipsData?.length
        ) {
          numberOfVisibleNames = props?.numberOfVisibleNames;
        } else if (
          props?.numberOfVisibleNames > 0 &&
          props?.numberOfVisibleNames > props.chipsData?.length
        ) {
          numberOfVisibleNames = props.chipsData?.length;
        }
      }

      //Calculate string length for visible names
      if (props.chipsData?.length > numberOfVisibleNames) {
        let lengthBeforeSlice = 0;
        for (let i = 0; i < numberOfVisibleNames; i++) {
          lengthBeforeSlice += props.chipsData[i]?.length;

          if (i + 1 < numberOfVisibleNames) {
            lengthBeforeSlice += 2; // added 2 because of , and space except on last name
          }
        }

        //Calculate string length for hidden names
        const hiddenNames = props.chipsData?.length - numberOfVisibleNames;

        tempStr =
          tempStr.slice(0, lengthBeforeSlice) + ` & ${hiddenNames} more`;
      }

      setBlurredNameStr(tempStr);
    } else {
      setBlurredNameStr("");
    }
  }, [props.chipsData]);

  return (
    <Pressable
      style={props.containerStyles}
      flex={1}
      onPress={() => {
        inputRef?.current?.focus();
        setCanDeleteLastone(false);
        setIsLastRecipientSelected(false);
      }}
    >
      {isInputFocused ? (
        <HStack
          style={props.focusedContainerStyles}
          mt={-1}
          w="100%"
          flexWrap={"wrap"}
          alignItems="flex-start"
        >
          {props.chipsData?.map((name, index) => {
            const resLength = props.chipsData?.length;
            const isLast = isLastRecipientSelected && resLength === index + 1;

            return (
              <Box key={index} mr={2} mb={2}>
                {isLast && (
                  <Circle
                    size={3}
                    bg={props.selectedChipBackgroundColor ?? "#3179CC"}
                    position={"absolute"}
                    mr="auto"
                    ml={-1}
                    mt={-2}
                  />
                )}

                <Box
                  borderRadius={!isLast ? 20 : 0}
                  bg={
                    isLast
                      ? props.selectedChipBackgroundColor ?? "#3179CC"
                      : props.chipBackgroundColor ?? "#3179cc1a"
                  }
                  px={3}
                  py={1}
                >
                  <Text
                    fontWeight={400}
                    fontSize={15}
                    color={
                      isLast
                        ? props.selectedChipTextColor ?? "white"
                        : props.chipTextColor ?? "#3179CC"
                    }
                  >
                    {name}
                  </Text>
                </Box>

                {isLast && (
                  <Circle
                    size={3}
                    bg={props.selectedChipBackgroundColor ?? "#3179CC"}
                    ml="auto"
                    mr={-1}
                    mt={-1}
                  />
                )}
              </Box>
            );
          })}
          <Input
            placeholder={props.label}
            placeholderTextColor={props?.labelTextColor ?? "red.100"}
            style={[{ backgroundColor: "white" }, props.inputStyles]}
            minW={100}
            mt={-1}
            flex={1}
            autoFocus={true}
            ref={inputRef}
            value={props.searchText}
            onChangeText={(val) => {
              props.setSearchText(val);
            }}
            borderWidth={0}
            fontWeight={400}
            fontSize={16}
            color={props.inputTextColor ?? "black"}
            onFocus={() => {
              setIsInputFocused(true);
              setIsLastRecipientSelected(false);
              setCanDeleteLastone(false);
            }}
            onBlur={() => {
              if (Platform.OS !== "web") {
                setIsLastRecipientSelected(false);
                setCanDeleteLastone(false);
                setIsInputFocused(false);
              } else if (Platform.OS === "web") {
                setIsLastRecipientSelected(false);
                setCanDeleteLastone(false);
                setTimeout(() => {
                  setIsInputFocused(false);
                }, 500);
              }
            }}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === "Backspace" && props.searchText === "") {
                onKeyboardBackPress();
              }
            }}
          />
        </HStack>
      ) : (
        <Pressable
          style={props.blurredContainerStyles}
          pt={0.5}
          w="100%"
          minHeight={8}
          flexWrap={"wrap"}
          alignItems="flex-start"
          onPress={() => {
            setIsInputFocused(true);
          }}
        >
          <Text
            style={props.blurredTextStyles}
            fontWeight={400}
            fontSize={15}
            color={"#3179CC"}
          >
            {blurredNameStr}
          </Text>
        </Pressable>
      )}
    </Pressable>
  );
};
