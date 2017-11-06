const SCHEMA_DB = "Schema";
const APP_DB = "Application";
const REL_DB = "Relationship";
const DIAGRAM_DB = "Diagrams";
const SCHEMA_VIEW = "Schema/by_name";

const baseSchemas = [{
  "$schema": "http://json-schema.org/draft-06/schema#",
  "id": "http://architecture.com/Relationship",
  "title":"Relationship",
  "properties": {
    "name": {
      "type": "string"
    },
    "source": {
      "type": "string"
    },
    "target": {
      "type": "string"
    },
    "userdata":{
      "type":"object"
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
}];