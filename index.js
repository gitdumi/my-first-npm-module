import { sharedComponent } from "./shared-component";
import { styles } from "./shared-component.module.css";

const generateMessage = () => {
  return "Hello World!";
};

module.exports = { generateMessage, sharedComponent, styles };
