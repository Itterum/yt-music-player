import {liba} from "../../../shared/liba.js";

export function ButtonWithImage(props) {
    console.log("ButtonWithImage", props);

    const imgElement = liba.create("img", [props.class]);
    imgElement.src = props.source;

    const buttonElement = liba.create("button");
    buttonElement.append(imgElement);

    return buttonElement;
}
