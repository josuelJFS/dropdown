import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { Input } from "./style";

interface props extends TextInputProps {}

const InputPerson: React.FC<props> = ({ ...rest }) => {
  return <Input {...rest}></Input>;
};

export default InputPerson;
