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
    "devPort": {
      "type": "string",
      "message": "API root (dev)",
      "default": "9090"
    },
    "root": {
      "type": "string",
      "required": true,
      "label": "Root account",
      "default": "root@yourdomain.com"
    }
  },
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}yarn\n  yarn dev\n\n"
};
