import React from 'react';
import { Button } from '@/components/Landing/MainSection/styles';
import { LoginLottie } from '@/components/Lotties';
import {
  LoginContainer, Container, Title, LoginForm, Label, Input,
} from './styles';

const Login = () => (
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
);

export default Login;
