// LICENSE : MIT
"use strict";
var assert = require("power-assert");
var createFormatter = require("../");
describe("textlint-formatter-test", function () {
    describe("createFormatter", function () {
        it("should return formatter function", function () {
            var formatter = createFormatter({
                formatterName: "stylish"
            });
            assert(typeof formatter === "function");
        });
        context("formatter", function () {
            it("should return output text", function () {
                var formatter = createFormatter({
                    formatterName: "stylish"
                });
                var output = formatter([
                    {
                        filePath: "./myfile.js",
                        messages: [
                            {
                                ruleId: "semi",
                                line: 1,
                                column: 23,
                                message: "Expected a semicolon."
                            }
                        ]
                    }
                ]);
                assert(output.length > 0);
            });

        });
    });

});