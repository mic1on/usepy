import{_ as l,c as p,b as s,d as a,e,a as o,o as t,r as c}from"./app.5603aa3a.js";const _=JSON.parse('{"title":"useLogger","description":"","frontmatter":{"title":"useLogger","outline":"deep"},"headers":[{"level":2,"title":"curl","slug":"curl","link":"#curl","children":[]},{"level":2,"title":"useURL","slug":"useurl","link":"#useurl","children":[]}],"relativePath":"api/parser.md","lastUpdated":1678201148000}'),r={name:"api/parser.md"},y=s("h1",{id:"useparser",tabindex:"-1"},[a("useParser "),s("a",{class:"header-anchor",href:"#useparser","aria-hidden":"true"},"#")],-1),D=s("p",null,"解析器，提供了一些常用的方法。",-1),i={id:"curl",tabindex:"-1"},u=s("a",{class:"header-anchor",href:"#curl","aria-hidden":"true"},"#",-1),A=o(`<p>用于解析CURL命令。</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> usepy </span><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> useParser</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> useCURL</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">test_curl_command </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C98A7D;">curl &#39;http://localhost:3333/api/parser.html&#39; </span><span style="color:#4D9375;">\\</span></span>
<span class="line"><span style="color:#C98A7D;">  -H &#39;Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9&#39; </span><span style="color:#4D9375;">\\</span></span>
<span class="line"><span style="color:#C98A7D;">  -H &#39;Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6&#39; </span><span style="color:#4D9375;">\\</span></span>
<span class="line"><span style="color:#C98A7D;">  -H &#39;Cache-Control: no-cache&#39; </span><span style="color:#4D9375;">\\</span></span>
<span class="line"><span style="color:#C98A7D;">  -H &#39;Connection: keep-alive&#39; </span><span style="color:#4D9375;">\\</span></span>
<span class="line"><span style="color:#C98A7D;">  -H &#39;Cookie: Pycharm-fe1126fc=eb62da0d-7fad-4f5f-9396-37ee80df090c; csrftoken=SIf8rv13bnXYAarsi6aN6mpuHHZBjzKTBADTtouFI5U28Na8l9TFu9IFROY1auqH&#39; </span><span style="color:#4D9375;">\\</span></span>
<span class="line"><span style="color:#C98A7D;">  -H &#39;Pragma: no-cache&#39; </span><span style="color:#4D9375;">\\</span></span>
<span class="line"><span style="color:#C98A7D;">  -H &#39;Sec-Fetch-Dest: document&#39; </span><span style="color:#4D9375;">\\</span></span>
<span class="line"><span style="color:#C98A7D;">  -H &#39;Sec-Fetch-Mode: navigate&#39; </span><span style="color:#4D9375;">\\</span></span>
<span class="line"><span style="color:#C98A7D;">  -H &#39;Sec-Fetch-Site: same-origin&#39; </span><span style="color:#4D9375;">\\</span></span>
<span class="line"><span style="color:#C98A7D;">  -H &#39;Sec-Fetch-User: ?1&#39; </span><span style="color:#4D9375;">\\</span></span>
<span class="line"><span style="color:#C98A7D;">  -H &#39;Upgrade-Insecure-Requests: 1&#39; </span><span style="color:#4D9375;">\\</span></span>
<span class="line"><span style="color:#C98A7D;">  -H &#39;User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 Edg/108.0.1462.76&#39; </span><span style="color:#4D9375;">\\</span></span>
<span class="line"><span style="color:#C98A7D;">  -H &#39;sec-ch-ua: &quot;Not?A_Brand&quot;;v=&quot;8&quot;, &quot;Chromium&quot;;v=&quot;108&quot;, &quot;Microsoft Edge&quot;;v=&quot;108&quot;&#39; </span><span style="color:#4D9375;">\\</span></span>
<span class="line"><span style="color:#C98A7D;">  -H &#39;sec-ch-ua-mobile: ?0&#39; </span><span style="color:#4D9375;">\\</span></span>
<span class="line"><span style="color:#C98A7D;">  -H &#39;sec-ch-ua-platform: &quot;macOS&quot;&#39; </span><span style="color:#4D9375;">\\</span></span>
<span class="line"><span style="color:#C98A7D;">  --compressed</span></span>
<span class="line"><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#758575DD;"># curl = useParser.curl(test_curl_command)</span></span>
<span class="line"><span style="color:#DBD7CAEE;">curl </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CAEE;"> useCURL</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">test_curl_command</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#B8A965;">print</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">curl</span><span style="color:#666666;">.</span><span style="color:#DBD7CAEE;">url</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;"># http://localhost:3333/api/parser.html</span></span>
<span class="line"><span style="color:#B8A965;">print</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">curl</span><span style="color:#666666;">.</span><span style="color:#DBD7CAEE;">method</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;">  </span><span style="color:#758575DD;"># GET</span></span>
<span class="line"><span style="color:#B8A965;">print</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">curl</span><span style="color:#666666;">.</span><span style="color:#DBD7CAEE;">data</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;">  </span><span style="color:#758575DD;"># None</span></span>
<span class="line"><span style="color:#B8A965;">print</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">curl</span><span style="color:#666666;">.</span><span style="color:#DBD7CAEE;">headers</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;"># ...</span></span>
<span class="line"><span style="color:#B8A965;">print</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">curl</span><span style="color:#666666;">.</span><span style="color:#DBD7CAEE;">cookies</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;"># ...</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-dark vp-code-light"><code><span class="line"><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> usepy </span><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> useParser</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> useCURL</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">test_curl_command </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C98A7D;">curl &#39;http://localhost:3333/api/parser.html&#39; </span><span style="color:#4D9375;">\\</span></span>
<span class="line"><span style="color:#C98A7D;">  -H &#39;Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9&#39; </span><span style="color:#4D9375;">\\</span></span>
<span class="line"><span style="color:#C98A7D;">  -H &#39;Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6&#39; </span><span style="color:#4D9375;">\\</span></span>
<span class="line"><span style="color:#C98A7D;">  -H &#39;Cache-Control: no-cache&#39; </span><span style="color:#4D9375;">\\</span></span>
<span class="line"><span style="color:#C98A7D;">  -H &#39;Connection: keep-alive&#39; </span><span style="color:#4D9375;">\\</span></span>
<span class="line"><span style="color:#C98A7D;">  -H &#39;Cookie: Pycharm-fe1126fc=eb62da0d-7fad-4f5f-9396-37ee80df090c; csrftoken=SIf8rv13bnXYAarsi6aN6mpuHHZBjzKTBADTtouFI5U28Na8l9TFu9IFROY1auqH&#39; </span><span style="color:#4D9375;">\\</span></span>
<span class="line"><span style="color:#C98A7D;">  -H &#39;Pragma: no-cache&#39; </span><span style="color:#4D9375;">\\</span></span>
<span class="line"><span style="color:#C98A7D;">  -H &#39;Sec-Fetch-Dest: document&#39; </span><span style="color:#4D9375;">\\</span></span>
<span class="line"><span style="color:#C98A7D;">  -H &#39;Sec-Fetch-Mode: navigate&#39; </span><span style="color:#4D9375;">\\</span></span>
<span class="line"><span style="color:#C98A7D;">  -H &#39;Sec-Fetch-Site: same-origin&#39; </span><span style="color:#4D9375;">\\</span></span>
<span class="line"><span style="color:#C98A7D;">  -H &#39;Sec-Fetch-User: ?1&#39; </span><span style="color:#4D9375;">\\</span></span>
<span class="line"><span style="color:#C98A7D;">  -H &#39;Upgrade-Insecure-Requests: 1&#39; </span><span style="color:#4D9375;">\\</span></span>
<span class="line"><span style="color:#C98A7D;">  -H &#39;User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 Edg/108.0.1462.76&#39; </span><span style="color:#4D9375;">\\</span></span>
<span class="line"><span style="color:#C98A7D;">  -H &#39;sec-ch-ua: &quot;Not?A_Brand&quot;;v=&quot;8&quot;, &quot;Chromium&quot;;v=&quot;108&quot;, &quot;Microsoft Edge&quot;;v=&quot;108&quot;&#39; </span><span style="color:#4D9375;">\\</span></span>
<span class="line"><span style="color:#C98A7D;">  -H &#39;sec-ch-ua-mobile: ?0&#39; </span><span style="color:#4D9375;">\\</span></span>
<span class="line"><span style="color:#C98A7D;">  -H &#39;sec-ch-ua-platform: &quot;macOS&quot;&#39; </span><span style="color:#4D9375;">\\</span></span>
<span class="line"><span style="color:#C98A7D;">  --compressed</span></span>
<span class="line"><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#758575DD;"># curl = useParser.curl(test_curl_command)</span></span>
<span class="line"><span style="color:#DBD7CAEE;">curl </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CAEE;"> useCURL</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">test_curl_command</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#B8A965;">print</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">curl</span><span style="color:#666666;">.</span><span style="color:#DBD7CAEE;">url</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;"># http://localhost:3333/api/parser.html</span></span>
<span class="line"><span style="color:#B8A965;">print</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">curl</span><span style="color:#666666;">.</span><span style="color:#DBD7CAEE;">method</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;">  </span><span style="color:#758575DD;"># GET</span></span>
<span class="line"><span style="color:#B8A965;">print</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">curl</span><span style="color:#666666;">.</span><span style="color:#DBD7CAEE;">data</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;">  </span><span style="color:#758575DD;"># None</span></span>
<span class="line"><span style="color:#B8A965;">print</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">curl</span><span style="color:#666666;">.</span><span style="color:#DBD7CAEE;">headers</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;"># ...</span></span>
<span class="line"><span style="color:#B8A965;">print</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">curl</span><span style="color:#666666;">.</span><span style="color:#DBD7CAEE;">cookies</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;"># ...</span></span>
<span class="line"></span></code></pre></div><h2 id="useurl" tabindex="-1">useURL <a class="header-anchor" href="#useurl" aria-hidden="true">#</a></h2><p>用于解析URL。</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> usepy </span><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> useURL</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">url </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CAEE;"> useURL</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#C98A7D;">https://www.google.com/search?q=usepy&amp;ie=utf-8</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#666666;">)</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-dark vp-code-light"><code><span class="line"><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> usepy </span><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> useURL</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">url </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CAEE;"> useURL</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#C98A7D;">https://www.google.com/search?q=usepy&amp;ie=utf-8</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#666666;">)</span></span>
<span class="line"></span></code></pre></div><table><thead><tr><th>url.scheme</th><th style="text-align:center;">url.netloc</th><th style="text-align:center;">url.query</th><th style="text-align:center;">Coourl.query_dictl</th><th style="text-align:right;">url.path</th></tr></thead><tbody><tr><td>https</td><td style="text-align:center;"><a href="http://www.google.com" target="_blank" rel="noreferrer">www.google.com</a></td><td style="text-align:center;">q=usepy&amp;ie=utf-8</td><td style="text-align:center;"><code>{&#39;q&#39;: &#39;usepy&#39;, &#39;ie&#39;: &#39;utf-8&#39;}</code></td><td style="text-align:right;">/search</td></tr></tbody></table>`,6);function C(d,E,h,B,m,q){const n=c("Badge");return t(),p("div",null,[y,D,s("h2",i,[a("curl "),e(n,{type:"warning",text:"useCURL"}),a(),u]),A])}const f=l(r,[["render",C]]);export{_ as __pageData,f as default};