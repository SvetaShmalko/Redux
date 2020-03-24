import { InfoProps } from "../components/Info";
import { CREATE_INFO } from "../consts";


interface CreateInfoAction {
    type: typeof CREATE_INFO
    payload: InfoProps
  }

  export const createInfo = (payload: InfoProps): CreateInfoAction => ({
      type: CREATE_INFO,
      payload
  })

export type InfoActions = CreateInfoAction