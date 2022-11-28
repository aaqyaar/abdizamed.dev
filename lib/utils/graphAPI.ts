import {
  GET_POST,
  GET_POSTS,
  GET_PROJECT,
  GET_PROJECTS,
} from "graphql/queries";
import client from "./apollo-client";

export const getProjects = async () => {
  const { data, loading, error } = await client.query({
    query: GET_PROJECTS,
  });

  return { data, loading, error };
};

export const getProject = async (id: string) => {
  const { data, loading, error } = await client.query({
    query: GET_PROJECT,
    variables: { id },
  });

  return { data, loading, error };
};

export const getPosts = async () => {
  const { data, loading, error } = await client.query({
    query: GET_POSTS,
  });
  return { data: data.posts, loading, error };
};

export const getPost = async (slug: string) => {
  const { data, loading, error } = await client.query({
    query: GET_POST,
    variables: { slug },
  });

  return { data: data.posts, loading, error };
};
