export let playlists = [
    {
        id: 1,
        title: "Liked videos",
        channelName: "Nothing channel",
        photo: "./img/",
        controls: [
            {
                type: "button",
                label: "Play all",
            },
            {
                type: "button",
                label: "Shuffle",
            },
        ],
        videos: [
            {
                artist: "Eminem",
                title: "Rap God",
                isHot: true,
                imageSource: "./img/cardImage/trackList/track1.jpeg",
            },
            {
                artist: "50 cent",
                title: "In da Club",
                isHot: false,
                imageSource: "./img/cardImage/trackList/track2.jpeg",
            },
        ],
        countVideos: 0,
    },
];
