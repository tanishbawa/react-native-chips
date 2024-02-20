# React Native Chips Input

An easy to use custom chips input component, built using NativeBase. This can be used for both react and react native.

## Prerequisites

Since this component is built using [NativeBase](https://nativebase.io/). Please follow NativeBase [installation](https://docs.nativebase.io/installation) guide to proceed.

## Getting Started

`npm i react-native-chips-input`

`yarn add react-native-chips-input`

## Default Usage

```JSX
import { ChipsInput } from "react-native-chips-input";

export default App = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [data, setData] = useState<Array<String>>(["Jakson", "Taylor", "Kyle"]);

  useEffect(() => {
    setData((val) => [...val, selectedName]);
  }, [selectedName]);

  return (
    <ChipsInput
      chipsData={data}
      setChipsData={setData}
      searchText={searchText}
      setSearchText={setSearchText}
      containerStyles={{ borderBottomWidth: 1, borderBottomColor: "#D3D9DF" }}
    />
  );
};
```

## Desktop view

![DesktopDemo](https://github.com/tanishbawa/react-native-chips/assets/44227602/e41d2848-1fcd-4805-8e90-456beaa6db1e)

## Device view

![DeviceDemo](https://github.com/tanishbawa/react-native-chips/assets/44227602/a77e4a6a-418d-4af5-9bd6-e3c247732bc0)

## Properties for ChipsInput

| name                        | description                                    | type                                               | Required |
| :-------------------------- | :--------------------------------------------- | :------------------------------------------------- | :------- |
| chipsData                   | Data for chips                                 | Array<String>                                      | True     |
| setChipsData                | Setter function for chips                      | React.Dispatch<React.SetStateAction<String[]>>     | True     |
| searchText                  | Value for input                                | String                                             | True     |
| setSearchText               | Setter function for input value                | (value: React.SetStateAction<string>) => void      | True     |
| numberOfVisibleNames        | Number for visible names when input is blurred | number                                             | False    |
| label                       | Value for input placeholder                    | String                                             | False    |
| labelTextColor              | Color for input placeholder                    | ColorValue                                         | False    |
| containerStyles             | Top level container styles                     | StyleProp<ViewStyle>                               | False    |
| focusedContainerStyles      | Container styles when input is focused         | StyleProp<ViewStyle>                               | False    |
| inputStyles                 | Styles for input element                       | StyleProp<TextStyle>                               | False    |
| blurredContainerStyles      | Container styles when input is blurred         | StyleProp<ViewStyle>                               | False    |
| blurredTextStyles           | Styles for text when input is blurred          | StyleProp<TextStyle>                               | False    |
| chipBackgroundColor         | Chip background color when not selected        | ResponsiveValue<ColorType \| ILinearGradientProps> | False    |
| chipTextColor               | Chip text color when not selected              | ColorType                                          | False    |
| selectedChipBackgroundColor | Chip background color when selected            | ResponsiveValue<ColorType \| ILinearGradientProps> | False    |
| selectedChipTextColor       | Chip text color when selected                  | ColorType                                          | False    |

## Customised Usage Example

```JSX
import { ChipsInput } from "react-native-chips-input";

export default App = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [data, setData] = useState<Array<String>>(["Jakson", "Taylor", "Kyle"]);

  useEffect(() => {
    setData((val) => [...val, selectedName]);
  }, [selectedName]);

  return (
    <ChipsInput
      chipsData={data}
      setChipsData={setData}
      searchText={searchText}
      setSearchText={setSearchText}
      numberOfVisibleNames={4} // For invalid numbers (e.g 0, -2), default value of 2 will be considered
      label="Search Text"
      labelTextColor="amber.900"
      containerStyles={{ borderBottomWidth: 1, borderBottomColor: "grey" }}
      focusedContainerStyles={{ backgroundColor: "red" }}
      inputStyles={{ textAlign: "center" }}
      blurredContainerStyles={{ height: "50px" }}
      blurredTextStyles={{color: 'black'}}
      chipBackgroundColor="red.100"
      chipTextColor="red.900"
      selectedChipBackgroundColor="amber.100"
      selectedChipTextColor="amber.900"
    />
  );
};
```

## License

react-native-chips-input is [LICENSE](LICENSE.MD) @ tanish_bawa
