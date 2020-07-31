import { UiCommon } from 'src/app/shared/ui/common/models/common.interface';

export interface UiPagination {
  current: UiCommon['asNumber'];
  total: UiCommon['asNumber'];
  show: UiCommon['asNumber'];
}