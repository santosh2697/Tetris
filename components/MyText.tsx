import { Text } from "react-native";

type paramType = {
  styles: any;
  text: string;
};
export function MyText(params: paramType) {
  return (
    <Text style={{ fontFamily: "Dancing", ...params.styles }}>
      {params.text}
    </Text>
  );
}
