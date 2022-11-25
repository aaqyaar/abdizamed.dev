interface IApi {
  url?: string;
  method?: string;
  headers?: any;
  route?: string;
}

async function dynamicApi({ url, method, headers }: IApi) {
  try {
    const response = await fetch(url as string, {
      headers,
      method,
    });
    const data = await response.json();
    return { res: data };
  } catch (error) {
    return { error };
  }
}

export default async function useDynamicApi({ method, route }: IApi) {
  const headers = {
    "Content-Type": "application/json",
  };
  const url = `http://localhost:3000${route}`;
  // ${process.env.NEXT_PUBLIC_API}
  switch (method) {
    case "GET":
      return await dynamicApi({ url, method, headers });
    case "POST":
      return await dynamicApi({ url, method, headers });
    case "PUT":
      return await dynamicApi({ url, method, headers });
    case "DELETE":
      return await dynamicApi({ url, method, headers });
    default:
      return { error: "Method not supported" };
  }
}
