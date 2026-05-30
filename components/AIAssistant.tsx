import React, { useEffect, useRef, useState } from 'react';

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

const initialMessage = '身份已验证。正在访问十佳答辩资料库……我可以如何协助了解候选人杜靖洋？';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: initialMessage },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = async () => {
    const userMsg = input.trim();
    if (!userMsg || isTyping) return;

    const nextMessages: ChatMessage[] = [...messages, { role: 'user', content: userMsg }];
    setMessages(nextMessages);
    setInput('');
    setIsTyping(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || '阿里云接口请求失败');
      }
      setMessages((prev) => [...prev, { role: 'assistant', content: data?.text || '阿里云接口未返回有效内容。' }]);
    } catch (error) {
      const detail = error instanceof Error ? error.message : '未知错误';
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `阿里云智能助手暂时无法返回结果：${detail}。请稍后重试，或检查本地服务端环境变量与网络连接。`,
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-3 right-3 z-50 flex flex-col items-end md:bottom-8 md:right-8">
      {isOpen && (
        <div className="mb-4 h-80 w-[calc(100vw-1.5rem)] max-w-80 bg-azure-bg-dark/80 backdrop-blur-xl border border-cyan-400/30 rounded-2xl shadow-[0_0_40px_rgba(0,200,255,0.2)] overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-10 duration-300 hologram-border md:mb-6 md:h-96 md:w-96 md:max-w-none">
          <div className="bg-cyan-500/10 px-4 py-3 flex justify-between items-center border-b border-cyan-400/20">
            <span className="text-cyan-300 font-mono text-xs font-bold flex items-center gap-2 tracking-widest">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              阿里云智能助手 // Qwen Agent
            </span>
            <button onClick={() => setIsOpen(false)} className="text-cyan-400 hover:text-white transition-colors">×</button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-4 font-mono text-sm">
            {messages.map((message, i) => (
              <div key={i} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-xl whitespace-pre-wrap ${
                  message.role === 'user'
                    ? 'bg-azure-bg text-white border border-white/10'
                    : 'bg-cyan-900/40 text-cyan-100 border border-cyan-500/30 shadow-[0_0_10px_rgba(0,255,255,0.1)]'
                }`}>
                  {message.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex gap-1 items-center px-4 py-2">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-100"></span>
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="p-3 bg-azure-bg-dark/90 border-t border-cyan-400/20 flex gap-2">
            <input
              type="text"
              value={input}
              disabled={isTyping}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="询问科研、实习、竞赛或学生工作…"
              className="flex-1 bg-black/20 border border-cyan-900 rounded-lg px-3 py-2 text-sm text-white focus:border-cyan-400 focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,255,0.2)] font-mono transition-all placeholder:text-cyan-800 disabled:opacity-60"
            />
            <button
              onClick={handleSend}
              disabled={isTyping || !input.trim()}
              className="px-3 py-2 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-100 text-xs font-bold hover:bg-cyan-500/30 disabled:opacity-40"
            >
              发送
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-cyan-600 to-azure-bg rounded-full shadow-[0_0_20px_rgba(0,200,255,0.4)] hover:shadow-[0_0_35px_rgba(0,200,255,0.6)] border border-cyan-300/50 transition-all hover:scale-105 active:scale-95 md:h-16 md:w-16"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white relative z-10">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
        <span className="absolute inset-0 rounded-full border border-cyan-400/30 scale-125 animate-spin-slow"></span>
        <span className="absolute inset-0 rounded-full border border-dashed border-white/20 scale-150 animate-spin-slow duration-[15s]"></span>
      </button>
    </div>
  );
};

export default AIAssistant;
