import { createStitches } from '@stitches/react';
import { em } from 'polished';

export const { styled, css } = createStitches({
  theme: {
    colors: {
      // 아직 확정되지 않은 팔레트입니다.
      alert: '#FF8080',
      font: '#333333',
      lightGray: '#EDEDED',
      gray: '#C4C4C4',
      darkGray: '#A1A4AF',
      darkBlue: '#0057FF',
      lightBlue: '#849EFF',
      background: '#F6F6F6',
    },
    fontWeights: {
      /* Noto Sans Regular400 , Medium 500, Bold 700*/
      regular: 400,
      medium: 500,
      bold: 700,
    },
    fontSizes: {
      // Unit: pt to em
      16: em('16px'),
      18: em('18px'),
      20: em('20px'),
      22: em('22px'),
      30: em('30px'),
    },
  },
  media: {
    // mobile 360 / tablet 1024 / laptop 1334 / desktop 1920.
    mobile: '(max-width: 340px)',
    tablet: '(max-width: 1334px)',
    laptop: '(man-width: 1920px)',
  },
});
