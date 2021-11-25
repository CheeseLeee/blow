import {formSubmit} from './requestConfig'
import { instance } from './axios'
export const postFormSubimt = () => {
    return instance.post(formSubmit)
}