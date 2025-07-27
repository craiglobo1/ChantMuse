  import { useRef, useEffect } from 'react'
  import Editor, { loader } from '@monaco-editor/react'
  import { gabcLanguageDefinition } from './gabcLang'


interface Props {
  value: string
  onChange: (val: string) => void
}

  export default function GabcEditor({ value, onChange }: Props) {
    const editorContent = useRef(value)

    const handleEditorChange = (val = '') => {
      editorContent.current = val
      onChange(val)
    }

    // const exportToGabc = () => {
    //   const blob = new Blob([editorContent.current], { type: 'text/plain;charset=utf-8' })
    //   const link = document.createElement('a')
    //   link.href = URL.createObjectURL(blob)
    //   link.download = 'chantmuse_export.gabc'
    //   link.click()
    // }

    useEffect(() => {
      loader.init().then(monaco => {
        console.log('Monaco initialized', monaco.languages.getLanguages().map(l => l.id))

        if (!monaco.languages.getLanguages().some(lang => lang.id === 'gabc')) {
          monaco.languages.register({ id: 'gabc' })
          monaco.languages.setMonarchTokensProvider('gabc', gabcLanguageDefinition)
          console.log('Registered gabc language')
        }
        // monaco.editor.defineTheme('solarized-light',)
      })
    }, [])

    return (
  <div className="pt-40 min-h-screen bg-gray-100 flex justify-center">
    <div className="flex flex-col  items-center">
      <div className="w-[800px] rounded-lg">
        <Editor
          height="400px"
          defaultLanguage="gabc"
          value={value}
          onChange={handleEditorChange}
          theme="vs-light"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            wordWrap: 'on',
            // automaticLayout: true,
          }}
        />
      </div>
    </div>
  </div>
)

  }