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
  MediaChromeMenuItem
} from 'media-chrome/dist/react';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MediaController>
        <video
          slot="media"
          src="samples/bunny/1080.mp4"
          preload="auto"
          muted
        />
        <MediaRenditionMenu mediarenditionlist="helo" hidden={true} anchor="auto" >
          <MediaChromeMenuItem>360</MediaChromeMenuItem>
          <MediaChromeMenuItem>720</MediaChromeMenuItem>
          <MediaChromeMenuItem>1080</MediaChromeMenuItem>
          {/* <button>360</button> */}
          {/* <button>720</button> */}
          {/* <button>1080</button> */}
        </MediaRenditionMenu>
        <MediaControlBar className="w-full">
          <MediaPlayButton></MediaPlayButton>
          <MediaTimeRange></MediaTimeRange>
          {/* <MediaTimeDisplay showDuration></MediaTimeDisplay> */}
          <MediaMuteButton></MediaMuteButton>
          {/* <MediaVolumeRange></MediaVolumeRange> */}
          <MediaRenditionMenuButton mediarenditionlist="hello"></MediaRenditionMenuButton>
        </MediaControlBar>
      </MediaController>
    </main>
  );
}
