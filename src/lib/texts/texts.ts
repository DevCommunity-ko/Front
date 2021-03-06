const TermBasic =
  '<b>제 1조(목적)</b><br /> 헌법재판소 재판관은 탄핵 또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니한다. 행정각부의 장은 국무위원 중에서 국무총리의 제청으로 대통령이 임명한다. 국회에서 의결된 법률안은 정부에 이송되어 15일 이내에 대통령이 공포한다. 공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에 대한 보상은 법률로써 하되, 정당한 보상을 지급하여야 한다. 헌법에 의하여 체결·공포된 조약과 일반적으로 승인된 국제법규는 국내법과 같은 효력을 가진다. 국가안전보장회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 모든 국민의 재산권은 보장된다. 그 내용과 한계는 법률로 정한다. 국회는 헌법 또는 법률에 특별한 규정이 없는 한 재적의원 과반수의 출석과 출석의원 과반수의 찬성으로 의결한다. 가부동수인 때에는 부결된 것으로 본다. 대통령의 임기는 5년으로 하며, 중임할 수 없다. 국가는 법률이 정하는 바에 의하여 재외국민을 보호할 의무를 진다. 대한민국은 민주공화국이다. 군인·군무원·경찰공무원 기타 법률이 정하는 자가 전투·훈련등 직무집행과 관련하여 받은 손해에 대하여는 법률이 정하는 보상외에 국가 또는 공공단체에 공무원의 직무상 불법행위로 인한 배상은 청구할 수 없다.';

const TermPersonalInfo =
  '개인정보 수집 약관 템플릿입니다. 대한민국의 영토는 한반도와 그 부속도서로 한다. 탄핵소추의 의결을 받은 자는 탄핵심판이 있을 때까지 그 권한행사가 정지된다. 형사피고인은 유죄의 판결이 확정될 때까지는 무죄로 추정된다. 국정감사 및 조사에 관한 절차 기타 필요한 사항은 법률로 정한다. 누구든지 체포 또는 구속의 이유와 변호인의 조력을 받을 권리가 있음을 고지받지 아니하고는 체포 또는 구속을 당하지 아니한다. 체포 또는 구속을 당한 자의 가족등 법률이 정하는 자에게는 그 이유와 일시·장소가 지체없이 통지되어야 한다. 국가는 주택개발정책등을 통하여 모든 국민이 쾌적한 주거생활을 할 수 있도록 노력하여야 한다. 대통령은 제3항과 제4항의 사유를 지체없이 공포하여야 한다. 대통령은 국가의 원수이며, 외국에 대하여 국가를 대표한다. 명령·규칙 또는 처분이 헌법이나 법률에 위반되는 여부가 재판의 전제가 된 경우에는 대법원은 이를 최종적으로 심사할 권한을 가진다. 모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며, 법률이 정하는 바에 의하여 최저임금제를 시행하여야 한다. 선거에 있어서 최고득표자가 2인 이상인 때에는 국회의 재적의원 과반수가 출석한 공개회의에서 다수표를 얻은 자를 당선자로 한다.';

const TermsSubTitle =
  '전체동의는 필수 및 선택정보에 대한 동의도 포함되어 있으며, 개별적으로도 동의를 선택하실 수 있습니다. 선택항목에 대한 동의를 거부하시는 경우에도 서비스는 이용이 가능합니다.';

export const registerFormItems = [
  {
    isRequired: false,
    showAll: true,
    text: '마그넷 가입 약관에 모두 동의합니다.',
    subHead: TermsSubTitle,
  },
  {
    isRequired: true,
    showAll: false,
    text: '개인회원 약관 동의',
    terms: TermBasic,
  },
  {
    isRequired: true,
    showAll: false,
    text: '개인정보 수집 및 이용에 대한 안내',
    terms: TermPersonalInfo,
  },
  {
    isRequired: false,
    showAll: false,
    text: '마케팅 정보 SMS 수신 동의',
  },
  {
    isRequired: false,
    showAll: false,
    text: '마케팅 정보 이메일 수신 동의',
  },
];

export const RegisterFormDetailItems = [
  {
    type: 'text',
    label: '이름',
    placeholder: '실명(국문)으로 입력해주세요.',
    errorMsg: '실명을 정확히 입력해 주세요.',
    required: true,
  },
  {
    type: 'text',
    label: '생년월일',
    placeholder: 'YYYY-MM-DD',
    buttonList: [
      { label: '남자', value: 'male' },
      { label: '여자', value: 'female' },
      { label: '선택 없음', value: 'else' },
    ],
    required: true,
  },
  {
    type: 'email',
    label: '이메일',
    errorMsg: '이메일을 정확히 입력해 주세요.',
    required: true,
  },
  {
    type: 'tel',
    label: '휴대폰번호',
    placeholder: '정확한 휴대폰번호를 입력해주세요.',
    errorMsg: '정확한 휴대폰번호를 입력해주세요.',
    buttonList: [{ label: '인증번호 받기', value: 'getVNum' }],
    required: true,
  },
  {
    type: 'text',
    label: '인증번호 입력',
    errorMsg: '인증번호가 일치하지 않습니다.',
  },
];

export const RegisterFormFieldItems = [
  {
    type: 'text',
    label: '직군',
    placeholder: '선택해 주세요.',
    dropdown: ['항목1', '항목2', '항목3'],
  },
  {
    type: 'text',
    label: '직무',
    placeholder: '선택해 주세요.',
    dropdown: ['항목1', '항목2', '항목3'],
  },
  {
    type: 'text',
    label: '경력',
    placeholder: '선택해 주세요.',
    dropdown: ['항목1', '항목2', '항목3'],
  },
];

export const projFilterData = {
  field: {
    placeholder: '분야별',
    selectMultiple: false,
    list: [
      { value: 'web', label: 'Web' },
      { value: 'ios', label: 'iOS' },
      { value: 'android', label: 'android' },
      { value: 'etc', label: '기타' },
    ],
  },
  status: {
    placeholder: '상태별',
    selectMultiple: true,
    list: [
      { value: 'onIncruit', label: '팀원 모집중' },
      { value: 'onDevelop', label: '개발중' },
      { value: 'onService', label: '운영중' },
      { value: 'etc', label: '기타' },
    ],
  },
  sortby: {
    selectMultiple: false,
    list: [
      { value: 'popular', label: '인기순' },
      { value: 'newest', label: '최신순' },
    ],
  },
};
