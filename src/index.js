import ForgeUI, { render, ConfigForm, TextArea } from '@forge/ui';
import { storage } from '@forge/api';

export const config = render(
  <ConfigForm onSubmit={async (formData) => {
    await storage.set('json-data', formData.jsonData);
    return formData;
  }}>
    <TextArea label="JSON Data" name="jsonData" isRequired={true} />
  </ConfigForm>
);
