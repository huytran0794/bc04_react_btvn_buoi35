import { CLOSE_DETAIL, VIEW_DETAIL } from "../constant/const";
export const viewDetailAction = (shoe) => ({
  type: VIEW_DETAIL,
  payload: shoe,
});

export const closeDetailAction = () => ({
  type: CLOSE_DETAIL,
});
