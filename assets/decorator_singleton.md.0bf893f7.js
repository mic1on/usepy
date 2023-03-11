import{_ as s,c as a,o as n,a as l}from"./app.5603aa3a.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]}],"relativePath":"decorator/singleton.md","lastUpdated":1677473775000}'),p={name:"decorator/singleton.md"},e=l(`<div class="info custom-block"><p class="custom-block-title">INFO</p><pre><code>@Author: MicLon
@Date: 2023/02/27
@Description: 单例模式装饰器
</code></pre></div><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-hidden="true">#</a></h2><p>一个多线程安全的单例模式装饰器。</p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-hidden="true">#</a></h2><p><code>@useSingleton</code>单例模式装饰器，同样适用于多线程环境下。</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#666666;">@</span><span style="color:#80A665;">useDecorator</span><span style="color:#666666;">.</span><span style="color:#80A665;">singleton</span></span>
<span class="line"><span style="color:#CB7676;">class</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA9A7;">A</span><span style="color:#666666;">:</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#4D9375;">pass</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">a </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CAEE;"> A</span><span style="color:#666666;">()</span></span>
<span class="line"><span style="color:#DBD7CAEE;">b </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CAEE;"> A</span><span style="color:#666666;">()</span></span>
<span class="line"><span style="color:#4D9375;">assert</span><span style="color:#DBD7CAEE;"> a </span><span style="color:#CB7676;">is</span><span style="color:#DBD7CAEE;"> b  </span><span style="color:#758575DD;"># pass</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-dark vp-code-light"><code><span class="line"><span style="color:#666666;">@</span><span style="color:#80A665;">useDecorator</span><span style="color:#666666;">.</span><span style="color:#80A665;">singleton</span></span>
<span class="line"><span style="color:#CB7676;">class</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA9A7;">A</span><span style="color:#666666;">:</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#4D9375;">pass</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">a </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CAEE;"> A</span><span style="color:#666666;">()</span></span>
<span class="line"><span style="color:#DBD7CAEE;">b </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CAEE;"> A</span><span style="color:#666666;">()</span></span>
<span class="line"><span style="color:#4D9375;">assert</span><span style="color:#DBD7CAEE;"> a </span><span style="color:#CB7676;">is</span><span style="color:#DBD7CAEE;"> b  </span><span style="color:#758575DD;"># pass</span></span>
<span class="line"></span></code></pre></div>`,6),o=[e];function t(c,r,i,y,D,d){return n(),a("div",null,o)}const C=s(p,[["render",t]]);export{E as __pageData,C as default};
