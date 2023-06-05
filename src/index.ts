import prompt from "./modules/prompt.js";

prompt("Are you sure? [y/n]: ").then(() => {
  // Code to execute when the response is received
});

const config = {
  customYes: () => {
    // Code to execute when the response is 'customYes'
  },
};
