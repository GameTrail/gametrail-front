import { ThemeProvider } from 'styled-components';
import {
  render, fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { useRouter } from 'next/router';
import GameTrailList from '@/components/GameDetails/GameTrailList';
import { MOCK_TRAIL_LIST } from '@/models/Trail/mock';
import theme from '@/theme';
import '@/i18n';

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({ push: jest.fn() }),
}));

describe('GameTrailList', () => {
  const trailList = MOCK_TRAIL_LIST;

  it('renders a list of trails', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <GameTrailList trailList={trailList} />
      </ThemeProvider>,
    );
    expect(getByText('Trail de Jacky6868')).toBeInTheDocument();
    expect(getByText('Trail de Joscacgom2')).toBeInTheDocument();
  });

  it('navigates to trail details when a trail is clicked', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <GameTrailList trailList={trailList} />
      </ThemeProvider>,
    );
    const trailItem = getByText('Trail de Jacky6868');
    fireEvent.click(trailItem);
    expect(useRouter().push).toHaveBeenCalledWith('/trail/[id]', '/trail/1');
  });
});
