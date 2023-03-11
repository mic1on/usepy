import{_ as s,c as a,o as n,a as l}from"./app.5603aa3a.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"string","slug":"string","link":"#string","children":[]},{"level":2,"title":"md5","slug":"md5","link":"#md5","children":[]},{"level":2,"title":"sha1","slug":"sha1","link":"#sha1","children":[]},{"level":2,"title":"camel","slug":"camel","link":"#camel","children":[]},{"level":2,"title":"snake","slug":"snake","link":"#snake","children":[]}],"relativePath":"utils/to.md","lastUpdated":1677391814000}'),p={name:"utils/to.md"},o=l(`<div class="info custom-block"><p class="custom-block-title">INFO</p><pre><code>@Author: MicLon
@Date: 2023/02/19
@Description: 用于转换数据类型的工具函数
</code></pre></div><h2 id="string" tabindex="-1">string <a class="header-anchor" href="#string" aria-hidden="true">#</a></h2><p>将任意数据转换为字符串</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">def</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">string</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">data</span><span style="color:#666666;">):</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C98A7D;">    将任意数据转换为字符串</span></span>
<span class="line"><span style="color:#C98A7D;">	:param data: data</span></span>
<span class="line"><span style="color:#C98A7D;">	:return: string</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">...</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-dark vp-code-light"><code><span class="line"><span style="color:#CB7676;">def</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">string</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">data</span><span style="color:#666666;">):</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C98A7D;">    将任意数据转换为字符串</span></span>
<span class="line"><span style="color:#C98A7D;">	:param data: data</span></span>
<span class="line"><span style="color:#C98A7D;">	:return: string</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">...</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span></span>
<span class="line"></span></code></pre></div><h2 id="md5" tabindex="-1">md5 <a class="header-anchor" href="#md5" aria-hidden="true">#</a></h2><p>将字符数据转换为md5</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">def</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">md5</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">data</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> AnyStr</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">-&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">str</span><span style="color:#666666;">:</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C98A7D;">    将字符数据转换为md5</span></span>
<span class="line"><span style="color:#C98A7D;">    :param data: data</span></span>
<span class="line"><span style="color:#C98A7D;">    :return: md5</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">...</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-dark vp-code-light"><code><span class="line"><span style="color:#CB7676;">def</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">md5</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">data</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> AnyStr</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">-&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">str</span><span style="color:#666666;">:</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C98A7D;">    将字符数据转换为md5</span></span>
<span class="line"><span style="color:#C98A7D;">    :param data: data</span></span>
<span class="line"><span style="color:#C98A7D;">    :return: md5</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">...</span></span>
<span class="line"></span></code></pre></div><h2 id="sha1" tabindex="-1">sha1 <a class="header-anchor" href="#sha1" aria-hidden="true">#</a></h2><p>将字符数据转换为sha1</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">def</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">sha1</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">data</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> AnyStr</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">-&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">str</span><span style="color:#666666;">:</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C98A7D;">    将字符数据转换为sha1</span></span>
<span class="line"><span style="color:#C98A7D;">    :param data: data</span></span>
<span class="line"><span style="color:#C98A7D;">    :return: sha1</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">...</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-dark vp-code-light"><code><span class="line"><span style="color:#CB7676;">def</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">sha1</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">data</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> AnyStr</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">-&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">str</span><span style="color:#666666;">:</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C98A7D;">    将字符数据转换为sha1</span></span>
<span class="line"><span style="color:#C98A7D;">    :param data: data</span></span>
<span class="line"><span style="color:#C98A7D;">    :return: sha1</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">...</span></span>
<span class="line"></span></code></pre></div><h2 id="camel" tabindex="-1">camel <a class="header-anchor" href="#camel" aria-hidden="true">#</a></h2><p>将字符串转换为驼峰命名</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">def</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">camel</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">data</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">str</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> char</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">str</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">-</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">-&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">str</span><span style="color:#666666;">:</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C98A7D;">    将字符数据转换为驼峰命名</span></span>
<span class="line"><span style="color:#C98A7D;">    :param data: data</span></span>
<span class="line"><span style="color:#C98A7D;">    :param char: 特征字符，如：-、_</span></span>
<span class="line"><span style="color:#C98A7D;">    :return:</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#4D9375;">&gt;&gt;&gt; </span><span style="color:#C98A7D;">camel(&quot;test&quot;)</span></span>
<span class="line"><span style="color:#C98A7D;">    &#39;test&#39;</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#4D9375;">&gt;&gt;&gt; </span><span style="color:#C98A7D;">camel(&quot;test-case&quot;)</span></span>
<span class="line"><span style="color:#C98A7D;">    &#39;testCase&#39;</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#4D9375;">&gt;&gt;&gt; </span><span style="color:#C98A7D;">camel(&quot;test_case&quot;, char=&quot;_&quot;)</span></span>
<span class="line"><span style="color:#C98A7D;">    &#39;testCase&#39;</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">...</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-dark vp-code-light"><code><span class="line"><span style="color:#CB7676;">def</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">camel</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">data</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">str</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> char</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">str</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">-</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">-&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">str</span><span style="color:#666666;">:</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C98A7D;">    将字符数据转换为驼峰命名</span></span>
<span class="line"><span style="color:#C98A7D;">    :param data: data</span></span>
<span class="line"><span style="color:#C98A7D;">    :param char: 特征字符，如：-、_</span></span>
<span class="line"><span style="color:#C98A7D;">    :return:</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#4D9375;">&gt;&gt;&gt; </span><span style="color:#C98A7D;">camel(&quot;test&quot;)</span></span>
<span class="line"><span style="color:#C98A7D;">    &#39;test&#39;</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#4D9375;">&gt;&gt;&gt; </span><span style="color:#C98A7D;">camel(&quot;test-case&quot;)</span></span>
<span class="line"><span style="color:#C98A7D;">    &#39;testCase&#39;</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#4D9375;">&gt;&gt;&gt; </span><span style="color:#C98A7D;">camel(&quot;test_case&quot;, char=&quot;_&quot;)</span></span>
<span class="line"><span style="color:#C98A7D;">    &#39;testCase&#39;</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">...</span></span>
<span class="line"></span></code></pre></div><h2 id="snake" tabindex="-1">snake <a class="header-anchor" href="#snake" aria-hidden="true">#</a></h2><p>将字符串转换为下划线命名</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">def</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">snake</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">data</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">str</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> char</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">str</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">_</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">-&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">str</span><span style="color:#666666;">:</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C98A7D;">    将字符数据转换为下划线命名</span></span>
<span class="line"><span style="color:#C98A7D;">    :param data: data</span></span>
<span class="line"><span style="color:#C98A7D;">    :param char: 特征字符，如：-、_</span></span>
<span class="line"><span style="color:#C98A7D;">    :return:</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#4D9375;">&gt;&gt;&gt; </span><span style="color:#C98A7D;">snake(&quot;test&quot;)</span></span>
<span class="line"><span style="color:#C98A7D;">    &#39;test&#39;</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#4D9375;">&gt;&gt;&gt; </span><span style="color:#C98A7D;">snake(&quot;testCase&quot;)</span></span>
<span class="line"><span style="color:#C98A7D;">    &#39;test_case&#39;</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#4D9375;">&gt;&gt;&gt; </span><span style="color:#C98A7D;">snake(&quot;testCase&quot;, char=&quot;-&quot;)</span></span>
<span class="line"><span style="color:#C98A7D;">    &#39;test-case&#39;</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">...</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-dark vp-code-light"><code><span class="line"><span style="color:#CB7676;">def</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">snake</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">data</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">str</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> char</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">str</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">_</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">-&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">str</span><span style="color:#666666;">:</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C98A7D;">    将字符数据转换为下划线命名</span></span>
<span class="line"><span style="color:#C98A7D;">    :param data: data</span></span>
<span class="line"><span style="color:#C98A7D;">    :param char: 特征字符，如：-、_</span></span>
<span class="line"><span style="color:#C98A7D;">    :return:</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#4D9375;">&gt;&gt;&gt; </span><span style="color:#C98A7D;">snake(&quot;test&quot;)</span></span>
<span class="line"><span style="color:#C98A7D;">    &#39;test&#39;</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#4D9375;">&gt;&gt;&gt; </span><span style="color:#C98A7D;">snake(&quot;testCase&quot;)</span></span>
<span class="line"><span style="color:#C98A7D;">    &#39;test_case&#39;</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#4D9375;">&gt;&gt;&gt; </span><span style="color:#C98A7D;">snake(&quot;testCase&quot;, char=&quot;-&quot;)</span></span>
<span class="line"><span style="color:#C98A7D;">    &#39;test-case&#39;</span></span>
<span class="line"><span style="color:#C98A7D;">    </span><span style="color:#C98A7DAA;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C99076;">...</span></span>
<span class="line"></span></code></pre></div>`,16),t=[o];function e(c,r,y,D,A,C){return n(),a("div",null,t)}const d=s(p,[["render",e]]);export{E as __pageData,d as default};
