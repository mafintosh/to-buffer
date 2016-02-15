module.exports = toBuffer

function toBuffer (buf, enc) {
  if (Buffer.isBuffer(buf)) return buf
  if (typeof buf === 'string') return Buffer(buf, enc)
  throw new Error('Input should be a buffer or a string')
}
