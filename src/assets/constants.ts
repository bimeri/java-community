
export const constants = {
  ASSET_DIR: "assets",
  ACTIVE_VERSION: "",
  PRIMARY_COLOR: "#673BB3FF",
  ACCESS_TOKENS: 'ACCESS_TOKENS',
  REFRESH_TOKENS: 'REFRESH_TOKENS',
  USER: 'USER',
  USER_EMAIL: 'USER_EMAIL',
  BIBLE_MODE: 'BIBLE_MODE',
  VOICE: 'VOICE',
  LAST_BOOK: 'LAST_BOOK',
  CURRENT_VERSION: 'CURRENT_VERSION',
  LAST_CHAPTER: 'LAST_CHAPTER',
  LANG: 'lang',
  PAGE_SIZE: 12,
  REPLY_PAGE: 0,
  REPLY_SIZE: 5,
  CONGREGATION: 'congregation',
  CONGREGATION_NAME: 'CONGREGATION_NAME',
  SECRETE_KEY: 'ADETDCVKQDNFTLDCFTHRDC1Q34DSRDNT567JMOU\'',
  COC_CAPTCHA_KEY: '6LeIrGYqAAAAAFy7LSOAIvkZhx9Dq5SWLIiiLNb6', // 'coc-captcha-key'
  GOOGLE_SITE_KEY: '6LfgtWYqAAAAAHQzUB3Bl5iipS0OcodvZGBsm7d2',
  GOOGLE_SITE_SECRETE: '6LfgtWYqAAAAAEAiuUwvZPZFEUTQg2d5VyLvOylX',
  LANG_VALUE: navigator.language.split("-")[0] || 'en',
  RAW_LOCALE: navigator.language,
  CONGREGATION_CENTER_CURRENT_MENU: 'CONGREGATION_CENTER_CURRENT_MENU',
  // DATE_FORMAT: "MMM dd, YYYY",
  DATE_FORMAT: "EEE MMM dd yyyy, h:mm a",
  DATE_FORMAT_WITHOUT_TIME: "EEE MMM dd, yyyy",
  DEFAULT_CHURCH_LOGO: `assets/images/default.png`,
  DEFAULT_MALE: 'assets/images/male.jpg',
  DEFAULT_FEMALE: 'assets/images/female.png',
  CHURCH_LOGO: 'assets/images/logo.png',
  CONTENT_LENGTH: 'image/png',
  FILE_EXTENSIONS: ["jpeg", "jpg", "png", "gif", "jfif"],
  MAX_FILE_SIZE: 0.5,  // megabyte
  MOBILE_SIZE: 985,
  POST_MAXIMUM_CONTENT_LENGTH: 400,
  QUALITY_OPTIONS: [
    { label: '144p', value: '144p' },
    { label: '240p', value: '240p' },
    { label: '360p', value: '360p' },
    { label: '480p', value: '480p' },
    { label: '720p HD', value: '720p' },
    { label: '1080p Full HD', value: '1080p'},
    { label: '4K Ultra HD', value: '4k' }
  ],
  DEFAULT_EMOJI: ['\uD83E\uDD2B','\uD83E\uDD20','\uD83D\uDE0D','\uD83D\uDE0E','\uD83E\uDD17', '\uD83D\uDE09','\uD83D\uDE1C','\uD83D\uDC4B', '\uD83D\uDC4C','\uD83D\uDE0A', '\uD83D\uDE04','\uD83D\uDE03'],
  LIKE_ICONS: [
    {
      id: 1,
      icon: '😍',
      title: 'Heart eyes',
      img: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f60d/512.gif',
      hover: true
    },
    {
      id: 2,
      icon: '😃',
      title: 'Smile',
      img: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f603/512.gif',
      hover: true
    },
    {
      id: 3,
      icon: '😆',
      title: 'Laughing',
      img: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f606/512.gif',
      hover: true
    },
    {
      id: 4,
      icon: '😢',
      title: 'Cry',
      img: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f622/512.gif',
      hover: true
    },
    {
      id: 5,
      icon: '😞',
      title: 'Sad',
      img: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f61e/512.gif',
      hover: true
    },
    {
      id: 6,
      icon: '😠',
      title: 'Angry',
      img: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f620/512.gif',
      hover: true
    },
  ],
  SONG_MODE: "SONG_MODE",
  CURRENT_SONG_NUMBER: "CURRENT_SONG_NUMBER",
  CURRENT_SONG_BOOK: "CURRENT_SONG_BOOK",
  CURRENT_SONG: "CURRENT_SONG"
}
