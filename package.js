Package.describe({
    name: "ojczeo:cloudinary-video-player",
    summary: "Cloudinary Video Player",
    version: "1.3.3",
    debugOnly: true
});

// const cssPaths = [
//     './src/assets/styles/ads-label.scss',
//     './src/assets/styles/components/playlist.scss',
//     './src/assets/styles/components/thumbnail.scss',
//     './src/assets/styles/components/title-bar.scss',
//     './src/assets/styles/components/triangle-volume-bar.scss',
//     './src/assets/styles/icons.scss',
//     './src/assets/styles/mixins/aspect-ratio.scss',
//     './src/assets/styles/mixins/disable-transition.scss',
//     './src/assets/styles/mixins/flex.scss',
//     './src/assets/styles/mixins/mixins.scss',
//     './src/assets/styles/mixins/skin.scss',
//     './src/assets/styles/variables.scss',
//     './src/assets/styles/videojs-ima.scss',
//     './src/assets/styles/main.scss',
//     './src/components/recommendations-overlay/recommendations-overlay.scss',
//     './src/plugins/cloudinary/components/cloudinary-button.scss',
//     './src/plugins/cloudinary/components/playlist.scss',
//     './src/plugins/cloudinary/components/upcoming-video-overlay.scss',
//     './src/plugins/context-menu/context-menu.scss',
//     './src/plugins/floating-player/floating-player.scss'
// ];
//
// const assetsPath = [
//     './src/assets/fonts/VideoJS.svg',
//     './src/assets/fonts/VideoJS.ttf',
//     './src/assets/fonts/VideoJS.woff',
//     './src/assets/fonts/icons.json',
//     './src/assets/icons/arrow-left-blue.svg',
//     './src/assets/icons/arrow-left-white.svg',
//     './src/assets/icons/cloudinary_icon_for_black_bg.svg',
//     './src/assets/icons/cloudinary_icon_for_white_bg.svg',
//     './src/assets/icons/cloudinary_logo_for_dark_bg.svg',
//     './src/assets/icons/cloudinary_logo_for_white_bg.svg',
//     './src/assets/icons/info-circle.svg',
// ];

const sources = [
    './src/attributes-normalizer.js',
    './src/base-video-player.js',
    './src/components/component-utils.js',
    './src/components/index.js',
    './src/components/playlist/layout/playlist-layout-custom.js',
    './src/components/playlist/layout/playlist-layout-horizontal.js',
    './src/components/playlist/layout/playlist-layout-vertical.js',
    './src/components/playlist/layout/playlist-layout.js',
    './src/components/playlist/panel/playlist-panel-item.js',
    './src/components/playlist/panel/playlist-panel.js',
    './src/components/playlist/playlist-widget.js',
    './src/components/progress-control-events-blocker.js',
    './src/components/recommendations-overlay/index.js',
    './src/components/recommendations-overlay/recommendations-overlay-content.js',
    './src/components/recommendations-overlay/recommendations-overlay-hide-button.js',
    './src/components/recommendations-overlay/recommendations-overlay-item.js',
    './src/components/recommendations-overlay/recommendations-overlay-primary-item.js',
    './src/components/recommendations-overlay/recommendations-overlay-secondary-item.js',
    './src/components/recommendations-overlay/recommendations-overlay-secondary-items-container.js',
    './src/components/recommendations-overlay/recommendations-overlay.js',
    './src/components/thumbnail/thumbnail.js',
    './src/components/title-bar.js',
    './src/config/defaults.js',
    './src/extended-events.js',
    './src/mixins/eventable.js',
    './src/plugins/analytics/index.js',
    './src/plugins/autoplay-on-scroll/index.js',
    './src/plugins/cloudinary/common.js',
    './src/plugins/cloudinary/components/cloudinary-10-min.js',
    './src/plugins/cloudinary/components/cloudinary-10-plus.js',
    './src/plugins/cloudinary/components/cloudinary-button.js',
    './src/plugins/cloudinary/components/playlist-button.js',
    './src/plugins/cloudinary/components/playlist-next-button.js',
    './src/plugins/cloudinary/components/playlist-previous-button.js',
    './src/plugins/cloudinary/components/playlist.js',
    './src/plugins/cloudinary/components/upcoming-video-overlay.js',
    './src/plugins/cloudinary/event-handler-registry.js',
    './src/plugins/cloudinary/index.js',
    './src/plugins/cloudinary/mixins/playlistable.js',
    './src/plugins/cloudinary/models/audio-source.js',
    './src/plugins/cloudinary/models/base-source.js',
    './src/plugins/cloudinary/models/image-source.js',
    './src/plugins/cloudinary/models/video-source.js',
    './src/plugins/cloudinary/playlist.js',
    './src/plugins/colors/index.js',
    './src/plugins/context-menu/components/context-menu-item.js',
    './src/plugins/context-menu/components/context-menu.js',
    './src/plugins/context-menu/index.js',
    './src/plugins/floating-player/index.js',
    './src/plugins/ima/index.js',
    './src/plugins/index.js',
    './src/utils/api.js',
    './src/utils/apply-with-props.js',
    './src/utils/assign.js',
    './src/utils/autobind.js',
    './src/utils/cloudinary.js',
    './src/utils/css-prefix.js',
    './src/utils/debounce.js',
    './src/utils/dom.js',
    './src/utils/find.js',
    './src/utils/fontFace.js',
    './src/utils/index.js',
    './src/utils/mixin.js',
    './src/utils/positioning.js',
    './src/utils/querystring.js',
    './src/utils/slicing.js',
    './src/utils/string.js',
    './src/utils/time.js',
    './src/utils/type-inference.js',
    './src/video-player.js',
    // "./src/index.js",
    './src/meteor-import.js'
];

Package.onUse(function (api) {
    Npm.depends({
        "cloudinary-core": "2.6.3"
    });
    sources.forEach(function(sourceFile) {
        api.addFiles(sourceFile, 'client');
    });
    // api.addAssets(assetsPath, 'client');
    // api.addAssets(cssPaths, 'client');
    api.mainModule("./src/meteor-import.js");
});
