import {playlists} from "./data/data.js";
import {AddEditPlaylistComponent} from "./ui/music-player/AddEditPlaylist/AddEditPlaylistComponent.js";
import {PlaylistsComponent} from "./ui/music-player/Playlists/PlaylistsComponent.js";

const root = document.getElementById("app");

export function refresh() {
    root.innerHTML = "";
    const playlistsElement = PlaylistsComponent(playlists);
    const addEditPlaylistElement = AddEditPlaylistComponent();

    root.append(playlistsElement, addEditPlaylistElement);
}

function MusicPlayerPage() {
    refresh();
}

function YTPlayerPage() {
    root.innerHTML = "";
    const element = document.createElement("h1");
    element.append("YT Player Page");

    root.append(element);
}

document.addEventListener("DOMContentLoaded", () => {
    root.innerHTML = `
        <a href="#" id="musicPlayerLink">Music Player</a>
        <a href="#" id="ytPlayerLink">YT Player</a>
    `;

    document.getElementById("musicPlayerLink").addEventListener("click", MusicPlayerPage);
    document.getElementById("ytPlayerLink").addEventListener("click", YTPlayerPage);
});
