import React from 'react';
import Head from 'next/head';
import { rem } from 'polished';

import { Header } from '../../components/common/Header';
import { styled } from '../../lib/styles/stitches.config';
import { ProjectMatrix } from '../../components/project/ProjectMatrix';

const Project = () => {
  return (
    <>
      <Head>
        <title>MAGNET - 로그인</title>
      </Head>
      <Header />
      <BannerTemplate />
      <ContentSection>
        <ProjectMatrix />
      </ContentSection>
    </>
  );
};

export default Project;

const BannerTemplate = styled('article', {
  // TODO : 배너에 대한 자세한 디자인이 확정되면, 컴포넌트 자체를 재설계해야합니다.
  // 현재는 크기 및 색상만을 고정값으로 가지고 있습니다.

  width: '100%',
  height: rem(680),
  backgroundColor: '$gray',
});

const ContentSection = styled('section', {
  paddingTop: rem(44),

  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});
