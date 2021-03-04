/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type LoginMutationVariables = {
    usernameOrEmail: string;
    password: string;
};
export type LoginMutationResponse = {
    readonly login: {
        readonly __typename: "LoginSuccess";
        readonly user: {
            readonly id: string;
            readonly username: string;
            readonly email: string;
            readonly groups: ReadonlyArray<{
                readonly id: string;
                readonly name: string;
            }>;
        };
    } | {
        readonly __typename: "LoginUnknownUserError";
        readonly error: string;
    } | {
        readonly __typename: "LoginIncorrectPasswordError";
        readonly error: string;
    } | {
        /*This will never be '%other', but we need some
        value in case none of the concrete values match.*/
        readonly __typename: "%other";
    };
};
export type LoginMutation = {
    readonly response: LoginMutationResponse;
    readonly variables: LoginMutationVariables;
};



/*
mutation LoginMutation(
  $usernameOrEmail: String!
  $password: String!
) {
  login(usernameOrEmail: $usernameOrEmail, password: $password) {
    __typename
    ... on LoginSuccess {
      __typename
      user {
        id
        username
        email
        groups {
          id
          name
        }
      }
    }
    ... on LoginUnknownUserError {
      __typename
      error
    }
    ... on LoginIncorrectPasswordError {
      __typename
      error
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "password"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "usernameOrEmail"
},
v2 = [
  {
    "kind": "Variable",
    "name": "password",
    "variableName": "password"
  },
  {
    "kind": "Variable",
    "name": "usernameOrEmail",
    "variableName": "usernameOrEmail"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "user",
  "plural": false,
  "selections": [
    (v4/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "username",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Group",
      "kind": "LinkedField",
      "name": "groups",
      "plural": true,
      "selections": [
        (v4/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "error",
  "storageKey": null
},
v7 = [
  (v3/*: any*/),
  (v6/*: any*/)
],
v8 = [
  (v6/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "LoginMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "login",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              (v5/*: any*/)
            ],
            "type": "LoginSuccess",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": (v7/*: any*/),
            "type": "LoginUnknownUserError",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": (v7/*: any*/),
            "type": "LoginIncorrectPasswordError",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "LoginMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "login",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v5/*: any*/)
            ],
            "type": "LoginSuccess",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": (v8/*: any*/),
            "type": "LoginUnknownUserError",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": (v8/*: any*/),
            "type": "LoginIncorrectPasswordError",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a2ba0b98c27eb6a82e2509bc4af888fe",
    "id": null,
    "metadata": {},
    "name": "LoginMutation",
    "operationKind": "mutation",
    "text": "mutation LoginMutation(\n  $usernameOrEmail: String!\n  $password: String!\n) {\n  login(usernameOrEmail: $usernameOrEmail, password: $password) {\n    __typename\n    ... on LoginSuccess {\n      __typename\n      user {\n        id\n        username\n        email\n        groups {\n          id\n          name\n        }\n      }\n    }\n    ... on LoginUnknownUserError {\n      __typename\n      error\n    }\n    ... on LoginIncorrectPasswordError {\n      __typename\n      error\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '8db896700fc902d36342c4d47f95cd36';
export default node;
