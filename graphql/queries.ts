import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      id
      title
      description
      image
      completed
      github
      live
      features
      technologies
    }
  }
`;

export const GET_PROJECT = gql`
  query GetProject($id: ID!) {
    project(id: $id) {
      id
      title
      description
      image
      completed
      github
      live
      features
      technologies
    }
  }
`;

// Path: get posts

export const GET_POSTS = gql`
  query getPosts {
    posts {
      id
      title
      author
      excerpt
      content
      avatar
      category
      createdAt
      slug
      tags
      updatedAt
      image {
        id
        url
      }
    }
  }
`;

// Path: get post

export const GET_POST = gql`
  query GetPost($slug: String!) {
    posts(where: { slug: $slug }) {
      id
      title
      author
      excerpt
      content
      avatar
      category
      createdAt
      slug
      tags
      updatedAt
      image {
        id
        url
      }
    }
  }
`;
