import { createStitches } from '@stitches/react';

export const { styled, css, createTheme } = createStitches({
  theme: {
    colors: {
      // 아직 확정되지 않은 팔레트입니다.
      Alert: '#FF8080',
      Font: '#333333',
      LightGray: '#EDEDED',
      Gray: '#C4C4C4',
      DarkGray: '#A1A4AF',
      DarkBlue: '#0057FF',
      LightBlue: '#849EFF',
      Background: '#F6F6F6',
    },
    fontWeights: {
      /* Noto Sans Regular400 , Medium 500, Bold 700*/
      Regular: 400,
      Medium: 500,
      Bold: 700,
    },
    fontSizes: {
      // Unit: pt to em
      16: '1em',
      18: '1.125em',
      20: '1.25em',
      22: '1.375em',
      30: '1.875em',
    },
  },
  media: {
    // mobile 360 / tablet 1024 / laptop 1334 / desktop 1920.
    Mobile: '(max-width: 340px)',
    Tablet: '(max-width: 1334px)',
    Laptop: '(man-width: 1920px)',
  },
});

const darkTheme = createTheme('dark-theme', {
  colors: {
    Background: 'N/A',
    Font: 'N/A',
  },
});
