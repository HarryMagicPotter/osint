import { ToolDatabase } from './types';

export const toolDatabasePart12: ToolDatabase = {
  "Personal / Blogs / Profiles": [
    { name: "NixIntel", url: "https://www.nixintel.info", tags: ["blog", "osint"] },
    { name: "Steven Harris (SANS)", url: "https://www.sans.org/profiles/steven-harris", tags: ["profile", "instructor"] },
    { name: "LinkedIn", url: "https://www.linkedin.com", tags: ["social", "professional"] },
    { name: "SANS SEC497: Practical OSINT", url: "https://www.sans.org/cyber-security-courses/sec497-practical-osint", tags: ["course", "osint"] },
    { name: "SANS SEC587: Advanced OSINT", url: "https://www.sans.org/cyber-security-courses/sec587-advanced-open-source-intelligence-gathering", tags: ["course", "osint"] }
  ],
  "Notes, Documentation & Archives": [
    { name: "Hunchly", url: "https://www.hunch.ly", tags: ["tool", "evidence"] },
    { name: "ArchiveBox", url: "https://archivebox.io", tags: ["archive", "self-hosted"] },
    { name: "Internet Archive", url: "https://archive.org", tags: ["archive", "web"] },
    { name: "FollowThatPage", url: "https://followthatpage.com", tags: ["monitor", "web"] },
    { name: "Archive.today", url: "https://archive.today", tags: ["archive", "web"] },
    { name: "WebCitation", url: "https://webcitation.org", tags: ["archive", "web"] },
    { name: "Perma.cc", url: "https://perma.cc", tags: ["archive", "legal"] }
  ],
  "Scraping Tools": [
    { name: "PhantomBuster", url: "https://phantombuster.com", tags: ["scraping", "automation"] },
    { name: "Instant Data Scraper", url: "https://chromewebstore.google.com/detail/instant-data-scraper/ofaokhiedipichpaobibbnahnkdoiiah", tags: ["scraping", "extension"] }
  ],
  "Phone Books & People Searches": [
    { name: "Infobel", url: "http://infobel.com", tags: ["phonebook", "global"] },
    { name: "Phonebook of the World", url: "http://phonebookoftheworld.com", tags: ["phonebook", "global"] },
    { name: "Numberway", url: "http://www.numberway.com", tags: ["phonebook", "global"] },
    { name: "Voter Records", url: "https://voterrecords.com", tags: ["people-search", "usa"] },
    { name: "192.com", url: "https://www.192.com", tags: ["people-search", "uk"] },
    { name: "UK Phone Book", url: "https://www.ukphonebook.com", tags: ["phonebook", "uk"] }
  ],
  "SaaS Platforms": [
    { name: "ShadowDragon", url: "https://shadowdragon.io", tags: ["platform", "investigation"] },
    { name: "OSINT Combine", url: "https://www.osintcombine.com", tags: ["platform", "training"] }
  ],
  "Usernames & Profiles": [
    { name: "WhatsMyName", url: "https://whatsmyname.app", tags: ["username", "search"] },
    { name: "Epieos", url: "https://epieos.com", tags: ["email", "search"] },
    { name: "Predica Search", url: "https://predicasearch.com", tags: ["username", "search"] },
    { name: "OSINT Industries", url: "https://osint.industries", tags: ["username", "search"] },
    { name: "Sherlock", url: "https://sherlock-project.github.io", tags: ["username", "search"] },
    { name: "WebMii", url: "https://webmii.com", tags: ["people-search", "social"] },
    { name: "Namechk", url: "https://namechk.com", tags: ["username", "search"] },
    { name: "Namecheckr", url: "https://namecheckr.com", tags: ["username", "search"] },
    { name: "UserSearch", url: "https://usersearch.org", tags: ["username", "search"] }
  ],
  "Domains, IPs & Network Recon": [
    { name: "Censys Search", url: "https://search.censys.io", tags: ["network", "search"] },
    { name: "Censys", url: "https://www.censys.io", tags: ["network", "search"] },
    { name: "Shodan", url: "https://www.shodan.io", tags: ["network", "search"] },
    { name: "ZoomEye", url: "https://www.zoomeye.org", tags: ["network", "search"] },
    { name: "SecurityTrails", url: "https://securitytrails.com", tags: ["domain", "recon"] },
    { name: "crt.sh", url: "https://crt.sh", tags: ["ssl", "certificates"] },
    { name: "urlscan.io", url: "https://urlscan.io", tags: ["scan", "web"] },
    { name: "MX Toolbox", url: "https://mxtoolbox.com", tags: ["dns", "tools"] },
    { name: "Synapsint", url: "https://www.synapsint.com", tags: ["recon", "all-in-one"] },
    { name: "DNSlytics", url: "https://dnslytics.com", tags: ["dns", "recon"] },
    { name: "RiskIQ Community", url: "https://community.riskiq.com", tags: ["threat-intel"] },
    { name: "CentralOps", url: "https://www.centralops.net", tags: ["network", "tools"] },
    { name: "DomainTools Whois", url: "https://whois.domaintools.com", tags: ["whois", "recon"] },
    { name: "DomainTools", url: "https://www.domaintools.com", tags: ["domain", "recon"] },
    { name: "Traceroute on a Map", url: "https://www.traceroute-on-a-map.com", tags: ["network", "traceroute"] },
    { name: "WhatIsMyIPAddress", url: "https://whatismyipaddress.com", tags: ["ip", "recon"] },
    { name: "Hurricane Electric BGP", url: "https://bgp.he.net", tags: ["bgp", "recon"] },
    { name: "BGPView", url: "https://bgpview.io", tags: ["bgp", "recon"] },
    { name: "dnstwister", url: "https://dnstwister.report", tags: ["domain", "typosquatting"] },
    { name: "DNSDumpster", url: "https://dnsdumpster.com", tags: ["dns", "recon"] },
    { name: "NetBlocks", url: "https://netblocks.org", tags: ["network", "monitoring"] },
    { name: "Spyse", url: "https://spyse.com", tags: ["network", "search"] }
  ],
  "AdTech & Source Code Analysis": [
    { name: "BuiltWith", url: "https://builtwith.com", tags: ["tech-stack", "recon"] },
    { name: "NerdyData", url: "https://nerdydata.com", tags: ["code", "search"] },
    { name: "Website Informer", url: "https://website.informer.com", tags: ["domain", "recon"] },
    { name: "DomainIQ", url: "https://domainiq.com", tags: ["domain", "recon"] },
    { name: "Google Tag Manager Docs", url: "https://developers.google.com/tag-platform/tag-manager", tags: ["adtech", "docs"] },
    { name: "SpyOnWeb", url: "https://spyonweb.com", tags: ["adtech", "recon"] },
    { name: "Analyzed.nl", url: "https://analyzed.nl", tags: ["adtech", "recon"] },
    { name: "FouAnalytics", url: "https://fouanalytics.com", tags: ["adtech", "recon"] },
    { name: "well-known.dev", url: "https://well-known.dev", tags: ["security", "recon"] },
    { name: "SEMrush", url: "https://www.semrush.com", tags: ["seo", "marketing"] },
    { name: "Ubersuggest", url: "https://neilpatel.com/ubersuggest", tags: ["seo", "marketing"] },
    { name: "The HOTH", url: "https://thehoth.com", tags: ["seo", "marketing"] }
  ],
  "Facial Recognition": [
    { name: "PimEyes", url: "https://pimeyes.com", tags: ["face", "search"] },
    { name: "Search4Faces", url: "https://search4faces.com", tags: ["face", "search"] },
    { name: "FaceCheck.ID", url: "https://facecheck.id", tags: ["face", "search"] },
    { name: "Amazon Rekognition", url: "https://aws.amazon.com/rekognition", tags: ["face", "ai"] },
    { name: "Azure AI Vision", url: "https://azure.microsoft.com/en-us/products/ai-services/ai-vision", tags: ["face", "ai"] },
    { name: "Nextcloud Face Recognition", url: "https://nextcloud.com/face-recognition", tags: ["face", "self-hosted"] }
  ],
  "Visualisation & Mapping": [
    { name: "Draw.io", url: "https://www.drawio.com", tags: ["diagram", "viz"] },
    { name: "Gephi", url: "https://gephi.org", tags: ["graph", "viz"] },
    { name: "TimelineJS", url: "https://timeline.knightlab.com", tags: ["timeline", "viz"] }
  ],
  "Translation Tools": [
    { name: "LibreTranslate", url: "https://libretranslate.com", tags: ["translation", "open-source"] },
    { name: "Google Translate", url: "https://translate.google.com", tags: ["translation"] },
    { name: "Yandex Translate", url: "https://translate.yandex.ru", tags: ["translation"] },
    { name: "Urban Dictionary", url: "https://www.urbandictionary.com", tags: ["slang", "dictionary"] },
    { name: "Slangit", url: "https://slangit.com", tags: ["slang", "dictionary"] },
    { name: "Transl8it", url: "https://transl8it.com", tags: ["slang", "dictionary"] },
    { name: "DeepL", url: "https://www.deepl.com", tags: ["translation"] }
  ],
  "Discord Tools": [
    { name: "Disboard", url: "https://disboard.org", tags: ["discord", "search"] }
  ],
  "Dark Web Resources": [
    { name: "deepdarkCTI", url: "https://github.com/fastfire/deepdarkCTI", tags: ["darkweb", "intel"] },
    { name: "Ahmia", url: "https://ahmia.fi", tags: ["darkweb", "search"] },
    { name: "IACA Dark Web Tools", url: "https://iaca-darkweb-tools.com", tags: ["darkweb", "tools"] },
    { name: "DarknetLive", url: "https://darknetlive.com", tags: ["darkweb", "news"] },
    { name: "Onion.link", url: "https://onion.link", tags: ["darkweb", "proxy"] },
    { name: "Wikipedia Tor Onion Services", url: "https://en.wikipedia.org/wiki/List_of_Tor_onion_services", tags: ["darkweb", "list"] },
    { name: "Tor Metrics", url: "https://metrics.torproject.org/rs.html", tags: ["darkweb", "stats"] },
    { name: "Tor66", url: "https://tor66.se", tags: ["darkweb", "search"] },
    { name: "Dark.fail", url: "https://dark.fail", tags: ["darkweb", "links"] }
  ],
  "Planes, Ships & Transport": [
    { name: "ADSB Exchange Globe", url: "https://globe.adsbexchange.com", tags: ["flight", "tracker"] },
    { name: "FreeDAR", url: "https://freedar.uh.edu", tags: ["flight", "tracker"] },
    { name: "FlightAware", url: "https://flightaware.com", tags: ["flight", "tracker"] },
    { name: "Flightradar24", url: "https://flightradar24.com", tags: ["flight", "tracker"] },
    { name: "Scramble.nl", url: "https://scramble.nl", tags: ["aviation", "database"] },
    { name: "MarineTraffic", url: "https://marinetraffic.com", tags: ["ship", "tracker"] },
    { name: "Global Fishing Watch", url: "https://globalfishingwatch.org", tags: ["ship", "tracker"] },
    { name: "ShipAIS", url: "https://shipais.com", tags: ["ship", "tracker"] }
  ],
  "Breaches, Leaks & Data Dumps": [
    { name: "Pastebin", url: "https://pastebin.com", tags: ["leak", "paste"] },
    { name: "PSBDMP", url: "https://psbdmp.ws", tags: ["leak", "search"] },
    { name: "Snusbase", url: "https://snusbase.com", tags: ["breach", "search"] },
    { name: "GhostProject", url: "https://ghostproject.fr", tags: ["breach", "search"] },
    { name: "DeHashed", url: "https://dehashed.com", tags: ["breach", "search"] },
    { name: "Have I Been Pwned", url: "https://haveibeenpwned.com", tags: ["breach", "search"] },
    { name: "LeakCheck", url: "https://leakcheck.io", tags: ["breach", "search"] },
    { name: "Cavalier (Hudson Rock)", url: "https://cavalier.hudsonrock.com", tags: ["breach", "search"] },
    { name: "GrayHatWarfare", url: "https://grayhatwarfare.com", tags: ["leak", "search"] },
    { name: "IntelX", url: "https://intelx.io", tags: ["leak", "search"] },
    { name: "URLHunter", url: "https://urlhunter.com", tags: ["leak", "search"] }
  ]
};
