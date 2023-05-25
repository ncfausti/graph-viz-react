import * as React from "react";
import Graph from "../components/Graph";
import uuidv4 from "uuid/v4";
import { shuffle } from "lodash";

const originalElements = [
  {
    data: {
      id: "node-1",
      generation: 0
    }
  },
  {
    data: {
      id: "node-2",
      generation: 0
    }
  },
  {
    data: {
      id: "edge-1",
      source: "node-1",
      target: "node-2",
      generation: 0
    }
  }
];

const GraphContainer: React.FunctionComponent<{}> = () => {
  const [elements, setElements] = React.useState(originalElements);
  const [generation, setGeneration] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const newGeneration = generation + 1;
      const randomNode = shuffle(elements).find(
        element => !element.data.source
      );
      const newNode = {
        data: {
          id: `node-${uuidv4()}`,
          generation: newGeneration
        }
      };
      setElements([
        ...elements,
        newNode,
        {
          data: {
            id: `edge-${uuidv4()}`,
            source: randomNode.data.id,
            target: newNode.data.id,
            generation: newGeneration
          }
        }
      ]);
      setGeneration(newGeneration);
    }, 500);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <Graph
      elements={elements.filter(
        element => element.data.generation === generation
      )}
    />
  );
};

export default GraphContainer;
