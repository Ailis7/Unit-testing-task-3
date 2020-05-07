import getLevel from '../app';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call fetchData once', () => {
  fetchData.mockReturnValue({ level: 99, status: 'ok' });

  const response = getLevel(1);
  expect(response).toEqual('Ваш текущий уровень: 99');
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('should call fetchData once and return error', () => {
  fetchData.mockReturnValue({ status: 'failed' });

  const response = getLevel(2);
  expect(response).toEqual('Информация об уровне временно недоступна');
  expect(fetchData).toBeCalledWith('https://server/user/2');
});
