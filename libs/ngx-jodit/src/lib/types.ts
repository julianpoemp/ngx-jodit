import type {IViewOptions} from 'jodit/types';
import * as JoditESMConfig from 'jodit/config';
import * as JoditCoreConfig from 'jodit/types/config';

export type JoditConfig = Partial<Record<string, any> &
  IViewOptions & JoditCoreConfig.Config & JoditESMConfig.Config
>;
