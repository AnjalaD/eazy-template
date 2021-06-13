import { useBool } from "../hooks/helpers";
import TemplateField from "./TemplateField";

function TemplateArea() {
  const {
    state: isViewTypeHtml,
    setTrue: setViewTypeHtml,
    setFalse: SetViewTypeCode,
  } = useBool(false);

  return (
    <>
      <button type="button" onClick={setViewTypeHtml} disabled={isViewTypeHtml}>
        Saved Template
      </button>
      <button
        type="button"
        onClick={SetViewTypeCode}
        disabled={!isViewTypeHtml}
      >
        Save
      </button>
      <TemplateField />
    </>
  );
}

export default TemplateArea;
