import { controllers } from '#generated/controllers'
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.ts'

/*router.get('/user', [controllers.Users, 'index'])
router.post('/user', [controllers.Users, 'store'])
router.delete('/user/:id', [controllers.Users, 'destroy'])*/
router.post('/login', [controllers.AccessTokens, 'store'])
router.delete('/logout', [controllers.AccessTokens, 'destroy'])
router
  .group(() => {
    router.resource('/users', controllers.Users)
    router.resource('/books', controllers.Books)
  })
  .use(middleware.auth())
