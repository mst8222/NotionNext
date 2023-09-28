const CONFIG = {
  HOME_BANNER_ENABLE: true,

  SITE_CREATE_TIME: '2023-09-05', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  NOTICE_BAR: [
    { title: '欢迎来到我的博客', url: 'https://gamenode.qiansom.com' }
  ],

  // 英雄区(首页顶部大卡)
  HERO_TITLE_1: '分享游戏',
  HERO_TITLE_2: '与数码信息',
  HERO_TITLE_3: 'Qiansom.com',
  HERO_TITLE_4: '主题公园',
  HERO_TITLE_5: '精彩游戏Mod推荐',
  HERO_TITLE_LINK: '/tag/游戏Mod',

  // 英雄区显示三个置顶分类
  HERO_CATEGORY_1: { title: '必看精选', url: '/tag/必看精选' },
  HERO_CATEGORY_2: { title: '热门文章', url: '/tag/热门文章' },
  HERO_CATEGORY_3: { title: '策略战棋', url: '/tag/策略战棋' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HERO_RECOMMEND_POST_TAG: '推荐',
  HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: true, // 推荐文章排序，为`true`时将强制按最后修改时间倒序

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  INFOCARD_GREETINGS: [
    '你好！我是',
    '🔍 分享与热心帮助',
    '🤝 专修游戏与科技',
    '🏃 脚踏实地行动派',
    '🏠 智能家居小能手',
    '🤖️ 数码科技爱好者',
    '🧱 游戏Mod发掘机'
  ],
  INFO_CARD_URL: '', // 个人资料底部按钮链接

  // 用户技能图标
  GROUP_ICONS: [
    {
      title_1: 'AceAttorney',
      img_1: '/images/heo/AceAttorney.webp',
      color_1: '#989bf8',
      title_2: 'Nintendo',
      img_2: '/images/heo/Nintendo.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'Civ6',
      img_1: '/images/heo/Civ6.webp',
      color_1: '#57b6e6',
      title_2: 'MMH3',
      img_2: '/images/heo/MMH3.webp',
      color_2: '#4082c3'
    },
    {
      title_1: 'FF7re',
      img_1: '/images/heo/FF7re.webp',
      color_1: '#ffffff',
      title_2: 'DQ11',
      img_2: '/images/heo/DQ11.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'Warhammer-Totalwar',
      img_1: '/images/heo/Warhammer-Totalwar.webp',
      color_1: '#eb6840',
      title_2: 'MMH7.5',
      img_2: '/images/heo/MMH7.5.webp',
      color_2: '#8f55ba'
    },
    {
      title_1: 'Mario&Rabbits',
      img_1: '/images/heo/Mario&Rabbits.webp',
      color_1: '#f29e39',
      title_2: 'Zelda',
      img_2: '/images/heo/Zelda.webp',
      color_2: '#2c51db'
    },
    {
      title_1: 'sc',
      img_1: '/images/heo/sc.webp',
      color_1: '#f7cb4f',
      title_2: 'war3',
      img_2: '/images/heo/war3.webp',
      color_2: '#e9572b'
    },
    {
      title_1: 'Xbox',
      img_1: '/images/heo/Xbox.webp',
      color_1: '#f7cb4f',
      title_2: 'PS',
      img_2: '/images/heo/PS.webp',
      color_2: '#e9572b'
    },
    {
      title_1: 'Steam',
      img_1: '/images/heo/Steam.webp',
      color_1: '#df5b40',
      title_2: 'Epic',
      img_2: '/images/heo/Epic.webp',
      color_2: '#1f1f1f'
    }
  ],

  SOCIAL_CARD: false, // 是否显示右侧，点击加入社群按钮
  SOCIAL_CARD_TITLE_1: '交流频道',
  SOCIAL_CARD_TITLE_2: '加入我们的社群讨论分享',
  SOCIAL_CARD_TITLE_3: '点击加入社群',
  SOCIAL_CARD_URL: '',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  MENU_INDEX: true, // 显示首页
  MENU_CATEGORY: true, // 显示分类
  MENU_TAG: true, // 显示标签
  MENU_ARCHIVE: true, // 显示归档
  MENU_SEARCH: true, // 显示搜索

  POST_LIST_COVER: true, // 列表显示文章封面
  POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  POST_LIST_SUMMARY: true, // 文章摘要
  POST_LIST_PREVIEW: false, // 读取文章预览
  POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  ARTICLE_RECOMMEND: true, // 文章关联推荐

  WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  WIDGET_ANALYTICS: false, // 显示统计卡
  WIDGET_TO_TOP: true,
  WIDGET_TO_COMMENT: true, // 跳到评论区
  WIDGET_DARK_MODE: true, // 夜间模式
  WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
