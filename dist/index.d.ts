import { Logger, WhisperOptions } from './types';
export interface IOptions {
    modelName: string;
    autoDownloadModelName?: string;
    whisperOptions?: WhisperOptions;
    withCuda?: boolean;
    removeWavFileAfterTranscription?: boolean;
    logger?: Logger;
    silent?: boolean;
}
export declare function nodewhisper(filePath: string, options: IOptions): Promise<string>;
