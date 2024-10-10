import {TracksComponent} from "./Tracks/TracksComponent.js";
import {liba} from "../../../../shared/liba.js";
import {deletePlaylist} from "../../../../data/player-data.js";

export function PlaylistComponent(inputPlaylist) {
    const classes = ["playlist"];

    if (inputPlaylist.isActive) {
        classes.push("active");
    }

    const element = liba.create("article", classes);
    const playlistInfo = liba.create("div", ["playlist-info"]);

    const playlistImg = liba.create("img", ["playlist-cover-image"]);
    playlistImg.src = inputPlaylist.playlistInfo.coverImgUrl;
    playlistImg.alt = "cover";

    const playlistHeader = liba.create("div");

    const title = liba.create("h2", ["title"]);
    title.append(inputPlaylist.playlistInfo.title);

    const count = liba.create("div", ["tracks-count"]);
    count.append(`${inputPlaylist.tracks.length} tracks`);

    const buttons = liba.create("div", ["buttons-container"]);
    const editButton = liba.create("button");
    const deleteButton = liba.create("button");

    const editImg = liba.create("img", ["button-icons"]);
    editImg.src = "img/icons/edit.svg";
    editButton.append(editImg);

    const deleteImg = liba.create("img", ["button-icons"]);
    deleteImg.src = "img/icons/basket.svg";
    deleteButton.append(deleteImg);

    buttons.append(editButton, deleteButton);

    playlistHeader.append(title, count);
    playlistInfo.append(playlistImg, playlistHeader, buttons);

    deleteButton.addEventListener("click", () => {
        deletePlaylist(inputPlaylist.playlistInfo.id);
    });

    element.append(playlistInfo);

    element.append(TracksComponent(inputPlaylist.tracks));

    return element;
}
