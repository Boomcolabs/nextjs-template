// Korean visa types

import i18n from "@/lib/i18n";

export const VISALIST = [
  { label: "Foreigner", value: "Foreigner" },
  { label: "C-1", value: "C-1" },
  { label: "C-3", value: "C-3" },
  { label: "D-2", value: "D-2" },
  { label: "D-4", value: "D-4" },
  { label: "D-5", value: "D-5" },
  { label: "D-6", value: "D-6" },
  { label: "D-7", value: "D-7" },
  { label: "D-8", value: "D-8" },
  { label: "D-9", value: "D-9" },
  { label: "E-1", value: "E-1" },
  { label: "E-2", value: "E-2" },
  { label: "E-3", value: "E-3" },
  { label: "E-4", value: "E-4" },
  { label: "E-5", value: "E-5" },
  { label: "E-6", value: "E-6" },
  { label: "E-7", value: "E-7" },
  { label: "E-9", value: "E-9" },
  { label: "E-10", value: "E-10" },
  { label: "F-1", value: "F-1" },
  { label: "F-2", value: "F-2" },
  { label: "F-3", value: "F-3" },
  { label: "F-4", value: "F-4" },
  { label: "F-5", value: "F-5" },
  { label: "F-6", value: "F-6" },
  { label: "G-1", value: "G-1" },
  { label: "H-1", value: "H-1" },
  { label: "H-2", value: "H-2" },
];

export const LANGUAGE_LIST = [
  { label: "Korean", value: "Korean" },
  { label: "English", value: "English" },
  { label: "Mandarin", value: "Mandarin" },
  { label: "Japanese", value: "Japanese" },
  { label: "Vietnamese", value: "Vietnamese" },
];

export const JOB_TYPE_LIST = [
  { label: "Full-time", value: "Full-time" },
  { label: "Part-time", value: "Part-time" },
  { label: "Contract", value: "Contract" },
  { label: "Temporary", value: "Temporary" },
  { label: "Internship", value: "Internship" },
  { label: "Freelance", value: "Freelance" },
];

export const CAREER_LEVEL_LIST = [
  { label: "Entry Level", value: "Entry Level" },
  { label: "1-3 years", value: "1-3 years" },
  { label: "3-5 years", value: "3-5 years" },
  { label: "5-8 years", value: "5-8 years" },
  { label: "10+ years", value: "10+ years" },
];

// FOR JEJU ISLAND
export const getIndustryList = () => {
  return [
    { label: i18n.t("industryList.A"), value: "A" },
    { label: i18n.t("industryList.B"), value: "B" },
    { label: i18n.t("industryList.C"), value: "C" },
    { label: i18n.t("industryList.D"), value: "D" },
    { label: i18n.t("industryList.E"), value: "E" },
    { label: i18n.t("industryList.F"), value: "F" },
    { label: i18n.t("industryList.G"), value: "G" },
    { label: i18n.t("industryList.H"), value: "H" },
    { label: i18n.t("industryList.I"), value: "I" },
    { label: i18n.t("industryList.J"), value: "J" },
    { label: i18n.t("industryList.K"), value: "K" },
    { label: i18n.t("industryList.L"), value: "L" },
    { label: i18n.t("industryList.M"), value: "M" },
    { label: i18n.t("industryList.N"), value: "N" },
    { label: i18n.t("industryList.O"), value: "O" },
    { label: i18n.t("industryList.P"), value: "P" },
    { label: i18n.t("industryList.Q"), value: "Q" },
    { label: i18n.t("industryList.R"), value: "R" },
    { label: i18n.t("industryList.S"), value: "S" },
    { label: i18n.t("industryList.T"), value: "T" },
    { label: i18n.t("industryList.U"), value: "U" },
  ];
};

export const COMPANY_SIZE = [
  { label: "1-10", value: "1-10" },
  { label: "11-50", value: "11-50" },
  { label: "51-100", value: "51-100" },
  { label: "101-200", value: "101-200" },
  { label: "201-500", value: "201-500" },
];

export const SKILL_REQUIRED = [
  { label: "2D Animation", value: "2D Animation" },
  { label: "3D Animation", value: "3D Animation" },
  { label: "3D Modelling", value: "3D Modelling" },
  { label: "Adobe Ilustrator", value: "Adobe Ilustrator" },
  { label: "Adobe Photoshop", value: "Adobe Photoshop" },
  { label: "Adobe XD", value: "Adobe XD" },
  { label: "Basic Design", value: "Basic Design" },
  { label: "Database", value: "Database" },
  { label: "Design System", value: "Design System" },
  { label: "English Communication", value: "English Communication" },
  { label: "Canva", value: "Canva" },
  { label: "Capcut", value: "Capcut" },
  { label: "Game Design", value: "Game Design" },
];

export const WORK_ARRANGEMENT = [
  { label: "Onsite", value: "Onsite" },
  { label: "Remote", value: "Remote" },
  { label: "Hybrid", value: "Hybrid" },
];

/*
    JEJU_CITY("제주시"), SEOGWIPO_CITY("서귀포시"), OTHER("Other region");
    private String description;
*/

export const MIDDLE_REGION = [
  {
    label: "제주시",
    value: "JEJU_CITY",
  },
  {
    label: "서귀포시",
    value: "SEOGWIPO_CITY",
  },
  // {
  //   label: 'Other region',
  //   value: 'OTHER',
  // },
];
export const JEJU_CITY_LOWER_REGION = [
  {
    label: "일도1동 (중앙로, 삼성로, 동문로)",
    value: "ILDO_1_DONG",
  },
  {
    label: "일도2동 (동광로, 청사로, 연삼로)",
    value: "ILDO_2_DONG",
  },
  {
    label: "이도1동 (중앙로, 서광로, 동광로)",
    value: "IDO_1_DONG",
  },
  {
    label: "이도2동 (연삼로, 동광로, 남광로)",
    value: "IDO_2_DONG",
  },
  {
    label: "삼도1동 (서광로, 관덕로, 중앙로)",
    value: "SAMDO_1_DONG",
  },
  {
    label: "삼도2동 (서광로, 동광로, 연삼로)",
    value: "SAMDO_2_DONG",
  },
  {
    label: "용담1동 (서광로, 용마로, 용문로)",
    value: "YONGDAM_1_DONG",
  },
  {
    label: "용담2동 (용마로, 서광로, 용문로)",
    value: "YONGDAM_2_DONG",
  },
  {
    label: "건입동 (임항로, 동문로, 건입길)",
    value: "GEONIP_DONG",
  },
  {
    label: "화북동 (화북로, 진남로, 도령로)",
    value: "HWABUK_DONG",
  },
  {
    label: "삼양동 (삼양로, 영평로, 화삼로)",
    value: "SAMYANG_DONG",
  },
  {
    label: "봉개동 (봉개로, 번영로, 1100로)",
    value: "BONGGAE_DONG",
  },
  {
    label: "아라동 (아란13길, 아란서길, 번영로)",
    value: "ARA_DONG",
  },
  {
    label: "오라동 (오라로, 오남로, 오광로)",
    value: "ORA_DONG",
  },
  {
    label: "노형동 (노연로, 월랑로, 노형로)",
    value: "NOHYUNG_DONG",
  },
  {
    label: "외도동 (서쪽로, 도근내길, 새서로)",
    value: "OEDO_DONG",
  },
  {
    label: "이호동 (서해안로, 이호일동, 도근내길)",
    value: "IHO_DONG",
  },
  {
    label: "도두동 (도두일동, 공항로, 서해안로)",
    value: "DODU_DONG",
  },
];

export const SEOGWIPO_CITY_LOWER_REGION = [
  {
    label: "송산동 (태평로, 중앙로, 서문로)",
    value: "SONGSAN_DONG",
  },
  {
    label: "정방동 (중정로, 천지로, 서문로)",
    value: "JEONGBANG_DONG",
  },
  {
    label: "중앙동 (중앙로, 태평로, 서문로)",
    value: "JUNGANG_DONG",
  },
  {
    label: "천지동 (천지로, 서문로, 일주동로)",
    value: "CHEONJI_DONG",
  },
  {
    label: "효돈동 (효돈로, 산록남로, 일주동로)",
    value: "HYODON_DONG",
  },
  {
    label: "영천동 (일주동로, 효돈로, 태위로)",
    value: "YEONGCHEON_DONG",
  },
  {
    label: "동홍동 (동홍로, 가장로, 중앙로)",
    value: "DONGHONG_DONG",
  },
  {
    label: "서홍동 (서홍로, 태평로, 중앙로)",
    value: "SEOHONG_DONG",
  },
  {
    label: "대륜동 (대륜로, 동문로, 중앙로)",
    value: "DAERYUN_DONG",
  },
  {
    label: "대천동 (대천로, 중산간서로, 일주서로)",
    value: "DAECHEON_DONG",
  },
  {
    label: "중문동 (중문관광로, 색달로, 일주서로)",
    value: "JUNGMOON_DONG",
  },
  {
    label: "예래동 (예래로, 중문관광로, 일주서로)",
    value: "YERAE_DONG",
  },
];

// Forum

export const getTopicPostList = () => {
  return [
    {
      label: i18n.t("screens.forum.topic-list.real-estate"),
      value: "real-estate",
    },
    {
      label: i18n.t("screens.forum.topic-list.career"),
      value: "career",
    },
  ];
};

export const getTopicSearchList = () => {
  return [
    {
      label: i18n.t("screens.forum.topic-list.all"),
      value: "",
    },
    ...getTopicPostList(),
  ];
};

// Real estate

export const getRealEstateTopicPostList = () => {
  return [
    {
      label: i18n.t("screens.real-estate.topic-list.rent"),
      value: "RENT",
    },
    {
      label: i18n.t("screens.real-estate.topic-list.lease"),
      value: "LEASE",
    },
  ];
};

export const getRealEstateTopicSearchList = () => {
  return [
    {
      label: i18n.t("screens.real-estate.topic-list.all"),
      value: "",
    },
    ...getRealEstateTopicPostList(),
  ];
};

export const getHomeCategoryList = (languageCode: string) => {
  if (languageCode === "ko") {
    return [{ label: "전체", value: "All" }, ...getIndustryList()];
  }
  if (languageCode === "zh") {
    return [{ label: "全部", value: "All" }, ...getIndustryList()];
  }

  return [{ label: "All", value: "All" }, ...getIndustryList()];
};

// export const noticeNoDataContent = {
//   NOTIFICATION: {
//     icon: require("@/assets/no-noti.png"),
//     title: "screens.noticeBoard.noNoti",
//     desc: "screens.noticeBoard.noNoti-desc",
//   },
//   EVENT: {
//     icon: require("@/assets/no-event.png"),
//     title: "screens.noticeBoard.noEvent",
//     desc: "screens.noticeBoard.noEvent-desc",
//   },
//   ANNOUNCEMENT: {
//     icon: require("@/assets/no-annouce.png"),
//     title: "screens.noticeBoard.noAnnouce",
//     desc: "screens.noticeBoard.noAnnouce-desc",
//   },
// };

// export const YEAR_OF_BIRTH = Array.from({ length: 150 }, (_, i) => {
//   return (new Date().getFullYear() - i).toString();
// }).toReversed();

// export const YEAR_OF_EDUCATION = Array.from({ length: 150 }, (_, i) => {
//   return (new Date().getFullYear() + 30 - i).toString();
// }).toReversed();

export const statusPicker = [
  {
    label: "Active",
    value: "active",
  },
  {
    label: "Banned",
    value: "banned",
  },
  {
    label: "Inactive",
    value: "inactive",
  },
];
