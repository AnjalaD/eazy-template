import { useDispatch, useSelector } from "react-redux";
import { setTemplate, updateField } from "../store/appSlice";
import { AppState, Fields } from "../types";

const _generateHtml = (template: string, fields: Fields) => {
  let out = template;
  Object.keys(fields).forEach((key) => {
    const { filter, value } = fields[key];
    out = out.replaceAll(filter, value);
  });
  return out;
};

export const useAppLogic = () => {
  const dispatch = useDispatch();
  const { template, fields } = useSelector((state: AppState) => state);

  const updateTemplate = (txt: string) => dispatch(setTemplate(txt));

  const updateFiled = (name: string, value: string) =>
    dispatch(updateField({ name, value }));

  return {
    template,
    updateTemplate,
    fields,
    updateFiled,
    html: _generateHtml(template, fields),
  };
};
