import React, { useEffect, useState } from 'react';
import Purify from 'dompurify';
import useEventListener from './hooks';
import Snippets from './snippets';
import './playground.css';
import './tailwind.generated.css';

import ace from 'ace-builds';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';
import { getAceAutocomplete } from './autocomplete';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'db-select': { label: string; name: string; children: React.ReactNode };
      'db-button': { variant: string; onClick: any; children: React.ReactNode };
    }
  }
}

const sanitizeConfig = {
  CUSTOM_ELEMENT_HANDLING: {
    tagNameCheck: /^db-/,
    attributeNameCheck: /\w/,
    allowCustomizedBuiltInElements: true
  }
};

const CreateMarkup = (input: string) => {
  return { __html: input };
};

const DangerComponent = ({ markup }: any) => {
  return (
    <div
      id="app"
      className="preview"
      dangerouslySetInnerHTML={CreateMarkup(markup)}
    />
  );
};

const SplitEditor = () => {
  const [markup, setMarkup] = useState<string>(
    localStorage.getItem('markup') ||
      'Select component from above or write your own markup containing web-components'
  );
  const [sanitizedMarkup, setSanitizedMarkup] = useState<string>('');

  const handleChangeSelect = (evt: any) => {
    const selection = evt.target?.value;

    // @ts-ignore
    const snippet = Snippets[selection];
    snippet && setMarkup(snippet);
    snippet && setSanitizedMarkup(snippet);
  };

  const snippetList = Object.keys(Snippets);

  useEventListener('dbChange', handleChangeSelect);

  useEffect(() => {
    const pureMarkup = Purify.sanitize(markup, sanitizeConfig);
    setSanitizedMarkup(pureMarkup);
    localStorage.setItem('markup', pureMarkup);
  }, [markup]);

  useEffect(() => {
    const langTools = ace.require('ace/ext/language_tools');
    langTools.addCompleter(getAceAutocomplete());
  }, []);

  return (
    <>
      <div className="grid-container">
        <div>
          <db-select label="Web-Component" name="select-name-semitransparent">
            <option selected>---</option>
            {snippetList.map((snipKey, idx) => (
              <option key={`option${idx}`}>{snipKey}</option>
            ))}
          </db-select>
        </div>
        <div>
          <db-button variant="secondary-outline" onClick={() => setMarkup('')}>
            Delete Local Storage
          </db-button>
        </div>
      </div>
      <div className="grid-split-container">
        <div className="grid-split-left">
          <AceEditor
            mode="html"
            theme="monokai"
            onChange={(value) => setMarkup(value)}
            name="ace-editor"
            value={markup || ''}
            fontSize={16}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            height={'100%'}
            width={'100%'}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              showLineNumbers: true
            }}
          />
        </div>
        <div className="grid-split-right">
          <DangerComponent markup={sanitizedMarkup} />
        </div>
      </div>
    </>
  );
};

export default SplitEditor;
