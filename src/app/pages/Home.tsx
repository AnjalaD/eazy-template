import FieldsArea from "../components/FieldsArea";
import OutputArea from "../components/OutputArea";
import TemplateArea from "../components/TemplateArea";

function Home() {
  return (
    <div className="flex items-stretch">
      <div className="w-2/5 p-4 flex-shrink-0">
        <TemplateArea />
      </div>
      <div className="w-1/5 h-full p-4 flex-shrink-0">
        <FieldsArea />
      </div>
      <div className="w-2/5 p-4 flex-shrink-0">
        <OutputArea />
      </div>
    </div>
  );
}

export default Home;
