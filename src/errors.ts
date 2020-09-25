import { FlureeRpcError, FlureeProviderError } from './classes'
import { getMessageFromCode } from './utils'
export const ERROR_CODES = require('./errorCodes.json')

export const rpc: any = {
  /**
   * Get a JSON RPC 2.0 Parse (-32700) error.
   *
   * @param {Object|string} [opts] - Options object or error message string
   * @param {string} [opts.message] - The error message
   * @param {any} [opts.data] - Error data
   * @returns {FlureeRpcError} The error
   */
  parse: (opts: Object | string) => getFlureeJsonRpcError(ERROR_CODES.rpc.parse, opts),

  /**
   * Get a JSON RPC 2.0 Invalid Request (-32600) error.
   *
   * @param {Object|string} [opts] - Options object or error message string
   * @param {string} [opts.message] - The error message
   * @param {any} [opts.data] - Error data
   * @returns {FlureeRpcError} The error
   */
  invalidRequest: (opts: Object | string) =>
    getFlureeJsonRpcError(ERROR_CODES.rpc.invalidRequest, opts),

  /**
   * Get a JSON RPC 2.0 Invalid Params (-32602) error.
   *
   * @param {Object|string} [opts] - Options object or error message string
   * @param {string} [opts.message] - The error message
   * @param {any} [opts.data] - Error data
   * @returns {FlureeRpcError} The error
   */
  invalidParams: (opts: Object | string) =>
    getFlureeJsonRpcError(ERROR_CODES.rpc.invalidParams, opts),

  /**
   * Get a JSON RPC 2.0 Method Not Found (-32601) error.
   *
   * @param {Object|string} [opts] - Options object or error message string
   * @param {string} [opts.message] - The error message
   * @param {any} [opts.data] - Error data
   * @returns {FlureeRpcError} The error
   */
  methodNotFound: (opts: Object | string) =>
    getFlureeJsonRpcError(ERROR_CODES.rpc.methodNotFound, opts),

  /**
   * Get a JSON RPC 2.0 Internal (-32603) error.
   *
   * @param {Object|string} [opts] - Options object or error message string
   * @param {string} [opts.message] - The error message
   * @param {any} [opts.data] - Error data
   * @returns {FlureeRpcError} The error
   */
  internal: (opts: Object | string) => getFlureeJsonRpcError(ERROR_CODES.rpc.internal, opts),

  /**
   * Get a JSON RPC 2.0 Server error.
   * Permits integer error codes in the [ -32099 <= -32008 ] range.
   * Codes -32000 through -32007 are reserved
   *
   * @param {Object|string} opts - Options object
   * @param {number} opts.code - The error code
   * @param {string} [opts.message] - The error message
   * @param {any} [opts.data] - Error data
   * @returns {FlureeRpcError} The error
   */
  server: (opts: any) => {
    if (!opts || typeof opts !== 'object' || Array.isArray(opts)) {
      throw new Error('Fluree RPC Server errors must provide single object argument.')
    }
    const { code } = opts
    if (!Number.isInteger(code) || code > -32007 || code < -32099) {
      throw new Error('"code" must be an integer such that: -32099 <= code <= -32008')
    }
    return getFlureeJsonRpcError(code, opts)
  },

  /**
   * Get an Fluree JSON RPC Invalid Input (-32000) error.
   *
   * @param {Object|string} [opts] - Options object or error message string
   * @param {string} [opts.message] - The error message
   * @param {any} [opts.data] - Error data
   * @returns {FlureeRpcError} The error
   */
  invalidInput: (opts: Object | string) =>
    getFlureeJsonRpcError(ERROR_CODES.rpc.invalidInput, opts),

  /**
   * Get an Fluree JSON RPC Resource Not Found (-32001) error.
   *
   * @param {Object|string} [opts] - Options object or error message string
   * @param {string} [opts.message] - The error message
   * @param {any} [opts.data] - Error data
   * @returns {FlureeRpcError} The error
   */
  resourceNotFound: (opts: Object | string) =>
    getFlureeJsonRpcError(ERROR_CODES.rpc.resourceNotFound, opts),

  /**
   * Get an Fluree JSON RPC Resource Unavailable (-32002) error.
   *
   * @param {Object|string} [opts] - Options object or error message string
   * @param {string} [opts.message] - The error message
   * @param {any} [opts.data] - Error data
   * @returns {FlureeRpcError} The error
   */
  resourceUnavailable: (opts: Object | string) =>
    getFlureeJsonRpcError(ERROR_CODES.rpc.resourceUnavailable, opts),

  /**
   * Get an Fluree JSON RPC Transaction Rejected (-32003) error.
   *
   * @param {Object|string} [opts] - Options object or error message string
   * @param {string} [opts.message] - The error message
   * @param {any} [opts.data] - Error data
   * @returns {FlureeRpcError} The error
   */
  transactionRejected: (opts: Object | string) =>
    getFlureeJsonRpcError(ERROR_CODES.rpc.transactionRejected, opts),

  /**
   * Get an Fluree JSON RPC Query Rejected (-32004) error.
   *
   * @param {Object|string} [opts] - Options object or error message string
   * @param {string} [opts.message] - The error message
   * @param {any} [opts.data] - Error data
   * @returns {FlureeRpcError} The error
   */
  queryRejected: (opts: Object | string) =>
    getFlureeJsonRpcError(ERROR_CODES.rpc.queryRejected, opts),

  /**
   * Get an Fluree JSON RPC Request Rejected (-32005) error.
   *
   * @param {Object|string} [opts] - Options object or error message string
   * @param {string} [opts.message] - The error message
   * @param {any} [opts.data] - Error data
   * @returns {FlureeRpcError} The error
   */
  requestRejected: (opts: Object | string) =>
    getFlureeJsonRpcError(ERROR_CODES.rpc.requestRejected, opts),

  /**
   * Get an Fluree JSON RPC Method Not Supported (-32006) error.
   *
   * @param {Object|string} [opts] - Options object or error message string
   * @param {string} [opts.message] - The error message
   * @param {any} [opts.data] - Error data
   * @returns {FlureeRpcError} The error
   */
  methodNotSupported: (opts: Object | string) =>
    getFlureeJsonRpcError(ERROR_CODES.rpc.methodNotSupported, opts),

  /**
   * Get an Fluree JSON RPC Limit Exceeded (-32007) error.
   *
   * @param {Object|string} [opts] - Options object or error message string
   * @param {string} [opts.message] - The error message
   * @param {any} [opts.data] - Error data
   * @returns {FlureeRpcError} The error
   */
  limitExceeded: (opts: Object | string) =>
    getFlureeJsonRpcError(ERROR_CODES.rpc.limitExceeded, opts),
}

export const provider: any = {
  /**
   * Get an Fluree Provider User Rejected Request (4001) error.
   *
   * @param {Object|string} [opts] - Options object or error message string
   * @param {string} [opts.message] - The error message
   * @param {any} [opts.data] - Error data
   * @returns {FlureeProviderError} The error
   */
  userRejectedRequest: (opts: Object | string) => {
    return getFlureeProviderError(ERROR_CODES.provider.userRejectedRequest, opts)
  },

  /**
   * Get an Fluree Provider Unauthorized (4100) error.
   *
   * @param {Object|string} [opts] - Options object or error message string
   * @param {string} [opts.message] - The error message
   * @param {any} [opts.data] - Error data
   * @returns {FlureeProviderError} The error
   */
  unauthorized: (opts: Object | string) => {
    return getFlureeProviderError(ERROR_CODES.provider.unauthorized, opts)
  },

  /**
   * Get an Fluree Provider Unsupported Method (4200) error.
   *
   * @param {Object|string} [opts] - Options object or error message string
   * @param {string} [opts.message] - The error message
   * @param {any} [opts.data] - Error data
   * @returns {FlureeProviderError} The error
   */
  unsupportedMethod: (opts: Object | string) => {
    return getFlureeProviderError(ERROR_CODES.provider.unsupportedMethod, opts)
  },

  /**
   * Get an Fluree Provider Not Connected (4900) error.
   *
   * @param {Object|string} [opts] - Options object or error message string
   * @param {string} [opts.message] - The error message
   * @param {any} [opts.data] - Error data
   * @returns {FlureeProviderError} The error
   */
  disconnected: (opts: Object | string) => {
    return getFlureeProviderError(ERROR_CODES.provider.disconnected, opts)
  },

  /**
   * Get an Fluree Provider Database Not Connected (4901) error.
   *
   * @param {Object|string} [opts] - Options object or error message string
   * @param {string} [opts.message] - The error message
   * @param {any} [opts.data] - Error data
   * @returns {FlureeProviderError} The error
   */
  databaseDisconnected: (opts: Object | string) => {
    return getFlureeProviderError(ERROR_CODES.provider.databaseDisconnected, opts)
  },

  /**
   * Get a custom Fluree Provider error.
   *
   * @param {Object|string} opts - Options object
   * @param {number} opts.code - The error code
   * @param {string} opts.message - The error message
   * @param {any} [opts.data] - Error data
   * @returns {FlureeProviderError} The error
   */
  custom: (opts: any) => {
    if (!opts || typeof opts !== 'object' || Array.isArray(opts)) {
      throw new Error('Fluree Provider custom errors must provide single object argument.')
    }
    const { code, message, data } = opts
    if (!message || typeof message !== 'string') {
      throw new Error('"message" must be a nonempty string')
    }
    return new FlureeProviderError(code, message, data)
  },
}

// Internal

function getFlureeJsonRpcError(code: number, opts: Object | string) {
  const [message, data] = validateOpts(opts)
  return new FlureeRpcError(code, message || getMessageFromCode(code), data)
}

function getFlureeProviderError(code: number, opts: Object | string) {
  const [message, data] = validateOpts(opts)
  return new FlureeProviderError(code, message || getMessageFromCode(code), data)
}

function validateOpts(opts: any) {
  if (opts) {
    if (typeof opts === 'string') {
      return [opts]
    } else if (typeof opts === 'object' && !Array.isArray(opts)) {
      const { message, data } = opts
      return [message, data]
    }
  }
  return []
}

export const flureeErrors: any = {
  rpc: rpc,
  provider: provider,
}
