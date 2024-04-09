"use client"
import {
  MediaRenditionMenu,
  MediaChromeMenuItem,
  MediaSettingsMenu,
  MediaSettingsMenuItem,
} from 'media-chrome/dist/react';

function Menu() {
  return (
    <>
      <MediaSettingsMenu hidden={true} anchor="auto">
        <MediaSettingsMenuItem>Download Source</MediaSettingsMenuItem>
        <MediaSettingsMenuItem>Qualities</MediaSettingsMenuItem>
      </MediaSettingsMenu>

      <MediaRenditionMenu onClick={() => console.debug("hello")} hidden={true} anchor="auto" >
        <MediaChromeMenuItem>
          360
        </MediaChromeMenuItem>
        <MediaChromeMenuItem>
          720
        </MediaChromeMenuItem>
        <MediaChromeMenuItem>
          1080
        </MediaChromeMenuItem>
        {/* <MediaChromeMenuItem>Download Source</MediaChromeMenuItem> */}
      </MediaRenditionMenu>
    </>
  )
}

export default Menu;
