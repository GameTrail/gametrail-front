import { CuriosityLottie } from '@/components/Lotties';
import DataCard from './DataCard';
import {
  Container, Title, CuriosityContainer,
} from './styles';

const unkowndata = () => (
  <CuriosityContainer>
    <Container>
      <Title>¿Sabías que ... ?</Title>
      <DataCard />
    </Container>
    <CuriosityLottie />
  </CuriosityContainer>
);

export default unkowndata;
