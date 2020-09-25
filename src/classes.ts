const safeStringify = require('fast-safe-stringify')

/**
 * @class JsonRpcError
 * Error subclass implementing JSON RPC 2.0 errors and Fluree RPC errors
 * Permits any integer error code.
 */
export class FlureeRpcError extends Error {
  code: Number
  data: any

  /**
   * Create an Fluree JSON RPC error.
   *
   * @param {Number} code - The integer error code.
   * @param {string} message - The string message.
   * @param {any} [data] - The error data.
   */
  constructor(code: number, message: string, data: any) {
    super(message)
    if (!Number.isInteger(code)) {
      throw new Error('"code" must be an integer.')
    }
    if (!message || typeof message !== 'string') {
      throw new Error('"message" must be a nonempty string.')
    }

    this.code = code
    if (data !== undefined) {
      this.data = data
    }
  }

  /**
   * Returns a plain object with all public class properties.
   *
   * @returns {object} The serialized error.
   */
  public serialize() {
    const serialized: any = {
      code: this.code,
      message: this.message,
    }
    if (this.data !== undefined) {
      serialized['data'] = this.data
    }
    if (this.stack) {
      serialized['stack'] = this.stack
    }
    return serialized
  }

  /**
   * Return a string representation of the serialized error, omitting
   * any circular references.
   *
   * @returns {string} The serialized error as a string.
   */
  toString() {
    return safeStringify(this.serialize(), stringifyReplacer, 2)
  }
}

/**
 * @class FlureeRpcError
 * Error subclass implementing Fluree Provider errors .
 * Permits integer error codes in the [ 1000 <= 4999 ] range.
 */
export class FlureeProviderError extends FlureeRpcError {
  /**
   * Create an Fluree JSON RPC error.
   *
   * @param {number} code - The integer error code, in the [ 1000 <= 4999 ] range.
   * @param {string} message - The string message.
   * @param {any} [data] - The error data.
   */
  constructor(code: number, message: string, data: any) {
    super(code, message, data)

    if (!isValidFlureeProviderCode(code)) {
      throw new Error('"code" must be an integer such that: 1000 <= code <= 4999')
    }
  }
}

// Internal

function isValidFlureeProviderCode(code: number) {
  return Number.isInteger(code) && code >= 1000 && code <= 4999
}

function stringifyReplacer(_: any, value: string) {
  if (value === '[Circular]') {
    return undefined
  }
  return value
}
