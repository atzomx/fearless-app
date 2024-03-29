import React, { useState } from 'react';

import { Container, InputDate, InputSelect, InputText, Option } from '@core/ui';

const ProfileEditForm = () => {
  const [value, setValue] = useState<Date>();
  return (
    <Container p={2} spacing={2}>
      {/* <InputText label="Nombre completo" /> */}
      <Container flex={1} direction="row" fullWidth spacing={2}>
        <Container flex={1}>{/* <InputText label="Gender" /> */}</Container>
        <Container flex={1}>{/* <InputText label="Gender" /> */}</Container>
      </Container>
      {/* 
      <InputSelect
        label="Gender"
        value={value}
        onChangeText={value => setValue(value)}>
        <Option value="M">Male</Option>
        <Option value="F">Female</Option>
      </InputSelect> */}
      <InputDate
        value={value}
        placeholder="Selecciona"
        onChangeText={date => setValue(date)}
        label="Birthday"
      />
    </Container>
  );
};

export default ProfileEditForm;
