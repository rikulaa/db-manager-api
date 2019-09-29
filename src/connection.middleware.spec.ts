import { ConnectionMiddleware } from './connection.middleware';

describe('ConnectionMiddleware', () => {
  it('should be defined', () => {
    expect(new ConnectionMiddleware()).toBeDefined();
  });
});
