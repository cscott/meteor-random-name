// Write your tests here!
// Here is an example.
Tinytest.add('RandomName - exists', function (test) {
  test.isTrue(_.isFunction(RandomName), "RandomName doesn't exist");
  test.isTrue(typeof(RandomName()) === 'string', "RandomName doesn't generate a string");
});
