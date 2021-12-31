import { createStitches } from '@stitches/react';
import { rem } from 'polished';

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
      16: rem(16),
      18: rem(18),
      20: rem(20),
      22: rem(22),
      30: rem(30),
    },
  },
  media: {
    // mobile 360 / tablet 1024 / laptop 1334 / desktop 1920.
    mobile: '(max-width: 340px)',
    tablet: '(max-width: 1334px)',
    laptop: '(man-width: 1920px)',
  },
});
