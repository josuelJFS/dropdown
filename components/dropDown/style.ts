import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  align-items: center;
  background-color: #fff;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Header = styled.TouchableOpacity`
  background-color: #e8e8e8;
  width: 90%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  flex-direction: row;
`;
export const More = styled.View`
  background-color: #fafafa;
  width: 90%;
  min-height: 0px;
  justify-content: center;
`;

export const Titulo = styled.Text`
  font-size: 14px;
  text-align: center;
  flex: 1;
  font-weight: bold;
`;

export const styles = StyleSheet.create({
  sombra: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
