import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const SYSTEM_PROMPT = `你是中央民族大学十佳大学生答辩网页中的智能助手。
回答对象是访问网页的评委、老师或同学。
请使用中文，语气专业、简洁、可信，围绕候选人杜靖洋的个人事迹回答问题。

候选人关键信息：
- 杜靖洋，中央民族大学新闻与传播学院网络与新媒体专业本科生。
- GPA 4.25/5.00，综合测评排名1/46，获2023—2024年度国家奖学金。
- 方向：智能传播、AIGC内容生产、新媒体运营、AI项目执行。
- 科研出版：参与人民邮电出版社《OpenClaw养虾宝典：从安装到精通实战指南》写作；参与《中国特色新闻学词条》实践篇词条整理与撰写；发表GEO、OpenClaw治理、生成式AI时代公关职业转型等论文。
- 科研项目：参与国家社科23BXW109、国家民委2025-GMJ-034、中宣部HX2025115、AIGC辅助高校思政短视频等项目。
- AI项目：在清华新媒体研究中心撰写30余篇深度研究报告，推进OpenHarness、OpenEdu、OpenClaw、AI新闻、AI漫画游戏及小程序等项目，覆盖需求拆解、方案设计、Skill封装、内容自动化生产和开源运营。
- 媒体实践：新华网微博运营与AIGC视频制作，拜年系列视频观看量50万+、互动1万+；光明网科技报道单篇阅读量84万；清博智能AI视频制作；河南省尉氏县网信办基层网信实践。
- 竞赛成果：国家一等奖3项、国家二等奖2项、国家三等奖3项，覆盖数字媒体科技作品、公益影像、传统文化视听、两岸青年短片等。
- 社会服务：大国边疆实践团纪录片被北京日报转发并登上微博同城热搜；参与泉州簪花、甘南三格毛等非遗调研；参与中国—非盟能源合作项目推介会、北京接诉即办改革论坛、全球独角兽企业大会、亚投行年会等志愿服务。
- 学生工作：班长，带领班级获优秀班集体；学院团委办公室负责人，服务700余人次、志愿时长近3100小时；学院视频工作坊负责人，完成重要活动拍摄任务14+次。

如用户问到网页之外无法确认的事实，请明确说明“网页资料中未提供”。`;

async function readBody(req: import('node:http').IncomingMessage) {
  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }
  return Buffer.concat(chunks).toString('utf8');
}

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
      base: './',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        {
          name: 'dashscope-chat-proxy',
          configureServer(server) {
            server.middlewares.use('/api/chat', async (req, res) => {
              if (req.method !== 'POST') {
                res.statusCode = 405;
                res.setHeader('Content-Type', 'application/json; charset=utf-8');
                res.end(JSON.stringify({ error: 'Method not allowed' }));
                return;
              }

              const apiKey = env.DASHSCOPE_API_KEY || env.ALIYUN_API_KEY;
              if (!apiKey) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json; charset=utf-8');
                res.end(JSON.stringify({ error: 'Missing DASHSCOPE_API_KEY' }));
                return;
              }

              try {
                const bodyText = await readBody(req);
                const body = bodyText ? JSON.parse(bodyText) : {};
                const userMessages = Array.isArray(body.messages) ? body.messages : [];
                const messages = [
                  { role: 'system', content: SYSTEM_PROMPT },
                  ...userMessages
                    .filter((message: { role?: string; content?: string }) => (
                      (message.role === 'user' || message.role === 'assistant') &&
                      typeof message.content === 'string' &&
                      message.content.trim()
                    ))
                    .slice(-12),
                ];

                const upstream = await fetch('https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${apiKey}`,
                  },
                  body: JSON.stringify({
                    model: env.DASHSCOPE_MODEL || 'qwen-plus',
                    messages,
                    temperature: 0.6,
                    stream: false,
                  }),
                });

                const data = await upstream.json();
                if (!upstream.ok) {
                  res.statusCode = upstream.status;
                  res.setHeader('Content-Type', 'application/json; charset=utf-8');
                  res.end(JSON.stringify({ error: data?.message || data?.error?.message || 'DashScope request failed' }));
                  return;
                }

                const text = data?.choices?.[0]?.message?.content || '阿里云接口未返回有效内容。';
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json; charset=utf-8');
                res.end(JSON.stringify({ text }));
              } catch (error) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json; charset=utf-8');
                res.end(JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown server error' }));
              }
            });
          },
        },
      ],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
