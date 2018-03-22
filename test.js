var tape = require('tape')
var toBuffer = require('./')
var bufferFrom = require('buffer-from')

tape('buffer returns buffer', function (t) {
  t.same(toBuffer(bufferFrom('hi')), bufferFrom('hi'))
  t.end()
})

tape('string returns buffer', function (t) {
  t.same(toBuffer('hi'), bufferFrom('hi'))
  t.end()
})

tape('string + enc returns buffer', function (t) {
  t.same(toBuffer('6869', 'hex'), bufferFrom('hi'))
  t.end()
})

tape('other input throws', function (t) {
  try {
    toBuffer(42)
  } catch (err) {
    t.same(err.message, 'Input should be a buffer or a string')
    t.end()
  }
})
