import{c as t,o as n,A as s}from"./vendor.e0b7d5c2.js";const e={class:"markdown-body"},u=s('<h1>快速上手</h1><h2>安装</h2><ul><li>通过 NPM 或 YARN 安装（推荐）</li></ul><h4>NPM</h4><pre><code class="language-bash">npm i @nutui/nutui@next -S\n</code></pre><h4>YARN</h4><pre><code class="language-bash">yarn add @nutui/nutui@next\n</code></pre><blockquote><p>如果你的网络环境不佳，不妨试试国内的npm镜像</p></blockquote><blockquote><p>默认安装最新版 2.x，如需使用 1.x 版本，请指定版本号，如： <code>npm i @nutui/nutui@1.3.2 -S</code></p></blockquote><ul><li>页面直接引用</li></ul><p>在页面中使用 script 和 link 标签直接引入文件，<strong>NutUI</strong> 将会自动注册。我们在 npm 发布包内的 dist 目录下提供了 <strong>nutui.js</strong> <strong>nutui.css</strong> 以及 <strong>nutui.min.js</strong> <strong>nutui.min.css</strong>。</p><p>当然你也可以通过 CDN 的方式引入， 可以在 <strong>jsdelivr</strong> 和 <strong>unpkg</strong> 等公共 CDN 上获取到 NutUI。我们推荐链接到一个你可以手动更新的指定版本号。</p><pre><code class="language-html">&lt;!-- 开发环境版本，包含了有帮助的命令行警告 --&gt;\n&lt;!-- 引入样式 --&gt;\n&lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdn.jsdelivr.net/npm/@nutui/nutui@beta/dist/nutui.css&quot;&gt;\n&lt;!-- 引入Vue --&gt;\n&lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue@next&quot;&gt;&lt;/script&gt;\n&lt;!-- 引入组件库 --&gt;\n&lt;script src=&quot;https://cdn.jsdelivr.net/npm/@nutui/nutui@beta/dist/nutui.js&quot;&gt;&lt;/script&gt;\n</code></pre><p>或者</p><pre><code class="language-html">&lt;!-- 生产环境版本，优化了尺寸和速度 --&gt;\n&lt;!-- 引入样式 --&gt;\n&lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdn.jsdelivr.net/npm/@nutui/nutui@beta/dist/nutui.min.css&quot;&gt;\n&lt;!-- 引入Vue --&gt;\n&lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue@next&quot;&gt;&lt;/script&gt;\n&lt;!-- 引入组件库 --&gt;\n&lt;script src=&quot;https://cdn.jsdelivr.net/npm/@nutui/nutui@beta/dist/nutui.min.js&quot;&gt;&lt;/script&gt;\n</code></pre><p>CDN 使用示例</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n&lt;head&gt;\n    &lt;meta charset=&quot;UTF-8&quot;&gt;\n    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;\n    &lt;!-- 引入样式 --&gt;\n    &lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdn.jsdelivr.net/npm/@nutui/nutui@beta/dist/nutui.min.css&quot;&gt;\n    &lt;!-- 引入Vue --&gt;\n    &lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue@next&quot;&gt;&lt;/script&gt;\n    &lt;!-- 引入NutUI组件库 --&gt;\n    &lt;script src=&quot;https://cdn.jsdelivr.net/npm/@nutui/nutui@beta/dist/nutui.min.js&quot;&gt;&lt;/script&gt;\n&lt;/head&gt;\n&lt;body&gt;\n    &lt;div id=&quot;app&quot;&gt;\n        &lt;nut-button&gt;Button&lt;/nut-button&gt;\n    &lt;/div&gt;\n    &lt;script&gt;\n        new Vue({el: &#39;#app&#39;});\n    &lt;/script&gt;\n&lt;/body&gt;\n&lt;/html&gt;\n</code></pre><p>CDN 按需加载引入示例</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n  &lt;head&gt;\n    &lt;meta charset=&quot;UTF-8&quot; /&gt;\n    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;\n  &lt;/head&gt;\n\n  &lt;body&gt;\n    &lt;div id=&quot;app&quot;&gt;\n      &lt;nut-button&gt;cdn按需加载&lt;/nut-button&gt;\n    &lt;/div&gt;\n\n    &lt;!-- 开发环境版本，包含了有帮助的命令行警告 --&gt;\n    &lt;!-- 引入样式 --&gt;\n    &lt;link\n      rel=&quot;stylesheet&quot;\n      href=&quot;https://cdn.jsdelivr.net/npm/@nutui/nutui@latest/dist/packages/button/button.css&quot;\n    /&gt;\n    &lt;!-- 引入Vue --&gt;\n    &lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue/dist/vue.js&quot;&gt;&lt;/script&gt;\n    &lt;!-- 引入组件库 --&gt;\n    &lt;script src=&quot;https://cdn.jsdelivr.net/npm/@nutui/nutui@latest/dist/packages/button/button.js&quot;&gt;&lt;/script&gt;\n    &lt;script&gt;\n      Vue.component(button.default.name, button.default);\n      new Vue({\n        el: &quot;#app&quot;\n      });\n    &lt;/script&gt;\n  &lt;/body&gt;\n&lt;/html&gt;\n</code></pre><blockquote><p>在页面中直接引入，将无法使用 <strong>主题定制</strong> 等功能。我们推荐使用 <em>NPM</em> 或 <em>YARN</em> 方式安装，不推荐在页面中直接引入的用法</p></blockquote><ul><li>通过 <strong>Vue CLI</strong> 图形化界面安装</li></ul><p>如果你的项目是使用 <a href="https://cli.vuejs.org/zh/">Vue CLI</a> 脚手架搭建，那么你还可以通过 <strong>Vue CLI</strong> 提供的图形化界面安装 <strong>NutUI</strong> ：在图形化界面的 <strong>依赖</strong> 界面，点击右上角 <strong>安装依赖</strong> 按钮，搜索 <strong>@nutui/nutui</strong> 安装即可。</p><h2>加载示例</h2><pre><code class="language-javascript">import Vue from &#39;vue&#39;;\nimport NutUI from &#39;@nutui/nutui&#39;;\nimport &#39;@nutui/nutui/dist/nutui.css&#39;;\n\nNutUI.install(Vue);\n</code></pre><blockquote><p>注意：这种方式将会导入所有组件</p></blockquote><h2>按需加载</h2><p>以下两种方式都可以实现只加载用到的组件，从而减少加载的文件体积。</p><h3>1. 使用 webpack 插件 <strong><a href="https://www.npmjs.com/package/@nutui/babel-plugin-separate-import">@nutui/babel-plugin-separate-import</a></strong> (推荐)</h3><p>首先安装 <strong>@nutui/babel-plugin-separate-import</strong> 插件</p><pre><code class="language-bash">npm i @nutui/babel-plugin-separate-import -D\n</code></pre><p>然后配置一下babel的配置文件</p><pre><code class="language-bash">{\n  &quot;plugins&quot;: [\n    [&quot;@nutui/babel-plugin-separate-import&quot;, {\n        &quot;style&quot;: &quot;scss&quot;\n    }]\n  ]\n}\n</code></pre><blockquote><p>style 选项值为 “css” 时加载组件对应的css文件，为 “scss” 时加载对应的scss文件。无style选项时，不自动加载样式文件。</p></blockquote><p>接下来，我们就可以在项目里只引入用到的组件了。默认情况下，样式也无需单独引入。插件会自动将代码转换为方式二的手动引入方式。</p><pre><code class="language-javascript">import Vue from &#39;vue&#39;;\nimport { Dialog,Picker } from &#39;@nutui/nutui&#39;;\n\nDialog.install(Vue);\nPicker.install(Vue);\n</code></pre><p>如果需要按需加载 scss 文件（如需要自定义主题）时，除了需要把 style 选项值设为 <strong>scss</strong> 外，还需要修改 webpack 配置文件的 sass-loader 配置，如下所示：</p><pre><code class="language-bash">{\n    loader: &#39;sass-loader&#39;,\n    options: {\n        data: `@import &quot;@nutui/nutui/dist/styles/index.scss&quot;; `\n    }\n}\n</code></pre><p><code>vue.config.js</code> VueCLI3 配置方式</p><pre><code class="language-bash">module.exports = {\n    css: {\n        loaderOptions: {\n            // 给 sass-loader 传递选项\n            scss: {\n                // @/ 是 src/ 的别名\n                // 注意：在 sass-loader v7 中，这个选项名是 &quot;data&quot;\n                prependData: ` \n                @import &quot;@/assets/custom_theme.scss&quot;;\n                @import &quot;@nutui/nutui/dist/styles/index.scss&quot;;\n                `,\n            }\n        },\n    }\n}\n</code></pre><blockquote><p>VueCLI 3 相关Demo 请查看 <a href="https://github.com/jdf2e/nutui-demo">NutUI Demo</a></p></blockquote><h3>2. 手动引入</h3><pre><code class="language-javascript">import Vue from &#39;vue&#39;;\nimport Button from &#39;@nutui/nutui/dist/packages/button/button.js&#39;;  // 加载构建后的JS\nimport &#39;@nutui/nutui/dist/packages/button/button.css&#39;;  //加载构建后的CSS\n//主题定制等场景需要加载SCSS,而不是构建后的CSS\n//import &#39;@nutui/nutui/dist/packages/button/button.scss&#39;; \n\nButton.install(Vue);\n</code></pre><h2>组件使用</h2><p>1.使用:prop传递数据格式为 数字、布尔值或函数时，必须带:(兼容字符串类型除外)，比如：</p><pre><code class="language-html">&lt;nut-switch :active=&quot;true&quot; size=&quot;base&quot;&gt;&lt;/nut-switch&gt;\n</code></pre><p>2.组件 css 单位使用的是 <strong>px</strong>，如果你的项目中需要 <strong>rem</strong> 单位，可借助一些工具进行转换，比如 <a href="https://www.webpackjs.com/">webpack</a> 的 <a href="https://www.npmjs.com/package/px2rem-loader">px2rem-loader</a>、<a href="https://github.com/postcss/postcss">postcss</a> 的 <a href="https://www.npmjs.com/package/postcss-plugin-px2rem">postcss-plugin-px2rem</a> 插件等</p><p>VueCLI3 配置示例 <code>vue.config.js</code></p><pre><code class="language-javascript">const pxtorem = require(&#39;postcss-pxtorem&#39;);\nmodule.exports = {\n    css: {\n        loaderOptions: {\n          postcss: {\n            plugins: [\n              pxtorem({\n                rootValue: 37.5,\n                propList: [&#39;*&#39;]\n              })\n            ]\n          }\n        }\n      }\n}\n</code></pre><p>3.组件具体用法以文档为准</p><p>4.组件使用过程中如有问题或建议，欢迎<a href="https://github.com/jdf2e/nutui/issues">反馈</a></p>',50),o={expose:[],setup:s=>(s,o)=>(n(),t("div",e,[u]))};export default o;
