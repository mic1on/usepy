import{_ as s,c as n,o as a,a as p}from"./app.5603aa3a.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]}],"relativePath":"decorator/catch_error.md","lastUpdated":1677473775000}'),o={name:"decorator/catch_error.md"},l=p(`<div class="info custom-block"><p class="custom-block-title">INFO</p><pre><code>@Author: MicLon
@Date: 2023/02/27
@Description: 捕获函数执行中的异常
</code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-hidden="true">#</a></h2><p><code>@useCatchError</code>装饰器，用于捕获函数执行中的异常</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#666666;">@</span><span style="color:#80A665;">useDecorator</span><span style="color:#666666;">.</span><span style="color:#80A665;">catch_error</span><span style="color:#666666;">()</span></span>
<span class="line"><span style="color:#CB7676;">def</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">exception_demo</span><span style="color:#666666;">():</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#4D9375;">raise</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">Exception</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">test</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#666666;">@</span><span style="color:#80A665;">useDecorator</span><span style="color:#666666;">.</span><span style="color:#80A665;">catch_error</span><span style="color:#666666;">(</span><span style="color:#BD976A;">return_val</span><span style="color:#CB7676;">=</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">test</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#CB7676;">def</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">exception_demo2</span><span style="color:#666666;">():</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#4D9375;">raise</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">Exception</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">test</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">exception_demo</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;">  </span><span style="color:#758575DD;"># None</span></span>
<span class="line"><span style="color:#DBD7CAEE;">exception_demo2</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;">  </span><span style="color:#758575DD;"># &#39;test&#39;</span></span>
<span class="line"><span style="color:#B8A965;">print</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#C98A7D;">run to here</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#666666;">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-dark vp-code-light"><code><span class="line"><span style="color:#666666;">@</span><span style="color:#80A665;">useDecorator</span><span style="color:#666666;">.</span><span style="color:#80A665;">catch_error</span><span style="color:#666666;">()</span></span>
<span class="line"><span style="color:#CB7676;">def</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">exception_demo</span><span style="color:#666666;">():</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#4D9375;">raise</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">Exception</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">test</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#666666;">@</span><span style="color:#80A665;">useDecorator</span><span style="color:#666666;">.</span><span style="color:#80A665;">catch_error</span><span style="color:#666666;">(</span><span style="color:#BD976A;">return_val</span><span style="color:#CB7676;">=</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">test</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#CB7676;">def</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">exception_demo2</span><span style="color:#666666;">():</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#4D9375;">raise</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">Exception</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">test</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">exception_demo</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;">  </span><span style="color:#758575DD;"># None</span></span>
<span class="line"><span style="color:#DBD7CAEE;">exception_demo2</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;">  </span><span style="color:#758575DD;"># &#39;test&#39;</span></span>
<span class="line"><span style="color:#B8A965;">print</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#C98A7D;">run to here</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#666666;">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,4),e=[l];function t(c,r,y,A,D,i){return a(),n("div",null,e)}const E=s(o,[["render",t]]);export{d as __pageData,E as default};