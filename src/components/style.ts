const COLORS = {
  purp: "#43447a"
};

const nodeStyles = [
  {
    selector: "node",
    style: {
      "transition-property": "background-color border-color",
      "transition-duration": "0.3s",
      "transition-timing-function": "ease-in-sine",
      "background-color": COLORS.purp
    }
  }
];
const edgeStyles = [
  {
    selector: "edge",
    style: {
      "curve-style": "bezier",
      "target-arrow-shape": "triangle",
      "target-arrow-color": COLORS.purp,
      "line-color": COLORS.purp
    }
  }
];

export default [...nodeStyles, ...edgeStyles];
