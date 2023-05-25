import * as React from "react";
import cytoscape from "cytoscape";
import cola from "cytoscape-cola";

import style from "./style";

const Graph: React.FunctionComponent<{
  elements: cytoscape.ElementDefinition[];
}> = ({ elements }) => {
  const container = React.useRef<HTMLDivElement>(null);
  const graph = React.useRef<cytoscape.Core>();
  const layout = React.useRef<cytoscape.Layouts>();

  React.useEffect(() => {
    if (graph.current) {
      if (layout.current) {
        layout.current.stop();
      }
      graph.current.add(elements);
      layout.current = graph.current.elements().makeLayout({
        name: "cola"
      });
      layout.current.run();
    }
  }, [elements]);

  React.useEffect(() => {
    if (!container.current) {
      return;
    }
    try {
      if (!graph.current) {
        cytoscape.use(cola);
        graph.current = cytoscape({
          elements,
          style,
          maxZoom: 1,
          wheelSensitivity: 0.2,
          container: container.current
        });
      }
    } catch (error) {
      console.error(error);
    }
    return () => {
      graph.current && graph.current.destroy();
    };
  }, []);

  return <div className="graph" ref={container} />;
};

export default Graph;
