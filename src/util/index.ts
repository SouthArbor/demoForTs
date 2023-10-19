
const getRequestBaseURL = () => {
  const { MODE, VITE_API_DEV, VITE_API_PROD } = import.meta.env;
  const defaultBaseUrl = "/api";
  switch (MODE) {
    case "development":
      return defaultBaseUrl;
    case "staging":
      return VITE_API_DEV;
    case "production":
      return VITE_API_PROD;
    default:
      return defaultBaseUrl;
  }
};

export { getRequestBaseURL };