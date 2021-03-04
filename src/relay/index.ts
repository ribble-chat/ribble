import axios from "axios";
import { createClient } from "graphql-ws";
import {
  Disposable,
  Environment,
  GraphQLResponse,
  Network,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
  Observable,
} from "relay-runtime";

async function fetchRelay(params: RequestParameters, variables: Variables) {
  const response = await axios.post("/graphql", {
    query: params.text,
    variables,
  });

  return response.data;
}

const wsclient = createClient({
  url: process.env.REACT_APP_WEB_SOCKET_SERVER ?? "wss://localhost:5000",
});

export interface SubscribePayload {
  readonly operationName?: string | null;
  readonly query: string;
  readonly variables?: Record<string, unknown> | null;
}

// https://github.com/enisdenjo/graphql-ws#relay
const subscribe = (
  request: RequestParameters,
  variables: Variables
): Observable<GraphQLResponse> => {
  return Observable.create(sink => {
    if (!request.text) return sink.error(new Error("`request.text` was falsy"));
    return wsclient.subscribe(
      {
        operationName: request.name,
        query: request.text,
        variables,
      },
      sink
    );
  });
};

export default new Environment({
  network: Network.create(fetchRelay, subscribe),
  store: new Store(new RecordSource()),
});
