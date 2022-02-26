import { gql } from '@apollo/client';

export const QUERY_BOOKS = gql`
  query books($username: String) {
    books(username: $username) {
      _id
      bookText
      createdAt
      username
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;

export const QUERY_BOOK = gql`
  query book($id: ID!) {
    book(_id: $id) {
      _id
      bookText
      createdAt
      username
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      bookCount
      books {
        _id
        username
      }
      books {
        _id
        bookText
        createdAt
        reactionCount
      }
    }
  }
`;



