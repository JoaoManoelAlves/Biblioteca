import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'access_tokens.store': { paramsTuple?: []; params?: {} }
    'access_tokens.destroy': { paramsTuple?: []; params?: {} }
    'user.index': { paramsTuple?: []; params?: {} }
    'user.create': { paramsTuple?: []; params?: {} }
    'user.store': { paramsTuple?: []; params?: {} }
    'user.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'user.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'user.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'user.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'books.index': { paramsTuple?: []; params?: {} }
    'books.create': { paramsTuple?: []; params?: {} }
    'books.store': { paramsTuple?: []; params?: {} }
    'books.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'books.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'books.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'books.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'access_tokens.store': { paramsTuple?: []; params?: {} }
    'user.store': { paramsTuple?: []; params?: {} }
    'books.store': { paramsTuple?: []; params?: {} }
  }
  DELETE: {
    'access_tokens.destroy': { paramsTuple?: []; params?: {} }
    'user.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'books.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'user.index': { paramsTuple?: []; params?: {} }
    'user.create': { paramsTuple?: []; params?: {} }
    'user.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'user.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'books.index': { paramsTuple?: []; params?: {} }
    'books.create': { paramsTuple?: []; params?: {} }
    'books.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'books.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'user.index': { paramsTuple?: []; params?: {} }
    'user.create': { paramsTuple?: []; params?: {} }
    'user.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'user.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'books.index': { paramsTuple?: []; params?: {} }
    'books.create': { paramsTuple?: []; params?: {} }
    'books.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'books.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PUT: {
    'user.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'books.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PATCH: {
    'user.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'books.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}