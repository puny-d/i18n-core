import React, {
  Break,
  H1,
  H2,
  CodeBlock,
  BlockQuote,
  H3,
  Link,
  Image,
  H4,
  render,
  TableOfContents,
} from 'jsx-to-md'
import { imageObj } from '../constants'
import { initI18n } from '../utils'

function Install() {
  return (
    <>
      <H2>{`1. ${tr('安装')}`}</H2>
      <CodeBlock
        langType="bash"
        code={`npm i i18n-pro
# ${tr('或者')}
yarn add i18n-pro
# ${tr('或者')}
pnpm i i18n-pro`}
      />
    </>
  )
}

function LinkApi() {
  return (
    <>
      <H2>{`2. ${tr('接入函数API')}`}</H2>
      <H3>{tr('初始化')}</H3>
      <CodeBlock
        code={`
// i18n.js
import { initI18n } from 'i18n-pro'

const {
  t,
  setI18n,
  withI18n,
} = initI18n({
  // ${tr('命名空间属性是必须配置的')}
  namespace: 'testI18N',
})

// ${tr(
          '这里可以挂载 API 到全局对象上，好处出可以避免不同模块都需要通过 import 来引入 API',
        )}
// ${tr(
          '注意：如果当前你是在某个独立的第三方库或者组件中使用 i18n-pro，不推荐这样做，可能会造成你的用户API命名冲突',
        )}
// ${tr(
          '浏览器环境，注意：如果是{0}环境需要将{1}替换成{2}',
          ' Node ',
          ' window ',
          ' global ',
        )}
window.t = t
window.setI18n = setI18n
window.withI18n = withI18n


// ${tr('这里导出API是便于其他模块能使用对应API')}
return {
  t,
  setI18n,
  withI18n,
}
`}
      />
      <H3>{tr('项目入口文件引入 i18n.js')}</H3>
      <CodeBlock
        code={`
 // App.js
 import './i18n.js'

 // ${tr('后续是应用的执行（渲染）逻辑')}
`}
      />
      <H3>{tr('用{0}包裹翻译文本', ' `t` ')}</H3>
      {tr('这一步主要是用{0}函数包裹需要被翻译的文本', ' `t` ')}
      <CodeBlock
        langType="js"
        code={`
/** 同目录下的 test.js */
// 如果是挂载全局对象，可以省略下行代码
import { t } from './i18n.js'

// ${tr('被翻译的文本')}
const text = t('${tr('你好世界')}')`}
      />
    </>
  )
}

function InitConfig() {
  return (
    <>
      <Break />
      <H2>{`3. ${tr('初始化命令行配置文件')}`}</H2>
      {tr('在命令行终端输入如下命令，')}
      <Link href={`#${tr('命令列表')}`}>{tr('更多命令')}</Link>
      <CodeBlock langType="bash" code={`npx i18n init `} />
      {tr('然后会在当前目录下生成一个{0}的文件', ' `i18nrc.js` ')}
    </>
  )
}

function ModifyConfig() {
  return (
    <>
      <Break />
      <H2>{`4. ${tr('调整{0}配置', ' `i18nrc.js` ')}`}</H2>
      {tr(
        '根据需求自行调整配置文件中的配置项，配置项的{0}',
        render(<Link href={`#${tr('命令行')}`}>{tr('说明')}</Link>),
      )}
    </>
  )
}

function ExecuteTranslateCommand() {
  return (
    <>
      <Break />
      <H2>{`5. ${tr('执行翻译命令')}`}</H2>
      <CodeBlock langType="bash" code={`npx i18n t `} />
      {tr('命令执行成功的话，会在指定的目录下生成语言包文件')}
    </>
  )
}

function ImportLangs() {
  return (
    <>
      <Break />
      <H2>{`6. ${tr('引入语言包文件')}`}</H2>
      {tr('语言包已经有了，就需要应用到项目中了')}
      <Break />
      <Break />
      {tr(
        '如果生成的语言包是每个语言单独文件形式{0}，操作如下：',
        "（`output.langType == 'multiple'`）",
      )}
      <CodeBlock
        code={`import en from './i18n/en.json'
import jp from './i18n/jp.json'
// ... ${tr('其他更多语言')}

setI18n({
  locale: 'en',
  langs:{
    en,
    jp,
    // ... ${tr('其他更多语言')}
  },
})
// ${tr('后续才是应用的页面渲染逻辑')}`}
      />
      {tr(
        '如果生成的语言包是聚合的形式{0}，操作如下：',
        "（`output.langType == 'single'`）",
      )}
      <CodeBlock
        code={`import langs from './i18n/langs.json'

setI18n({
  locale: 'en',
  langs,
})
// ${tr('后续才是应用的页面渲染逻辑')}`}
      />
      {tr(
        '至此，项目已经完全接入了国际化，上面{0}指定为目标语言中任意一个，在页面上就能看到翻译好的内容了。后续如果项目中有新增的翻译文本（需要用{1}函数包裹哟），就仅仅需要再次执行翻译命令{2}生成最新的语言包就可以了',
        ' `locale` ',
        ' `t` ',
        ' `npx i18n t` ',
      )}
    </>
  )
}

function SwitchLang() {
  return (
    <>
      <Break />
      <H2>{`7. ${tr('切换语言')}`}</H2>
      {tr(
        '正常情况下，执行如下方法就行，但是页面上已渲染的内容不会再更新，只有等对应文本的{0}函数重新执行，才有可能显示新语言对应的文本',
        ' `t` ',
      )}
      <CodeBlock
        code={`setI18n({
  locale: 'en', // ${tr('设置指定语言')}
})`}
      />
      {tr(
        '尽管有的 UI库（例如{0}）可以利用它的{1}特性做到静态更新页面内容，但是对于不在组件内部的翻译文本内容，要做到静态更新也会有额外的处理成本，例如下面的这种场景，组件内使用了外部包含翻译内容的属性',
        ' `React`',
        ' `context` ',
      )}
      <CodeBlock
        code={`// ${tr('这个属性要做到静态更新，需要额外处理')}
// ${tr('这里只是说明存在这种情况，不给出明确解决方案')}
const FOO_TEXT = t('${tr('静态文本属性')}')

function App(){
  return (
    <>
      {FOO_TEXT}
    </>
  )
}`}
      />
      {tr(
        '因此对于大部分的场景，在页面上切换语言时，建议{0}整个页面（如果还有好的方案请告知🤔）',
        `**${tr('直接刷新')}**`,
      )}
    </>
  )
}

function Demo() {
  return (
    <>
      <Break />
      <H2>8. DEMO</H2>
      {tr(
        '哈哈哈，除了上面的{0}，当前库{1}的控制台输出也接入了国际化',
        ' [Live Demo](#live-demo)',
        ` \`${tr('命令行工具')}\` `,
      )}
      <Break />
      <Break />
      {tr('通过命令{0}就能看英文版了', ' `npx i18n h -L en` ')}
      <Break />
      <Image {...imageObj['demo']} />
      <Break />
      {tr('感兴趣的同学，可以看看源码')}
    </>
  )
}

export default function Usage(props) {
  initI18n(props)

  return (
    <>
      <H1 skip>{tr('快速上手')}</H1>
      <TableOfContents text={tr('目录')} open={false} />
      <Install />
      <LinkApi />
      <InitConfig />
      <ModifyConfig />
      <ExecuteTranslateCommand />
      <ImportLangs />
      <SwitchLang />
      <Demo />
    </>
  )
}
