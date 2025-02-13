import type {IViewOptions} from 'jodit/types';
import * as JoditESMConfig from 'jodit/config';

export type JoditConfig = Partial<
  IViewOptions & JoditESMConfig.Config & Record<string, any>
>;
