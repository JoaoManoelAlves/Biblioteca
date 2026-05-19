import { controllers } from '#generated/controllers'
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.ts'
router.post('/session', [controllers.AccessTokens, 'store'])
router.delete('/session', [controllers.AccessTokens, 'destroy'])
router
  .group(() => {
    router.resource('/user', controllers.Users)
    router.resource('/books', controllers.Books)
  })
  .use(middleware.auth())
