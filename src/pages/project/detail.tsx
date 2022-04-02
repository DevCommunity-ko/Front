import { rem } from 'polished';
import React from 'react';

import { Header } from '../../components';
import {
  IssueItemTypes, StacksRightBox, ParticipantsRightBox, Comment, IssueItemOneLine,
} from '../../components/project/detail';
import { styled } from '../../lib/styles/stitches.config';
import { ParticipantTestData, StackTestData } from '../../lib/texts/texts';

const detail = () => {
    
  //TODO : 샘플 데이터 생성 함수입니다. API 연동 이후 삭제해야 합니다.
  const makeSampleData = (n: number): IssueItemTypes[] => {
    let arr = [{ id: 0, type:{ key:'frontend', value:'프론트엔드' }, previewString:'프로젝트를 진행하던 중 이러 이러한 문제가 발생했습니다.', isSolved:false }];
    for (let i = 1; i < n ; i++) {
      arr = arr.concat({ id:(i + 1), type: { key: 'backend', value:'백엔드' }, previewString:'프로젝트를 진행하던 중 이러 이러한 문제가 발생했습니다.', isSolved:true });
    }

    return arr as IssueItemTypes[];
  };

  //TODO : 샘플 데이터(5개) 생성 구문입니다. API 연동 이후 삭제해야 합니다.
  const sampleData: IssueItemTypes[] = makeSampleData(5);

  //TODO : 아래의 상수들은 API 형식에 맞춰 변수화 되어야 합니다.
  const projName = '프로젝트 이름';
  const isFollowing = false;
  const gitAddr = 'https://github.com/apache/incubator-seatunnel/issues/852#isse';
  const projDescription = '안녕하세요, 우리 프로젝트는 ...';
  const isAuthorized = true; // 시스템 관리자 || 프로젝트 소유자 || 프로젝트 관리자인 경우 등등
  const commentLength = 1423;

  return (
    <Wrapper>
      <Header />
      <ContentWrap> 
        <Title>{projName}</Title>
        <ImgArea>
          <ProjImgTemplate />
          <BtnFollow>
            {isFollowing ? '팔로잉' : '팔로우'}
          </BtnFollow>
        </ImgArea>
        <MainContents>
          <ContentLeft>

            <InfoArea>
              <Types>
                {/* TODO : Types 내부 요소는 MAGNET 156을 통합한 뒤 재사용성이 확장된 컴포넌트를 이용해 작업합니다 */}
                팀프로젝트
                web
                팀원 모집중
              </Types>
              <BlockGitAddr>
                <GitIconTemplate />
                <StyledAnchorBlock target={'_blank'} href={gitAddr} rel='noopener noreferrer'>
                  {gitAddr}
                </StyledAnchorBlock>
              </BlockGitAddr>
            </InfoArea>

            <DescriptionBlock>
              <DescriptionTitle>소개</DescriptionTitle>
              <Description>{projDescription}</Description>
            </DescriptionBlock>

            <IssueBlock>
              <IssueTitle>
                  프로젝트 공개이슈
                <BtnNewIssue isAuthorized={isAuthorized}>
                  <TempIconNewIssue />
                    이슈등록
                </BtnNewIssue>
              </IssueTitle>
              {sampleData.map((item, index) => (
                ((index % 3) === 0) && item && (<IssueItemOneLine index={index} itemListArray={sampleData} key={index}/>)
              ))}
            </IssueBlock>
          </ContentLeft>
          
          <ContentRight>
            <StacksRightBox item={StackTestData}/>
            <ParticipantsRightBox item={ParticipantTestData}/>
          </ContentRight>
        </MainContents>
        <CommentWrap>
          <CommentTitleBlock>
            <CommentTitle>댓글</CommentTitle>
            <CommentSubTitle>({commentLength}개)</CommentSubTitle>
          </CommentTitleBlock>
          <AbsoluteGradient />
          <AbsoluteButtonContainer>
            <BtnShowMoreComments>이전 댓글 더보기</BtnShowMoreComments>
          </AbsoluteButtonContainer>
          <CommentsBlock>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </CommentsBlock>
          <CommentInputForm>
            <InputBox placeholder='입력하세요'/>
            <BtnSubmitInput>올리기</BtnSubmitInput>
          </CommentInputForm>
        </CommentWrap>
        <Footer>
          <span>댓글 2</span>
          <span>조회수 213</span>
          <span>팔로우 308</span>
        </Footer>
      </ContentWrap>
    </Wrapper>
  );
};

export default detail;

const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '*': {
    margin: 0,
    padding: 0,
  },
});

const ContentWrap = styled('article', {
  width: rem(920),
  height: rem(1744),

  marginTop: rem(77 + 76), // Margin + Header Height
});

const Title = styled('h1', {
  marginBottom: rem(10),

  fontSize: '$title',
  color: '$font',
  fontWeight: '$bold',
});

const ImgArea = styled('div', {

});

const ProjImgTemplate = styled('div', {
  width: '100%',
  height: rem(338),
  backgroundColor: '$lightGray',
});

const BtnFollow = styled('button', {
  width: rem(125),
  height: rem(40),

  position: 'relative',
  top: `-${rem(20)}`, // 높이 / 2
  left: rem(763),

  color: 'White',
  fontSize: '$text',
  fontWeight: '$medium',

  borderRadius: rem(20),
  border: 'none',

  backgroundColor: 'purple', // TODO: MAGNET-156 머지 후 $purple로 색상 교체하기

  cursor: 'pointer',
});

const MainContents = styled('div',{
  display:'flex',

  justifyContent: 'space-between',
});

const ContentLeft = styled('div',{
  width: rem(566),
  height: 'fit-content',
});

const ContentRight = styled('div',{
  width: rem(269),
  height: 'fit-content',
});

const CommentWrap = styled('div',{
  width: '100%',
});

const InfoArea = styled('div',{
  width: '100%',

  marginBottom: rem(14),
});

const Types = styled('div', {
  display: 'flex',

  marginBottom: rem(16),
});

const BlockGitAddr = styled('div', {
  display: 'flex',
});

const GitIconTemplate = styled('div', {
  width: rem(24),
  height: rem(24),
  borderRadius: '100%',
  backgroundColor: '$darkGray',

  marginRight: rem(10),
});

const StyledAnchorBlock = styled('a', {
  width: rem(532),
      
  color: '$darkBlue',
  fontWeight: '$regular',
  fontSize: '$text',
  
  overflow:'hidden',
  whiteSpace: 'nowrap',
  wordBreak: 'nowrap',
  textOverflow: 'ellipsis',
});

const DescriptionBlock = styled('div', {
  marginBottom: rem(16),
});

const DescriptionTitle = styled('h2', {
  color: '$darkGray',
  fontWeight: '$regular', // DemiLight
  fontSize: '$text',
  paddingBottom: rem(5),
  width: '100%',
  borderBottom: '1px solid #E5E0EB',
});

const Description = styled('p', {
  width: '100%',
  height: rem(160),
  boxSizing: 'border-box',
    
  padding: `${rem(7)} ${rem(11)} 0 ${rem(11)}`,
});

const IssueBlock = styled('div', {
  minHeight: rem(28 + 4 + 12 + 265 + 16 + 265),
  marginBottom: rem(60),
});

const IssueTitle = styled('h2', {
  color: '$darkGray', 
  fontWeight: '$regular', // DemiLight
  fontSize: '$text',
  paddingBottom: rem(5),
  width: '100%',
  borderBottom: '1px solid #E5E0EB',

  display: 'flex',
  justifyContent: 'space-between',

  marginBottom: rem(12),
});

const BtnNewIssue = styled('button',{
  display: 'flex',
  visibility: 'hidden',
  alignItems: 'center',
  justifyContent: 'center',

  width: rem(100),
  height: rem(28),
  borderRadius: rem(14),

  backgroundColor: 'white',
  border: '1px solid $font',
  fontSize: '$smallText',
  fontWeight: '$medium',
  color: '$font',

  cursor: 'pointer',

  variants: {
    isAuthorized: {
      true: {
        visibility: 'visible',     
      },
    },
  },
});

const TempIconNewIssue = styled('div', {
  width: rem(16),
  height: rem(16),
  marginRight: rem(4),
  backgroundColor: '$darkGray',
});

const CommentTitleBlock = styled('div',{
  display: 'flex',
  alignItems: 'baseline',

  marginBottom: rem(32),
});

const CommentTitle = styled('h2', {
  fontSize: '$text',
  fontWeight: '$regular', // DemiLight
  color: '$darkGray',
});

const CommentSubTitle = styled('sub', {
  marginLeft: rem(4),

  fontWeight: '$regular', // DemiLight
  color: '$darkGray',
  fontSize: '$smallText',
});

const CommentsBlock = styled('div',{
  marginBottom: rem(40),
});

const AbsoluteGradient = styled('div',{
  position: 'absolute',
  width: rem(709),
  height: rem(130),

  background: 'linear-gradient( to bottom, white 40%, transparent )',
});

const AbsoluteButtonContainer = styled('div', {
  position: 'absolute',
  textAlign: 'center',

  width: rem(709),
});

const BtnShowMoreComments = styled('button',{
  position: 'relative',
  top: `-${rem(32)}`,

  width: rem(191),
  height: rem(40),

  border: '1px solid purple', // TODO : MAGNET-156 통합 이후 $purple로 변경
  borderRadius: rem(20),
  
  backgroundColor: 'white',

  fontSize: '$text',
  fontWeight: '$medium',
  color: 'purple', // TODO : MAGNET-156 통합 이후 $purple로 변경

  cursor: 'pointer',
});

const CommentInputForm = styled('form',{
  display: 'flex',
  alignItems: 'center',

  marginBottom: rem(56),
});

const InputBox = styled('input',{
  width: rem(779),
  height: rem(45),
  
  border: '1px solid #E5E0EB',
  borderRadius: rem(22),
  outline: 'none',

  boxSizing: 'border-box',
  padding: `0 ${rem(12)}`,

  '&::placeholder' : {
    fontWeight: '$regular', //DemiLight
    fontSize: '$smallText',
    color: '#ABA7AF',
  },

  marginRight: rem(16),
});

const BtnSubmitInput = styled('button',{
  width: rem(125),
  height: rem(40),

  border: 'none',
  borderRadius: rem(20),

  fontSize: '$text',
  fontWeight: '$medium',
  color: 'white',

  backgroundColor: 'purple', // TODO : MAGNET-156 통합 이후 $purple로 변경

  cursor: 'pointer',
});

const Footer = styled('div',{
  float: 'right',

  '& > span' : {
    fontSize: '$smallText',
    fontWeight: '$regular', // DemiLight
    color: '$darkGray',
  },

  '& > span:not(:last-child)': {
    marginRight: rem(17),
  },
});
