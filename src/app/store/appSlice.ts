import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState, Fields } from "../types";

const _getFields = (txt: string, fields: Fields) => {
  const out: Fields = {};
  new Set(txt.match(/{{[a-zA-z0-9]*}}/gi) ?? []).forEach((val) => {
    const name = val.replace("{{", "").replace("}}", "");
    if (!fields[name]) {
      out[name] = {
        name,
        filter: val,
        value: "",
      };
    } else {
      out[name] = fields[name];
    }
  });
  return out;
};

const initialState = { template: "", fields: {} } as AppState;

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTemplate(state, action: PayloadAction<string>) {
      state.template = action.payload;
      state.fields = _getFields(state.template, state.fields);
    },

    setFields(state, action: PayloadAction<string>) {
      state.fields = _getFields(action.payload, state.fields);
    },

    updateField(state, action: PayloadAction<{ name: string; value: string }>) {
      const { name, value } = action.payload;
      state.fields[name].value = value;
    },
  },
});

export const { updateField, setTemplate, setFields } = appSlice.actions;
export default appSlice.reducer;
