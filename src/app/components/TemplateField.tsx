import { ChangeEvent } from "react";
import { useAppLogic } from "../hooks/appLogic";

function TemplateField() {
  const { template, updateTemplate } = useAppLogic();

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    updateTemplate(e.currentTarget.value);

  return (
    <textarea
      className="w-full h-full"
      value={template}
      onChange={onChange}
      rows={20}
    />
  );
}

export default TemplateField;
