# fluree-rpc-errors

## Index

### Classes

- [FlureeProviderError](classes/flureeprovidererror.md)
- [FlureeRpcError](classes/flureerpcerror.md)

### Variables

- [ERROR_CODES](#error_codes)
- [JSON_RPC_SERVER_ERROR_MESSAGE](#json_rpc_server_error_message)

### Functions

- [getMessageFromCode](#getmessagefromcode)
- [isValidCode](#isvalidcode)
- [serializeError](#serializeerror)

### Object literals

- [flureeErrors](#flureeerrors)
- [provider](#provider)
- [rpc](#rpc)

---

## Variables

<a id="error_codes"></a>

### `<Const>` ERROR_CODES

**● ERROR_CODES**: _`any`_ = require('./errorCodes.json')

_Defined in [errors.ts:3](https://github.com/StylusFrost/fluree-rpc-errors/blob/9a9ba6a/src/errors.ts#L3)_

---

<a id="json_rpc_server_error_message"></a>

### `<Const>` JSON_RPC_SERVER_ERROR_MESSAGE

**● JSON_RPC_SERVER_ERROR_MESSAGE**: _"Unspecified server error."_ = "Unspecified server error."

_Defined in [utils.ts:5](https://github.com/StylusFrost/fluree-rpc-errors/blob/9a9ba6a/src/utils.ts#L5)_

---

## Functions

<a id="getmessagefromcode"></a>

### getMessageFromCode

▸ **getMessageFromCode**(code: _`number`_, fallbackMessage?: _`string`_): `any`

_Defined in [utils.ts:22](https://github.com/StylusFrost/fluree-rpc-errors/blob/9a9ba6a/src/utils.ts#L22)_

**Parameters:**

| Name                            | Type     | Default value    | Description            |
| ------------------------------- | -------- | ---------------- | ---------------------- |
| code                            | `number` | -                | The integer error code |
| `Default value` fallbackMessage | `string` | FALLBACK_MESSAGE | The fallback message   |

**Returns:** `any`
The corresponding message or the fallback message

---

<a id="isvalidcode"></a>

### isValidCode

▸ **isValidCode**(code: _`number`_): `boolean`

_Defined in [utils.ts:43](https://github.com/StylusFrost/fluree-rpc-errors/blob/9a9ba6a/src/utils.ts#L43)_

**Parameters:**

| Name | Type     | Description       |
| ---- | -------- | ----------------- |
| code | `number` | The code to check |

**Returns:** `boolean`
true if the code is valid, false otherwise.

---

<a id="serializeerror"></a>

### serializeError

▸ **serializeError**(error: _`any`_, \_\_namedParameters?: _`object`_): `any`

_Defined in [utils.ts:74](https://github.com/StylusFrost/fluree-rpc-errors/blob/9a9ba6a/src/utils.ts#L74)_

**Parameters:**

| Name                                | Type     | Default value | Description             |
| ----------------------------------- | -------- | ------------- | ----------------------- |
| error                               | `any`    | -             | The error to serialize. |
| `Default value` \_\_namedParameters | `object` | {}            |

**Returns:** `any`
A standardized, plain error object.

---

## Object literals

<a id="flureeerrors"></a>

### `<Const>` flureeErrors

**flureeErrors**: _`object`_

_Defined in [errors.ts:276](https://github.com/StylusFrost/fluree-rpc-errors/blob/9a9ba6a/src/errors.ts#L276)_

<a id="flureeerrors.provider"></a>

#### provider

**● provider**: _`any`_ = provider

_Defined in [errors.ts:278](https://github.com/StylusFrost/fluree-rpc-errors/blob/9a9ba6a/src/errors.ts#L278)_

---

<a id="flureeerrors.rpc"></a>

#### rpc

**● rpc**: _`any`_ = rpc

_Defined in [errors.ts:277](https://github.com/StylusFrost/fluree-rpc-errors/blob/9a9ba6a/src/errors.ts#L277)_

---

---

<a id="provider"></a>

### `<Const>` provider

**provider**: _`object`_

_Defined in [errors.ts:170](https://github.com/StylusFrost/fluree-rpc-errors/blob/9a9ba6a/src/errors.ts#L170)_

<a id="provider.custom"></a>

#### custom

▸ **custom**(opts: _`any`_): [FlureeProviderError](classes/flureeprovidererror.md)

_Defined in [errors.ts:240](https://github.com/StylusFrost/fluree-rpc-errors/blob/9a9ba6a/src/errors.ts#L240)_

**Parameters:**

| Name | Type  | Description    |
| ---- | ----- | -------------- |
| opts | `any` | Options object |

**Returns:** [FlureeProviderError](classes/flureeprovidererror.md)
The error

---

<a id="provider.databasedisconnected"></a>

#### databaseDisconnected

▸ **databaseDisconnected**(opts: _`Object` \| `string`_): [FlureeProviderError](classes/flureeprovidererror.md)

_Defined in [errors.ts:227](https://github.com/StylusFrost/fluree-rpc-errors/blob/9a9ba6a/src/errors.ts#L227)_

**Parameters:**

| Name | Type                 |
| ---- | -------------------- |
| opts | `Object` \| `string` |

**Returns:** [FlureeProviderError](classes/flureeprovidererror.md)
The error

---

<a id="provider.disconnected"></a>

#### disconnected

▸ **disconnected**(opts: _`Object` \| `string`_): [FlureeProviderError](classes/flureeprovidererror.md)

_Defined in [errors.ts:215](https://github.com/StylusFrost/fluree-rpc-errors/blob/9a9ba6a/src/errors.ts#L215)_

**Parameters:**

| Name | Type                 |
| ---- | -------------------- |
| opts | `Object` \| `string` |

**Returns:** [FlureeProviderError](classes/flureeprovidererror.md)
The error

---

<a id="provider.unauthorized"></a>

#### unauthorized

▸ **unauthorized**(opts: _`Object` \| `string`_): [FlureeProviderError](classes/flureeprovidererror.md)

_Defined in [errors.ts:191](https://github.com/StylusFrost/fluree-rpc-errors/blob/9a9ba6a/src/errors.ts#L191)_

**Parameters:**

| Name | Type                 |
| ---- | -------------------- |
| opts | `Object` \| `string` |

**Returns:** [FlureeProviderError](classes/flureeprovidererror.md)
The error

---

<a id="provider.unsupportedmethod"></a>

#### unsupportedMethod

▸ **unsupportedMethod**(opts: _`Object` \| `string`_): [FlureeProviderError](classes/flureeprovidererror.md)

_Defined in [errors.ts:203](https://github.com/StylusFrost/fluree-rpc-errors/blob/9a9ba6a/src/errors.ts#L203)_

**Parameters:**

| Name | Type                 |
| ---- | -------------------- |
| opts | `Object` \| `string` |

**Returns:** [FlureeProviderError](classes/flureeprovidererror.md)
The error

---

<a id="provider.userrejectedrequest"></a>

#### userRejectedRequest

▸ **userRejectedRequest**(opts: _`Object` \| `string`_): [FlureeProviderError](classes/flureeprovidererror.md)

_Defined in [errors.ts:179](https://github.com/StylusFrost/fluree-rpc-errors/blob/9a9ba6a/src/errors.ts#L179)_

**Parameters:**

| Name | Type                 |
| ---- | -------------------- |
| opts | `Object` \| `string` |

**Returns:** [FlureeProviderError](classes/flureeprovidererror.md)
The error

---

---

<a id="rpc"></a>

### `<Const>` rpc

**rpc**: _`object`_

_Defined in [errors.ts:5](https://github.com/StylusFrost/fluree-rpc-errors/blob/9a9ba6a/src/errors.ts#L5)_

<a id="rpc.internal"></a>

#### internal

▸ **internal**(opts: _`Object` \| `string`_): [FlureeRpcError](classes/flureerpcerror.md)

_Defined in [errors.ts:57](https://github.com/StylusFrost/fluree-rpc-errors/blob/9a9ba6a/src/errors.ts#L57)_

**Parameters:**

| Name | Type                 |
| ---- | -------------------- |
| opts | `Object` \| `string` |

**Returns:** [FlureeRpcError](classes/flureerpcerror.md)
The error

---

<a id="rpc.invalidinput"></a>

#### invalidInput

▸ **invalidInput**(opts: _`Object` \| `string`_): [FlureeRpcError](classes/flureerpcerror.md)

_Defined in [errors.ts:89](https://github.com/StylusFrost/fluree-rpc-errors/blob/9a9ba6a/src/errors.ts#L89)_

**Parameters:**

| Name | Type                 |
| ---- | -------------------- |
| opts | `Object` \| `string` |

**Returns:** [FlureeRpcError](classes/flureerpcerror.md)
The error

---

<a id="rpc.invalidparams"></a>

#### invalidParams

▸ **invalidParams**(opts: _`Object` \| `string`_): [FlureeRpcError](classes/flureerpcerror.md)

_Defined in [errors.ts:35](https://github.com/StylusFrost/fluree-rpc-errors/blob/9a9ba6a/src/errors.ts#L35)_

**Parameters:**

| Name | Type                 |
| ---- | -------------------- |
| opts | `Object` \| `string` |

**Returns:** [FlureeRpcError](classes/flureerpcerror.md)
The error

---

<a id="rpc.invalidrequest"></a>

#### invalidRequest

▸ **invalidRequest**(opts: _`Object` \| `string`_): [FlureeRpcError](classes/flureerpcerror.md)

_Defined in [errors.ts:24](https://github.com/StylusFrost/fluree-rpc-errors/blob/9a9ba6a/src/errors.ts#L24)_

**Parameters:**

| Name | Type                 |
| ---- | -------------------- |
| opts | `Object` \| `string` |

**Returns:** [FlureeRpcError](classes/flureerpcerror.md)
The error

---

<a id="rpc.limitexceeded"></a>

#### limitExceeded

▸ **limitExceeded**(opts: _`Object` \| `string`_): [FlureeRpcError](classes/flureerpcerror.md)

_Defined in [errors.ts:166](https://github.com/StylusFrost/fluree-rpc-errors/blob/9a9ba6a/src/errors.ts#L166)_

**Parameters:**

| Name | Type                 |
| ---- | -------------------- |
| opts | `Object` \| `string` |

**Returns:** [FlureeRpcError](classes/flureerpcerror.md)
The error

---

<a id="rpc.methodnotfound"></a>

#### methodNotFound

▸ **methodNotFound**(opts: _`Object` \| `string`_): [FlureeRpcError](classes/flureerpcerror.md)

_Defined in [errors.ts:46](https://github.com/StylusFrost/fluree-rpc-errors/blob/9a9ba6a/src/errors.ts#L46)_

**Parameters:**

| Name | Type                 |
| ---- | -------------------- |
| opts | `Object` \| `string` |

**Returns:** [FlureeRpcError](classes/flureerpcerror.md)
The error

---

<a id="rpc.methodnotsupported"></a>

#### methodNotSupported

▸ **methodNotSupported**(opts: _`Object` \| `string`_): [FlureeRpcError](classes/flureerpcerror.md)

_Defined in [errors.ts:155](https://github.com/StylusFrost/fluree-rpc-errors/blob/9a9ba6a/src/errors.ts#L155)_

**Parameters:**

| Name | Type                 |
| ---- | -------------------- |
| opts | `Object` \| `string` |

**Returns:** [FlureeRpcError](classes/flureerpcerror.md)
The error

---

<a id="rpc.parse"></a>

#### parse

▸ **parse**(opts: _`Object` \| `string`_): [FlureeRpcError](classes/flureerpcerror.md)

_Defined in [errors.ts:14](https://github.com/StylusFrost/fluree-rpc-errors/blob/9a9ba6a/src/errors.ts#L14)_

**Parameters:**

| Name | Type                 |
| ---- | -------------------- |
| opts | `Object` \| `string` |

**Returns:** [FlureeRpcError](classes/flureerpcerror.md)
The error

---

<a id="rpc.queryrejected"></a>

#### queryRejected

▸ **queryRejected**(opts: _`Object` \| `string`_): [FlureeRpcError](classes/flureerpcerror.md)

_Defined in [errors.ts:133](https://github.com/StylusFrost/fluree-rpc-errors/blob/9a9ba6a/src/errors.ts#L133)_

**Parameters:**

| Name | Type                 |
| ---- | -------------------- |
| opts | `Object` \| `string` |

**Returns:** [FlureeRpcError](classes/flureerpcerror.md)
The error

---

<a id="rpc.requestrejected"></a>

#### requestRejected

▸ **requestRejected**(opts: _`Object` \| `string`_): [FlureeRpcError](classes/flureerpcerror.md)

_Defined in [errors.ts:144](https://github.com/StylusFrost/fluree-rpc-errors/blob/9a9ba6a/src/errors.ts#L144)_

**Parameters:**

| Name | Type                 |
| ---- | -------------------- |
| opts | `Object` \| `string` |

**Returns:** [FlureeRpcError](classes/flureerpcerror.md)
The error

---

<a id="rpc.resourcenotfound"></a>

#### resourceNotFound

▸ **resourceNotFound**(opts: _`Object` \| `string`_): [FlureeRpcError](classes/flureerpcerror.md)

_Defined in [errors.ts:100](https://github.com/StylusFrost/fluree-rpc-errors/blob/9a9ba6a/src/errors.ts#L100)_

**Parameters:**

| Name | Type                 |
| ---- | -------------------- |
| opts | `Object` \| `string` |

**Returns:** [FlureeRpcError](classes/flureerpcerror.md)
The error

---

<a id="rpc.resourceunavailable"></a>

#### resourceUnavailable

▸ **resourceUnavailable**(opts: _`Object` \| `string`_): [FlureeRpcError](classes/flureerpcerror.md)

_Defined in [errors.ts:111](https://github.com/StylusFrost/fluree-rpc-errors/blob/9a9ba6a/src/errors.ts#L111)_

**Parameters:**

| Name | Type                 |
| ---- | -------------------- |
| opts | `Object` \| `string` |

**Returns:** [FlureeRpcError](classes/flureerpcerror.md)
The error

---

<a id="rpc.server"></a>

#### server

▸ **server**(opts: _`any`_): [FlureeRpcError](classes/flureerpcerror.md)

_Defined in [errors.ts:70](https://github.com/StylusFrost/fluree-rpc-errors/blob/9a9ba6a/src/errors.ts#L70)_

**Parameters:**

| Name | Type  | Description    |
| ---- | ----- | -------------- |
| opts | `any` | Options object |

**Returns:** [FlureeRpcError](classes/flureerpcerror.md)
The error

---

<a id="rpc.transactionrejected"></a>

#### transactionRejected

▸ **transactionRejected**(opts: _`Object` \| `string`_): [FlureeRpcError](classes/flureerpcerror.md)

_Defined in [errors.ts:122](https://github.com/StylusFrost/fluree-rpc-errors/blob/9a9ba6a/src/errors.ts#L122)_

**Parameters:**

| Name | Type                 |
| ---- | -------------------- |
| opts | `Object` \| `string` |

**Returns:** [FlureeRpcError](classes/flureerpcerror.md)
The error

---

---
