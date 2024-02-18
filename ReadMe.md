# React Native Chips Input

An easy to use custom chips input component, built using native-base. This can be used for both react and react native.

## Getting Started

`npm i react-native-chips-input`

`yarn add react-native-chips-input`

## Default Usage

```
import { ChipsInput } from "react-native-chips-input";

const [searchText, setSearchText] = useState<string>("");
const [data, setData] = useState<Array<String>>([
    "Jakson",
    "Taylor",
    "Kyle",
  ]);

useEffect(() => {
    setData((val) => [...val, recipientObject?.firstName]);
}, [apiResponse])

<ChipsInput
    chipsData={data}
    setChipsData={setData}
    searchText={searchText}
    setSearchText={setSearchText}
    containerStyles={{ borderBottomWidth: 1, borderBottomColor: "#D3D9DF" }}
/>
```

## Desktop view

![DesktopDemo](https://github.com/tanishbawa/react-native-chips/assets/44227602/5551d451-ca92-4e2a-bfd2-aedd748b10ea)

## Device view

![DeviceDemo](https://github.com/tanishbawa/react-native-chips/assets/44227602/2a57858f-fcff-4f26-96a5-fdb308015a20)

## Properties for ChipsInput

| name                        | description                             | type                                               | Required |
| :-------------------------- | :-------------------------------------- | :------------------------------------------------- | :------- |
| chipsData                   | Data for chips                          | Array<String>                                      | True     |
| setChipsData                | Setter function for chips               | React.Dispatch<React.SetStateAction<String[]>>     | True     |
| searchText                  | Value for input                         | String                                             | True     |
| setSearchText               | Setter function for input value         | (value: React.SetStateAction<string>) => void      | True     |
| label                       | Value for input placeholder             | String                                             | False    |
| labelTextColor              | Color for input placeholder             | ColorValue                                         | False    |
| containerStyles             | Top level container styles              | StyleProp<ViewStyle>                               | False    |
| focusedContainerStyles      | Container styles when input is focused  | StyleProp<ViewStyle>                               | False    |
| inputStyles                 | Styles for input element                | StyleProp<TextStyle>                               | False    |
| blurredContainerStyles      | Container styles when input is blurred  | StyleProp<ViewStyle>                               | False    |
| blurredTextStyles           | Styles for text when input is blurred   | StyleProp<TextStyle>                               | False    |
| chipBackgroundColor         | Chip background color when not selected | ResponsiveValue<ColorType \| ILinearGradientProps> | False    |
| chipTextColor               | Chip text color when not selected       | ColorType                                          | False    |
| selectedChipBackgroundColor | Chip background color when selected     | ResponsiveValue<ColorType \| ILinearGradientProps> | False    |
| selectedChipTextColor       | Chip text color when selected           | ColorType                                          | False    |

## Customised Usage Example

```
import { ChipsInput } from "react-native-chips-input";

const [searchText, setSearchText] = useState<string>("");
const [data, setData] = useState<Array<String>>([
    "Jakson",
    "Taylor",
    "Kyle",
  ]);

useEffect(() => {
    setData((val) => [...val, recipientObject?.firstName]);
}, [apiResponse])

<ChipsInput
    chipsData={data}
    setChipsData={setData}
    searchText={searchText}
    setSearchText={setSearchText}
    label="Search Text"
    labelTextColor="amber.900"
    containerStyles={{ borderBottomWidth: 1, borderBottomColor: "grey", }}
    focusedContainerStyles={{ backgroundColor: "red" }}
    inputStyles={{ textAlign: "center" }}
    blurredContainerStyles={{ height: "50px" }}
    blurredTextStyles="amber.900"
    chipBackgroundColor="red.100"
    chipTextColor="red.900"
    selectedChipBackgroundColor="amber.100"
    selectedChipTextColor="amber.900"
/>
```

## License

react-native-chips-input is [LICENSE](LICENSE.MD) @ tanish_bawa
