import {liba} from "../../../../../../../shared/liba.js";
import {ButtonWithImage} from "../../../../../../components/buttons/ButtonWithImage.js";

export function TrackTitleComponent(inputTrack) {
    const container = liba.create("div", ["track-details"]);
    const topLine = liba.create("div", ["track-top-line"]);
    const info = liba.create("div", ["track-info"]);

    const trackName = liba.create("div", ["track-name"]);
    trackName.append(`${inputTrack.artistName} - ${inputTrack.trackTitle}`);

    const buttons = liba.create("div", ["buttons-container"]);

    const editButton = ButtonWithImage({
        class: "button-icons",
        source: "img/icons/edit.svg",
    });

    const deleteButton = ButtonWithImage({
        class: "button-icons",
        source: "img/icons/basket.svg",
    });

    const audio = document.createElement("audio");
    audio.setAttribute("controls", "");
    audio.src = inputTrack.trackFileUrl;

    buttons.append(editButton, deleteButton);
    info.append(trackName, buttons);

    if (inputTrack.isHot) {
        const trackStatus = liba.create("img", ["track-status"]);
        trackStatus.src = "img/icons/hot.svg";
        topLine.append(trackStatus, info);
    }

    topLine.append(info);
    container.append(topLine, audio);

    return container;
}
