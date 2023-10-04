import React, { FC, useState } from 'react';

import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker';
import { useTheme } from 'styled-components/native';

import {
  CameraIcon,
  CloseIcon,
  FileIcon,
  GalleryIcon,
  PlusIcon,
} from '@core/icons';
import { File } from '@core/interfaces/IFile';

import * as S from './InputFile.style';

import Container from '../Container';
import IconButtonTitle from '../IconButtonTitle';
import Modal from '../Modal';

type EmptyFileFn = () => void;
type FileFn = (file?: File | File[]) => void;

type InputFileProps = {
  onChange: EmptyFileFn | FileFn;
  onPressImage?: () => void;
  value?: File;
  limit?: number;
  multiple?: boolean;
};

const InputFile: FC<InputFileProps> = ({
  onChange = () => {},
  value,
  onPressImage,
  limit = 1,
  multiple = false,
}) => {
  const theme = useTheme();
  const [modal, setModal] = useState(false);
  const [isDeleting, setIsDeliting] = useState(false);

  const mapToFile = (image: ImageOrVideo) => {
    const data: File = {
      uri: image.path ?? '',
      name: image.filename ?? '',
      type: image.mime ?? '',
    };
    return data;
  };

  const handleImageSelector = (response: ImageOrVideo | ImageOrVideo[]) => {
    if (!response) return;
    const newFiles = Array.isArray(response) ? response : [response];
    const files = newFiles.map(mapToFile);
    const data = multiple ? files : files[0];
    onChange(data);
  };

  const handleOnClear = () => {
    onChange();
  };

  const onChooseFile = async () => {
    setModal(false);
    const result = (await ImagePicker.openPicker({
      cropping: true,
      multiple,
      maxFiles: limit,
    })) as unknown as ImageOrVideo[];
    handleImageSelector(result);
  };

  const onChooseCamera = async () => {
    setModal(false);
    const result = await ImagePicker.openCamera({ cropping: true });
    handleImageSelector([result]);
  };

  const onChooseGallery = async () => {
    setModal(false);
    const result = (await ImagePicker.openPicker({
      cropping: true,
      multiple,
      maxFiles: limit,
    })) as unknown as ImageOrVideo | ImageOrVideo[];
    handleImageSelector(result);
  };

  const onLongPress = () => {
    setIsDeliting(true);
  };

  const onPressOut = () => {
    if (!isDeleting) return;
    setTimeout(() => {
      setIsDeliting(false);
    }, 2000);
  };

  if (value)
    return (
      <S.ImageContainer
        activeOpacity={0.8}
        onPress={onPressImage}
        onLongPress={onLongPress}
        onPressOut={onPressOut}>
        <S.Image source={{ uri: value.uri }} />
        {isDeleting && (
          <S.CloseButton
            onPress={handleOnClear}
            variant="contained"
            color="secondary"
            sx={{
              button: {
                height: 24,
                width: 24,
                backgroundColor: theme.pallete.grey['200'],
              },
            }}>
            <CloseIcon
              height={16}
              width={16}
              color={theme.pallete.common.black}
            />
          </S.CloseButton>
        )}
      </S.ImageContainer>
    );

  return (
    <>
      <S.Container activeOpacity={0.8} onPress={() => setModal(true)}>
        <PlusIcon color={theme.pallete.grey[400]} width={40} height={40} />
      </S.Container>
      <Modal
        title="Selecciona una opcion"
        open={modal}
        onClose={() => setModal(false)}>
        <Container mt={1} spacing={4} direction="horizontal" alignSelf="center">
          <IconButtonTitle
            onPress={onChooseCamera}
            title="Camara"
            icon={CameraIcon}
          />
          <IconButtonTitle
            onPress={onChooseGallery}
            title="Galeria"
            icon={GalleryIcon}
          />
          <IconButtonTitle
            onPress={onChooseFile}
            title="Archivos"
            icon={FileIcon}
          />
        </Container>
      </Modal>
    </>
  );
};

export default InputFile;
