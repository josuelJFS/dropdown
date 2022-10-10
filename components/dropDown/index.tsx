import React, { memo, useEffect, useState } from "react";
import { Container, Header, More, styles, Titulo } from "./style";
import { AntDesign } from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  Easing,
  withTiming,
} from "react-native-reanimated";
import { ScrollView, View } from "react-native";
const MoreAnimated = Animated.createAnimatedComponent(More);

type props = {
  Title: string;
  children?: any;
  scrollActive?: boolean;
  disabled?: boolean;
  done?: boolean;
  open?: boolean;
};

const DropDown: React.FC<props> = ({
  Title,
  children,
  scrollActive,
  disabled = false,
  done = false,
  open = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const heightValue = useSharedValue(0);
  const opacityValue = useSharedValue(0);
  useEffect(() => {
    if (isOpen) {
      heightValue.value = withSpring(200);
      opacityValue.value = withTiming(1);
    } else {
      heightValue.value = withTiming(0);
      opacityValue.value = withTiming(0);
    }
  }, [isOpen]);

  useEffect(() => {
    disabled && setIsOpen(false);
    done && setIsOpen(false);
  }, [disabled, done]);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      minHeight: heightValue.value,
      opacity: opacityValue.value,
    };
  });
  return (
    <Container>
      <Header
        style={styles.sombra}
        activeOpacity={0.9}
        onPress={() => setIsOpen((props) => !props)}
        disabled={disabled}
      >
        <Titulo>{Title}</Titulo>
        {!done ? (
          <AntDesign
            name={isOpen ? "caretup" : "caretdown"}
            size={24}
            color="black"
          />
        ) : (
          <AntDesign name="check" size={24} color="black" />
        )}
      </Header>
      {scrollActive ? (
        <MoreAnimated style={[styles.sombra, animatedStyles]}>
          <ScrollView>
            <View style={{ display: isOpen ? "flex" : "none" }}>
              {children}
            </View>
          </ScrollView>
        </MoreAnimated>
      ) : (
        <MoreAnimated style={[styles.sombra, animatedStyles]}>
          <View style={{ display: isOpen ? "flex" : "none" }}>{children}</View>
        </MoreAnimated>
      )}
    </Container>
  );
};

export default memo(DropDown);
