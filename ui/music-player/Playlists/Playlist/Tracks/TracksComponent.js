import {liba} from "../../../../../shared/liba.js";
import {TrackComponent} from "./Track/TrackComponent.js";

export function TracksComponent(inputTracks) {
    const element = liba.create("ul", ["list"]);

    for (let j = 0; j < inputTracks.length; j++) {
        const track = inputTracks[j];

        const trackElement = TrackComponent(track);

        element.append(trackElement);
    }

    return element;
}
