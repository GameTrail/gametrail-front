import React from 'react';
import { Button } from '@/components/Landing/MainSection/styles';
import { LoginLottie } from '@/components/Lotties';
// import { useGameTrail } from '@/hooks';
import {
  LoginContainer, Container, Title, LoginForm, Label, Input,
} from './styles';
// import { normalizeUser } from '@/models/User/types';

// const [username, setUsername] = useState('');
// const [password, setPassword] = useState('');

// const { handleSetUser, handleSetToken } = useGameTrail();
// const [userLoading, setUserLoading] = useState<boolean>(true);
const Login = () => (
// const handleLogin = (username: string, password: string) => {
//   const API_URL = 'http://127.0.0.1:/api/login/';
//   const options = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ username, password }),
//   };

  //   // 1 - Get user auth token to verify login
  //   const getToken = async () => {
  //     try {
  //       const response = await fetch(API_URL, options);
  //       if (response.ok) {
  //         const data = await response.json();
  //         handleSetToken(data.token);
  //         localStorage.setItem('token', data.token);
  //         return data.token;
  //       }
  //       setUserLoading(false);
  //     } catch (error) {
  //       // eslint-disable-next-line no-console
  //       console.log({ error });
  //       setUserLoading(false);
  //     }
  //   };

  //   // 2 - Get user data
  //     const getUser = async () => {
  //       const token = await getToken();
  //       const data = {
  //         token: token,
  //       };
  //       const API_URL = "http://127.0.0.1:3000/api/login/getuser/";
  //       const options = {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(data),
  //       };
  //       try {
  //         const response = await fetch(API_URL, options);
  //         if (response.ok) {
  //           const data = await response.json();
  //           console.log({ data });
  //           const user = normalizeUser(data, token);
  //           handleSetUser(user);
  //           localStorage.setItem("user", JSON.stringify(user));
  //         }
  //         setUserLoading(false);
  //       } catch (error) {
  //         setUserLoading(false);
  //       }
  //     };
  //     getUser();
  //   };

  //   const onPressLogin = (e: any) => {
  //     e.preventDefault();
  //     handleLogin(username, password);
  //   };

  //   return (
  <LoginContainer>
    <LoginLottie />
    <LoginForm>
      <Title>
        Inicia sesión en GameTrail
      </Title>
      <Container>
        <Label>
          Nombre de usuario
          <Input
            type="text"
            name="Nombre de usuario"
            placeholder="Nombre de usuario"
          />
        </Label>
      </Container>
      <Container>
        <Label>
          Contraseña
          <Input
            type="password"
            name="Contraseña"
            placeholder="Contraseña"
          />
        </Label>
      </Container>
      <Button primary>Iniciar sesión</Button>
    </LoginForm>
  </LoginContainer>
  // );
// };
);

export default Login;
