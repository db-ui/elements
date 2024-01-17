<script setup lang="ts">
import {
  DbButton,
  DbCheckbox,
  DbInput,
  DbRadio,
  DbSelect,
  DbTextarea,
  DbToggle
} from '@db-ui/v-elements-enterprise/dist/components';

import { ref } from 'vue';

const input = ref('');
const checkbox = ref(false);
const textarea = ref('');
const select = ref('');
const radio = ref(false);
const toggle = ref(false);

const logAll = () => {
  alert(
    JSON.stringify({
      input: input.value,
      checkbox: !!checkbox.value,
      radio: radio.value,
      select: select.value,
      textarea: textarea.value,
      toggle: toggle.value
    })
  );
};
</script>

<style>
.form-container {
  display: flex;
}

.form-container fieldset {
  display: flex;
  flex-direction: column;
  margin: 0 8px;
  width: 50%;

  /* Disabling fieldset styles in this specific case */
  padding: 0;
  border-color: transparent;
}
</style>

<template>
  <div>
    <div class="form-container">
      <fieldset>
        <form>
          <p>DbInput:</p>
          <DbInput
            label="Infield"
            name="input-name"
            v-model="input"
            className="fullWidth"
          />
          <p>DbCheckbox:</p>
          <DbCheckbox
            label="Checkbox"
            name="checkbox-name"
            v-model="checkbox"
          />
          <p>DbRadio:</p>
          <ol>
            <li>
              <DbRadio
                label="Radio 01"
                name="radio-name"
                value="radio-01"
                v-model="radio"
              />
            </li>
            <li>
              <DbRadio
                label="Radio 02"
                name="radio-name"
                value="radio-02"
                v-model="radio"
              />
            </li>
            <li>
              <DbRadio
                label="Radio 03"
                name="radio-name"
                value="radio-03"
                v-model="radio"
              />
            </li>
          </ol>
          <p>DbSelect:</p>
          <DbSelect label="Selectbox" name="select-name" v-model="select">
            <option selected>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </DbSelect>
          <p>DbTextarea:</p>
          <DbTextarea
            label="Textarea"
            name="textarea-name"
            v-model="textarea"
          />
          <p>DbToggle:</p>
          <DbToggle v-model="toggle" />
        </form>
      </fieldset>
      <fieldset>
        <p>DbButton:</p>
        <DbButton variant="primary" @click="logAll()">
          Hi from Showcase!
        </DbButton>
        <h2>Output</h2>
        <dl>
          <dt>inputs value</dt>
          <dd>{{ input ? input : 'No Input set' }}</dd>
          <dt>checkbox</dt>
          <dd>{{ checkbox ? 'yes' : 'no' }}</dd>
          <dt>radio</dt>
          <dd>{{ radio ? radio : 'No radio selected' }}</dd>
          <dt>select</dt>
          <dd>{{ select ? select : 'Not Selected' }}</dd>
          <dt>textarea</dt>
          <dd>{{ textarea ? textarea : 'No Text set' }}</dd>
          <dt>toggle</dt>
          <dd>{{ toggle.toString() }}</dd>
        </dl>
      </fieldset>
    </div>
  </div>
</template>
