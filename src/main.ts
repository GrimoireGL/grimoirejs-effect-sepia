import MaterialFactory from "grimoirejs-fundamental/ref/Material/MaterialFactory";
import gr from "grimoirejs";
import sepia from "raw!./sepia.sort";
export default () => {
  gr.register(async () => {
    MaterialFactory.addSORTMaterial("sepia", sepia);
    gr.registerNode("render-sepia", [], {
      material: "new(sepia)"
    }, "render-quad");
  })
};
