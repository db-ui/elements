import { useState } from 'react';
import {
  DbButton,
  DbCheckbox,
  DbInput,
  DbRadio,
  DbSelect,
  DbTextarea,
  DbToggle
} from '@db-ui/react-elements';

import './form.css';

function Form() {
  const [input, setInput] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [radio, setRadio] = useState('');
  const [select, setSelect] = useState('');
  const [textarea, setTextarea] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className="form-container">
        <fieldset>
          <form>
            <p>DbInput:</p>
            <DbInput
              label="Infield"
              name="input-name"
              onInput={(event) => setInput(event.target.value)}
              className="fullWidth"
            />
            <p>DbCheckbox:</p>
            <DbCheckbox
              label="Checkbox"
              name="checkbox-name"
              onInput={(event) => setCheckbox(event.target.checked)}
            />
            <p>DbRadio:</p>
            <ol>
              <li>
                <DbRadio
                  label="Radio 01"
                  name="radio-name"
                  value="Radio 01"
                  onInput={(event) => setRadio(event.target.value)}
                />
              </li>
              <li>
                <DbRadio
                  label="Radio 02"
                  name="radio-name"
                  value="Radio 02"
                  onInput={(event) => setRadio(event.target.value)}
                />
              </li>
              <li>
                <DbRadio
                  label="Radio 03"
                  name="radio-name"
                  value="Radio 03"
                  onInput={(event) => setRadio(event.target.value)}
                />
              </li>
            </ol>
            <p>DbSelect:</p>
            <DbSelect
              label="Selectbox"
              name="select-name"
              onInput={(event) => setSelect(event.target.value)}
            >
              <option selected>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </DbSelect>
            <p>DbTextarea:</p>
            <DbTextarea
              label="Textarea"
              name="textarea-name"
              onInput={(event) => {
                setTextarea(event.target.value);
              }}
            />
            <p>DbToggle:</p>
            <DbToggle
              onInput={() => {
                setToggle(!toggle);
              }}
            />
          </form>
        </fieldset>
        <fieldset>
          <p>DbButton:</p>
          <DbButton
            variant="primary"
            onClick={(_) => {
              return alert(
                JSON.stringify({
                  input: input,
                  checkbox: checkbox,
                  radio: radio,
                  select: select,
                  textarea: textarea,
                  toggle: toggle
                })
              );
            }}
          >
            Hi from Showcase!
          </DbButton>
          <h2>Output</h2>
          <dl>
            <dt>inputs value</dt>
            <dd>{input ? input : 'No Input set'}</dd>
            <dt>checkbox</dt>
            <dd>{checkbox ? 'yes' : 'no'}</dd>
            <dt>radio</dt>
            <dd>{radio ? radio : 'No radio selected'}</dd>
            <dt>select</dt>
            <dd>{select ? select : 'Not Selected'}</dd>
            <dt>textarea</dt>
            <dd>{textarea ? textarea : 'No Text set'}</dd>
            <dt>toggle</dt>
            <dd>{toggle.toString()}</dd>
          </dl>
        </fieldset>
      </div>
    </div>
  );
}
export default Form;
