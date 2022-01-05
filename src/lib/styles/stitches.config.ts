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
      text: rem(16), // weight regular / medium / bold
      subtitle: rem(20), // weight medium
      title: rem(30), // weight bold
      button: rem(22), // weight bold
    },
  },
  media: {
    // mobile 360 / tablet 1024 / laptop 1334 / desktop 1920.
    mobile: '(max-width: 360px)',
    tablet: '(max-width: 1024px)',
    laptop: '(max-width: 1334px)',
  },
});
