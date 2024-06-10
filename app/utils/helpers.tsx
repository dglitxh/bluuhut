export const httpReq = async (type: string, url: string, data: string) => {
  // an empty string is used for requests without data
  type = type.toUpperCase();
  let config: RequestInit = {
    method: type,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  let res;
  try {
    if (type === "GET" || type === "DELETE") {
      const req = await fetch(url, config);
      res = await req.json();
    } else if (type === "POST" || type === "PUT") {
      config["body"] = data;
      const req = await fetch(url, config);
      res = await req.json();

      console.log(res, "helper");
    }
    return res;
  } catch (e) {
    console.log(e, "helper err");
    throw new Error();
  }
};
