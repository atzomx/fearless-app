import React, { FC, useCallback, useMemo, useState } from 'react';

import ImageView from 'react-native-image-viewing';

import { File } from '@core/interfaces/IFile';
import { InputFile } from '@core/ui';

import * as S from './MultipleImageChoose.style';

type MultipleImageChooseProps = {
  files: File[];
  onChange: (files: File[]) => void;
  allowMore: boolean;
  maxSpaces: number;
  spaces: number;
};

const MultipleImageChoose: FC<MultipleImageChooseProps> = ({
  allowMore,
  files,
  maxSpaces,
  spaces,
  onChange,
}) => {
  const [currentFile, setCurrentFile] = useState<number | null>(null);
  if (spaces > maxSpaces)
    throw new Error('spaces should be less than maxSpaces');

  const onRemoveFile = useCallback(
    (index: number) => () => {
      const newFiles = files.filter((_, indexFile) => indexFile !== index);
      onChange(newFiles);
    },
    [files, onChange],
  );

  const onAttachFile = useCallback(
    (data?: File | File[]) => {
      console.log(data);
      if (!data) return;
      if (Array.isArray(data)) onChange([...files, ...data]);
      else onChange([...files, data as File]);
    },
    [files, onChange],
  );

  const ITERATOR = useMemo(() => {
    const emptySpaces = spaces - files.length;
    const hiddenEmptySpaces = maxSpaces - files.length;
    const filesInputImage = files.map((file, index) => (
      <InputFile
        key={`inputfile-image-${Math.random()}`}
        value={file}
        onChange={onRemoveFile(index)}
        onPressImage={() => setCurrentFile(index)}
      />
    ));
    const filesInputEmpty = Array.from({ length: emptySpaces }).map(_ => (
      <InputFile
        key={`inputfile-space-${Math.random()}`}
        value={undefined}
        onChange={onAttachFile}
        multiple
        limit={hiddenEmptySpaces}
      />
    ));
    const spacesRender = [...filesInputImage, ...filesInputEmpty];
    if (emptySpaces <= 0 && files.length < maxSpaces && allowMore)
      spacesRender.push(
        <InputFile
          key={`inputfile-extra${Math.random()}`}
          value={undefined}
          onChange={onAttachFile}
        />,
      );

    return spacesRender;
  }, [files, spaces, maxSpaces, allowMore, onAttachFile, onRemoveFile]);

  return (
    <>
      <S.Container
        alignSelf="center"
        spacingArround
        spacing={2}
        direction="horizontal">
        {ITERATOR}
      </S.Container>
      <ImageView
        images={files}
        imageIndex={currentFile ?? 0}
        visible={currentFile !== null}
        onRequestClose={() => setCurrentFile(null)}
      />
    </>
  );
};

export default MultipleImageChoose;
