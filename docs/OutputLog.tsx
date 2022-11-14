import React, { H1, Table, Column } from 'jsx-to-md'

function getColumns() {
  return [
    {
      title: tr('文件名'),
      fieldName: 'filename',
    },
    {
      title: tr('说明'),
      fieldName: 'description',
    },
  ]
}

type RecordItem = Record<
  'filename' | 'description',
  string | JSX.Element | number
>

export default function OutputLog() {
  const data: RecordItem[] = [
    {
      filename: 'filepaths.json',
      description: tr('匹配到的文件路径列表'),
    },
    {
      filename: 'texts-error.json',
      description: (
        <>
          {tr('提取到所有不符合要求的翻译文本')}
          <br />
          <br />
          📢📢📢：{tr('不包含使用变量、js语句等场景')}
        </>
      ),
    },
    {
      filename: 'texts.json',
      description: tr('提取到所有符合要求的翻译文本'),
    },
    {
      filename: 'translate-fail.json',
      description: tr('翻译失败的文本列表'),
    },
    {
      filename: 'translate-error.json',
      description: (
        <>
          {tr('翻译有误的文本列表')}
          <br />
          <br />
          {tr('当前可以识别出动态参数翻译后丢失的异常')}
        </>
      ),
    },
    {
      filename: 'translate-success.json',
      description: (
        <>
          {tr('翻译成功的文本列表')}
          <br />
          <br />
          📢📢📢：
          {tr(
            '增量翻译模式下，只会包含本次翻译的文本，原来已翻译过的文本不会包含在其中',
          )}
        </>
      ),
    },
    {
      filename: 'langCode.json',
      description: (
        <>
          {tr('某个目标语言独立的语言包')}
          <br />
          <br />
          {tr(
            '当{0}时，会在日志目录下生成目标语言单个的语言包',
            " `output.langType == 'single'` ",
          )}
        </>
      ),
    },
    {
      filename: 'langs.json',
      description: (
        <>
          {tr('聚合的语言包')}
          <br />
          <br />
          {tr(
            '当{0}时，会在日志目录下生成聚合的语言包',
            " `output.langType == 'multiple'` ",
          )}
        </>
      ),
    },
  ]

  return (
    <>
      <H1>{tr('输出日志')}</H1>
      {tr(
        '为了方便追踪与定位问题，整个翻译过程中会有一些必要的日志输出，翻译命令执行完全后会在{0}目录下生成一个{1}的日志目录，所有的日志是以独立文件的形式呈现，包含日志类型如下',
        ' `output.path` ',
        ' `.log` ',
      )}
      ：
      <Table columns={getColumns()} data={data} />
    </>
  )
}
