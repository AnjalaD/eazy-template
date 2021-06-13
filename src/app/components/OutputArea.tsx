import { useAppLogic } from "../hooks/appLogic";
import { useBool } from "../hooks/helpers";

function OutputArea() {
  const {
    state: isViewTypeHtml,
    setTrue: setViewTypeHtml,
    setFalse: SetViewTypeCode,
  } = useBool(false);

  const { html } = useAppLogic();

  return (
    <>
      <div className="btn-group">
        <button
          type="button"
          onClick={setViewTypeHtml}
          disabled={isViewTypeHtml}
        >
          View HTML
        </button>
        <button
          type="button"
          onClick={SetViewTypeCode}
          disabled={!isViewTypeHtml}
        >
          View Code
        </button>
      </div>

      {isViewTypeHtml ? (
        <div dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        <textarea className="w-full h-full" value={html} disabled rows={20} />
      )}
    </>
  );
}

export default OutputArea;
