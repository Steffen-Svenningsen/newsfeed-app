const sanityClient = require("@sanity/client");
const client = sanityClient({
  projectId: "8f22n1rh",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: true,
});

export default client;
