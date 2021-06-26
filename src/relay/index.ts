import axios from "axios";
import { Environment, Network, RecordSource, Store, Variables } from "relay-runtime";

async function fetchGraphQL(query: string, variables: Variables): Promise<any> {
  const response = await axios.post("/graphql", {
    query,
    variables,
  });

  return response.data;
}

async function fetchRelay(params: any, variables: Variables) {
  return fetchGraphQL(params.text, variables);
}

export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});
