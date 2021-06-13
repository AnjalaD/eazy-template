import { SavedTemplate } from "../types";

function SavedTemplates() {
  const templates: Array<SavedTemplate> =
    JSON.parse(localStorage.getItem("templates") ?? "") ?? [];

  return (
    <>
      {templates.map(({ name, value }) => (
        <div key={name}>{name}</div>
      ))}
    </>
  );
}

export default SavedTemplates;
