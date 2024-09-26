---
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
mdc: true
layout: center
glowSeed: 4
title: AST Understand And Practice
---

<div flex="~ col" class="text-4em text-indigo">AST的理解与实践</div>

<div class="abs-br mx-14 my-12 flex" v-click>
  <img src="https://avatars.githubusercontent.com/u/16821989?v=4" class="h-8 w-8 b-rd-full">
  <div class="ml-3 flex flex-col text-left">
    <div><a href="https://www.xieyezi.site/" target="black">xieyezi</a></div>
    <div class="text-sm opacity-50">2024-09-27</div>
  </div>
</div>


<!--
各位帅哥美女同事，大家下午好！今天由小弟我来给大家分享关于AST的一些内容。在座的应该都是经验丰富、才华横溢的高手，估计我今天也是班门弄斧了。所以我也特别希望能够借此机会，向大家多多学习，吸取宝贵的经验和建议。在接下来的分享中，如果有任何不清楚或者需要进一步探讨的地方，等分享结束后，大家一起交流讨论。[click]

虽然加入这个团队已经很久很久了，但是估计有好些同学都还不认识我，所以也借着这个机会介绍一下我自己。我的名字叫苏业纯，昵称是xieyezi, 这个呢是我的博客，这里面有我的详细信息，偶尔也会更新点文章啥的，大家有兴趣就去看看。好，接下来，进入正题，开始今天的分享。

-->

---
layout: cover
---

<h1 flex="~ col">
<div mt1 forward:delay-300 text-white:50 ml10 flex="~ col">
  <span flex="~ gap-2 items-center" text-hex-8080f2>
    AST
    <div i-tabler:binary-tree />
  </span>
  <span text-white font-bold v-click>啥是AST？</span>
  <span font-hand text-1.2em text-green v-click>抽象语法树</span>
</div>
</h1>

<div v-click>
 抽象语法树 (Abstract Syntax Tree，AST)，是源代码语法结构的一种抽象表示。以树状的形式表现编程语言的语法结构，每个节点都表示源代码中的一种结构。
</div>

<!--
AST, 前端的同学或多或少都接触过这个关键词，当然如果是学习过编译原理的同学，可能也听说过这个东西。[click]

那么，到底啥是AST？[click]

额，用中文讲：它叫抽象语法树。[click]

官方定义：抽象语法树 (Abstract Syntax Tree，AST)，是源代码语法结构的一种抽象表示。以树状的形式表现编程语言的语法结构，每个节点都表示源代码中的一种结构。
-->

---
layout: center
glow: bottom
---

<div flex="~ row items-center justify-center w-full gap-4">

<div align-start>
<h2 text-left>首先我们来看段代码</h2>
<div mt-2 v-click>

  ```js
  const a = 1;
  const b = 2;

  function add(){
    return a + b;
  }
  ```
</div>

<div mt-2 flex="~ items-center justify-start" v-click>
<div><a href="https://astexplorer.net/#/gist/4b40bd70c4a65703d6a830c00784deef/18eca7d6fde0915fd319c46f2e4c6af468a55729" target="black">对应的AST就是</a></div>
<div class="i-iconamoon:arrow-right-1-fill color-indigo text-1.2em"></div>
</div>
</div>

<img src="/ast-example.png" v-click :class="$clicks <= 3 ? 'w-1/2 shadow forward:delay-400 animate-keyframes-fade-out': 'hidden' " />
<img src="/ast-example-graph.png" v-click :class="$clicks ===4 ? 'h-75 shadow forward:delay-400 animate-keyframes-fade-in': 'hidden' " />
</div>

<!--
首先，我们先来看一段非常简单的代码。[click]

这段代码声明了两个变量，分别是a,b，和一个函数add，那么它转变成AST是什么样子呢？[click][click]

诺，就是这样。我们可以看到，最上面是一棵树的顶，称为Program，他的body下面有很多子节点,现在可以清楚的知道，有3个，前面两个是变量a和变量b的声明，第三个则是这个函数add的声明，我们来看看到底是啥样子。

可以看到一条语句由若干个词法单元组成。这个词法单元就像 26 个字母。创造出成千上万个单词，通过不同单词的组合又能写出不同内容的文章。

字符串形式的 type 字段表示节点的类型。比如”BlockStatement”，”Identifier”，”BinaryExpression” 等。 每一种类型的节点定义了一些属性来描述该节点类型，然后就可以通过这些节点来进行分析其他操作。

可能光看这个还是不太直观，我们来看看对应的图形化展示：[click]

对应的图形化展示长这个样子，很显然他们构成了一颗自顶向下的树。

-->

---
layout: quote
---

# 🙋 那么，AST 是如何<span text-hex-8080f2 font-bold><span v-mark="0">生成的</span></span>?

<!--
那么，AST是怎么样生成的呢？
-->

---
layout: quote
---

# 🙋 这就不得不讲到 <span text-hex-8080f2 font-bold>编译原理</span>了

<!--
这就要涉及到《编译原理》的知识了
-->

---

## 代码编译的过程

<img src="/compiler.png" transition duration-500 mt-3 mb-3 shadow h-55 b-rounded-md>

<v-clicks>

- 编写好代码，交给编译器开始编译
- 词法分析 (Lexical Analysis)：编译器将代码拆分成一个又一个的token
- 语法分析 (Syntax Analysis)：将tokens交给编译器进行做语法分析，完成之后会构建出AST
- 语义分析 (Semantic Analysis)：检查语法树是否符合语言的语义规则
- 代码生成 (Code Generation)：可执行的代码（汇编码或者机器码）
- 装载和执行 (Loading and Execution)：正式运行代码

</v-clicks>

<!--- 
- 编写好代码，交给编译器开始编译[click]
- 词法分析 (Lexical Analysis)：编译器将代码拆分成一个又一个的token[click]
- 语法分析 (Syntax Analysis)：将tokens交给编译器进行做语法分析，完成之后会构建出AST[click]
- 语义分析 (Semantic Analysis)：检查语法树是否符合语言的语义规则[click]
- 代码生成 (Code Generation)：可执行的代码（汇编码或者机器码）[click]
- 装载和执行 (Loading and Execution)：正式运行代码
-->

---

<div grid="~ cols-2 gap-8">

 <div flex="~ col gap-2">

### Write Code

```js
const a = 'Hello World';
```
<div flex="~ col gap-2" mt-3>

<div v-click>
  <div i-bi:1-circle text-green inline-block />
读取 const 并识别出关键字 const
</div>

<div v-click>
  <div i-bi:2-circle text-green inline-block />
跳过空格
</div>

<div v-click>
  <div i-bi:3-circle text-green inline-block />
 读取 a 并识别为标识符
</div>

<div v-click>
  <div i-bi:4-circle text-green inline-block/>
  跳过空格
</div>

<div v-click>
  <div i-bi:5-circle text-green inline-block />
  读取 = 并识别为操作符
</div>

<div v-click>
  <div i-bi:6-circle text-green inline-block />
  跳过空格
</div>

<div v-click>
  <div i-bi:7-circle text-green inline-block />
  读取 ' 并识别完整的字符串字面量 'Hello World'
</div>

<div v-click>
  <div i-bi:8-circle text-green inline-block />
  读取 ; 并识别为语句结束符
</div>

</div>

</div>

<div flex="~ col gap-2">

### Lexical Analysis


```js {*|3|3|4|4|5|5|6|*}{at:1}
//tokens
[
  { type: 'Keyword', value: 'const' },
  { type: 'Identifier', value: 'a' },
  { type: 'Operator', value: '=' },
  { type: 'StringLiteral', value: 'Hello World' },
  { type: 'Punctuation', value: ';' }
]
```
 </div>

</div>

<!--
在词法分析器里，每个关键字是一个 Token ，每个标识符是一个 Token，每个操作符是一个 Token，每个标点符号也都是一个 Token。除此之外，还会过滤掉源程序中的注释和空白字符（换行符、空格、制表符等）。最终，整个代码将被分割进一个tokens列表。

-->



---

<div grid="~ cols-2 gap-6" h-full>
<div>


## Tokens

<div mt-4 h-42>

<v-clicks at="3" text-sm>

- 深度优先，开始遍历 `tokens`
- const 关键字生成 `VariableDeclaration` 节点
- a 标识符和赋值操作符 = 生成 `VariableDeclarator` 节点
- 'Hello World' 字符串生成 `StringLiteral` 节点

</v-clicks>

</div>
<div v-click="1" transition duration-800 :class="$clicks < 3 ? 'translate-y--160px': 'translate-y--60px'">

```js
//tokens
[
  { type: 'Keyword', value: 'const' },
  { type: 'Identifier', value: 'a' },
  { type: 'Operator', value: '=' },
  { type: 'StringLiteral', value: 'Hello World' },
  { type: 'Punctuation', value: ';' }
]
```


<div v-click="6">

```js
parseVariableDeclaration
├── VariableDeclaration
    ├── parseVariableDeclarator
    │   ├── VariableDeclarator
    │       ├── Identifier(a)
    │       ├── parseExpression
    │           ├── Literal('Hello World')
```
</div>

</div>
</div>
<div>

## Syntax Analysis

<div v-click="2" transition duration-800 delay-50>

```json {*|3|7|10|16|*}{at:3}
{
  "program": {
    "type": "Program",
    "sourceType": "module",
    "body": [
      {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "loc": { "identifierName": "a" },
              "name": "a"
            },
            "init": {
              "type": "StringLiteral",
              "value": "Hello World"
            }
          }
        ],
        "kind": "const"
      }
    ]
  },
}
```

</div>
</div>
</div>

<!--
接下来我们来看看语法分析是如何生成AST的[click]

左边的是刚刚生成的tokens，现在马上进行下一步：语法分析[click] 

经过语法分析之后得到一颗AST,长这个样子，接下来我们来逐步分析一下生成节点的过程：[click]

1. 准备一个栈，设置记号流索引，并添加一个根节点。开始遍历tokens [click]
2. 识别 const 关键字，生成 VariableDeclaration 节点，并推入栈中。 [click]
3. 识别标识符 a 和赋值操作符 =，生成 VariableDeclarator 节点，并推入栈中。 [click]
4. 识别字符串字面量 'Hello World'，生成 Literal 节点，并附加到 VariableDeclarator 节点中。完成当前层次的节点处理， 并弹出栈。[click]
5. 完成AST的构建
-->

---
clicks: 5
zoom: 0.75
layout: none
class: flex h-full w-full
glow: top
glowOpacity: 0.2
glowSeed: 18
---

<RenderWhen context="visible">
  <YakMap />
</RenderWhen>

---

## AST在JavaScript开发中的应用

<div v-click text-white:50 mt3 mb6>
常见的 <b text-white:75 font-bold>应用</b> 和 <b text-white:75 font-bold>场景</b>：
</div>

<div flex="~ col gap-6">

<div flex="~ gap-2 items-center">
  <div flex="~ gap-2 items-center" v-click>
    <div i-simple-icons:prettier text-2xl />
    <span font-bold>代码格式化</span>
  </div>
  <span v-click op75 ml4>如 <span text-blue>Prettier</span> 利用 AST 对代码进行格式化调整，使其符合规范</span>
</div>

<div flex="~ gap-2 items-center">
  <div flex="~ gap-2 items-center" v-click>
    <div i-nonicons:eslint-16 text-2xl />
    <span font-bold>代码语法检查</span>
  </div>
  <span v-click op75 ml4>如 <span text-purple>ESLint</span> 通过 AST 检查代码是否遵循规定的编码规则</span>
</div>

<div flex="~ gap-2 items-center">
  <div flex="~ gap-2 items-center" v-click>
    <div i-uil:compress-arrows text-2xl />
    <span font-bold>代码压缩</span>
  </div>
  <span v-click op75 ml4 flex="~ items-center gap1">通过 AST 重构代码，移除未使用的变量和函数，减少代码大小</span>
</div>

<div flex="~ gap-2 items-center">
  <div flex="~ gap-2 items-center" v-click>
    <div i-mdi:babel text-2xl />
    <span font-bold>代码转译</span>
  </div>
  <span v-click op75 ml4>如 <span text-amber>Babel</span> 通过AST转译 ES6+ 代码到 ES5 代码</span>
</div>

<div flex="~ gap-2 items-center">
  <div flex="~ gap-2 items-center" v-click>
    <div i-nonicons:vscode-16 text-2xl />
    <span font-bold>IDE 功能增强</span>
  </div>
  <span v-click op75 ml4>IDE 如 <span text-blue-6>VSCode</span> 可以利用 AST 来提供代码导航、高亮等功能</span>
</div>

<div flex="~ gap-2 items-center">
  <div flex="~ gap-2 items-center" v-click>
    <div i-solar:code-2-bold text-2xl />
    <span font-bold>源代码映射</span>
  </div>
  <span v-click op75 ml4>在编译器和调试工具中，AST 可用于生成源代码和转换后代码之间的映射，方便调试</span>
</div>

<div flex="~ gap-2 items-center">
  <div flex="~ gap-2 items-center" v-click>
    <div i-teenyicons:rollupjs-outline text-2xl />
    <span font-bold>代码打包</span>
  </div>
  <span v-click op75 ml4 flex="~ items-center gap1">对代码进行打包，如 webpack、rollup 等等</span>
</div>

</div>

<!--
AST 是编程语言中重要的数据结构，用于分析、理解和转换代码，对于编译、解释和代码分析等应用具有重要作用。可以说，现在前端的发展如此蓬勃，离不开AST。

[click] AST具体有哪些应用场景呢？

[click] 代码格式化

[click] AST可以用于代码格式化，相信大家肯定都用过 Prettier，我们可以定义一组代码的风格规则，例如每行代码后面要不要跟分号，要不要用单引号，或者双引号等，他在拿到我们的代码字符串之后，会将其转为AST，然后在按照我们定义的风格去对AST做调整，最后输出格式化之后的代码给我们。

[click] 代码语法检查

[click]
1. 代码解析：ESLint 首先使用解析器（如 espree）将源码解析成抽象语法树（AST），这是一种描述代码结构的树形表示。
2. 规则加载：ESLint 依据配置文件加载一系列规则。这些规则通过访问 AST 的特定节点来检测代码是否符合预期的规范。
3. AST 遍历：ESLint 通过遍历整棵 AST，在访问每个节点时，根据规则定义的节点访问器进行检查。例如，可以检测变量声明、函数调用等不同类型的节点。
4. 问题报告：如果某个节点不符合规则的预期，ESLint 就会通过 context.report 方法记录一个错误或警告信息。
5. 结果输出：ESLint 最终收集所有报告的问题，根据用户配置的格式输出检查结果，方便开发者查看和修正代码。

[click] 代码压缩

[click] 代码压缩是减少代码体积以提高加载速度的一种重要技术。这些工具，例如 UglifyJS 和 Terser，主要通过以下几个步骤来实现代码压缩：
1. 代码解析：首先，压缩工具将源代码解析为抽象语法树（AST），这种树形结构能够清晰地表示代码的层次和表达。
2. 代码分析与优化：
删除注释和空白：工具会移除所有不影响代码功能的注释和空白字符。
简化表达式：将复杂的表达式转换为等价的更简单或更短的形式。例如，将 x = x + 1 转换为 x++。
函数内联：将频繁调用的小函数直接嵌入到调用位置，以减少函数调用的开销。
变量与函数重命名：使用短名称替换长名称，以减少标识符的字符数量。
3. AST 替换和重构：基于以上的优化和分析，工具在 AST 级别进行一系列替换和重构，例如：
常量折叠：将可以在编译时确定的常量表达式计算得出的值替换掉。
死代码消除：移除永远不会执行的代码块，例如条件判断中永远为 false 的分支。
4. 生成压缩后的代码：最后，工具将优化后的 AST 重新生成源代码。生成的代码更为简洁，去掉了所有多余的部分，从而显著减少了代码体积。

[click] 代码转译

[click] 代码转译（也称为代码编译或代码转换）是一种将代码从一种形式转换为另一种形式的技术。许多工具（如 Babel 和 TypeScript）通过以下步骤实现代码转译：
1. 代码解析：首先，转译工具会将源代码解析成抽象语法树（AST）。这种树形结构详细地表示了代码的语法和结构。
2. AST 变换与优化：
语法特性转换：工具会根据目标环境的特性支持情况，将现代语法转换为等价的、更广泛支持的语法。例如，Babel 可以将 ES6 的箭头函数转换为普通的函数表达式。
Polyfill 插入：对于不原生支持的新特性（如 Promise 或 Array.prototype.includes），工具可以插入相应的 polyfill 以确保兼容性。
模块转换：将 ES6 的模块导入导出语句（如 import 和 export）转换为常见的模块化格式（如 CommonJS 或 AMD）。
3. AST 替换和重构：工具在 AST 层面进行详细的变换和重构。例如：
类转换：将 ES6 的 class 语法转换为基于原型的传统 JavaScript 类定义方式。
高级语法特性：处理诸如展开操作符、解构赋值、默认参数值等高阶语法，并转换为等价的、更旧式的代码结构。
4. 生成转译后的代码：最后，工具会将变换和优化后的 AST 转换回源代码。这段新生成的代码在功能上等同于最初代码，但使用了兼容性更广的语法和特性。

[click] IDE增强

[click] 在VScode写代码的时候，编辑器会对一些关键词进行高亮显示，比如关键字、变量名、字符串、函数名等。这个也是利用AST来实现的。
1. 智能提示与代码补全：
  
上下文感知：由于 AST 描述了代码的完整结构，编辑器可以通过其子节点和父节点来理解当前上下文。例如，在函数内部提示局部变量，而在全局范围内提示全局函数和变量。

类型推断：对于 TypeScript 或具备类型信息的语言，编辑器可以利用 AST 中的类型信息为变量、函数等提供类型安全的补全建议。

2. 语法检查与错误报告：

实时分析：编辑器通过持续解析和分析 AST，可以实时检测语法和类型错误，并在编辑过程中即时反馈。例如，使用 TypeScript 编译器可以检测类型不匹配的错误。

错误提示：定位到具体的错误节点，并在编辑器中高亮显示出错位置，同时提供详细的错误信息。

3. 代码重构：
  
重命名：基于 AST，编辑器可以精确地进行跨文件的变量和函数重命名操作，确保所有引用的地方都得到正确更新。

提取方法/拆分变量：编辑器可以通过 AST 提供智能重构选项，例如将一段重复代码提取成方法，或将复杂表达式拆分成多个变量。

[click] 源代码映射，也就是SourceMap

[click]
1. 代码解析：工具首先将源代码解析成抽象语法树（AST），这包括了源代码的语法和结构信息。
2. AST 转换：
代码优化或转译：根据需要，工具可能会对 AST 进行各种优化或转译操作。例如，压缩工具会进行变量重命名和空白删除，而转译工具（如 Babel）会将新语法转换为旧语法。

3. 生成目标代码和源映射：
  
目标代码生成：工具根据转换后的 AST 生成新的源代码。

生成 Source Map：与此同时，工具还会生成一个 Source Map 文件，这个文件包含从目标代码到原始源代码的映射信息。这个过程涉及记录每个目标代码片段与其对应的原始代码片段的位置信息。

4. 调试和追踪：
  
加载 Source Map：调试器（如浏览器开发者工具 or Node.js 调试器）加载目标代码和对应的 Source Map 文件。

源码定位：当发生错误或需要调试时，调试器能够利用 Source Map 将目标代码中的位置映射回原始源代码中的位置，帮助开发者更直观地查看和理解问题。


[click] 代码打包

[click] 我们常用的Webpack、Rollup、Vite这些工具也都是基于AST来进行打包的
-->

---
glow: left
---

<div w="40%">

## Config Inspector <sup text-purple bg-purple:15 px1.5 rounded text-sm>Official</sup>

<div mt-4 />
<v-click>

```bash
eslint --inspect-config
```

</v-click>
<div mt-4 />

<v-clicks>

- Visualize your config
- Understand the composition
- In-place documentations
- File path tester

</v-clicks>
<div mt-4 />
<v-click>

<!--<<< ./eslint.demo.config.ts {monaco-write}{height:'220px'}-->

</v-click>
</div>

<iframe
  :src="__DEV__ ? 'http://localhost:7777' : 'https://eslint-config.antfu.me/configs'"
  onload="this.style.visibility = 'visible';"
  scale-60 origin-top-right absolute right-0 top-0 bottom-0 w="95%" h="167%"
  border="l main"
  style="filter:contrast(1.15);visibility:hidden;"
/>

<div v-show="false">
<!-- This block is for type discovery -->

```ts {monaco}
import antfu from '@antfu/eslint-config'
```

</div>

<!--
The first one is the ESLint Config Inspector - a visualized DevTools, that allows you to inspect and play with your final resolved configs.

[click] You can try it by running `eslint --inspect-config` in your CLI under the project root where you have the flat config file, and it will open a browser page with UI, like the one you see on the right.

[click] So, the first thing it does is to render each config item you have. You can see all configs listed here, because it's flat. Here I have a rather complex config setup with many config items. But with the name provided by each config, you can easily see and understand the purpose for each of them.

[click] You can also expand each item to see how it contributes to the final config, like how many rules enabled, or what's their target file types, etc.

[click] In each rule, you can also see their options, a short description, and also, a link to their documentation page.

[click] Since in ESLint, you can have different rule sets that apply to different file types or are more granular to their exact file path. In the config inspector, you can also enter the file path to test how rules are enabled for that file.

In another tab, you can also browse each rule available, given the plugins you have installed. You can filter them and see which rules you are using, which rules you don't, which are recommended ones, and which are deprecated.

[click] Here I have my config file as an example. The config is a factory function that takes some rather high-level options. With the config inspector, we could see how it was resolved based on the options we provided. We could also try to change the options and see how it affects the result. For example, I could also provide it the path of my tsconfig, which will enable the type-aware rules for me automatically.
-->

---

## Flat Config Utils <sup text-teal bg-teal:15 px1.5 rounded text-sm>Community</sup>

<Repo name="antfu/eslint-flat-config-utils" op50 />

<div grid="~ cols-[1fr_max-content_1fr] gap-4" mt2>
<div v-click>

```ts {*|*|7-9|10-17}{at:3}
import eslint from '@eslint/js'
import unocss from '@unocss/eslint-plugin'
import vue from 'eslint-plugin-vue'
import typescript from 'typescript-eslint'

export default [
  eslint.configs.recommended,
  ...typescript.configs.recommand,
  ...await unocss(),
  {
    files: ['*.vue'],
    ...vue.configs['vue3-recommand'],
    rules: {
      ...vue.configs['vue3-recommand'].rules,
      'vue/html-indent': ['error', 2]
    }
  }
]

// (pesudo code for demo)
```

</div>
<span i-carbon:arrow-right ma v-click />
<div v-after>

```ts {*|1,7|8-10|11-21}{at:3}
import eslint from '@eslint/js'
import unocss from '@unocss/eslint-plugin'
import { compose } from 'eslint-flat-config-utils'
import vue from 'eslint-plugin-vue'
import typescript from 'typescript-eslint'

export default compose(
  eslint.configs.recommended,
  typescript.configs.recommand, // auto spread
  unocss() // auto await in parallel
)
  .append( // chainable extensions
    vue.configs['vue3-recommand']
  )
  // override any configs with their name or index
  .override('vue', {
    files: ['*.vue'],
    rules: {
      'vue/html-indent': ['error', 2]
    }
  })
```

</div>
</div>

<!--
To make config customization easier, I also made a small library called `eslint-flat-config-utils`.

[click] For example, here is a flat config we might have. Depending on how each shared config is constructed, some might be a plain config object, some might be an array, and some might be a constructor that returns an object, an array or even a Promise. When you use them together, it's usually your responsibility to join them together as a single array.

[click] With the config utils, [click] I made a utility function called `compose`, [click] which will automatically resolve the different types of configs, resolve the promise and merge them together.

[click] It also provides some chainable actions where you could insert extra configs anywhere you want, or override some config without the need to handle the merge manually.
-->

---

## ESLint Typegen <sup text-teal bg-teal:15 px1.5 rounded text-sm>Community</sup>

<Repo name="antfu/eslint-typegen" op50 />

<v-clicks>

![](/eslint-typegen.png){.w-200.rounded-lg.shadow.border.border-main}

</v-clicks>

<!--
And then, thanks to the flexibility and also the full context available in the flat config, it also make the type generation possible. [click]

Simply wrap the entire config array you exported with the typegen function, it will generate a local .d.ts file based on all the plugins you have installed. This provides you with autocomplete and typechecks for all the rules are you using.
-->

---
layout: fact
---

# One for All{.important-text-3em}
One config for all projects

<!--
So here, I'd like to bring back the title - One for All.

With the maximized flexibility and customizability - it's now possible to have a single shared config that covers all different types of projects.
-->

---

<div grid="~ cols-2 gap-8">

<div flex="~ col gap-2">

### Legacy Config

```json {*|3-7|*|10-14|*}{at:1}
{
  "extends": [
    "@antfu/eslint-config",
    "@antfu/eslint-config-ts",
    "@antfu/eslint-config-vue",
    "@antfu/eslint-config-vue-ts"
    // ...provide every combination?
  ],
  "rules": {
    // ...a lot overrides
    "indent": ["error", 4],
    "@typescript-eslint/indent": ["error", 4],
    "jsx-indent": ["error", 4],
    "vue/indent": ["error", 4]
  }
}
```

</div>
<div flex="~ col gap-2">

### Flat Config

```ts {*|4-5|*|6-8|*}{at:1}
import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: true,
  stylistic: {
    indent: 4
  }
  // ...
})
```

<div flex="~ col gap-2" mt-3>

<div v-click class="slidev-vclick-target" :class="$clicks === 1 ? 'text-green' : ''">
  <div i-ph-check-circle-duotone text-green inline-block translate-y-2px />
Shared configs can take user options.
</div>

<div v-click class="slidev-vclick-target" :class="$clicks === 2 ? 'text-green' : ''">
  <div i-ph-check-circle-duotone text-green inline-block translate-y-2px />
One single config, adapts to all projects.
</div>

<div v-click class="slidev-vclick-target" :class="$clicks === 3 ? 'text-green' : ''" >
  <div i-ph-check-circle-duotone text-green inline-block translate-y-2px />
  <span v-mark.green.delay400="5">
    Minimal configures as Prettier.
  </span>
</div>

<div v-click class="slidev-vclick-target">
  <div i-ph-check-circle-duotone text-green inline-block translate-y-2px />
  <span v-mark.green.delay400="5">
    Powerful and customizable as ESLint.
  </span>
</div>

</div>
</div>

</div>

<!--
Here we can do a quick comparison to show what I mean.

[click] In the new flat config, a shared config can be a factory function that takes user options, which we couldn't do in the legacy config. Imagine if I want my config to work in both TypeScript and non-TypeScript projects, Vue and non-Vue projects, I will need to do a monorepo to publish configs for different combinations. As you can see, it doesn't scale well, we are doubling the amount of combinations for each option.

[click] The flat config allows you to provide semantic options to toggle each feature dynamically. Making one single config able to adapt to different projects.

[click] Because of that, we could also have high-level abstraction to absorb the underlying complexity, and provide a minimal configuration interface like Prettier, where end users don't even need to worry about the underlying details, [click] but still have all the control to do so when they really want to.
-->

---

# Project-aware Configs

<div text-gray flex="~ items-center gap-1" v-click>
Example: <div i-logos-nuxt-icon inline-block /> Nuxt ESLint
</div>

<div grid="~ cols-2 gap-4" h="80%">
<div
  v-click="1"
  flex="~ col gap-2 items-center justify-center"
  transition duration-500
  :class="$clicks < 2 ? 'scale-130 translate-x-55' : ''"
>
  <img src="/nuxt-eslint.png" w-90 rounded-lg shadow border="~ main" />
  <a href="https://eslint.nuxt.com" text-sm>eslint.nuxt.com</a>
</div>

<div flex="~ col items-center justify-center" forward:delay-500 pb-10 v-click>

```ts
// Generated by Nuxt based on your project
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // your custom config goes here
)
```

</div>
</div>

<!--
Flat config also makes it possible for meta-frameworks to provide project-aware configs.

[click] For example, in Nuxt, we have file-based routing, auto-imported components, server API directories, etc. Files under different folders or different names might have different purposes and different constraints.

So in Nuxt we had the Nuxt ESLint module [click] that generates a sub ESLint config file based on the user's project setup. Where users can extend from and keep adding their custom rules.

This is just one direction of the possibilities with flat config we are currently exploring, but we believe there would be many more interesting approaches coming from the community.
-->

---
layout: fact
---

# ESLint is More than a Linter{.important-text-3em}
Mature and powerful AST Toolkit

<!--
Another topic I'd like to bring up today, is the fact that ESLint is much more than a Linter.

To me, I see ESLint as a mature and powerful AST Toolkit that has a large ecosystem on its back.
-->

---

# <span op50>ESLint can be a...</span> <b v-click font-800>Formatter</b>

<div grid="~ cols-2 gap-4" h="80%">
<div flex="~ col items-center justify-center">
  <img src="/eslint-stylistic.png" w-80 v-click />

  <div op75 text-lg v-click>
    Collection of stylistic ESLint rules.<br>Formatting and linting in one go.
  </div>

  <a href="https://eslint.style" text-sm v-click>eslint.style</a>
</div>

<div flex="~ col items-center justify-center" v-click>

<div flex="~ gap-2 items-center">
  Configs in <div i-logos-visual-studio-code inline-block /> VS Code
</div>

```json
{
  // Auto fix on save
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },

  // Silent the stylistic rules in you IDE,
  // but still auto fix them
  "eslint.rules.customizations": [
    { "rule": "@stylistic/*", "severity": "off" }
  ]
}
```

</div>
</div>

<!--
The is that ESLint can be a [click] Formatter.

This is certainly not new, as many projects have been using ESLint that way since the very beginning.

While this topic is actually a bit controversial, which you might hear people saying you should use a dedicated formatter like Prettier or dprint. To me, I see this all down to that those stylistic rules for ESLint take a lot of maintenance effort. Last year, ESLint and the TypeScript ESLint teams decided to deprecate those stylistic rules from the core. [click] And then, I initiated the ESLint Stylistic project, gathering all those stylistic rules for JS, TS, and JSX into this organization and making a community keep maintaining them. I keep using ESLint as formatter as I see it much more flexible and customizable than Prettier due to ESLint's nature.

[click] If you are using VS Code, you can see `editor.codeActionOnSave` to auto-fix eslint errors on save. And use `eslint.rules.customizations` to silent stylistic rules in your IDE so they work more like a formatter. For other code editors, I believe there are similar configs for doing the same.
-->

---

# <span op50>ESLint can be a...</span> <b v-click font-800>Codemod</b>

<div v-click>

<repo name="antfu/eslint-plugin-command" />

<video src="/eslint-plugin-command-half.mov" mt-4 w-130 saturate-110 rounded shadow border="~ main" controls />

</div>

<!--
One ESLint rule is essential a function that takes the code and AST, reporting errors with optional fix information.

This means that ESLint can also be a nice tool for [click] codemod.

For example, [click] I made `eslint-plugin-command` to do on-demand micro-codemod.

As you can see in the video, we could put a magic comment saying `to-function` right above an arrow function. Upon saving, the arrow function will be automatically converted into the function declaration, without you to manually move things around.

Similarly, you can also convert it back with `to-arrow`, sort an object or array with `keep-sorted`, make sure an array is unique with `keep-unique`... etc.

If you learn a little bit about AST, it shouldn't be hard to write your one-off codemod rules to migrate your codebase as well.
-->

---

# <span op50>ESLint can be a...</span> <b v-click font-800>Linter for other Languages</b>

<div scale-75 origin-left-top mb--28 mt--3 class="[&_td]:py1 [&_table]:w-130%" v-click="2">
<v-clicks>

| Language | Plugin | Maintainers |
| --- | --- | --- |
| <span i-logos-typescript-icon inline-block align-middle /> TypeScript | [`@typescript-eslint`](https://typescript-eslint.io) | {@typescript-eslint} {@bradzacher} {@JoshuaKGoldberg} |
| <span i-logos-vue inline-block align-middle /> Vue | [`eslint-plugin-vue`](https://github.com/vuejs/eslint-plugin-vue) | {@ota-meshi} {@vuejs} |
| <span i-logos-svelte-icon inline-block align-middle /> Svelte | [`eslint-plugin-svelte`](https://github.com/sveltejs/eslint-plugin-svelte) | {@ota-meshi} {@sveltejs} |
| <span i-logos-astro-icon invert hue-rotate-180 inline-block align-middle /> Astro | [`eslint-plugin-astro`](https://github.com/ota-meshi/eslint-plugin-astro) | {@ota-meshi} |
| <span i-logos-json invert inline-block align-middle /> JSON | [`eslint-plugin-jsonc`](https://github.com/ota-meshi/eslint-plugin-jsonc) | {@ota-meshi} |
| <span i-vscode-icons-file-type-light-yaml inline-block align-middle /> YAML | [`eslint-plugin-yml`](https://github.com/ota-meshi/eslint-plugin-yaml) | {@ota-meshi} |
| <span i-logos-toml invert hue-rotate-180 inline-block align-middle /> TOML | [`eslint-plugin-toml`](https://github.com/ota-meshi/eslint-plugin-toml) | {@ota-meshi} |
| <span i-logos-graphql inline-block align-middle /> GraphQL | [`graphql-eslint`](https://github.com/dimaMachina/graphql-eslint) | {@dimaMachina} |
| <span i-vscode-icons-file-type-html inline-block align-middle /> HTML | [`html-eslint`](https://github.com/yeonjuan/html-eslint) | {@yeonjuan} |
| <span i-vscode-icons-file-type-mdx inline-block align-middle /> MDX | [`eslint-mdx`](https://github.com/mdx-js/eslint-mdx) | {@JounQin} |
| <span i-logos-prettier inline-block align-middle /> Other formats* | [`eslint-plugin-format`](https://github.com/antfu/eslint-plugin-format) | {@antfu} |

</v-clicks>
</div>
<v-click>

[ESLint RFC #99 - ESLint Language Plugins](https://github.com/eslint/rfcs/blob/main/designs/2022-languages/README.md)

</v-click>

<!--
And finally, I'd like to mention that ESLint can also [click] lint for many other languages other than JavaScript.

[click] For example, we know we have `@typescript-eslint` to make ESLint understand TypeScript.

[click] We have `eslint-plugin-vue` for Vue Single file component, [click] `eslint-plugin-svelte` for Svelte component [click] and `eslint-plugin-astro` for Astro.

[click] We could also have `eslint-plugin-jsonc` to lint JSON files. Which could be very handle to be used to sort certain field in certain JSON files. For example, I use it to keep my dependencies list in my `package.json` always sorted.

[click] Similarly, we have the support for YAML and [click] TOML files. As you can see, many of those plugins are maintained by Ota Meshi - he is truly amazing!

[click] Then we have `graphql-eslint` for GraphQL by Dima, [click] `html-eslint` for HTML by Yeon Juan [click], and `eslint-mdx` by Joun Qin.

[click] I also made a `eslint-plugin-format` to use Prettier or dprint to format files like CSS that are not yet have an ESLint integration.

That's only a few I could list here. [click] You can also check the ESLint's RFC #99, where they are trying to make ESLint more language agnostic to support the linting for more languages easier.
-->

---
disabled: true
---

# <span op50>ESLint can be a...</span> <b v-click font-800>AST Toolkit</b>

---
layout: fact
---

# One for All{.important-text-3em}

One config for all projects<br>
One tool for _everything*_

<!--
To summarize today's topic, I'd like to say that ESLint makes it possible to be One for All in two aspects. That you can have one config for all projects, and then one tool for everything related to code checking and modifications.
-->

---
class: grid grid-cols-[1fr_1fr] p0 h-full
clicks: 1
glow: left
---

<div p4 flex="~ col gap-1 items-center justify-center" transition duration-500 :class="$clicks >= 1 ? '' : 'translate-x-65'">

<div mt-4 />

<Repo name="antfu/eslint-config" /> <span flex="~ inline gap-0.5 items-center" text-amber bg-amber:15 px1 rounded text-xs><div i-carbon-star-filled text="[0.8em]" /> 3.2k</span>

</div>

<div
  bg-hex-5552 p8 border="l main" transition duration-500
  :class="$clicks >= 1 ? '' : 'translate-x-100%'"
>
<div scale-70 origin-left-top w-160 mb--100 mr--40>

# @antfu/eslint-config

<div mb-10>

[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)

</div>

## Quick Start

<div mt-2 />

```bash
npx @antfu/eslint-config@latest
```

<div mt-6 />

## Features

<div mt-2 />

- Auto fix for formatting <sup>aimed to be used standalone **without** Prettier</sup>
- Reasonable defaults, best practices, only one line of config
- Work with TypeScript, JSX, Vue, JSON, YAML, Toml, Markdown, Out-of-box.
- Opinionated, but very customizable
- ESLint Flat config, compose easily!
- Optional React, Svelte, UnoCSS, Astro, Solid support
- Optional formatters support for formatting CSS, HTML, XML, etc.
- **Style principle**: Minimal for reading, stable for diff, consistent
  - Sorted imports, dangling commas
  - Single quotes, no semi
  - Using ESLint Stylistic
- Respects `.gitignore` by default
- Supports ESLint v9.0+ or v8.50.0+

</div>
</div>

<!--
If you want to learn more, you can check my personal ESLint config, where I used all the tricks I mentioned today.

I am honestly a bit flattered to see that even tho I didn't intend to have this config used by the others, it ends up being quite popular to have 3 thousand stars and over 30 thousand projects using it on GitHub.

[click] I wasn't trying to make you use my config, but hopefully, it can be a good reference for you to build your own shared config that is both powerful and flexible.
-->

---
layout: intro
class: text-center pb-5
glowX: 50
glowY: 120
---

# Thank you!

Slides on [antfu.me](https://antfu.me)

<!--
That's all for my talk today. You can find the slides on my website antfu.me. Thank you so much!
-->
