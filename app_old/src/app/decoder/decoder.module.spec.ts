import { DecoderModule } from './decoder.module';

describe('DecoderModule', () => {
    let decoderModule: DecoderModule;

    beforeEach(() => {
        decoderModule = new DecoderModule();
    });

    it('should create an instance', () => {
        expect(decoderModule).toBeTruthy();
    });
});
