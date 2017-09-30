# Folder structure

```bash
graphql
├── schema.js               # exports new GraphQLSchema
└── [type]
    ├── index.js            # exports new GraphQLObjectType
    └── [field.js]          # exports plain object (with props type, resolve...)
```
Note graphql's root query and mutation are object types too.

```bash
mutation                    # mutation object type
├── index.js                # exports new GraphQLObjectType
└── [resource]
    ├── create.js           # create new node of [resource] type
    ├── update.js           # update node of [resource] type
    └── delete.js           # delete node of [resource] type
```
Following the initial folder structure, the mutation folder would contain
a long list of mutation fields. We chose to group the mutation fields by
resource type (e.g. a user, a room) for clarity.
