import * as JoditESMConfig from 'jodit/config';
import * as JoditCoreConfig from 'jodit/types/config';

export type JoditConfig = Partial<JoditCoreConfig.Config & JoditESMConfig.Config>;
