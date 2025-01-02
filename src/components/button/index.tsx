import { colors } from "@/styles/theme";
import { IconProps as TablerIconProps } from "@tabler/icons-react-native";
import {
  ActivityIndicator,
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { s } from "./styles";

type ButtonPropps = TouchableOpacityProps & {
  isLoading?: boolean;
};

function Buttom({ children, style, isLoading = false, ...rest }: ButtonPropps) {
  return (
    <TouchableOpacity
      style={[s.container, style]}
      activeOpacity={0.2}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={colors.gray[100]} />
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}

function Title({ children }: TextProps) {
  return <Text style={s.title}>{children}</Text>;
}

type IconProps = {
  icon: React.ComponentType<TablerIconProps>;
};

function Icon({ icon: Icon }: IconProps) {
  return <Icon size={24} color={colors.gray[100]} />;
}

Buttom.Title = Title;
Buttom.Icon = Icon;

export { Buttom };
