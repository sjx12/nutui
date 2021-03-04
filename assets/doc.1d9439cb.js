import{c as t,o as d,A as e}from"./vendor.e0b7d5c2.js";const r={class:"markdown-body"},o=e('<h1>Uploader 上传</h1><h3>介绍</h3><p>用于将本地的图片或文件上传至服务器。</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\nimport { Uploader } from &#39;@nutui/nutui&#39;;\n\nconst app = createApp();\napp.use(Uploader);\n\n</code></pre><h2>代码示例</h2><h3>基本用法</h3><pre><code class="language-html">&lt;nut-uploader url=&quot;http://服务器地址&quot;&gt;&lt;/nut-uploader&gt;\n</code></pre><h3>限制上传数量5个</h3><pre><code class="language-html">&lt;nut-uploader url=&quot;http://服务器地址&quot; multiple max-count=&quot;5&quot;&gt;&lt;/nut-uploader&gt;\n</code></pre><h3>限制上传大小（每个文件最大不超过 50kb）</h3><pre><code class="language-html">&lt;nut-uploader url=&quot;http://服务器地址&quot; multiple :max-size=&quot;1024 * 50&quot; @oversize=&quot;onOversize&quot;&gt;&lt;/nut-uploader&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n    const formData = {\n      custom: &#39;test&#39;\n    };\n    const onOversize = (files: File[]) =&gt; {\n      console.log(&#39;oversize 触发 文件大小不能超过 50kb&#39;, files);\n    };\n   \n    return {\n      onOversize,\n      formData\n    };\n}\n</code></pre><h3>自定义 FormData headers</h3><pre><code class="language-html">&lt;nut-uploader url=&quot;http://服务器地址&quot; :form-data=&quot;formData&quot; :headers=&quot;formData&quot; :with-Credentials=&quot;true&quot;&gt;&lt;/nut-uploader&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n    const formData = {\n      custom: &#39;test&#39;\n    };\n    const onOversize = (files: File[]) =&gt; {\n      console.log(&#39;oversize 触发 文件大小不能超过 50kb&#39;, files);\n    };\n   \n    return {\n      onOversize,\n      formData\n    };\n}\n</code></pre><h3>禁用状态</h3><pre><code class="language-html">&lt;nut-uploader disabled&gt;&lt;/nut-uploader&gt;\n</code></pre><h2>API</h2><h3>Prop</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td><code>input</code> 标签 <code>name</code> 的名称，发到后台的文件参数名</td><td>String</td><td>“file”</td></tr><tr><td>url</td><td>上传服务器的接口地址</td><td>String</td><td>-</td></tr><tr><td>default-file-list</td><td>默认已经上传的文件列表</td><td>object[]</td><td>-</td></tr><tr><td>file-list</td><td>默认已经上传的文件列表</td><td>object[]</td><td>-</td></tr><tr><td>custom-request</td><td>通过覆盖默认的上传行为，可以自定义自己的上传实现</td><td>Function</td><td>-</td></tr><tr><td>is-preview</td><td>是否上传成功后展示预览图</td><td>Boolean</td><td>true</td></tr><tr><td>is-deletable</td><td>是否展示删除按钮</td><td>Boolean</td><td>true</td></tr><tr><td>method</td><td>上传请求的 http method</td><td>String</td><td>“post”</td></tr><tr><td>capture</td><td>图片<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#htmlattrdefcapture">选取模式</a>，可选值为 camera (直接调起摄像头)</td><td>String</td><td>“camera”</td></tr><tr><td>max-size</td><td>可以设定最大上传文件的大小（字节）</td><td>Number丨String</td><td>-</td></tr><tr><td>max-count</td><td>文件上传数量限制</td><td>Number丨String</td><td>1</td></tr><tr><td>clear-input</td><td>是否需要清空<code>input</code>内容，设为<code>true</code>支持重复选择上传同一个文件</td><td>Boolean</td><td>false</td></tr><tr><td>accept-type</td><td>允许上传的文件类型，<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%90%E5%88%B6%E5%85%81%E8%AE%B8%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B">详细说明</a></td><td>String</td><td>*</td></tr><tr><td>headers</td><td>设置上传的请求头部</td><td>Object</td><td>{}</td></tr><tr><td>form-data</td><td>附加上传的信息 formData</td><td>Object</td><td>{}</td></tr><tr><td>upload-icon</td><td>上传区域<a href="#/zh-CN/icon">图标名称</a>或图片链接</td><td>String</td><td>photograph</td></tr><tr><td>xhr-state</td><td>接口响应的成功状态（status）值</td><td>Number</td><td>200</td></tr><tr><td>with-credentials</td><td>支持发送 cookie 凭证信息</td><td>Boolean</td><td>fasle</td></tr><tr><td>multiple</td><td>是否支持文件多选</td><td>Boolean</td><td>fasle</td></tr><tr><td>disabled</td><td>是否禁用文件上传</td><td>Boolean</td><td>fasle</td></tr><tr><td>before-upload</td><td>上传前的函数需要返回一个对象</td><td>Function</td><td>input files</td></tr><tr><td>before-delete</td><td>除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除</td><td>Function(file): boolean 丨Promise</td><td>-</td></tr><tr><td>on-change</td><td>上传文件改变时的状态，详见</td><td>Function(fileList) 丨 Promise</td><td>-</td></tr><tr><td>custom-request</td><td>通过覆盖默认的上传行为，可以自定义自己的上传实现</td><td>Function</td><td>-</td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>start</td><td>文件上传开始</td><td>-</td></tr><tr><td>progress</td><td>文件上传的进度</td><td>上传文件、已上传数据量、总数据量</td></tr><tr><td>oversize</td><td>文件大小超过限制时触发</td><td>files</td></tr><tr><td>success</td><td>上传成功</td><td>fileList</td></tr><tr><td>failure</td><td>上传失败</td><td>fileList</td></tr></tbody></table>',23),a={expose:[],setup:e=>(e,a)=>(d(),t("div",r,[o]))};export default a;
