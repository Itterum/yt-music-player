import {data, subscribe} from "./data/player-data.js";
import {AddEditPlaylistComponent} from "./ui/music-player/AddEditPlaylist/AddEditPlaylistComponent.js";
import {PlaylistsComponent} from "./ui/music-player/Playlists/PlaylistsComponent.js";
import {liba} from "./shared/liba.js";

const root = document.getElementById("root");

function MusicPlayerPage() {
    root.innerHTML = "";
    const playlistsElement = PlaylistsComponent(data.playlists);

    const app = liba.create("div", ["App"]);
    const header = liba.create("header");
    const headerContainer = liba.create("div", ["header-container"]);

    const logo = liba.create("img");
    logo.src = "img/logo/logo.svg";
    logo.alt = "logo";

    const logoText = liba.create("div", ["logo-name"]);
    logoText.append("InPlayer");

    headerContainer.append(logo, logoText);
    header.append(headerContainer);

    const main = liba.create("main");
    const listPanel = liba.create("div", ["add-playlist-panel"]);

    const title = liba.create("h1", ["title"]);
    title.append("My playlists");

    const addButton = liba.create("button", ["button"]);
    addButton.append("Add Playlist");

    listPanel.append(title, addButton);
    main.append(listPanel, playlistsElement);

    app.append(header, main);
    // const addEditPlaylistElement = AddEditPlaylistComponent();

    root.append(app);
}

// function YTPlayerPage() {
//     root.innerHTML = "";
//     const element = document.createElement("h1");
//     element.append("YT Player Page");
//
//     root.append(element);
// }

subscribe(MusicPlayerPage);

MusicPlayerPage();

document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded");
    // root.innerHTML = `
    //     <a href="#" id="musicPlayerLink">Music Player</a>
    //     <a href="#" id="ytPlayerLink">YT Player</a>
    // `;
    //
    // document.getElementById("musicPlayerLink").addEventListener("click", MusicPlayerPage);
    // document.getElementById("ytPlayerLink").addEventListener("click", YTPlayerPage);
});
