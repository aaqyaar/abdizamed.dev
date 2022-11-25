interface IApi {
  url?: string;
  method?: string;
  headers?: {
    [key: string]: string;
  };
  route?: string;
}

async function dynamicApi({ url, method, headers }: IApi) {
  try {
    const res = await fetch(url as string, {
      method,
      headers,
    });
    const data = await res.json();
    return { res: data };
  } catch (error) {
    return { error };
  }
}

export default async function useDynamicApi({ method, route }: IApi) {
  const headers = {
    "Content-Type": "application/json",
  };
  const url = `${process.env.NEXT_PUBLIC_API}${route}`;

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
