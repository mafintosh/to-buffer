module.exports = toBuffer

function convert (buf, enc) {
  return Buffer.from ? Buffer.from(buf, enc) : new Buffer(buf, enc)
}

function toBuffer (buf, enc) {
  if (Buffer.isBuffer(buf)) return buf
  if (typeof buf === 'string') return convert(buf, enc)
  if (Array.isArray(buf)) return convert(buf)
  throw new Error('Input should be a buffer or a string')
}
