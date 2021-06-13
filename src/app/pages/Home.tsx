import { ChangeEvent, useState } from "react";

type FieldObj = { filter: string; name: string; value: string };

const getVars = (txt: string) => {
  const out: FieldObj[] = [];
  new Set(txt.match(/{{[a-zA-z0-9]*}}/gi) ?? []).forEach((val) =>
    out.push({
      filter: val,
      name: val.replace("{{", "").replace("}}", ""),
      value: "",
    })
  );
  return out;
};

const generateHtml = (template: string, fields: FieldObj[]) => {
  let out = template;
  fields.forEach(({ filter, value }) => {
    out = out.replaceAll(filter, value);
  });
  return out;
};

function Home() {
  const [template, setTemplate] = useState("<a>{{hello}}</a><p>{{hello}}</p>");
  const [fields, setFields] = useState<FieldObj[]>([]);

  const updateTemplate = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTemplate(e.target.value);
    setFields(getVars(e.target.value));
  };

  const onFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    const x = fields.findIndex(({ name }) => name === e.target.name);
    setFields((prev) => {
      const newState = [...prev];
      newState[x].value = e.target.value;
      return newState;
    });
  };

  console.log(getVars(template));

  return (
    <div className="flex items-stretch">
      <div className="w-1/2 min-h-screen p-4 flex-shrink-0">
        <textarea
          className="w-full h-full"
          value={template}
          onChange={updateTemplate}
        />
      </div>
      <div className="w-1/2 h-full p-4 flex-shrink-0">
        {fields.map(({ name, value }) => (
          <label className="w-full" key={name}>
            {name}
            <input
              className="w-full"
              name={name}
              value={value}
              onChange={onFieldChange}
            />
          </label>
        ))}
      </div>
      <div className="w-1/2 min-h-screen p-4 flex-shrink-0">
        <textarea
          className="w-full h-full"
          value={generateHtml(template, fields)}
          disabled
        />
      </div>
    </div>
  );
}

export default Home;
