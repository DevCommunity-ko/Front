export const login = ({/* noop */});

export const openNaverSSO = () => {
  const client_id = process.env.NEXT_PUBLIC_NAVER_TOKEN_CID || '';
  const redirect_uri = encodeURI(
    `${process.env.NEXT_PUBLIC_URL || ''}/login/authSocial/naver`,
  );
  const state_string = Math.random().toString(36).substr(2, 11);
  const request_url = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${client_id}&state=${state_string}&redirect_uri=${redirect_uri}`;

  window.open(
    request_url,
    'popup',
    'width=430, height=500, location=no, status=no, scrollbars=yes',
  );
};
