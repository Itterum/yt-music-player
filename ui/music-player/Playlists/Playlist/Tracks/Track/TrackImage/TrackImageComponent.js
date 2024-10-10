import {liba} from "../../../../../../../shared/liba.js";

export function TrackImageComponent(inputImageSource) {
    // const element = document.createElement("img");
    // element.className = "track-cover-image";
    const element = liba.create("img", ["track-cover-image"]);
    element.alt = "track-cover";

    element.src = inputImageSource;
    return element;
}
