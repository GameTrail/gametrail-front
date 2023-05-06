import type { FC } from 'react';
import { RegisterAvatarContainer, RegisterAvatarImage } from './styles';

const avatars = [
  'https://cdnb.artstation.com/p/assets/images/images/035/213/423/large/mcashe-titanzekeef-dev.jpg?1614374087',
  'https://cdnb.artstation.com/p/assets/images/images/035/213/423/large/mcashe-titanzekeef-dev.jpg?1614374087',
  'https://cdnb.artstation.com/p/assets/images/images/035/213/423/large/mcashe-titanzekeef-dev.jpg?1614374087',
  'https://cdnb.artstation.com/p/assets/images/images/035/213/423/large/mcashe-titanzekeef-dev.jpg?1614374087',
  'https://cdnb.artstation.com/p/assets/images/images/035/213/423/large/mcashe-titanzekeef-dev.jpg?1614374087',
  'https://cdnb.artstation.com/p/assets/images/images/035/213/423/large/mcashe-titanzekeef-dev.jpg?1614374087',
  'https://cdnb.artstation.com/p/assets/images/images/035/213/423/large/mcashe-titanzekeef-dev.jpg?1614374087',
  'https://cdnb.artstation.com/p/assets/images/images/035/213/423/large/mcashe-titanzekeef-dev.jpg?1614374087',
  'https://cdnb.artstation.com/p/assets/images/images/035/213/423/large/mcashe-titanzekeef-dev.jpg?1614374087',
  'https://cdnb.artstation.com/p/assets/images/images/035/213/423/large/mcashe-titanzekeef-dev.jpg?1614374087',
  'https://cdnb.artstation.com/p/assets/images/images/035/213/423/large/mcashe-titanzekeef-dev.jpg?1614374087',
  'https://cdnb.artstation.com/p/assets/images/images/035/213/423/large/mcashe-titanzekeef-dev.jpg?1614374087',
  'https://cdnb.artstation.com/p/assets/images/images/035/213/423/large/mcashe-titanzekeef-dev.jpg?1614374087',
  'https://cdnb.artstation.com/p/assets/images/images/035/213/423/large/mcashe-titanzekeef-dev.jpg?1614374087',
  'https://cdnb.artstation.com/p/assets/images/images/035/213/423/large/mcashe-titanzekeef-dev.jpg?1614374087',
  'https://cdnb.artstation.com/p/assets/images/images/035/213/423/large/mcashe-titanzekeef-dev.jpg?1614374087',
  'https://cdnb.artstation.com/p/assets/images/images/035/213/423/large/mcashe-titanzekeef-dev.jpg?1614374087',
  'https://cdnb.artstation.com/p/assets/images/images/035/213/423/large/mcashe-titanzekeef-dev.jpg?1614374087',
  'https://cdnb.artstation.com/p/assets/images/images/035/213/423/large/mcashe-titanzekeef-dev.jpg?1614374087',
  'https://cdnb.artstation.com/p/assets/images/images/035/213/423/large/mcashe-titanzekeef-dev.jpg?1614374087',
];

interface Props {
  setAvatar: (avatar: string) => void;
  selectedAvatar: string | undefined;
}

const RegisterAvatar: FC<Props> = ({
  setAvatar,
  selectedAvatar,
}) => {
  const handleAvatarSelect = (avatar: string) => {
    setAvatar(avatar);
  };

  return (
    <RegisterAvatarContainer>
      {avatars.map((avatar) => (
        <RegisterAvatarImage
          key={avatar}
          src={avatar}
          alt={`Avatar ${avatar}`}
          onClick={() => handleAvatarSelect(avatar)}
          isSelected={selectedAvatar === avatar}
        />
      ))}
    </RegisterAvatarContainer>
  );
};

export default RegisterAvatar;
