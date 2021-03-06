# json.instantiate

[![version](https://img.shields.io/npm/v/@extendscript/aes.patch.json.instantiate.svg)](https://www.npmjs.org/package/@extendscript/aes.patch.json.instantiate)

> Extension

Adds `instantiate()` to JSON. A simple tool for instantiating JSON Schemas.

Source: [tomarad/JSON-Schema-Instantiator](https://github.com/tomarad/JSON-Schema-Instantiator)

## Install

    npm install @extendscript/aes.patch.json.instantiate

## Include

    #include 'node_modules/@extendscript/aes.patch.json.instantiate/instantiate.js'

## Use

    var schema = {
        "type": "object",
        "properties": {
            "title": {
                "type": "string",
                "default": "Example"
            },
            "description": {
                "type": "string"
            }
        },
        "required": ["title"]
    };

    instance = JSON.instantiate(schema);
    // instance === { title: "Example", description: "" }

    instance = JSON.instantiate(schema, {requiredPropertiesOnly: false});
    // instance === { title: "Example", description: "" }

    instance = JSON.instantiate(schema, {requiredPropertiesOnly: true});
    // instance === { title: "Example" }

## Test

You can test the code against a range of [targets](https://github.com/nbqx/fakestk/blob/master/resources/versions.json):

    npm run test target-1 target-2

We keep [a log of test results](./test/results_log.md)
