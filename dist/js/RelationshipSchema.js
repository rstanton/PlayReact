const SCHEMA_DB = "Schema";
const OBJECT_DB = "Object";
const SCHEMA_ALL_VIEW = "Schema/all";

const relationshipSchema = {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "id": "http://architecture.com/Relationship",
  "title":"Relationship",
  "properties": {
    "name": {
      "type": "string"
    },
    "source": {
      "type": "object"
    },
    "target": {
      "type": "object"
    }
  },
  "required": [
    "name",
    "source",
    "target"
  ],
  "type": "object"
};

const diagramSchema = {
    "$schema": "http://json-schema.org/draft-06/schema#",
    "id": "http://architecture.com/Diagrams",
    "title": "Diagram",
    "properties": {
        "name": {
            "type": "string"
        },
        "author": {
            "type": "string"
        },
        "usedObjects":{
            "type":"array",
            "items":{
                "type":"object"
            }
        },
        "usedRelationships":{
            "type":"array",
            "items":{
                "type":"object"
            }
        }
    },
    "type": "object"
};

const templateSchema = {
    "$schema": "http://json-schema.org/draft-06/schema#",
    "id": "http://architecture.com/Template",
    "title": "Template",
    "properties": {
        "name": {
            "type": "string"
        },
        "author": {
            "type": "string"
        },
        "allowedObjects":{
            "type":"array",
            "items":{
                "type":"object"
            }
        }
    },
    "type": "object"
};

