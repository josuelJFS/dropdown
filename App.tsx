import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Buttonperson from "./components/buttom";
import DropDown from "./components/dropDown";
import InputPerson from "./components/input";
import Passo1 from "./passo1";
import Passo2 from "./passo2";
import Passo3 from "./passo3";

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

type validation = {
  passo1: boolean;
  passo2: boolean;
  passo3: boolean;
};

export default function App() {
  const [form, setForm] = useState<form>({} as form);
  const [validation, setValidation] = useState<validation>({} as validation);
  const [titleButtom, setTitleButtom] = useState("passo 2");
  function passos() {
    if (form.next1) {
      setValidation((props) => ({ ...props, passo1: true }));
      setTitleButtom("passo3");
    } else {
      return alert("passo1 precisa ser validado");
    }
    if (form.next2 == undefined) return;
    if (form.next2) {
      setValidation((props) => ({ ...props, passo2: true }));
      setTitleButtom("ponto");
    } else {
      return alert("passo2 precisa ser validado");
    }
    if (form.next3 == undefined) return;
    if (form.next3) {
      setValidation((props) => ({ ...props, passo3: true }));
    } else {
      return alert("passo3 precisa ser validado");
    }
  }
  return (
    <ScrollView>
      <View style={{ flex: 1, marginTop: 40, alignItems: "center" }}>
        <DropDown done={validation.passo1} Title="primeiro passo">
          <DropDown Title="sub1">
            <Passo1
              done={(e) => setForm((props) => ({ ...props, next1: e }))}
            />
          </DropDown>
        </DropDown>
        <DropDown
          open={validation.passo1}
          done={validation.passo2}
          disabled={!form.next1}
          Title="segundo passo"
        >
          <Passo2 done={(e) => setForm((props) => ({ ...props, next2: e }))} />
        </DropDown>
        <DropDown
          open={validation.passo2}
          done={validation.passo3}
          disabled={!validation.passo2}
          Title="terceiro passo"
        >
          <Passo3 done={(e) => setForm((props) => ({ ...props, next3: e }))} />
        </DropDown>
        <Buttonperson onPress={passos} title={titleButtom} />
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
