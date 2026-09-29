import SiteHeader from "./site-header";
import Image from "next/image";

const profile = {
  name: "黄盛宝",
  role: "产品经理 / 用户运营",
  email: "1321128887@qq.com",
  phone: "17356582813",
};

const skillGroups = [
  { title: "AI 应用", ability: "提示词设计 · 需求拆解 · 知识整理 · 数据分析辅助", tools: "大模型工具 · SQL" },
  { title: "产品设计", ability: "用户访谈 · 需求分析 · PRD · 原型设计 · 流程设计", tools: "Axure · 墨刀 · Visio · XMind" },
  { title: "数据运营", ability: "数据建模 · 用户行为分析 · 可视化 · 运营策略", tools: "Metabase · Quick BI · MySQL" },
  { title: "项目交付", ability: "售前方案 · 跨团队协作 · 培训 · 复盘与迭代", tools: "Office · PR · PS · CAD" },
];

const projects = [
  { kicker: "省级数字化平台", title: "安徽省公安厅警用装备智能管理项目", period: "2022.01 — 至今", summary: "规划警用装备全生命周期数字化管理平台，统筹需求分析、原型设计、产品迭代、培训与全省运营。", result: "合同额超千万元 · 服务用户超 10 万", tags: ["产品规划", "用户运营", "数据分析"] },
  { kicker: "物联网智能仓储", title: "合肥市、曲靖市警用装备智能化仓库", period: "2023.06 — 2025.12", summary: "集成机器人、电子标签、视频监控、温湿度和水浸报警能力，推进软硬件一体化交付与体验优化。", result: "跨部门交付 · 场景持续迭代", tags: ["IoT", "项目交付", "场景设计"] },
  { kicker: "公务用车平台", title: "安徽省、云南省地市公务用车项目", period: "2021.10 — 2023.03", summary: "围绕“全省一张网”梳理监督管理、用户服务、跨部门调度和执法执勤需求，输出解决方案与开发计划。", result: "跨区域平台 · 长周期运营", tags: ["To G", "解决方案", "客户运营"] },
  { kicker: "企业综合服务", title: "淮河能源集团行政服务综合管理平台", period: "2021.07 — 2022.12", summary: "覆盖公务用车、接待、办公用房、智慧食堂、门禁与停车位，负责功能规划、原型设计和需求全流程管理。", result: "多业务融合 · 按期高质量交付", tags: ["To B", "原型设计", "资源协调"] },
];

const strengths = [
  ["01", "复杂业务抽象", "能把政企场景中的多角色、多流程和多约束，整理为清晰、可执行的产品方案。"],
  ["02", "从规划到交付", "覆盖定位、路线图、PRD、原型、评审、开发、验收、培训和持续运营。"],
  ["03", "数据驱动运营", "建立可视化分析模型，持续定位产品使用问题，并以运营策略推动改进。"],
  ["04", "客户与团队协同", "在客户、业务、研发、设计和实施之间对齐目标，推动复杂项目按期落地。"],
  ["05", "AI 提效实践", "把大模型用于需求、方案、文档、知识与数据工作，并通过脱敏和复核保障质量。"],
];

const awards = [
  { year: "2019", title: "“互联网+”校二等奖" },
  { year: "2020", title: "“互联网+”省三等奖" },
  { year: "2021", title: "公司优秀新人" },
  { year: "2022", title: "公司优秀团队" },
  { year: "2023", title: "公司优秀员工" },
  { year: "2024", title: "公司优秀员工" },
].sort((a, b) => Number(a.year) - Number(b.year));

const courses = ["数学分析", "高等代数", "数学建模", "数据结构", "数据库", "计算机网络", "编程基础"];

export default function Home() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return <main>
    <SiteHeader name={profile.name} role={profile.role} />

    <section className="hero shell" id="top">
      <div className="heroIntro">
      <div className="heroCopy">
        <p className="eyebrow">Product Manager Portfolio</p>
        <h1>{profile.name}｜<span>产品经理候选人</span></h1>
        <p className="heroLede">5 年+ To B / To G 产品与用户运营经验。覆盖产品规划、需求分析、原型设计、数据运营、售前解决方案、项目交付与团队管理。</p>
        <div className="proofStrip"><span><strong>1000万+</strong>项目合同额</span><span><strong>10万+</strong>服务用户</span><span><strong>5年+</strong>产品运营</span></div>
        <div className="heroActions"><a className="btn primary" href="#projects">查看代表项目</a><a className="btn ghost" href={`${base}/huang-shengbao-resume-2026.pdf`} download>下载简历 PDF</a></div>
      </div>

        <figure className="heroPhoto"><Image src={`${base}/huang-shengbao-portrait-2026.png`} alt="黄盛宝个人照片" width={940} height={1670} priority unoptimized /></figure>
      </div>

      <div className="heroOverview">
        <div className="heroStackWrap"><h2>个人核心能力栈 <span>知识基础 + 专业能力 + 工具使用</span></h2><div className="heroStack">{skillGroups.map(s=><article key={s.title}><h3>{s.title}</h3><div className="skillDetails"><p><em>能力</em><span>{s.ability}</span></p><p><em>工具</em><span>{s.tools}</span></p></div></article>)}</div></div>
        <aside className="interviewerPanel" aria-label="面试官快速入口"><div><small>FOR INTERVIEWERS</small><b>按评估任务快速查看</b></div><a href="#strengths"><span>30 秒判断匹配度</span><small>5 个证据说明为什么适合产品经理</small></a><a href="#projects"><span>查看代表项目</span><small>产品决策、交付过程与业务结果</small></a><a href="#experience"><span>查看工作经历</span><small>技术理解与运营管理双重经验</small></a><a href={`${base}/huang-shengbao-resume-2026.pdf`} download><span>下载正式简历</span><small>PDF 文件</small></a></aside>
      </div>
    </section>

    <section className="section shell" id="education"><div className="sectionHeading"><p>EDUCATION</p><h2>教育背景</h2></div><article className="educationCard"><div className="schoolLogo"><Image src={`${base}/anhui-agricultural-university-logo.png`} alt="安徽农业大学校徽" width={1080} height={1080} unoptimized /></div><div className="educationDetails"><div className="cardMeta"><span>BACHELOR · 本科</span><span className="educationPeriod"><time dateTime="2017-09">2017.09</time>–<time dateTime="2021-07">2021.07</time></span></div><h3>安徽农业大学理学院</h3><p className="educationDegree">信息与计算科学学士</p><ul className="courseTags" aria-label="主修课程">{courses.map(course=><li key={course}>{course}</li>)}</ul></div></article></section>

    <section className="section shell" id="projects"><div className="sectionHeading"><p>SELECTED PROJECTS</p><h2>精选项目</h2></div><div className="projectGrid">{projects.map((p,i)=><article className="projectCard" key={p.title}><div className={`projectCover c${i+1}`}><span>{p.kicker}</span><b>0{i+1}</b></div><div className="projectBody"><div className="cardMeta"><span>{p.kicker}</span><time>{p.period}</time></div><h3>{p.title}</h3><p>{p.summary}</p><strong>{p.result}</strong><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div></div></article>)}</div></section>

    <section className="section shell" id="experience"><div className="sectionHeading"><p>EXPERIENCE</p><h2>工作经历</h2></div><div className="timeline"><article><time>2021.05 — 至今</time><div className="timelineContent"><h3>中科美络科技股份有限公司</h3><h4>产品经理 / 用户运营部门经理</h4><ul><li><b>产品规划与落地：</b>制定产品定位、路线图和迭代计划，推动产品从 0 到 1 探索、从 1 到 N 复制。</li><li><b>需求与产品设计：</b>负责用户访谈、业务梳理、竞品调研、PRD、原型及流程设计。</li><li><b>数据驱动运营：</b>使用 Metabase、Quick BI 建立分析模型，持续监测使用与用户行为。</li><li><b>解决方案与交付：</b>承担重点项目售前咨询、方案书、产品演示和培训，统筹省级项目运营。</li></ul></div></article></div></section>

    <section className="section shell" id="strengths"><div className="sectionHeading"><p>WHY I FIT</p><h2>为什么我适合产品经理</h2></div><div className="strengthGrid">{strengths.map(s=><article key={s[0]}><span>{s[0]}</span><h3>{s[1]}</h3><p>{s[2]}</p></article>)}</div></section>

    <section className="section shell" id="honors"><div className="sectionHeading"><p>AWARDS</p><h2>获奖经历</h2></div><ol className="awardTimeline" aria-label="获奖时间线，由早到晚">{awards.map(award=><li key={award.year}><time dateTime={award.year}>{award.year}</time><span>{award.title}</span></li>)}</ol></section>

    <section className="contact" id="contact"><div className="shell"><p>CONTACT</p><h2>我正在寻找产品经理机会，期待与你进一步沟通。</h2><div><a className="btn primary" href={`mailto:${profile.email}`}>{profile.email}</a><a className="btn ghost" href={`tel:${profile.phone}`}>{profile.phone}</a></div></div></section>
    <footer className="shell"><span>© 2026 {profile.name}</span><span>{profile.role}</span><a href="#top">回到顶部</a></footer>
  </main>;
}
