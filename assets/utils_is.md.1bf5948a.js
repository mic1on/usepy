import{_ as s,c as n,o as a,a as l}from"./app.5603aa3a.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"regexp","slug":"regexp","link":"#regexp","children":[]},{"level":2,"title":"string","slug":"string","link":"#string","children":[]},{"level":2,"title":"token","slug":"token","link":"#token","children":[]}],"relativePath":"utils/is.md","lastUpdated":1676869622000}'),p={name:"utils/is.md"},e=l(`<div class="info custom-block"><p class="custom-block-title">INFO</p><pre><code>@Author: MicLon
@Date: 2023/02/19
@Description: 用于检查数据类型的工具函数
</code></pre></div><h2 id="regexp" tabindex="-1">regexp <a class="header-anchor" href="#regexp" aria-hidden="true">#</a></h2><p>检查<code>value</code>是否是正则表达式</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">def</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">regexp</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">value</span><span style="color:#666666;">):</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C98A7D;">    检查\`value\`是否是正则表达式</span></span>
<span class="line"><span style="color:#C98A7D;">	:param value: 要检查的值</span></span>
<span class="line"><span style="color:#C98A7D;">	:return:</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">...</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-dark vp-code-light"><code><span class="line"><span style="color:#CB7676;">def</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">regexp</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">value</span><span style="color:#666666;">):</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C98A7D;">    检查\`value\`是否是正则表达式</span></span>
<span class="line"><span style="color:#C98A7D;">	:param value: 要检查的值</span></span>
<span class="line"><span style="color:#C98A7D;">	:return:</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">...</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span></span>
<span class="line"></span></code></pre></div><h2 id="string" tabindex="-1">string <a class="header-anchor" href="#string" aria-hidden="true">#</a></h2><p>检查<code>value</code>是否是字符串</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">def</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">string</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">value</span><span style="color:#666666;">):</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C98A7D;">    检查\`value\`是否是字符串</span></span>
<span class="line"><span style="color:#C98A7D;">	:param value: 要检查的值</span></span>
<span class="line"><span style="color:#C98A7D;">	:return: bool</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">...</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-dark vp-code-light"><code><span class="line"><span style="color:#CB7676;">def</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">string</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">value</span><span style="color:#666666;">):</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C98A7D;">    检查\`value\`是否是字符串</span></span>
<span class="line"><span style="color:#C98A7D;">	:param value: 要检查的值</span></span>
<span class="line"><span style="color:#C98A7D;">	:return: bool</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">...</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span></span>
<span class="line"></span></code></pre></div><h2 id="token" tabindex="-1">token <a class="header-anchor" href="#token" aria-hidden="true">#</a></h2><p>检查<code>value</code>是否符合token规范</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">def</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">token</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">value</span><span style="color:#666666;">):</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C98A7D;">    检查\`value\`是否符合token规范</span></span>
<span class="line"><span style="color:#C98A7D;">	:param value: 要检查的值</span></span>
<span class="line"><span style="color:#C98A7D;">	:return:</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">...</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-dark vp-code-light"><code><span class="line"><span style="color:#CB7676;">def</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">token</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">value</span><span style="color:#666666;">):</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C98A7D;">    检查\`value\`是否符合token规范</span></span>
<span class="line"><span style="color:#C98A7D;">	:param value: 要检查的值</span></span>
<span class="line"><span style="color:#C98A7D;">	:return:</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">...</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span></span>
<span class="line"></span></code></pre></div>`,10),o=[e];function t(c,r,i,y,A,D){return a(),n("div",null,o)}const d=s(p,[["render",t]]);export{C as __pageData,d as default};
