module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name",
      "default": "{{destDirName}}"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A Vuetify Admin project"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "license": {
      "type": "string",
      "label": "License",
      "default": "MIT"
    },
    "apiurl": {
      "type": "string",
      "required": true,
      "label": "API URL",
      "default": "api.yourdomain.com"
    },
    "devPort": {
      "type": "string",
      "message": "API root (dev)",
      "default": "9090"
    },
    "prodport": {
      "type": "number",
      "required": true,
      "label": "Prod Server port",
      "default": 5001
    }
  },
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}yarn\n  yarn dev\n\n"
};
