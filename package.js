Package.describe({
    name: "ojczeo:cloudinary-video-player",
    summary: "Cloudinary Video Player",
    version: "1.3.3",
    debugOnly: true
});

Package.onUse(function (api) {
    api.add_files("src/index.js",["client"]);
});
