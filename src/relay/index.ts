import axios from "axios";
import {
  Environment,
  Network,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
} from "relay-runtime";

async function fetchRelay(params: RequestParameters, variables: Variables) {
  const response = await axios.post("/graphql", {
    query: params.text,
    variables,
  });

  return response.data;
}

export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});
