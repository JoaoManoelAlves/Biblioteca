import vine from '@vinejs/vine'

export const createBookValidator = vine.create({
  titulo: vine.string(),
  autor: vine.string().nullable(),
  genero: vine.string(),
  anoPublicacao: vine.date().nullable(),
  status: vine.string(),
  observacoes: vine.string(),
})

export const updateBookValidator = vine.create({
  status: vine.string(),
  observacoes: vine.string(),
})
