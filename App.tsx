import React from 'react';
import Background from './components/Background';
import CyberCard from './components/CyberCard';
import NumberTicker from './components/NumberTicker';
import AIAssistant from './components/AIAssistant';

import digitalMediaAward from './components/ten-assets/image11.png';
import competitionStage from './components/ten-assets/image14.png';
import taiwanShortFilmAward from './components/ten-assets/image15.png';
import bookOpenClaw from './components/ten-assets/image18.png';
import bookCredit from './components/ten-assets/image19.jpeg';
import bookInside from './components/ten-assets/image20.png';
import campusMark from './components/ten-assets/image5.png';
import geoPaper from './components/ten-assets/image22.png';
import openClawArticle from './components/ten-assets/image25.png';
import westBroadcastingPaper from './components/ten-assets/image23.png';
import forumInvite from './components/ten-assets/image24.png';
import mediaArticleDrone from './components/ten-assets/image26.png';
import countyCyberspaceWork from './components/ten-assets/image28.png';
import newYearVideo from './components/ten-assets/image30.png';
import portrait from './components/ten-assets/image9.png';
import borderPracticeGroup from './components/ten-assets/image32.png';
import borderPracticeSite from './components/ten-assets/image36.jpeg';
import zanhuaShoot from './components/ten-assets/image40.jpeg';
import heritageShoot from './components/ten-assets/image44.jpeg';
import serviceForum from './components/ten-assets/image46.png';
import serviceSummit from './components/ten-assets/image47.png';
import studentWorkPhoto from './components/ten-assets/image48.png';

type ImageRef = {
  src: string;
  alt: string;
};

const CANDIDATE = {
  name: '杜靖洋',
  college: '新闻与传播学院',
  major: '网络与新媒体专业',
  title: '创新探索 · 科技赋能传播',
  slogan: '以技术理解传播，以内容回应时代',
  summary: [
    '人民邮电出版社《OpenClaw养虾宝典：从安装到精通实战指南》第三作者',
    '《生成式引擎优化（GEO）的本质、作用机制与策略研究：数字传播与营销的新范式》发表于《传媒》期刊（CSSCI）',
    '全国大学生数字媒体科技作品竞赛全国一等奖、“京彩台湾”两岸青年短片征集大赛一等奖等',
    '参与4次国家级/国际性活动志愿服务及多次市级、校级社会实践',
  ],
};

const RESEARCH_PROJECTS = [
  {
    id: '01',
    title: '中华民族共同体意识在少数民族题材短视频中的嵌入机制研究',
    code: '国家社科 23BXW109',
    manager: '王斌',
    role: '围绕少数民族题材短视频传播、算法机制、文化符号消费和共同体意识嵌入路径开展研究，产出会议论文与阶段性成果。',
  },
  {
    id: '02',
    title: '人工智能赋能铸牢中华民族共同体意识教育研究',
    code: '国家民委 2025-GMJ-034',
    manager: '韩旸',
    role: '参与智能体初步开发和大模型微调，将AI能力转化为教育传播场景方案。',
    highlight: true,
  },
  {
    id: '03',
    title: '主流媒体全媒体生产传播评价体系的实施偏差与制度优化研究',
    code: '中宣部 HZ2025115',
    manager: '刘战伟',
    role: '参与主流媒体访谈对象整理、访谈记录和传播评价材料归纳。',
  },
  {
    id: '04',
    title: 'AIGC辅助高校思政短视频的创作机制研究',
    code: '北京高校基层立项课题',
    manager: '孙熙',
    role: '参与项目申报与智能体开发，探索AIGC进入高校思政短视频创作流程。',
  },
];

const COMPETITIONS: Array<{
  title: string;
  rank: string;
  description: string;
  works: string[];
  image?: ImageRef;
}> = [
  {
    title: '全国大学生数字媒体科技作品及创意竞赛',
    rank: '全国一等奖',
    description: '担任团队负责人，统筹项目进展并完成网页开发，将AI算法、数字媒体产品设计与AIGC内容应用结合。',
    works: ['数字媒体科技作品', 'AIGC内容应用', '网页开发'],
    image: { src: digitalMediaAward, alt: '全国大学生数字媒体科技作品及创意竞赛一等奖证书' },
  },
  {
    title: '2024中国公益映像节',
    rank: '入围作品奖',
    description: '担任导演，负责纪录片项目整体推进与各项具体事务，把公益议题转化为完整影像表达。',
    works: ['纪录片创作', '项目统筹', '影像表达'],
  },
  {
    title: '首届中华优秀传统文化视听大会',
    rank: '优秀作品',
    description: '担任摄影师，负责素材拍摄与筛选，参与传统文化影像表达。',
    works: ['传统文化传播', '摄影摄像', '素材筛选'],
  },
  {
    title: '首届“京彩台湾”两岸青年短片征集大赛',
    rank: '一等奖',
    description: '担任制片，负责拍摄地点与人物沟通，推进现场执行与作品交付。',
    works: ['短片制作', '制片沟通', '现场协调'],
    image: { src: taiwanShortFilmAward, alt: '京彩台湾两岸青年短片征集大赛一等奖资料' },
  },
];

const BOOKS: Array<{
  title: string;
  meta: string;
  role: string;
  image?: ImageRef;
}> = [
  {
    title: '《OpenClaw养虾宝典：从安装到精通实战指南》',
    meta: '人民邮电出版社，第三作者，书号A20260873',
    role: '参与写作、实操材料整理和案例内容供稿，是目前最核心的署名著作成果。',
    image: { src: bookOpenClaw, alt: 'OpenClaw养虾宝典书稿封面' },
  },
  {
    title: '《中国特色新闻学词条》实践篇',
    meta: '人民日报出版社，参与词条整理与撰写',
    role: '参与实践篇词条整理、统稿与内容协作，将专业知识转化为可检索的知识条目。',
    image: { src: bookCredit, alt: '中国特色新闻学词条编写参与页' },
  },
  {
    title: '《零基础玩转OpenClaw：从入门到精通》',
    meta: '中信出版社，参与书稿写作',
    role: '负责实操材料、截屏视频与案例内容供稿，推动技术成果以清晰方式传播。',
    image: { src: bookInside, alt: 'OpenClaw书稿内页' },
  },
  {
    title: '《OpenClaw实战应用：安全养“龙虾”手册》',
    meta: '中国人民大学出版社，参与书稿写作',
    role: '参与案例整理和应用路径梳理，继续扩展AIGC工具书写作经验。',
  },
];

const PAPERS: Array<{
  title: string;
  venue: string;
  status: string;
  type: string;
  image?: ImageRef;
}> = [
  {
    title: '生成式引擎优化（GEO）的本质、作用机制与策略研究：数字传播与营销的新范式',
    venue: '《传媒》期刊',
    status: '发表',
    type: '期刊',
    image: { src: geoPaper, alt: '生成式引擎优化GEO论文页面' },
  },
  {
    title: 'OpenClaw（小龙虾）的本质、能力与治理路径研究',
    venue: '《中国传媒科技》',
    status: '发表',
    type: '期刊',
    image: { src: openClawArticle, alt: 'OpenClaw论文页面' },
  },
  {
    title: '从“把关人”到“算法策略师”：生成式AI时代公关职业的范式转移',
    venue: '《西部广播电视》',
    status: '发表',
    type: '期刊',
    image: { src: westBroadcastingPaper, alt: '西部广播电视目录页' },
  },
  {
    title: '从算法凝视到符号消费：短视频中少数民族文化传播的失真机理研究',
    venue: '铸牢中华民族共同体意识与边疆治理学术研讨会',
    status: '录用',
    type: '论坛',
    image: { src: forumInvite, alt: '学术论坛入选通知' },
  },
  {
    title: '内容、算法与制度：共同体意识在民族题材短视频中嵌入的三重路径',
    venue: '国内学术会议',
    status: '录用',
    type: '论坛',
  },
];

const INTERNSHIPS: Array<{
  company: string;
  role: string;
  period: string;
  tasks: string;
  achievements: string;
  image?: ImageRef;
  stats?: Array<{ label: string; value: string }>;
}> = [
  {
    company: '清华新媒体研究中心',
    role: '研究实习生 / AI项目执行',
    period: '2025.12 至今',
    tasks: '撰写《Open Claw研究报告2.0》《AIGC报告5.0》等30余篇深度研究报告，持续跟踪AIGC、AI工具链和智能体应用。',
    achievements: '作为执行者参与OpenHarness、OpenEdu、OpenClaw、AI新闻、AI漫画游戏及小程序等项目，覆盖需求拆解、方案设计、Skill封装、内容自动化生产与开源运营。',
    stats: [{ label: '研究报告', value: '30+' }],
  },
  {
    company: '新华网 / 新华社',
    role: '新媒体运营实习生',
    period: '2026.01 - 2026.04',
    tasks: '参与微博端日常运维，负责内容发布、热点跟进、账号运营和传播数据观察。',
    achievements: '独立制作拜年系列视频并于微博端发布，全网累计观看量50万+，互动数据1万+。',
    image: { src: newYearVideo, alt: '新华网拜年系列视频发布画面' },
    stats: [{ label: '观看量', value: '500000+' }],
  },
  {
    company: '光明网 / 光明日报',
    role: '记者（实习）',
    period: '2025.09 - 2025.12',
    tasks: '参与第十七届全国营养科学大会、ANSO科学创新大会等重要活动报道。',
    achievements: '科技报道《加快布局“天空之城”，激活数智服务新效能》单篇阅读量达84万，提升新闻选题、采访写作与科技传播能力。',
    image: { src: mediaArticleDrone, alt: '光明网无人机科技报道截图' },
    stats: [{ label: '单篇阅读', value: '840000+' }],
  },
  {
    company: '北京清博智能科技有限公司',
    role: 'AI视频制作',
    period: '2024.10 - 2025.05',
    tasks: '多次独立完成政府及企业AI视频制作，并参与央视频《美猴王》AI短剧制作。',
    achievements: '系统接触AIGC视频生产、政企传播内容制作和AI影像项目执行流程。',
  },
  {
    company: '河南省尉氏县网信办',
    role: '基层网信部门实习',
    period: '2025.01 - 2025.02',
    tasks: '负责舆情监测、有害信息筛查和网宣工作，并制作AI网络安全宣传视频。',
    achievements: '走近基层网络治理现场，理解网络空间治理中的技术手段、责任意识与公共沟通能力。',
    image: { src: countyCyberspaceWork, alt: '基层网信实践材料截图' },
  },
];

const PRACTICES: Array<{
  title: string;
  description: string;
  outcome: string;
  image?: ImageRef;
}> = [
  {
    title: '“大国边疆”实践团',
    description: '参与“多元一体的天山长城与民族交融寻迹”实践团，负责纪录片拍摄与剪辑。',
    outcome: '相关视频被北京日报转发，并登上微博同城热搜榜。',
    image: { src: borderPracticeGroup, alt: '大国边疆实践团合影' },
  },
  {
    title: '边疆现场记录',
    description: '用镜头记录边疆地区民族交往交流交融的生动场景。',
    outcome: '在真实社会现场中理解中国、记录中国、传播中国。',
    image: { src: borderPracticeSite, alt: '大国边疆实践现场' },
  },
  {
    title: '泉州簪花文化调研',
    description: '赴福建泉州调研簪花文化，用影像记录非遗之美与地方文化活力。',
    outcome: '产出调研材料与影像作品，训练现场沟通、拍摄和叙事能力。',
    image: { src: zanhuaShoot, alt: '泉州簪花文化调研拍摄现场' },
  },
  {
    title: '甘南“三格毛”服饰调研',
    description: '赴甘肃甘南调研藏族非遗“三格毛”服饰，记录中华优秀传统文化的时代生命力。',
    outcome: '形成实践成果与影像记录，强化文化传播与社会观察能力。',
    image: { src: heritageShoot, alt: '甘南三格毛服饰调研现场' },
  },
];

const VOLUNTEER_EVENTS = [
  '中国—非盟能源合作项目推介会',
  '2024北京接诉即办改革论坛',
  '全球独角兽企业大会',
  '亚投行年会',
];

const STUDENT_WORKS = [
  {
    role: '班长',
    period: '2023.09 至今',
    description: '协助班导师，服务班级同学。',
    highlight_stat: '校级优秀班集体',
  },
  {
    role: '中央民族大学记者团成员',
    period: '2024.03 - 2024.10',
    description: '负责学校视频号和抖音账号视频制作。',
    highlight_stat: '产出视频4条',
  },
  {
    role: '学院团委办公室负责人',
    period: '2024.09 - 2025.06',
    description: '统筹学院志愿活动与团务工作。',
    highlight_stat: '服务700+人次 / 3100+小时',
  },
  {
    role: '学院视频工作坊负责人',
    period: '2025.09 至今',
    description: '服务本科生教育评估等重要活动拍摄任务。',
    highlight_stat: '任务14+次',
  },
];

function App() {
  return (
    <div className="relative min-h-screen text-gray-200 font-sans selection:bg-azure-orange selection:text-white">
      <Background />
      <AIAssistant />

      {/* --- 首页 --- */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 relative pt-36 md:pt-20">
        <div className="absolute top-10 left-6 md:left-24 flex items-center gap-4 opacity-80">
          <img src={campusMark} alt="中央民族大学" className="h-10 w-36 rounded-xl object-contain shadow-lg" />
          <div className="h-8 w-px bg-white/20"></div>
          <div className="text-xs font-mono tracking-[0.2em] text-azure-card text-glow">中央民族大学十佳大学生答辩</div>
        </div>

        <div className="max-w-5xl z-10 animate-float">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-azure-card/30 rounded-full bg-azure-bg-dark/50 backdrop-blur-md mb-8">
            <span className="w-2 h-2 bg-azure-orange rounded-full animate-pulse"></span>
            <span className="text-azure-card text-xs font-mono font-bold tracking-widest">2026</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-2xl">
            {CANDIDATE.title}
          </h1>

          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-10">
            <div className="h-1.5 w-24 bg-azure-orange rounded-full"></div>
            <p className="text-2xl text-azure-cream font-light italic">{CANDIDATE.slogan}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="bg-azure-bg-dark/40 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
              <p className="text-lg text-azure-card font-mono mb-2">候选人</p>
              <p className="text-3xl text-white font-bold">{CANDIDATE.name}</p>
              <p className="text-azure-cream mt-1">
                {CANDIDATE.college} | {CANDIDATE.major}
              </p>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <div>
                  <p className="text-2xl font-black text-white">4.25</p>
                  <p className="text-[10px] text-azure-card">GPA</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-white">1/46</p>
                  <p className="text-[10px] text-azure-card">综测排名</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-white">30+</p>
                  <p className="text-[10px] text-azure-card">研究报告</p>
                </div>
              </div>
            </div>
            <div className="border-l-2 border-azure-card/30 pl-8 pr-20 flex items-center md:pr-0">
              <ul className="space-y-3 text-base text-gray-200 leading-relaxed">
                {CANDIDATE.summary.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-3 w-3 flex-none rounded-full bg-azure-card shadow-[0_0_14px_rgba(157,179,229,0.8)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="absolute right-6 bottom-20 hidden md:block w-72 opacity-90">
          <img src={portrait} alt="杜靖洋" className="rounded-2xl border border-white/10 shadow-2xl object-cover" />
        </div>

        <div className="absolute bottom-10 left-0 w-full flex flex-col items-center gap-2 animate-bounce opacity-50">
          <span className="text-xs font-mono tracking-widest text-azure-card">向下滑动浏览</span>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* --- RESEARCH PROJECTS --- */}
      <section className="py-24 px-6 md:px-24 max-w-8xl mx-auto">
        <div className="flex items-end gap-6 mb-16 border-b border-white/10 pb-6">
          <span className="text-6xl font-black text-white/5 font-mono -mb-2">01</span>
          <div>
            <h2 className="text-4xl font-bold text-white mb-1">
              <span className="text-azure-orange">交叉融合</span> 创新
            </h2>
            <p className="text-azure-card font-mono text-sm">科研项目</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {RESEARCH_PROJECTS.map((project) => (
            <CyberCard
              key={project.id}
              title={project.code}
              subtitle={project.manager ? `负责人：${project.manager}` : ''}
              highlight={project.highlight}
            >
              <h4 className="text-white font-bold mb-3 text-xl leading-snug">{project.title}</h4>
              <div className="mt-4 p-4 bg-azure-bg-dark/50 rounded-lg border border-white/5">
                <span className="text-xs text-azure-orange block mb-2 font-mono tracking-wider font-bold">角色与贡献</span>
                <p className="text-gray-300 text-sm leading-7">{project.role}</p>
              </div>
            </CyberCard>
          ))}
        </div>
      </section>

      {/* --- COMPETITIONS --- */}
      <section className="py-24 px-6 md:px-24 max-w-8xl mx-auto bg-gradient-to-b from-transparent to-azure-bg-dark/30">
        <div className="flex items-end gap-6 mb-16 border-b border-white/10 pb-6">
          <span className="text-6xl font-black text-white/5 font-mono -mb-2">02</span>
          <div>
            <h2 className="text-4xl font-bold text-white mb-1">
              <span className="text-cyan-300">作品转化</span> 创新
            </h2>
            <p className="text-azure-card font-mono text-sm">竞赛表现</p>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="flex-1 p-8 rounded-2xl bg-gradient-to-br from-azure-orange to-orange-700 text-white shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="text-7xl font-sans font-bold mb-2">
                  3<span className="text-4xl opacity-80">+</span>
                </div>
                <div className="text-lg font-medium tracking-wide">国家一等奖</div>
              </div>
            </div>
            <div className="flex-1 p-8 rounded-2xl glass-panel text-center flex flex-col justify-center items-center">
              <div className="text-5xl font-sans text-azure-cream font-bold mb-2">
                2<span className="text-3xl opacity-60">+</span>
              </div>
              <div className="text-sm text-azure-card tracking-wider">国家二等奖</div>
            </div>
            <img src={competitionStage} alt="竞赛决赛现场" className="rounded-2xl border border-white/10 object-cover shadow-lg" />
          </div>

          <div className="md:col-span-8 space-y-4">
            {COMPETITIONS.map((comp, idx) => (
              <div key={idx} className="group flex flex-col md:flex-row gap-6 p-6 glass-panel rounded-xl hover:bg-white/5 transition-colors">
                <div className="md:w-36 flex-shrink-0 pt-1">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wide shadow-lg ${
                      idx <= 2
                        ? 'bg-white text-azure-bg font-extrabold'
                        : 'bg-azure-bg-dark text-azure-card border border-white/10'
                    }`}
                  >
                    {comp.rank}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-azure-cream transition-colors">{comp.title}</h3>
                  <p className="text-sm text-gray-400 my-2 leading-7">{comp.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {comp.works.map((work) => (
                      <span key={work} className="text-xs font-mono text-cyan-200 bg-cyan-900/30 border border-cyan-500/30 px-3 py-1 rounded-md">
                        {work}
                      </span>
                    ))}
                  </div>
                  {comp.image && (
                    <img src={comp.image.src} alt={comp.image.alt} className="mt-3 w-full max-w-[180px] rounded-lg border border-white/10" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ACADEMIC & INTERNSHIPS --- */}
      <section className="py-24 px-6 md:px-24 max-w-8xl mx-auto">
        <div className="flex items-end gap-6 mb-16 border-b border-white/10 pb-6">
          <span className="text-6xl font-black text-white/5 font-mono -mb-2">03</span>
          <div>
            <h2 className="text-4xl font-bold text-white mb-1">
              <span className="text-azure-orange">前沿引领</span> 创新
            </h2>
            <p className="text-azure-card font-mono text-sm">学术出版与行业实践</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-xl font-bold text-azure-cream mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-azure-cream"></span> 著作书稿与学术论文
            </h3>

            <div className="mb-10">
              <p className="text-xs font-mono text-azure-orange mb-4 tracking-widest">著作书稿</p>
              <div className="space-y-5">
                {BOOKS.map((book) => (
                  <CyberCard key={book.title} title={book.title} subtitle={book.meta} className="bg-azure-bg-dark/40">
                    <div className="flex gap-4 items-start">
                      {book.image && (
                        <img src={book.image.src} alt={book.image.alt} className="w-24 h-32 rounded-lg border border-white/10 object-cover object-top flex-none" />
                      )}
                      <p className="text-sm text-gray-300 leading-7">{book.role}</p>
                    </div>
                  </CyberCard>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-mono text-azure-orange mb-4 tracking-widest">已发表与录用论文</p>
              <div className="space-y-6">
                {PAPERS.map((paper) => (
                  <div key={paper.title} className="relative pl-8 border-l border-white/10 pb-2 group">
                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-azure-bg border-2 border-azure-card rounded-full group-hover:bg-azure-orange group-hover:border-azure-orange transition-colors"></div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-azure-bg bg-azure-card px-2 py-0.5 rounded-sm">{paper.type}</span>
                      <span className="text-xs text-azure-orange">{paper.status}</span>
                    </div>
                    <h4 className="text-lg text-white font-medium leading-relaxed mb-1 group-hover:text-cyan-200 transition-colors">{paper.title}</h4>
                    <p className="text-sm text-gray-500 font-mono italic">{paper.venue}</p>
                    {paper.image && (
                      <img src={paper.image.src} alt={paper.image.alt} className="mt-3 w-full max-w-[170px] rounded-lg border border-white/10" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-azure-cream mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-azure-cream"></span> 行业实践
            </h3>
            <div className="space-y-6">
              {INTERNSHIPS.map((job) => (
                <CyberCard key={`${job.company}-${job.period}`} title={job.company} subtitle={job.period} className="bg-azure-bg-dark/40">
                  <div className="flex flex-col sm:flex-row justify-between gap-4">
                    <div>
                      <div className="text-azure-orange text-sm font-bold mb-3 uppercase tracking-wider">{job.role}</div>
                      <p className="text-xs text-gray-300 mb-3 leading-relaxed">{job.tasks}</p>
                      <p className="text-xs text-cyan-200 border-t border-white/5 pt-3">{job.achievements}</p>
                      {job.image && (
                        <img src={job.image.src} alt={job.image.alt} className="mt-3 w-full max-w-[190px] rounded-lg border border-white/10" />
                      )}
                    </div>
                    {job.stats && (
                      <div className="sm:text-right min-w-[100px] bg-white/5 p-3 rounded-lg sm:bg-transparent sm:p-0">
                        {job.stats.map((stat) => (
                          <div key={stat.label}>
                            <div className="text-[10px] text-gray-400 uppercase tracking-widest">{stat.label}</div>
                            <div className="text-2xl font-mono text-white font-bold text-glow">
                              <NumberTicker value={stat.value.toString()} />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </CyberCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- PRACTICE & LEADERSHIP --- */}
      <section className="py-24 px-6 md:px-24 max-w-8xl mx-auto bg-azure-bg-dark/20 border-y border-white/5">
        <div className="flex items-end gap-6 mb-16">
          <span className="text-6xl font-black text-white/5 font-mono -mb-2">04</span>
          <div>
            <h2 className="text-4xl font-bold text-white mb-1">
              知行合一 <span className="text-cyan-300">创新</span>
            </h2>
            <p className="text-azure-card font-mono text-sm">社会实践与学生工作</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {PRACTICES.map((practice) => (
            <div key={practice.title} className="glass-panel p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-azure-orange/10 blur-3xl rounded-full -mr-16 -mt-16"></div>
              <h4 className="text-white font-bold text-xl mb-3 relative z-10">{practice.title}</h4>
              <p className="text-gray-400 text-sm mb-6 relative z-10 leading-relaxed">{practice.description}</p>
              <div className="text-sm font-medium text-cyan-200 relative z-10 pl-3 border-l-2 border-cyan-500">
                {practice.outcome}
              </div>
              {practice.image && (
                <img src={practice.image.src} alt={practice.image.alt} className="mt-4 w-full max-w-[230px] rounded-lg border border-white/10 object-cover" />
              )}
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-sm font-mono text-azure-cream mb-3 tracking-widest flex items-center gap-4">
            高规格志愿服务<span className="flex-1 h-px bg-white/10"></span>
          </h3>
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <img src={serviceForum} alt="北京接诉即办改革论坛志愿服务现场" className="w-28 h-20 rounded-lg border border-white/10 object-cover" />
            <img src={serviceSummit} alt="中国非盟能源合作项目推介会志愿服务现场" className="w-28 h-20 rounded-lg border border-white/10 object-cover" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {VOLUNTEER_EVENTS.map((event) => (
              <div key={event} className="px-4 py-3 bg-azure-bg-dark border border-white/10 rounded-lg text-sm text-gray-300 text-center hover:border-azure-card transition-colors">
                {event}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
          <img src={studentWorkPhoto} alt="学生工作与实践记录" className="w-32 h-24 rounded-lg border border-white/10 object-cover" />
          <p className="text-sm text-gray-400 leading-7 max-w-3xl">
            担任班长、学院团委办公室负责人、学院视频工作坊负责人等职务，在班级建设、志愿统筹与影像记录中持续服务集体。
          </p>
        </div>

        <div className="rounded-xl overflow-hidden border border-white/10 bg-azure-bg-dark/30">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 text-xs text-azure-card font-mono tracking-wider">
                <th className="py-4 px-6">职务</th>
                <th className="py-4 px-6 hidden md:table-cell">期间</th>
                <th className="py-4 px-6">主要职责</th>
                <th className="py-4 px-6 text-right">成果</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-white/5">
              {STUDENT_WORKS.map((work) => (
                <tr key={work.role} className="hover:bg-white/5 transition-colors group">
                  <td className="py-5 px-6 font-bold text-white group-hover:text-azure-orange transition-colors">{work.role}</td>
                  <td className="py-5 px-6 text-gray-500 font-mono text-xs hidden md:table-cell">{work.period}</td>
                  <td className="py-5 px-6 text-gray-400">{work.description}</td>
                  <td className="py-5 px-6 text-right font-mono text-cyan-300 font-bold text-base">{work.highlight_stat || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <section className="py-20 px-6 md:px-24 max-w-5xl mx-auto text-center">
        <div className="border-t border-white/10 pt-16">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-azure-orange via-purple-500 to-cyan-500 mb-8">
            <div className="bg-azure-bg px-8 py-4 rounded-full">
              <p className="text-xl md:text-2xl font-bold text-white">
                “理解技术、善用技术、反思技术，<span className="text-azure-orange">传播时代声音</span>。”
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-xs text-gray-500 font-mono tracking-widest mt-8">
            <span>候选人：杜靖洋</span>
            <span>中央民族大学十佳大学生答辩</span>
            <span>新闻与传播学院</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
