/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type GroupsPanelCreateGroupMutationVariables = {
    newGroupName: string;
    userIds: Array<unknown>;
};
export type GroupsPanelCreateGroupMutationResponse = {
    readonly createGroup: {
        readonly group: {
            readonly id: string;
            readonly name: string;
            readonly users: ReadonlyArray<{
                readonly id: string;
                readonly username: string;
                readonly email: string;
            }>;
        };
    };
};
export type GroupsPanelCreateGroupMutation = {
    readonly response: GroupsPanelCreateGroupMutationResponse;
    readonly variables: GroupsPanelCreateGroupMutationVariables;
};



/*
mutation GroupsPanelCreateGroupMutation(
  $newGroupName: String!
  $userIds: [Uuid!]!
) {
  createGroup(input: {groupName: $newGroupName, userIds: $userIds}) {
    group {
      id
      name
      users {
        id
        username
        email
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "newGroupName"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userIds"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "groupName",
            "variableName": "newGroupName"
          },
          {
            "kind": "Variable",
            "name": "userIds",
            "variableName": "userIds"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "CreateGroupPayload",
    "kind": "LinkedField",
    "name": "createGroup",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Group",
        "kind": "LinkedField",
        "name": "group",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "users",
            "plural": true,
            "selections": [
              (v1/*: any*/),
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
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "GroupsPanelCreateGroupMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GroupsPanelCreateGroupMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "05e789a217aaa8e9c99b3606d1562cec",
    "id": null,
    "metadata": {},
    "name": "GroupsPanelCreateGroupMutation",
    "operationKind": "mutation",
    "text": "mutation GroupsPanelCreateGroupMutation(\n  $newGroupName: String!\n  $userIds: [Uuid!]!\n) {\n  createGroup(input: {groupName: $newGroupName, userIds: $userIds}) {\n    group {\n      id\n      name\n      users {\n        id\n        username\n        email\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '0be46053452c2b764d1dd4f4244851d8';
export default node;
