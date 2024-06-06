import { TextInputProps } from "react-native";

import { Container } from "./styles";
import { useTheme } from "styled-components/native";

export default function Input({ ...rest }: TextInputProps) {
  const { COLORS } = useTheme();
  return (
    <Container
      placeholderTextColor={COLORS.GRAY_200}
      selectionColor={COLORS.GREEN_700}
      {...rest}
    />
  );
}
