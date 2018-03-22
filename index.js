var bufferFrom = require('buffer-from')

module.exports = toBuffer

function toBuffer (buf, enc) {
  if (Buffer.isBuffer(buf)) return buf
  if (typeof buf === 'string') return bufferFrom(buf, enc)
  if (Array.isArray(buf)) return bufferFrom(buf)
  throw new Error('Input should be a buffer or a string')
}
