import { assert } from 'console'

const dequal = require('fast-deep-equal')

import { flureeErrors } from '../src/errors'

import { ERROR_CODES } from '../src/errors'

import { getMessageFromCode, serializeError } from '../src/utils'
const rpcCodes = ERROR_CODES.rpc

const dummyData = { foo: 'bar' }
const dummyMessage = 'baz'

const invalidError0 = 0
const invalidError1 = ['foo', 'bar', 3]
const invalidError2 = { code: 34 }
const invalidError3 = { code: 4001 }
const invalidError4 = { code: 4001, message: 3, data: Object.assign({}, dummyData) }
const invalidError5 = null
const invalidError6 = undefined
const invalidError7 = { code: 34, message: dummyMessage, data: Object.assign({}, dummyData) }

const validError0 = { code: 4001, message: dummyMessage }
const validError1 = { code: 4001, message: dummyMessage, data: Object.assign({}, dummyData) }
const validError2 = flureeErrors.rpc.parse()
delete validError2.stack
const validError3 = flureeErrors.rpc.parse(dummyMessage)
delete validError3.stack
const validError4 = flureeErrors.rpc.parse({
  message: dummyMessage,
  data: Object.assign({}, dummyData),
})
delete validError4.stack

describe('Serialize Errors test', () => {
  it('invalid error: non-object', () => {
    const result = serializeError(invalidError0)
    assert(
      dequal(result, {
        code: rpcCodes.internal,
        message: getMessageFromCode(rpcCodes.internal),
        data: { originalError: invalidError0 },
      }),
      'serialized error matches expected result',
    )
  })

  it('invalid error: null', () => {
    const result = serializeError(invalidError5)
    assert(
      dequal(result, {
        code: rpcCodes.internal,
        message: getMessageFromCode(rpcCodes.internal),
        data: { originalError: invalidError5 },
      }),
      'serialized error matches expected result',
    )
  })

  it('invalid error: undefined', () => {
    const result = serializeError(invalidError6)
    assert(
      dequal(result, {
        code: rpcCodes.internal,
        message: getMessageFromCode(rpcCodes.internal),
        data: { originalError: invalidError6 },
      }),
      'serialized error matches expected result',
    )
  })

  it('invalid error: array', () => {
    const result = serializeError(invalidError1)
    assert(
      dequal(result, {
        code: rpcCodes.internal,
        message: getMessageFromCode(rpcCodes.internal),
        data: { originalError: invalidError1 },
      }),
      'serialized error matches expected result',
    )
  })

  it('invalid error: invalid code', () => {
    const result = serializeError(invalidError2)
    assert(
      dequal(result, {
        code: rpcCodes.internal,
        message: getMessageFromCode(rpcCodes.internal),
        data: { originalError: Object.assign({}, invalidError2) },
      }),
      'serialized error matches expected result',
    )
  })

  it('invalid error: valid code, undefined message', () => {
    const result = serializeError(invalidError3)
    assert(
      dequal(result, {
        code: 4001,
        message: getMessageFromCode(4001),
        data: { originalError: Object.assign({}, invalidError3) },
      }),
      'serialized error matches expected result',
    )
  })

  it('invalid error: non-string message with data', () => {
    const result = serializeError(invalidError4)
    assert(
      dequal(result, {
        code: 4001,
        message: getMessageFromCode(4001),
        data: { originalError: Object.assign({}, invalidError4) },
      }),
      'serialized error matches expected result',
    )
  })

  it('invalid error: invalid code with string message', () => {
    const result = serializeError(invalidError7)
    assert(
      dequal(result, {
        code: rpcCodes.internal,
        message: dummyMessage,
        data: { originalError: Object.assign({}, invalidError7) },
      }),
      'serialized error matches expected result',
    )
  })

  it('invalid error: invalid code, no message, custom fallback', () => {
    const result = serializeError(invalidError2, {
      fallbackError: { code: rpcCodes.methodNotFound, message: 'foo' },
    })
    assert(
      dequal(result, {
        code: rpcCodes.methodNotFound,
        message: 'foo',
        data: { originalError: Object.assign({}, invalidError2) },
      }),
      'serialized error matches expected result',
    )
  })

  it('valid error: code and message only', () => {
    const result = serializeError(validError0)
    assert(
      dequal(result, {
        code: 4001,
        message: validError0.message,
      }),
      'serialized error matches expected result',
    )
  })

  it('valid error: code, message, and data', () => {
    const result = serializeError(validError1)
    assert(
      dequal(result, {
        code: 4001,
        message: validError1.message,
        data: Object.assign({}, validError1.data),
      }),
      'serialized error matches expected result',
    )
  })

  it('valid error: instantiated error', () => {
    const result = serializeError(validError2)
    assert(
      dequal(result, {
        code: rpcCodes.parse,
        message: getMessageFromCode(rpcCodes.parse),
      }),
      'serialized error matches expected result',
    )
  })

  it('valid error: instantiated error', () => {
    const result = serializeError(validError3)
    assert(
      dequal(result, {
        code: rpcCodes.parse,
        message: dummyMessage,
      }),
      'serialized error matches expected result',
    )
  })

  it('valid error: instantiated error with custom message and data', () => {
    const result = serializeError(validError4)
    assert(
      dequal(result, {
        code: rpcCodes.parse,
        message: validError4.message,
        data: Object.assign({}, validError4.data),
      }),
      'serialized error matches expected result',
    )
  })

  it('valid error: message, data, and stack', () => {
    const result = serializeError(Object.assign({}, validError1, { stack: 'foo' }))
    assert(
      dequal(result, {
        code: 4001,
        message: validError1.message,
        data: Object.assign({}, validError1.data),
      }),
      'serialized error matches expected result',
    )
  })

  it('include stack: no stack present', () => {
    const result = serializeError(validError1, { shouldIncludeStack: true })
    assert(
      dequal(result, {
        code: 4001,
        message: validError1.message,
        data: Object.assign({}, validError1.data),
      }),
      'serialized error matches expected result',
    )
  })

  it('include stack: string stack present', () => {
    const result = serializeError(Object.assign({}, validError1, { stack: 'foo' }), {
      shouldIncludeStack: true,
    })
    assert(
      dequal(result, {
        code: 4001,
        message: validError1.message,
        data: Object.assign({}, validError1.data),
        stack: 'foo',
      }),
      'serialized error matches expected result',
    )
  })

  it('include stack: non-string stack present', () => {
    const result = serializeError(Object.assign({}, validError1, { stack: 2 }), {
      shouldIncludeStack: true,
    })
    assert(
      dequal(result, {
        code: 4001,
        message: validError1.message,
        data: Object.assign({}, validError1.data),
      }),
      'serialized error matches expected result',
    )
  })
})
