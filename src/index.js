import _ from "lodash";
import "./style.css";
import kivi from "./img.jpg";
import data from "./data.json";

const getComponent = () => {
  const element = document.createElement("div");

  //   element.innerHTML = ["Mango", "Banana"].join(", ");

  element.innerHTML = _.join(["Kivi", "Banana"], ", ");
  element.classList.add("big");

  const img = document.createElement("img");
  img.src = kivi;

  element.appendChild(img);

  return element;
};

const getListUsers = () => {
  const list = document.createElement("ul");
  list.classList = "list";

  data.users.map((user, index) => {
    const item = document.createElement("li");

    item.innerHTML = `${index + 1}. ${user.name}`;

    list.appendChild(item);
  });

  return list;
};
document.body.appendChild(getComponent());
document.body.appendChild(getListUsers());
