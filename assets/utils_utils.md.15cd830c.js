import{_ as p,c as o,b as a,d as s,e,a as n,o as t,r as c}from"./app.5603aa3a.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"cookie_to_dict","slug":"cookie-to-dict","link":"#cookie-to-dict","children":[]},{"level":2,"title":"data_to_dict","slug":"data-to-dict","link":"#data-to-dict","children":[]},{"level":2,"title":"gen_unique_id","slug":"gen-unique-id","link":"#gen-unique-id","children":[]},{"level":2,"title":"headers_to_dict","slug":"headers-to-dict","link":"#headers-to-dict","children":[]},{"level":2,"title":"uuid4","slug":"uuid4","link":"#uuid4","children":[]},{"level":2,"title":"clean_html","slug":"clean-html","link":"#clean-html","children":[]}],"relativePath":"utils/utils.md","lastUpdated":1677129782000}'),r={name:"utils/utils.md"},i=n(`<div class="info custom-block"><p class="custom-block-title">INFO</p><pre><code>@Author: MicLon
@Date: 2023/02/19
@Description: 一些其他工具集合
</code></pre></div><h2 id="cookie-to-dict" tabindex="-1">cookie_to_dict <a class="header-anchor" href="#cookie-to-dict" aria-hidden="true">#</a></h2><p>将字符串cookie转换为字典</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">def</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">cookie_to_dict</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">cookies</span><span style="color:#666666;">):</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C98A7D;">    将字符串cookie转换为字典</span></span>
<span class="line"><span style="color:#C98A7D;">	:param cookies: cookie字符串</span></span>
<span class="line"><span style="color:#C98A7D;">	:return: dict</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">...</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-dark vp-code-light"><code><span class="line"><span style="color:#CB7676;">def</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">cookie_to_dict</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">cookies</span><span style="color:#666666;">):</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C98A7D;">    将字符串cookie转换为字典</span></span>
<span class="line"><span style="color:#C98A7D;">	:param cookies: cookie字符串</span></span>
<span class="line"><span style="color:#C98A7D;">	:return: dict</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">...</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span></span>
<span class="line"></span></code></pre></div><h2 id="data-to-dict" tabindex="-1">data_to_dict <a class="header-anchor" href="#data-to-dict" aria-hidden="true">#</a></h2><p>将字符串data转换为字典</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">def</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">data_to_dict</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">data</span><span style="color:#666666;">):</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C98A7D;">    将字符串data转换为字典</span></span>
<span class="line"><span style="color:#C98A7D;">	:param data: data字符串。格式为\`key1=value1&amp;key2=value2\`</span></span>
<span class="line"><span style="color:#C98A7D;">	:return: dict</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">...</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-dark vp-code-light"><code><span class="line"><span style="color:#CB7676;">def</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">data_to_dict</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">data</span><span style="color:#666666;">):</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C98A7D;">    将字符串data转换为字典</span></span>
<span class="line"><span style="color:#C98A7D;">	:param data: data字符串。格式为\`key1=value1&amp;key2=value2\`</span></span>
<span class="line"><span style="color:#C98A7D;">	:return: dict</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">...</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span></span>
<span class="line"></span></code></pre></div><h2 id="gen-unique-id" tabindex="-1">gen_unique_id <a class="header-anchor" href="#gen-unique-id" aria-hidden="true">#</a></h2><p>生成唯一id</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">def</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">gen_unique_id</span><span style="color:#666666;">():</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C98A7D;">    生成唯一id</span></span>
<span class="line"><span style="color:#C98A7D;">	:return:</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">...</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-dark vp-code-light"><code><span class="line"><span style="color:#CB7676;">def</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">gen_unique_id</span><span style="color:#666666;">():</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C98A7D;">    生成唯一id</span></span>
<span class="line"><span style="color:#C98A7D;">	:return:</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">...</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span></span>
<span class="line"></span></code></pre></div><h2 id="headers-to-dict" tabindex="-1">headers_to_dict <a class="header-anchor" href="#headers-to-dict" aria-hidden="true">#</a></h2><p>将字符串headers转换为字典</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">def</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">headers_to_dict</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">headers</span><span style="color:#666666;">):</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C98A7D;">    将字符串headers转换为字典</span></span>
<span class="line"><span style="color:#C98A7D;">	:param headers: headers字符串</span></span>
<span class="line"><span style="color:#C98A7D;">	:return: dict</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">...</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-dark vp-code-light"><code><span class="line"><span style="color:#CB7676;">def</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">headers_to_dict</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">headers</span><span style="color:#666666;">):</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C98A7D;">    将字符串headers转换为字典</span></span>
<span class="line"><span style="color:#C98A7D;">	:param headers: headers字符串</span></span>
<span class="line"><span style="color:#C98A7D;">	:return: dict</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">...</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span></span>
<span class="line"></span></code></pre></div><h2 id="uuid4" tabindex="-1">uuid4 <a class="header-anchor" href="#uuid4" aria-hidden="true">#</a></h2><p>Generate a random UUID.</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">def</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">uuid4</span><span style="color:#666666;">():</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C98A7D;">    Generate a random UUID.</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">...</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-dark vp-code-light"><code><span class="line"><span style="color:#CB7676;">def</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">uuid4</span><span style="color:#666666;">():</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C98A7D;">    Generate a random UUID.</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">...</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span></span>
<span class="line"></span></code></pre></div>`,16),d={id:"clean-html",tabindex:"-1"},y=a("a",{class:"header-anchor",href:"#clean-html","aria-hidden":"true"},"#",-1),D=n(`<div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">def</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">clean_html</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">html</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">str</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> white_tags</span><span style="color:#CB7676;">=</span><span style="color:#4D9375;">None</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">-&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">str</span><span style="color:#666666;">:</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C98A7D;">    清除HTML标签</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#4D9375;">&gt;&gt;&gt; </span><span style="color:#C98A7D;">clean_html(&#39;&lt;p&gt;This is a paragraph.&lt;/p&gt;&lt;br&gt;&lt;strong&gt;This is bold text.&lt;/strong&gt;&#39;)</span></span>
<span class="line"><span style="color:#C98A7D;">    &#39;This is a paragraph.This is bold text.&#39;</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">...</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-dark vp-code-light"><code><span class="line"><span style="color:#CB7676;">def</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">clean_html</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">html</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">str</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> white_tags</span><span style="color:#CB7676;">=</span><span style="color:#4D9375;">None</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">-&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">str</span><span style="color:#666666;">:</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C98A7D;">    清除HTML标签</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#4D9375;">&gt;&gt;&gt; </span><span style="color:#C98A7D;">clean_html(&#39;&lt;p&gt;This is a paragraph.&lt;/p&gt;&lt;br&gt;&lt;strong&gt;This is bold text.&lt;/strong&gt;&#39;)</span></span>
<span class="line"><span style="color:#C98A7D;">    &#39;This is a paragraph.This is bold text.&#39;</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">...</span></span>
<span class="line"></span></code></pre></div>`,1);function A(C,u,E,h,B,_){const l=c("Badge");return t(),o("div",null,[i,a("h2",d,[s("clean_html "),e(l,{type:"tip",text:"useCleanHtml"}),s(),y]),D])}const k=p(r,[["render",A]]);export{g as __pageData,k as default};
