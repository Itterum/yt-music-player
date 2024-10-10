import {PlaylistComponent} from "./Playlist/PlaylistComponent.js";
import {liba} from "../../../shared/liba.js";

export function PlaylistsComponent(inputPlaylists) {
    const element = liba.create("div", ["playlists"]);

    for (let i = 0; i < inputPlaylists.length; i++) {
        const playlist = inputPlaylists[i];
        element.append(PlaylistComponent(playlist));
    }

    return element;
}
