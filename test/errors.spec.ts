/* tslint:disable no-invalid-this */
import * as assert from 'assert'

const dequal = require('fast-deep-equal')

import * as flureeErrors from '../src/errors'

import { FlureeRpcError, FlureeProviderError } from '../src/classes'

import { ERROR_CODES } from '../src/errors'

import { getMessageFromCode } from '../src/utils'

const rpcCodes = ERROR_CODES.rpc
const providerCodes = ERROR_CODES.provider
import { JSON_RPC_SERVER_ERROR_MESSAGE as serverErrorMessage } from '../src/utils'

const rpcCodeValues = Object.values(rpcCodes)

const dummyData = { foo: 'bar' }

const SERVER_ERROR_CODE = -32098
const CUSTOM_ERROR_CODE = 1001
const CUSTOM_ERROR_MESSAGE = 'foo'

describe('Errors test', () => {
  it('ensure exported object accepts a single string argument where appropriate', () => {
    let err = flureeErrors.rpc.invalidInput(CUSTOM_ERROR_MESSAGE)
    assert.strictEqual(err.code, ERROR_CODES.rpc.invalidInput, 'code is as expected')
    assert.strictEqual(err.message, CUSTOM_ERROR_MESSAGE, 'message is as expected')

    err = flureeErrors.provider.unauthorized(CUSTOM_ERROR_MESSAGE)
    assert.strictEqual(err.code, ERROR_CODES.provider.unauthorized, 'code is as expected')
    assert.strictEqual(err.message, CUSTOM_ERROR_MESSAGE, 'message is as expected')
  })

  it('custom provider error options', () => {
    assert.throws(
      function() {
        flureeErrors.provider.custom('bar')
      },
      /Fluree Provider custom errors must/u,
      'does not accept non-object argument',
    )

    assert.throws(
      function() {
        flureeErrors.provider.custom({ code: 4009, message: 2 })
      },
      /"message" must be/u,
      'does not accept nonstring message',
    )

    assert.throws(
      function() {
        flureeErrors.provider.custom({ code: 4009, message: '' })
      },
      /"message" must be/u,
      'does not accept empty message',
    )

    flureeErrors.provider.custom({ code: 4009, message: 'foo' })
  })

  it('server rpc error options', () => {
    assert.throws(
      function() {
        flureeErrors.rpc.server('bar')
      },
      /Fluree RPC Server errors must/u,
      'does not accept non-object argument',
    )

    assert.throws(
      function() {
        flureeErrors.rpc.server({ code: 'bar' })
      },
      /"code" must be/u,
      'does not accept non-string code',
    )

    assert.throws(
      function() {
        flureeErrors.rpc.server({ code: 1 })
      },
      /"code" must be/u,
      'does not accept out-of-range code',
    )

    flureeErrors.rpc.server({ code: -32008, message: 'foo' })
  })

  // we just iterate over all keys on the errors object and call and check
  // each error in turn
  it('test exported object for correctness', () => {
    it('Begin: Fluree RPC', () =>
      Object.keys(flureeErrors.rpc).forEach(k => {
        if (k === 'server') {
          validateError(
            flureeErrors.rpc[k]({
              code: SERVER_ERROR_CODE,
              message: null,
              data: Object.assign({}, dummyData),
            }),
            k,
            dummyData,
          )
        } else {
          validateError(
            flureeErrors.rpc[k]({
              message: null,
              data: Object.assign({}, dummyData),
            }),
            k,
            dummyData,
          )
        }
      }))

    it('Begin: Fluree Provider', () =>
      Object.keys(flureeErrors.provider).forEach(k => {
        if (k === 'custom') {
          validateError(
            flureeErrors.provider[k]({
              code: CUSTOM_ERROR_CODE,
              message: CUSTOM_ERROR_MESSAGE,
              data: Object.assign({}, dummyData),
            }),
            k,
            dummyData,
            true,
          )
        } else {
          validateError(
            flureeErrors.provider[k]({
              message: null,
              data: Object.assign({}, dummyData),
            }),
            k,
            dummyData,
            true,
          )
        }
      }))
  })

  function validateError(err: any, key: string, data: any, isProvider: Boolean = false) {
    assert.ok(
      err instanceof Error && err instanceof FlureeRpcError && isProvider
        ? err instanceof FlureeProviderError
        : true,
      'error has correct inheritance',
    )
    assert.ok(Number.isInteger(err.code), 'code is an integer')
    assert.ok(err.message && typeof err.message === 'string', 'message is a string')
    assert.ok(dequal(err.data, data), 'data is as provided')

    if (err instanceof FlureeProviderError) {
      assert.ok(err.code >= 1000 && err.code < 5000, 'code has valid value')

      if (key === 'custom') {
        assert.ok(
          err.code === CUSTOM_ERROR_CODE && err.message === CUSTOM_ERROR_MESSAGE,
          'code and message values correspond for error type',
        )
      } else {
        assert.ok(
          err.code === providerCodes[key] && err.message === getMessageFromCode(providerCodes[key]),
          'code and message values correspond for error type',
        )
      }
    } else if (err instanceof FlureeRpcError) {
      assert.ok(
        rpcCodeValues.includes(err.code) || (err.code <= -32000 && err.code >= -32099),
        'code has valid value',
      )

      if (key === 'server') {
        assert.ok(
          err.code <= -32000 && err.code >= -32099 && err.message === serverErrorMessage,
          'code and message values correspond for error type',
        )
      } else {
        assert.ok(
          err.code === rpcCodes[key] && err.message === getMessageFromCode(rpcCodes[key]),
          'code and message values correspond for error type',
        )
      }
    }
  }
})
