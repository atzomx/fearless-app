import React, { useState } from 'react';

import { Container, InputDate, InputSelect, InputText, Option } from '@core/ui';

const ProfileEditForm = () => {
  const [value, setValue] = useState<string>();
  return (
    <Container p={2} spacing={2}>
      <InputText label="Nombre completo" />
      <Container flex={1} direction="row" fullWidth spacing={2}>
        <Container flex={1}>
          <InputText label="Gender" />
        </Container>
        <Container flex={1}>
          <InputText label="Gender" />
        </Container>
      </Container>
      <InputSelect
        value={value}
        onChangeText={current => setValue(current)}
        label="Nombre completo">
        <Option value="1">Number 1</Option>
        <Option value="2">Number 2</Option>
        <Option value="3">Number 3</Option>
        <Option value="4">Number 4</Option>
      </InputSelect>
      <InputDate label="Nombre completo" />
    </Container>
  );
};

export default ProfileEditForm;
