// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by meteor-seo.js.
import { name as packageName } from "meteor/meteor-seo";

// Write your tests here!
// Here is an example.
Tinytest.add('meteor-seo - example', function (test) {
  test.equal(packageName, "meteor-seo");
});
