const SCHEMA_DB = "Schema";
const OBJECT_DB = "Objects";
const APP_DB = "Application";
const REL_DB = "Relationship";
const DIAGRAM_DB = "Diagrams";
const SCHEMA_VIEW = "Schema/by_name";
const DIAGRAM_VIEW = "Diagrams/by_name";
const baseSchemas = [{
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
},{
    "$schema": "http://json-schema.org/draft-06/schema#",
    "id": "http://architecture.com/Application",
    "title": "Application",
    "properties": {
        "name": {
            "type": "string"
        },
        "state": {
            "type": "string"
        },
        "vendor": {
            "type": "string"
        }
    },
    "required": [
        "name",
        "vendor"
    ],
    "type": "object"
},{
    "$schema": "http://json-schema.org/draft-06/schema#",
    "id": "http://architecture.com/Diagrams",
    "title": "Diagram",
    "properties": {
        "name": {
            "type": "string"
        },
        "author": {
            "type": "string"
        }
    },
    "required": [
        "name",
        "author"
    ],
    "type": "object"
}];