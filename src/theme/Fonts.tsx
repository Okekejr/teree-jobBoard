import { Global } from "@emotion/react";

export const fonts = {
  heading:
    "'IBM Plex Sans Medium', 'Helvetica Neue', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'",
  texts:
    "'HostGrotesk Light', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Roboto', 'sans-serif'",
  lighter:
    "'IBM Plex Sans Light', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Roboto', 'sans-serif'",
  body: "'Neue Haas Grotesk', 'Neue Haas Grotesk', -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif",
};

export const FontFaces = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'HostGrotesk Light';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(/assets/fonts/HostGrotesk-Light.woff2) format('woff2'),
             url(/assets/fonts/HostGrotesk-Light.woff) format('woff');
      }

      @font-face {
        font-family: 'IBM Plex Sans Light';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(/assets/fonts/IBMPlexSans-Light.woff2) format('woff2'),
             url(/assets/fonts/IBMPlexSans-Light.woff) format('woff');
      }

      @font-face {
        font-family: 'IBM Plex Sans Medium';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(/assets/fonts/IBMPlexSans-Medium.woff2) format('woff2'),
             url(/assets/fonts/IBMPlexSans-Medium.woff) format('woff');
      }
      
      @font-face {
        font-family: 'Neue Haas Grotesk';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url('/assets/fonts/NeueHaasDisplay-Light.woff2') format('woff2'),
            url('/assets/fonts/NeueHaasDisplay-Light.woff') format('woff');
      }
    `}
  />
);
