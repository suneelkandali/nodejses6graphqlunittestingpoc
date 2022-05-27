import { books } from './models.js';

export const resolvers = {
  Query: {
    greeting: () => "Hello GraphQL  From TutorialsPoint !!",
    getBooks: () => books,
    getAuthors: () => {
      return books.map(book => {
        return book.author
      })
    }
  }
}


