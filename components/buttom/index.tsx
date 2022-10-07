import React from "react";
import { TextInput, ButtonProps } from "react-native";
import { Buttom } from "./style";

interface props extends ButtonProps {}

const Buttonperson: React.FC<props> = ({ ...rest }) => {
  return <Buttom {...rest}></Buttom>;
};

export default Buttonperson;
