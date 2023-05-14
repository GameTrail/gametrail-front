import type { FC } from 'react';
import { RegisterAvatarContainer, RegisterAvatarImage } from './styles';

const avatars = [
  'avatar1',
  'avatar2',
  'avatar3',
  'avatar4',
  'avatar5',
  'avatar6',
  'avatar7',
  'avatar8',
  'avatar9',
  'avatar10',
  'avatar11',
  'avatar12',
  'avatar13',
  'avatar14',
  'avatar15',
];

const CLOUD_URL = 'https://res.cloudinary.com/dmydiwmnh/image/upload/';

interface Props {
  setAvatar: (avatar: string) => void;
  selectedAvatar: string | undefined;
}

const RegisterAvatar: FC<Props> = ({
  setAvatar,
  selectedAvatar,
}) => {
  const handleAvatarSelect = (avatar: string) => {
    setAvatar(`${CLOUD_URL}${avatar}.jpg`);
  };

  return (
    <RegisterAvatarContainer>
      {avatars.map((avatar) => (
        <RegisterAvatarImage
          key={avatar}
          src={`${CLOUD_URL}${avatar}.jpg`}
          alt={`Avatar ${avatar}`}
          onClick={() => handleAvatarSelect(avatar)}
          isSelected={selectedAvatar === `${CLOUD_URL}${avatar}.jpg`}
        />
      ))}
    </RegisterAvatarContainer>
  );
};

export default RegisterAvatar;
