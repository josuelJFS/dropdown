import React, { memo, useEffect, useMemo, useState } from "react";
import InputPerson from "./components/input";

type form = {
  input1: string;
  input2: string;
  input3: string;
};

type props = {
  done?: (e: boolean) => void;
};

const Passo1: React.FC<props> = ({ done }) => {
  const [form, setForm] = useState<form>({} as form);

  useEffect(() => {
    if (
      form?.input1?.length > 3 &&
      form?.input2?.length > 3 &&
      form?.input3?.length > 3
    ) {
      return done(true);
    } else {
      return done(false);
    }
  }, [form]);
  return (
    <>
      <InputPerson
        value={form?.input1}
        onChangeText={(e) => setForm((props) => ({ ...props, input1: e }))}
      ></InputPerson>
      <InputPerson
        value={form?.input2}
        onChangeText={(e) => setForm((props) => ({ ...props, input2: e }))}
      ></InputPerson>
      <InputPerson
        value={form?.input3}
        onChangeText={(e) => setForm((props) => ({ ...props, input3: e }))}
      ></InputPerson>
    </>
  );
};

export default memo(Passo1);
