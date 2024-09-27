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
layout: fact
---

<div important text-3em>
AST可以用来<span v-mark.green>干什么呢?</span>
</div>

---

# <span op50>AST可以用来..</span> <b v-click font-800>代码格式化</b>

<div grid="~ cols-2 gap-4" h="80%">
<div flex="~ col items-center justify-center">
  <div i-logos:prettier text-25 />

  <div op75 text-lg v-click>
    Prettier
  </div>

  <a href="https://prettier.io/docs/en/options.html" text-sm v-click>prettier options</a>
</div>

<div flex="~ col items-center justify-center" v-click>

<div flex="~ gap-2 items-center">
  Config in <div i-carbon:document-configuration inline-block /> Project
</div>

```js
// prettier.config.js or .prettierrc.js
module.exports = {
  useTabs: false,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  jsxBracketSameLine: true,
  printWidth: 120,
};
```

</div>
</div>

<!--
[click] 代码格式化

[click] AST可以用于代码格式化，相信大家肯定都用过 Prettier，我们可以定义一组代码的风格规则，例如每行代码后面要不要跟分号，要不要用单引号，或者双引号等，他在拿到我们的代码字符串之后，会将其转为AST，然后在按照我们定义的风格去对AST做调整，最后输出格式化之后的代码给我们。
-->

---


# <span op50>AST可以用来..</span> <b v-click font-800>代码语法检查</b>

<div grid="~ cols-2 gap-4" h-full>
<div flex="~ col items-center justify-center">
  <div i-logos:eslint text-25 />

  <div op75 text-lg v-click>
    ESLint
  </div>

  <a href="https://eslint.org/docs/latest/use/configure" text-sm v-click>eslint options</a>
</div>

<div flex="~ col items-center justify-center" v-click>

<div flex="~ gap-2 items-center">
  Config in <div i-carbon:document-configuration inline-block /> Project
</div>

```js
// .eslintrc.js
module.exports = {
  env: { browser: true, es2020: true },
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['@typescript-eslint', 'react', 'react-refresh'],
  rules: {
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-angle-bracket-type-assertion': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'no-restricted-globals': 0,
    'import/no-anonymous-default-export': 0,
    'jsx-a11y/alt-text': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    'no-useless-escape': 0
  },
};
```

</div>
</div>

<!--
[click] 代码语法检查

[click]
1. 代码解析：ESLint 首先使用解析器（如 espree）将源码解析成抽象语法树（AST），这是一种描述代码结构的树形表示。
2. 规则加载：ESLint 依据配置文件加载一系列规则。这些规则通过访问 AST 的特定节点来检测代码是否符合预期的规范。
3. AST 遍历：ESLint 通过遍历整棵 AST，在访问每个节点时，根据规则定义的节点访问器进行检查。例如，可以检测变量声明、函数调用等不同类型的节点。
4. 问题报告：如果某个节点不符合规则的预期，ESLint 就会通过 context.report 方法记录一个错误或警告信息。
5. 结果输出：ESLint 最终收集所有报告的问题，根据用户配置的格式输出检查结果，方便开发者查看和修正代码。

-->
---

# <span op50>AST还可以用来...</span> <b v-click font-800>做更多事情</b>

<div flex="~ col gap-6" mt20>
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

<div flex="~ gap-2 items-center">
  <div flex="~ gap-2 items-center" v-click>
    <div i-fluent:more-circle-24-regular text-2xl />
    <span font-bold>Much More...</span>
  </div>
</div>

</div>

<!--
[click][click] 代码压缩

[click] 代码压缩是减少代码体积以提高加载速度的一种重要技术。这些工具，例如 UglifyJS 和 Terser，主要通过以下几个步骤来实现代码压缩：
1. 代码解析：首先，压缩工具将源代码解析为抽象语法树（AST），这种树形结构能够清晰地表示代码的层次和表达。
2. 代码分析与优化：
删除注释和空白：工具会移除所有不影响代码功能的注释和空白字符。
简化表达式：将复杂的表达式转换为等价的更简单或更短的形式。例如，将 x = x + 1 转换为 x++。
函数内联：将频繁调用的小函数直接嵌入到调用位置，以减少函数调用的开销。
变量与函数重命名：使用短名称替换长名称，以减少标识符的字符数量。
1. AST 替换和重构：基于以上的优化和分析，工具在 AST 级别进行一系列替换和重构，例如：
常量折叠：将可以在编译时确定的常量表达式计算得出的值替换掉。
死代码消除：移除永远不会执行的代码块，例如条件判断中永远为 false 的分支。
1. 生成压缩后的代码：最后，工具将优化后的 AST 重新生成源代码。生成的代码更为简洁，去掉了所有多余的部分，从而显著减少了代码体积。

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
layout: fact
---

# 那么，AST怎么用呢？{.important-text-3em}

<!--
To summarize today's topic, I'd like to say that ESLint makes it possible to be One for All in two aspects. That you can have one config for all projects, and then one tool for everything related to code checking and modifications.
-->

---


## 操作 <sup text-purple bg-purple:15 px1.5 rounded text-sm>AST</sup>

<div flex="~ col gap-2" mt2>

<img src="/babel1.png" w-180 shadow b-rounded-sm />

<div mt5>
<v-clicks>

- 解析：使用解析器将源代码解析成 AST <sup text-purple>@babel/parser</sup>
- 遍历：遍历 AST 树以查找或修改节点 <sup text-blue>@babel/traverse</sup>
- 分析和修改：根据你的需求，执行分析、修改或其他操作 <sup text-green>@babel/type</sup>
- 生成：将修改后的 AST 节点重新生成为代码  <sup text-orange>@babel/generator</sup>

</v-clicks>
</div>


</div>

<!--
[click] 使用解析器将源代码解析成 AST，即生成一个 JSON 对象。在 JavaScript 中，@babel/parser 是一个常用的解析器。

[click] 遍历 AST 树以查找或修改节点。你可以使用 AST 遍历器，如@babel/traverse，来帮助遍历 AST 树。

[click]  分析和修改：根据你的需求，执行分析、修改或其他操作。你可以识别特定类型的节点，读取属性，执行条件检查，并修改节点，如@babel/types。

[click] 生成：将修改后的 AST 节点重新生成为代码。你可以使用代码生成器，如@babel/generator，将 AST 节点转换回代码。
-->


---
layout: center
class: text-center
---

<h1 important-text-5xl text-orange v-mark.underline.orange>举个例子</h1>

---
class: grid grid-cols-[1fr_1fr] p0 h-full
clicks: 1
glow: left
---

<div p4 flex="~ col gap-1 items-center justify-center" transition duration-500 :class="$clicks >= 1 ? '' : 'translate-x-65'">

<div mt-4 />

<Repo name="umijs/babel-import-plugin" /> <span flex="~ inline gap-0.5 items-center" text-amber bg-amber:15 px1 rounded text-xs><div i-carbon-star-filled text="[0.8em]" /> 3.2k</span>

</div>

<div
  bg-hex-5552 p8 border="l main" transition duration-500
  :class="$clicks >= 1 ? '' : 'translate-x-100%'"
>
<div scale-90 origin-left-top w-160 mb--100 mr--40>

# Antd按需导入

<div mt-2 />

```js
// .babelrc or babel-loader option
{
  "plugins": [
    ["import", {
      "libraryName": "antd",
      "libraryDirectory": "es",
      "style": "css" // `style: true` 会加载 less 文件
    }]
  ]
}
```

<div mt-6 />

## 使用

<div mt-2 />

```js
// babel-plugin-import 会帮你自动加载 JS 和 CSS
import { DatePicker } from 'antd';

👇

import DatePicker from 'antd/es/date-picker'; // 加载 JS
import 'antd/es/date-picker/style/css'; // 加载 CSS
```
</div>
</div>

<!--
使用 React 技术栈的同学，都有接触过 antd、material-ui 等 UI 组件库。

早期（没有 tree shaking 的时代）为了实现按需引入功能，我们会通过 babel-plugin-import 来优化我们的项目打包体积，做到只打包我们项目中所用到的模块。

使用 antd 时, 需要加载组件的样式 antd/dist/antd.css, 但是我们大部分时候不需要使用到antd所有的组件, 更不需要载入所有组件的样式。[click] 


当然现在新版的 antd 和 material-ui 中，默认已支持基于 ES modules 的 tree shaking 功能；而打包工具如：Webpack、Rollup 等在打包层面也支持了 tree shaking，使得我们不需要额外配置 babel-plugin-import 也能实现按需引入，这得益于 tree shaking。


-->

---

<div grid="~ cols-[1fr_max-content_1fr] gap-4" mt--8>
<div v-click>

```ts {*|*|20-23|24-27|8-11|*}{at:1}
class Plugin {
  constructor(index = 0) {
    // 初始化插件的状态键，用于在 Babel 的 state 对象中存储插件状态
  }
  getPluginState(state) {
    // 获取或初始化插件的状态对象
  }
  importMethod() {
    // 生成导入代码
    // 例如，根据方法名称生成按需加载的 import 语句
  }
  ProgramEnter(path, state) {
    // 在遍历 AST 开始时调用
    // 初始化插件状态对象，包括指定的导入、库对象、选择的方法
  }
  ProgramExit(path, state) {
    // 在遍历 AST 结束时调用
    // 移除标记的旧 import 语句
  }
  ImportDeclaration(path, state) {
    // 处理 import { xxx } from 'module' 的逻辑
    // 收集依赖的模块
  }
  CallExpression(path, state) {
    // 处理调用表达式的逻辑
    // 检测和处理导入模块是否被实际使用
  }
}
```

</div>
<div w-100 mt10>



<v-clicks>

- 收集 import 语句 { xxx } 中的模块名称
- 分析模块导入后，是否被 call 使用到
- 如果有被使用到，改写 import 语句，使得 path 具体到模块的所在目录
</v-clicks>

</div>
</div>

<!--
1、首先是实例的属性初始化，将插件的配置信息 options 绑定到插件实例上；


2、接着在 visitor.enter 阶段调用 ProgramEnter 方法初始化 Plugin 实例的 state 对象；

pluginState.specified：import 包下面的模块名，如：Button；
pluginState.selectedMethods：有效的 import 包下面的模块名，也就是导入了，且被使用到的模块；
pluginState.pathsToRemove：用来存储 import xxx from 'antd' 源代码，用于替换删除旧的 import；

3、收集导入的模块 分析每一条 import 语句，如果导入的包名和配置的 plugin.libraryName 一致，则收集导入的模块名称。

4、查找模块是否被使用 调用 CallExpression 分析被使用到的模块名，调用 importMethod 方法改写 import 路径.


5、改写模块导入路径（实现按需引入） importMethod 是 babel-plugin-import 的核心方法，import 模块的路径改写在这里处理。

-->

---
layout: center
class: text-center
---

<h1 important-text-5xl text-purple v-mark.underline.purple>自己试一试吧</h1>

---
class: grid grid-cols-[1fr_1fr] p0 h-full
clicks: 1
glow: left
---

<div p4 flex="~ col gap-1 items-center justify-center" transition duration-500 :class="$clicks >= 1 ? '' : 'translate-x-65'">

<div mt-4 />

<GitlabRepo name="@pietra/auto-import" repoLink="https://gitlab.com/pietrastudio/web/npm/-/tree/main/packages/pietra-auto-import?ref_type=heads" /> <span flex="~ inline gap-0.5 items-center" text-amber bg-amber:15 px1 rounded text-md></span>

</div>

<div
  bg-hex-5552 p8 border="l main" transition duration-500
  :class="$clicks >= 1 ? '' : 'translate-x-100%'"
>
<div scale-90 origin-left-top w-160 mb--100 mr--40>

# 导入

<div mt-2 />

```bash
yarn add @pietra/auto-import
```


## 配置

<div mt-2 />

```js
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ...
    react(),
    pietraAutoImport({
      include: [/\.[tj]sx?$/],
      dts: './pietra-auto-imports.d.ts',
      eslintrc: './.eslintrc-pietra-auto-import.json',
      presets: {
        react: true,
        lodash: true,
        classnames: true,
        reactRouter: false,
        reactRouterDom: false,
        pietraCompoent: false,
        pietraIcons: true,
        antd: { prefix: 'Antd' },
      },
    }),
  ],
  ...
});
```
</div>
</div>

---

## Before and After

<div grid="~ cols-[1fr_max-content_1fr] gap-4">
<div scale-85 ml--20 mt--10 v-click>

```tsx
const AST = () => {
  const [num, setNum] = useState(0);
  const testLodash = useMemo(() => isNumber(num), [num]);

  useEffect(() => {
    console.log('AST');
  }, []);

  return (
    <div className={cN('ast-container', { other: testLodash })}>
      <AntdButton type='primary' onClick={() => setNum((v) => v + 1)}>
        Button
      </AntdButton>
      <AntdEmpty />
      <div>num: {num}</div>
      <div>{testLodash ? 'yes' : 'no'}</div>
      <div className='icons'>
        <AccountingBillStackFilled />
        <AccountingCoinsStackFilled />
        <CashPaymentBag1Filled />
        <DiscountFilled />
      </div>
    </div>
  );
};

export default AST;
```

</div>
<span i-carbon:arrow-right ma ml--10  v-click />
<div scale-85 mt--10  ml--20  v-click>

```tsx {*|1-4|*}{at:4}
import { isNumber } from "lodash"
import { useEffect,useState,useMemo } from "react";
import { Button as AntdButton, Empty as AntdEmpty } from "antd";
import { AccountingBillStackFilled,AccountingCoinsStackFilled,CashPaymentBag1Filled } from "@pietra/icons";

const AST = () => {
  const [num, setNum] = useState(0);
  const testLodash = useMemo(() => isNumber(num), [num]);

  useEffect(() => {
    console.log('AST');
  }, []);

  return (
    <div className={cN('ast-container', { other: testLodash })}>
      <AntdButton type='primary' onClick={() => setNum((v) => v + 1)}>
        Button
      </AntdButton>
      <AntdEmpty />
      <div>num: {num}</div>
      <div>{testLodash ? 'yes' : 'no'}</div>
      <div className='icons'>
        <AccountingBillStackFilled />
        <AccountingCoinsStackFilled />
        <CashPaymentBag1Filled />
      </div>
    </div>
  );
};

export default AST;
```

</div>
</div>

---
glow: left
---

<div w="40%">

## Pietra Icons <sup text-purple bg-purple:15 px1.5 rounded text-sm>@youhua</sup>

<div mt-4 />

<v-clicks>

- 访问 https://creators-staging.pietrastudio.com/playground
- 点击你想使用的icon
- 到项目中粘贴
- That's all, So easy!!!

</v-clicks>
<div mt-4 />

<div v-click>

```tsx
<div className='icons'>
  <AccountingBillStackFilled />
  <AccountingCoinsStackFilled />
  <CashPaymentBag1Filled />
</div>
```
</div>

</div>

<iframe
  src="https://creators-staging.pietrastudio.com/playground"
  onload="this.style.visibility = 'visible';"
  scale-60 origin-top-right absolute right-0 top-0 bottom-0 w="95%" h="167%"
  border="l main"
  style="filter:contrast(1.15);visibility:hidden;"
/>

<div v-show="false">
</div>


---
class: grid grid-cols-[1fr_1fr] p0 h-full
clicks: 1
glow: left
---

<div p4 flex="~ col gap-1 items-center justify-center" transition duration-500 :class="$clicks >= 1 ? '' : 'translate-x-65'">

<div mt-4 />

<GitlabRepo name="@pietra-auto-tracker" repoLink="https://gitlab.com/pietrastudio/web/npm/-/tree/main/packages/pietra-auto-tracker?ref_type=heads" /> <span flex="~ inline gap-0.5 items-center" text-amber bg-amber:15 px1 rounded text-md></span>

</div>

<div
  bg-hex-5552 p8 border="l main" transition duration-500
  :class="$clicks >= 1 ? '' : 'translate-x-100%'"
>
<div origin-left-top w-160 mb--100 mr--40>

# 导入

<div mt-2 />

```bash
yarn add @pietra-auto-tracker
```


## 配置

<div mt-2 />

```js
import { pietraAutoTracker } from '@pietra/auto-tracker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ...
    react(),
    pietraAutoTracker(),
  ],
  ...
});
```
</div>
</div>

---

## Before and After

<div grid="~ cols-[1fr_max-content_1fr] gap-4">
<div scale-85 ml--20 v-click>

```tsx
<AntdButton
  data-log-common-type='AST_BUTTON'
  data-log-common-content='not have onClick'
  data-log-field1='filed1'
  data-log-field2='filed2'
>
  没有 onClick
</AntdButton>

<AntdButton
  onClick={() => {
    console.log('onClick');
  }}
  data-log-common-type='AST_BUTTON'
  data-log-common-content='have onClick'
  data-log-field1='filed1'
  data-log-field2='filed2'
>
  有 onClick
</AntdButton>
```

</div>
<span i-carbon:arrow-right ma ml--5  v-click />
<div scale-85  ml--5 mt--10 v-click>

```tsx {*|2-11|15-26|*}{at:4}
<AntdButton
  onClick={() => {
    const reportParams = {
      commonType: 'AST_BUTTON',
      commonContent: 'not have onClick',
      field1: 'filed1',
      field2: 'filed2',
    };
    sendReport(reportParams);
  }}
>
  没有 onClick
</AntdButton>

<AntdButton
  onClick={() => {
    console.log('onClick');
        const reportParams = {
      commonType: 'AST_BUTTON',
      commonContent: 'not have onClick',
      field1: 'filed1',
      field2: 'filed2',
    };
    sendReport(reportParams);
  }}
>
  有 onClick
</AntdButton>
```

</div>
</div>


---

# 伪代码

<div scale-60 mt--40 shadow>

```ts

export default function addTrackerTocode(code: string) {
  let reportCallFnImported = false;
  const ast = parse(code, { sourceType: "module", plugins: ["jsx", "typescript"] });

  traverse(ast, {
    ImportDeclaration(path) {
      // 检查是否已导入报告函数
    },
    JSXOpeningElement(path) {
      if (找不到 LOG_PRARM_KEYS.commonType 属性) return;

      const parent = 查找父级 JSX 元素;
      if (parent) {
        const onClickNode = 查找 onClick 属性;
        const reportParams = 获得报告参数;
        
        const 生成变量声明 = 创建事件类型和报告参数变量声明;
        const sendMoreCommonEventCall = 创建事件报告调用;

        if (!onClickNode) {
          // 创建新 onClick 处理函数
          const newFunction = 创建新函数(变量声明, sendMoreCommonEventCall);
          parent.node.openingElement.attributes.push(添加新的 onClick 属性);
        } else {
          // 修改现有的 onClick 处理逻辑
          修改现有的 onClick 处理逻辑(变量声明, sendMoreCommonEventCall);
        }
      }
    }
  });

  if (!reportCallFnImported) {
    // 添加导入声明
    ast.program.body.unshift(创建导入声明);
  }

  // 生成并返回修改后的代码
  return generate(ast).code;
}
```

</div>

---
layout: center
class: text-center
---

<h1 important-text-4xl >学会AST，<span text-purple v-mark.underline.purple v-click>真的可以为所欲为！</span></h1>

---
layout: center
class: text-center pb-5
glowX: 50
glowY: 120
---

# Thank you
