import axios from 'axios'
import { ElLoading, ILoadingParentElement } from 'element-plus'
import { Ref, VNode, RendererNode, RendererElement } from 'vue-demi';
export const instance = axios.create({
    baseURL: 'https://www.fastmock.site/mock/dc72a0bdebc6a1586bd338cb0fa86a08/_base000/',
    timeout: 3000,
    headers: {'X-Custom-Header': 'foobar'}
});

let loadingInstance: { close: any; parent?: Ref<ILoadingParentElement> | undefined; background?: Ref<string> | undefined; spinner?: Ref<string | boolean> | undefined; text?: Ref<string> | undefined; fullscreen?: Ref<boolean> | undefined; body?: Ref<boolean> | undefined; lock?: Ref<boolean> | undefined; customClass?: Ref<string> | undefined; visible?: Ref<boolean> | undefined; target?: Ref<string | HTMLElement> | undefined; originalPosition?: Ref<string> | undefined; originalOverflow?: Ref<string> | undefined; setText?: (text: string) => void; handleAfterLeave?: () => void; vm?: VNode<RendererNode, RendererElement, { [key: string]: any; }>; $el?: HTMLElement; }
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    loadingInstance = ElLoading.service({text:'loading'})
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
// 对响应数据做点什么
    loadingInstance.close()
    return response.data.data;
}, function (error) {
    loadingInstance.close()
// 对响应错误做点什么
    alert(error)
return Promise.reject(error);

});
