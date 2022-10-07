import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Buttonperson from "./components/buttom";
import DropDown from "./components/dropDown";
import InputPerson from "./components/input";

type form = {
  nome1: string;
  nome2: string;
  nome3: string;
  nome4: string;
  nome5: string;
  next1: boolean;
  next2: boolean;
  next3: boolean;
};

export default function App() {
  const [form, setForm] = useState<form>({} as form);

  return (
    <ScrollView>
      <View style={{ flex: 1, marginTop: 40, alignItems: "center" }}>
        <DropDown disabled={form.next1} Title="primeiro passo">
          <DropDown Title="sub1">
            <InputPerson
              onChangeText={(e) => setForm((props) => ({ ...props, nome1: e }))}
            ></InputPerson>
          </DropDown>
          <DropDown Title="sub2">
            <InputPerson
              onChangeText={(e) => setForm((props) => ({ ...props, nome2: e }))}
            ></InputPerson>
          </DropDown>
          <DropDown Title="sub3">
            <InputPerson
              onChangeText={(e) => setForm((props) => ({ ...props, nome3: e }))}
            ></InputPerson>
          </DropDown>
          <Buttonperson
            onPress={() => setForm((props) => ({ ...props, next1: true }))}
            title="proximo"
          />
        </DropDown>
        <DropDown disabled={form.next2} Title="segundo passo">
          <DropDown Title="sub1">
            <InputPerson
              onChangeText={(e) => setForm((props) => ({ ...props, nome4: e }))}
            ></InputPerson>
          </DropDown>
          <Buttonperson
            onPress={() => setForm((props) => ({ ...props, next2: true }))}
            title="proximo"
          />
        </DropDown>
        <DropDown disabled={form.next3} Title="terceiro passo">
          <DropDown Title="sub1">
            <InputPerson
              onChangeText={(e) => setForm((props) => ({ ...props, nome5: e }))}
            ></InputPerson>
          </DropDown>
          <Buttonperson
            onPress={() => setForm((props) => ({ ...props, next3: true }))}
            title="proximo"
          />
        </DropDown>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
