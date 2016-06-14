// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by meteor-mean-seo.js.
import { name as packageName } from "meteor/meteor-mean-seo";

// Write your tests here!
// Here is an example.
Tinytest.add('meteor-mean-seo - example', function (test) {
  test.equal(packageName, "meteor-mean-seo");
});
