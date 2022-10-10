import React, { useEffect, useState } from "react";
import InputPerson from "./components/input";

type form = {
  input1: string;
};

type props = {
  done?: (e: boolean) => void;
};

const Passo3: React.FC<props> = ({ done }) => {
  const [form, setForm] = useState<form>({} as form);

  useEffect(() => {
    if (form?.input1?.length > 3) {
      return done(true);
    } else {
      return done(false);
    }
  }, [form]);
  return (
    <>
      <InputPerson
        onChangeText={(e) => setForm((props) => ({ ...props, input1: e }))}
      ></InputPerson>
    </>
  );
};

export default Passo3;
