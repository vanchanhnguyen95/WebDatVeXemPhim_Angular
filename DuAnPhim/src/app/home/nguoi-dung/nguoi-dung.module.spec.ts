import { NguoiDungModule } from './nguoi-dung.module';

describe('NguoiDungModule', () => {
  let nguoiDungModule: NguoiDungModule;

  beforeEach(() => {
    nguoiDungModule = new NguoiDungModule();
  });

  it('should create an instance', () => {
    expect(nguoiDungModule).toBeTruthy();
  });
});
