import _ from "lodash";

const getComponent = () => {
  const element = document.createElement("div");

  //   element.innerHTML = ["Mango", "Banana"].join(", ");

  element.innerHTML = _.join(["Mango", "Banana"], ", ");

  return element;
};

document.body.appendChild(getComponent());
