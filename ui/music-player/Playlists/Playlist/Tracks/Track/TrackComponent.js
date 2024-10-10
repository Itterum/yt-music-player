import {TrackTitleComponent} from "./TrackTitle/TrackTitleComponent.js";
import {TrackImageComponent} from "./TrackImage/TrackImageComponent.js";
import {liba} from "../../../../../../shared/liba.js";

export function TrackComponent(inputTrack) {
    // const element = document.createElement("li");
    // element.className = "track-element";
    const element = liba.create("li", ["track-element"]);

    element.append(
        TrackImageComponent(inputTrack.trackCoverImgUrl),
        TrackTitleComponent(inputTrack),
    );

    return element;
}
