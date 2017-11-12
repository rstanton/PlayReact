const SCHEMA_DB = "Schema";
const OBJECT_DB = "Object";
const SCHEMA_ALL_VIEW = "Schema/all";
const OBJECT_BY_TYPE = "Object/by_type";

const relationshipSchema = {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "id": "http://architecture.com/Relationship",
  "title":"Relationship",
  "properties": {
    "name": {
        "type": "string",
        "displayName":"Relationship Name"
    },
    "source": {
        "type": "object",
        "displayName":"Source Object",
        "$ref":"http://architecture.com/Object"
    },
    "target": {
        "type": "object",
        "displayName":"Target Object",
        "$ref":"http://architecture.com/Object"
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
            "type": "string",
            "displayName":"Diagram Name"
        },
        "author": {
            "type": "string",
            "displayName":"Author"
        },
        "template":{
            "type":"object",
            "displayName":"Diagram Template",
            "$ref":"http://architecture.com/Template"
        },
        "usedObjects":{
            "type":"array",
            "hide":true,
            "items":{
                "type":"object"
            }
        },
        "usedRelationships":{
            "type":"array",
            "hide":true,
            "items":{
                "type":"object"
            }
        }
    },
    "type": "object"
};

// This uses '$ref":"http://architecture.com/Object' which tells the system to lookup any / all user configured objects
const templateSchema = {
    "$schema": "http://json-schema.org/draft-06/schema#",
    "id": "http://architecture.com/Template",
    "title": "Template",
    "properties": {
        "name": {
            "type": "string",
            "displayName":"Template Name"
        },
        "author": {
            "type": "string",
            "displayName":"Template Author"
        },
        "allowedObjects":{
            "type":"array",
            "displayName": "Allowed Objects",
            "items":{
                "type":"object",
                "$ref":"http://architecture.com/Object"
            }
        }
    },
    "type": "object"
};

