# React Native Custom Chips

An easy to use custom chips input component that can be used for both react and react native.

## Getting Started

`npm i @react/react-native-chips`
`yarn add @react/react-native-chips`

## Default Usage

```
import CustomChipsInput from "@react/react-native-chips";

const [searchText, setSearchText] = useState<string>("");
const [data, setData] = useState<Array<String>>([
    "Jakson",
    "Taylor",
    "Kyle",
  ]);

useEffect(() => {
    setData((val) => [...val, recipientObject?.firstName]);
}, [apiResponse])

<CustomChipsInput
    chipsData={data}
    setChipsData={setData}
    searchText={searchText}
    setSearchText={setSearchText}
/>
```

## Properties for CustomChipsInput

| name                        | description                             | type                                               | Required |
| :-------------------------- | :-------------------------------------- | :------------------------------------------------- | :------- |
| chipsData                   | Data for chips                          | Array<String>                                      | True     |
| setChipsData                | Setter function for chips               | React.Dispatch<React.SetStateAction<String[]>>     | True     |
| searchText                  | Value for input                         | String                                             | True     |
| setSearchText               | Setter function for input value         | (value: React.SetStateAction<string>) => void      | True     |
| label                       | Value for input placeholder             | String                                             | False    |
| labelTextColor              | Color for input placeholder             | ColorValue                                         | False    |
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
import CustomChipsInput from "@react/react-native-chips";

const [searchText, setSearchText] = useState<string>("");
const [data, setData] = useState<Array<String>>([
    "Jakson",
    "Taylor",
    "Kyle",
  ]);

useEffect(() => {
    setData((val) => [...val, recipientObject?.firstName]);
}, [apiResponse])

<CustomChipsInput
    chipsData={data}
    setChipsData={setData}
    searchText={searchText}
    setSearchText={setSearchText}
    label="Search Text"
    labelTextColor="amber.900"
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

@react/react-native-chips is [LICENSE](LICENSE.MD) @ tanish_bawa
