import request from '@/utils/request'

export function getOperators() {
  return request({
    url: '/operators',
    method: 'get'
  })
}
export function getDatalinks(id) {
  return request({
    url: '/workspaces/' + id + '/datalinks',
    method: 'get',
    params: {
      page: 0,
      per_page: 1000
    }
  })
}
export function getModels(id) {
  return request({
    url: '/workspaces/' + id + '/models',
    method: 'get',
    params: {
      page: 0,
      size: 1000,
      sort: 'id'
    }
  })
}
