  import { useRef, useEffect } from 'react'
  import Editor, { loader } from '@monaco-editor/react'
  import { gabcLanguageDefinition } from './gabcLang'

  const DEFAULT_GABC = `name: incipit;
gabc-copyright: copyright on this gabc file;
score-copyright: copyright on the source score;
office-part: introitus/...;
occasion: in church calendar;
meter: for metrical hymns;
commentary: source of words;
arranger: name of arranger;
author: if known;
date: xi c;
manuscript: ms name;
manuscript-reference: e.g. CAO reference;
manuscript-storage-place: library/monastery;
book: from which score taken;
language: of the lyrics;
transcriber: writer of gabc;
transcription-date: 2009;
mode: 6;
user-notes: whatever other comments you wish to make;
annotation: IN.;
annotation: 6; 
%% 
(c4) Glo(hi)ri(h) a(g) in(f) ex(g)cel(h)sis(h) De(h)o(h.) (::)`

  export default function GabcEditor() {
    const editorContent = useRef(DEFAULT_GABC)

    const handleEditorChange = (value = '') => {
      editorContent.current = value
    }

    const exportToGabc = () => {
      const blob = new Blob([editorContent.current], { type: 'text/plain;charset=utf-8' })
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = 'chantmuse_export.gabc'
      link.click()
    }

    useEffect(() => {
      loader.init().then(monaco => {
        console.log('Monaco initialized', monaco.languages.getLanguages().map(l => l.id))

        if (!monaco.languages.getLanguages().some(lang => lang.id === 'gabc')) {
          monaco.languages.register({ id: 'gabc' })
          monaco.languages.setMonarchTokensProvider('gabc', gabcLanguageDefinition)
          console.log('Registered gabc language')
        }
      })
    }, [])

    return (
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-4">
        <Editor
          height="400px"
          width="800px"
          defaultLanguage="gabc"
          defaultValue={DEFAULT_GABC}
          onChange={handleEditorChange}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            wordWrap: 'on',
          }}
        />
        <button
          onClick={exportToGabc}
          className="self-start bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Export as .gabc
        </button>
      </div>
    )
  }