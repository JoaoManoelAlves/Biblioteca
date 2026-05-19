/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  accessTokens: {
    store: typeof routes['access_tokens.store']
    destroy: typeof routes['access_tokens.destroy']
  }
  user: {
    index: typeof routes['user.index']
    create: typeof routes['user.create']
    store: typeof routes['user.store']
    show: typeof routes['user.show']
    edit: typeof routes['user.edit']
    update: typeof routes['user.update']
    destroy: typeof routes['user.destroy']
  }
  books: {
    index: typeof routes['books.index']
    create: typeof routes['books.create']
    store: typeof routes['books.store']
    show: typeof routes['books.show']
    edit: typeof routes['books.edit']
    update: typeof routes['books.update']
    destroy: typeof routes['books.destroy']
  }
}
