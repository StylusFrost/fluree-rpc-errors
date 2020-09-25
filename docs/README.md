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

_Defined in errors.ts:3_

---

<a id="json_rpc_server_error_message"></a>

### `<Const>` JSON_RPC_SERVER_ERROR_MESSAGE

**● JSON_RPC_SERVER_ERROR_MESSAGE**: _"Unspecified server error."_ = "Unspecified server error."

_Defined in utils.ts:5_

---

## Functions

<a id="getmessagefromcode"></a>

### getMessageFromCode

▸ **getMessageFromCode**(code: _`number`_, fallbackMessage?: _`string`_): `any`

_Defined in utils.ts:22_

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

_Defined in utils.ts:43_

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

_Defined in utils.ts:74_

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

_Defined in errors.ts:276_

<a id="flureeerrors.provider"></a>

#### provider

**● provider**: _`any`_ = provider

_Defined in errors.ts:278_

---

<a id="flureeerrors.rpc"></a>

#### rpc

**● rpc**: _`any`_ = rpc

_Defined in errors.ts:277_

---

---

<a id="provider"></a>

### `<Const>` provider

**provider**: _`object`_

_Defined in errors.ts:170_

<a id="provider.custom"></a>

#### custom

▸ **custom**(opts: _`any`_): [FlureeProviderError](classes/flureeprovidererror.md)

_Defined in errors.ts:240_

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

_Defined in errors.ts:227_

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

_Defined in errors.ts:215_

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

_Defined in errors.ts:191_

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

_Defined in errors.ts:203_

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

_Defined in errors.ts:179_

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

_Defined in errors.ts:5_

<a id="rpc.internal"></a>

#### internal

▸ **internal**(opts: _`Object` \| `string`_): [FlureeRpcError](classes/flureerpcerror.md)

_Defined in errors.ts:57_

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

_Defined in errors.ts:89_

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

_Defined in errors.ts:35_

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

_Defined in errors.ts:24_

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

_Defined in errors.ts:166_

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

_Defined in errors.ts:46_

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

_Defined in errors.ts:155_

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

_Defined in errors.ts:14_

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

_Defined in errors.ts:133_

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

_Defined in errors.ts:144_

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

_Defined in errors.ts:100_

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

_Defined in errors.ts:111_

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

_Defined in errors.ts:70_

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

_Defined in errors.ts:122_

**Parameters:**

| Name | Type                 |
| ---- | -------------------- |
| opts | `Object` \| `string` |

**Returns:** [FlureeRpcError](classes/flureerpcerror.md)
The error

---

---
