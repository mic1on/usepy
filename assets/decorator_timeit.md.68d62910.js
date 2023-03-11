import{_ as s,c as a,o as n,a as e}from"./app.5603aa3a.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]}],"relativePath":"decorator/timeit.md","lastUpdated":1677473775000}'),o={name:"decorator/timeit.md"},p=e(`<div class="info custom-block"><p class="custom-block-title">INFO</p><pre><code>@Author: MicLon
@Date: 2023/02/27
@Description: 统计函数运行时间装饰器
</code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-hidden="true">#</a></h2><p><code>@useTimeIt</code>装饰器，用于统计函数执行时间</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#666666;">@</span><span style="color:#80A665;">useDecorator</span><span style="color:#666666;">.</span><span style="color:#80A665;">timeit</span></span>
<span class="line"><span style="color:#CB7676;">def</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">test</span><span style="color:#666666;">():</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    time</span><span style="color:#666666;">.</span><span style="color:#DBD7CAEE;">sleep</span><span style="color:#666666;">(</span><span style="color:#4C9A91;">1</span><span style="color:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">test</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;">  </span><span style="color:#758575DD;"># test took 1.000 seconds</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-dark vp-code-light"><code><span class="line"><span style="color:#666666;">@</span><span style="color:#80A665;">useDecorator</span><span style="color:#666666;">.</span><span style="color:#80A665;">timeit</span></span>
<span class="line"><span style="color:#CB7676;">def</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">test</span><span style="color:#666666;">():</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    time</span><span style="color:#666666;">.</span><span style="color:#DBD7CAEE;">sleep</span><span style="color:#666666;">(</span><span style="color:#4C9A91;">1</span><span style="color:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">test</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;">  </span><span style="color:#758575DD;"># test took 1.000 seconds</span></span>
<span class="line"></span></code></pre></div>`,4),l=[p];function t(c,r,i,d,y,D){return n(),a("div",null,l)}const E=s(o,[["render",t]]);export{A as __pageData,E as default};
