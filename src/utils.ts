const errorValues = require('./errorValues')
const FALLBACK_ERROR_CODE = require('./errorCodes.json').rpc.internal
import { FlureeRpcError } from './classes'

export const JSON_RPC_SERVER_ERROR_MESSAGE = 'Unspecified server error.'

const FALLBACK_MESSAGE = 'Unspecified error message. This is a bug, please report it.'

const FALLBACK_ERROR = {
  code: FALLBACK_ERROR_CODE,
  message: getMessageFromCode(FALLBACK_ERROR_CODE),
}

/**
 * Gets the message for a given code, or a fallback message if the code has
 * no corresponding message.
 *
 * @param {number} code - The integer error code
 * @param {string} fallbackMessage - The fallback message
 * @return {string} The corresponding message or the fallback message
 */
export function getMessageFromCode(code: number, fallbackMessage = FALLBACK_MESSAGE) {
  if (Number.isInteger(code)) {
    const codeString = code.toString()

    if (errorValues[codeString]) {
      return errorValues[codeString].message
    }
    if (isJsonRpcServerError(code)) {
      return JSON_RPC_SERVER_ERROR_MESSAGE
    }
  }
  return fallbackMessage
}

/**
 * Returns whether the given code is valid.
 * A code is only valid if it has a message.
 *
 * @param {Number} code - The code to check
 * @return {boolean} true if the code is valid, false otherwise.
 */
export function isValidCode(code: number): boolean {
  if (!Number.isInteger(code)) {
    return false
  }

  const codeString = code.toString()
  if (errorValues[codeString]) {
    return true
  }

  if (isJsonRpcServerError(code)) {
    return true
  }

  return false
}

/**
 * Serializes the given error to an Fluree JSON RPC-compatible error object.
 * Merely copies the given error's values if it is already compatible.
 * If the given error is not fully compatible, it will be preserved on the
 * returned object's data.originalError property.
 *
 * @param {any} error - The error to serialize.
 * @param {Object} [options] - An options object.
 * @param {Object} [options.fallbackError] - The custom fallback error values if
 * the given error is invalid.
 * @param {boolean} [options.shouldIncludeStack] - Whether the 'stack' property
 * of the given error should be included on the serialized error, if present.
 * @return {Object} A standardized, plain error object.
 */
export function serializeError(
  error: any,
  { fallbackError = FALLBACK_ERROR, shouldIncludeStack = false } = {},
) {
  if (
    !fallbackError ||
    !Number.isInteger(fallbackError.code) ||
    typeof fallbackError.message !== 'string'
  ) {
    throw new Error('Must provide fallback error with integer number code and string message.')
  }

  if (error instanceof FlureeRpcError) {
    return error.serialize()
  }

  const serialized: any = {}

  if (error && isValidCode(error.code)) {
    serialized['code'] = error.code

    if (error.message && typeof error.message === 'string') {
      serialized['message'] = error.message
      if ('data' in error) {
        serialized['data'] = error.data
      }
    } else {
      serialized['message'] = getMessageFromCode(serialized['code'])
      serialized['data'] = { originalError: assignOriginalError(error) }
    }
  } else {
    serialized['code'] = fallbackError['code']
    serialized['message'] = error && error.message ? error.message : fallbackError.message
    serialized['data'] = { originalError: assignOriginalError(error) }
  }

  if (shouldIncludeStack && error && typeof error.stack === 'string') {
    serialized['stack'] = error.stack
  }
  return serialized
}

// Internal

function isJsonRpcServerError(code: Number) {
  return code >= -32099 && code <= -32000
}

function assignOriginalError(error: any) {
  if (error && typeof error === 'object' && !Array.isArray(error)) {
    return Object.assign({}, error)
  }
  return error
}
