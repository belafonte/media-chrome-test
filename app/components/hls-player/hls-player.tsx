"use client"
import {
  MediaController,
  MediaControlBar,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaVolumeRange,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaMuteButton,
  MediaRenditionMenu,
  MediaRenditionMenuButton,
  MediaSettingsMenuButton,
  MediaChromeMenuItem
} from 'media-chrome/dist/react';

import 'hls-video-element';

type Props = { src: string } & React.HtmlHTMLAttributes<HTMLElement>
function HLSPlayer({ src, ...props }: Props) {
  return (
    <MediaController>
      {/* @ts-ignore   */}
      <hls-video
        src="https://stream.mux.com/A3VXy02VoUinw01pwyomEO3bHnG4P32xzV7u1j1FSzjNg.m3u8"
        slot="media"
        crossorigin
        muted
      />
      <MediaRenditionMenu hidden="true" anchor="auto"></MediaRenditionMenu>
      <MediaControlBar className="w-full">
        <MediaPlayButton></MediaPlayButton>
        <MediaTimeRange></MediaTimeRange>
        <MediaMuteButton></MediaMuteButton>
        <MediaRenditionMenuButton></MediaRenditionMenuButton>
        {/* <MediaSettingsMenuButton></MediaSettingsMenuButton> */}
      </MediaControlBar>
      {props.children}
    </MediaController>
  )

}

export default HLSPlayer;


// <MediaController>
//   <video
//     slot="media"
//     src="samples/bunny/1080.mp4"
//     preload="auto"
//     muted
//   />
//   <MediaRenditionMenu onClick={() => console.debug("hello")} hidden={true} anchor="auto" >
//     <MediaChromeMenuItem onClick={() => console.debug("hello")}>
//       <button onClick={() => console.debug("360")}>360</button>
//     </MediaChromeMenuItem>
//     <MediaChromeMenuItem>720</MediaChromeMenuItem>
//     <MediaChromeMenuItem>1080</MediaChromeMenuItem>
//   </MediaRenditionMenu>
//   <MediaControlBar className="w-full">
//     <MediaPlayButton></MediaPlayButton>
//     <MediaTimeRange></MediaTimeRange>
//     {/* <MediaTimeDisplay showDuration></MediaTimeDisplay> */}
//     <MediaMuteButton></MediaMuteButton>
//     {/* <MediaVolumeRange></MediaVolumeRange> */}
//     <MediaRenditionMenuButton></MediaRenditionMenuButton>
//   </MediaControlBar>
// </MediaController>
