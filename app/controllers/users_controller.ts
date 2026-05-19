import User from '#models/user'
import { createUserValidator, updateUserValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'
export default class UsersController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    const users = await User.all()
    return users
  }
  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const { nome, email, password } = await request.validateUsing(createUserValidator)
    const user = await User.create({
      nome,
      email,
      password,
    })
    return user
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    try {
      const user = await User.findByOrFail('id', params.id)
      return user
    } catch {
      return response.status(404).json('User not found!')
    }
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    try {
      const { nome, password } = await request.validateUsing(updateUserValidator)
      const user = await User.findByOrFail('id', params.id)
      user.merge({ nome, password })
      await user.save()
    } catch {
      return response.status(404).json('Not found user to update')
    }
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    try {
      const user = await User.findByOrFail('id', params.id)
      await user.delete()
      return response.status(203)
    } catch {
      return response.status(404).json('User not found to destroy!')
    }
  }
}
