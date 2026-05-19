/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'access_tokens.store': {
    methods: ["POST"],
    pattern: '/session',
    tokens: [{"old":"/session","type":0,"val":"session","end":""}],
    types: placeholder as Registry['access_tokens.store']['types'],
  },
  'access_tokens.destroy': {
    methods: ["DELETE"],
    pattern: '/session',
    tokens: [{"old":"/session","type":0,"val":"session","end":""}],
    types: placeholder as Registry['access_tokens.destroy']['types'],
  },
  'user.index': {
    methods: ["GET","HEAD"],
    pattern: '/user',
    tokens: [{"old":"/user","type":0,"val":"user","end":""}],
    types: placeholder as Registry['user.index']['types'],
  },
  'user.create': {
    methods: ["GET","HEAD"],
    pattern: '/user/create',
    tokens: [{"old":"/user/create","type":0,"val":"user","end":""},{"old":"/user/create","type":0,"val":"create","end":""}],
    types: placeholder as Registry['user.create']['types'],
  },
  'user.store': {
    methods: ["POST"],
    pattern: '/user',
    tokens: [{"old":"/user","type":0,"val":"user","end":""}],
    types: placeholder as Registry['user.store']['types'],
  },
  'user.show': {
    methods: ["GET","HEAD"],
    pattern: '/user/:id',
    tokens: [{"old":"/user/:id","type":0,"val":"user","end":""},{"old":"/user/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['user.show']['types'],
  },
  'user.edit': {
    methods: ["GET","HEAD"],
    pattern: '/user/:id/edit',
    tokens: [{"old":"/user/:id/edit","type":0,"val":"user","end":""},{"old":"/user/:id/edit","type":1,"val":"id","end":""},{"old":"/user/:id/edit","type":0,"val":"edit","end":""}],
    types: placeholder as Registry['user.edit']['types'],
  },
  'user.update': {
    methods: ["PUT","PATCH"],
    pattern: '/user/:id',
    tokens: [{"old":"/user/:id","type":0,"val":"user","end":""},{"old":"/user/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['user.update']['types'],
  },
  'user.destroy': {
    methods: ["DELETE"],
    pattern: '/user/:id',
    tokens: [{"old":"/user/:id","type":0,"val":"user","end":""},{"old":"/user/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['user.destroy']['types'],
  },
  'books.index': {
    methods: ["GET","HEAD"],
    pattern: '/books',
    tokens: [{"old":"/books","type":0,"val":"books","end":""}],
    types: placeholder as Registry['books.index']['types'],
  },
  'books.create': {
    methods: ["GET","HEAD"],
    pattern: '/books/create',
    tokens: [{"old":"/books/create","type":0,"val":"books","end":""},{"old":"/books/create","type":0,"val":"create","end":""}],
    types: placeholder as Registry['books.create']['types'],
  },
  'books.store': {
    methods: ["POST"],
    pattern: '/books',
    tokens: [{"old":"/books","type":0,"val":"books","end":""}],
    types: placeholder as Registry['books.store']['types'],
  },
  'books.show': {
    methods: ["GET","HEAD"],
    pattern: '/books/:id',
    tokens: [{"old":"/books/:id","type":0,"val":"books","end":""},{"old":"/books/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['books.show']['types'],
  },
  'books.edit': {
    methods: ["GET","HEAD"],
    pattern: '/books/:id/edit',
    tokens: [{"old":"/books/:id/edit","type":0,"val":"books","end":""},{"old":"/books/:id/edit","type":1,"val":"id","end":""},{"old":"/books/:id/edit","type":0,"val":"edit","end":""}],
    types: placeholder as Registry['books.edit']['types'],
  },
  'books.update': {
    methods: ["PUT","PATCH"],
    pattern: '/books/:id',
    tokens: [{"old":"/books/:id","type":0,"val":"books","end":""},{"old":"/books/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['books.update']['types'],
  },
  'books.destroy': {
    methods: ["DELETE"],
    pattern: '/books/:id',
    tokens: [{"old":"/books/:id","type":0,"val":"books","end":""},{"old":"/books/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['books.destroy']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
