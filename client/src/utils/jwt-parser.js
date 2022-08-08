const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

export const isExpired = (token) => {
  const decodedJwt = parseJwt(token);

  if (!decodedJwt) {
    return true;
  }

  if (decodedJwt?.exp * 1000 < Date.now()) {
    return true;
  }

  return false;
};
