import { ChangeEvent } from "react";
import { useAppLogic } from "../hooks/appLogic";

function FieldsArea() {
  const { fields, updateFiled } = useAppLogic();

  const fieldOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    updateFiled(name, value);
  };

  return (
    <>
      {Object.keys(fields).map((key) => {
        const { value, name } = fields[key];
        return (
          <label className="w-full" key={name}>
            {name}
            <input
              className="w-full"
              name={name}
              value={value}
              onChange={fieldOnChange}
            />
          </label>
        );
      })}
    </>
  );
}

export default FieldsArea;
