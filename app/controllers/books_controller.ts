import Book from '#models/book'
import { createBookValidator, updateBookValidator } from '#validators/book'
import type { HttpContext } from '@adonisjs/core/http'

export default class BooksController {
  /**
   * Display a list of resource
   */
  async index({ auth }: HttpContext) {
    const books = await auth.user?.related('books').query()
    return books
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, auth }: HttpContext) {
    const { titulo, autor, genero, anoPublicacao, status, observacoes } =
      await request.validateUsing(createBookValidator)
    const book = await auth.user?.related('books').create({
      titulo: titulo,
      autor: autor,
      genero: genero,
      anoPublicacao: anoPublicacao,
      status: status,
      observacoes: observacoes,
    })
    console.log(book)
    return book
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    try {
      const book = await Book.findByOrFail('id', params.id)
      return book
    } catch (error) {
      return response.status(404).json('Book not found')
    }
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    try {
      const book = await Book.findByOrFail('id', params.id)
      const { status, observacoes } = await request.validateUsing(updateBookValidator)
      book.merge({ status, observacoes })
      await book.save()
      return book
    } catch (error) {
      response.status(404).json('Book not found')
    }
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    try {
      const book = await Book.findByOrFail('id', params.id)
      await book.delete()
      return response.status(203)
    } catch (error) {
      response.status(404).json('Book not found')
    }
  }
}
