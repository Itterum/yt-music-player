import {TrackTitleComponent} from "./TrackTitle/TrackTitleComponent.js";
import {TrackImageComponent} from "./TrackImage/TrackImageComponent.js";

export function TrackComponent(inputTrack) {
    const element = document.createElement("li");

    element.append(
        TrackImageComponent(inputTrack.imageSource),
        TrackTitleComponent(inputTrack),
    );

    return element;
}
