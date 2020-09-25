[fluree-rpc-errors](../README.md) > [FlureeProviderError](../classes/flureeprovidererror.md)

# Class: FlureeProviderError

## Hierarchy

↳ [FlureeRpcError](flureerpcerror.md)

**↳ FlureeProviderError**

## Index

### Constructors

- [constructor](flureeprovidererror.md#constructor)

### Properties

- [code](flureeprovidererror.md#code)
- [data](flureeprovidererror.md#data)
- [message](flureeprovidererror.md#message)
- [name](flureeprovidererror.md#name)
- [stack](flureeprovidererror.md#stack)

### Methods

- [serialize](flureeprovidererror.md#serialize)
- [toString](flureeprovidererror.md#tostring)

---

## Constructors

<a id="constructor"></a>

### constructor

⊕ **new FlureeProviderError**(code: _`number`_, message: _`string`_, data: _`any`_): [FlureeProviderError](flureeprovidererror.md)

_Overrides [FlureeRpcError](flureerpcerror.md).[constructor](flureerpcerror.md#constructor)_

_Defined in classes.ts:69_

**Parameters:**

| Name    | Type     | Description                                              |
| ------- | -------- | -------------------------------------------------------- |
| code    | `number` | The integer error code, in the \[ 1000 <= 4999 \] range. |
| message | `string` | The string message.                                      |
| data    | `any`    |

**Returns:** [FlureeProviderError](flureeprovidererror.md)

---

## Properties

<a id="code"></a>

### code

**● code**: _`Number`_

_Inherited from [FlureeRpcError](flureerpcerror.md).[code](flureerpcerror.md#code)_

_Defined in classes.ts:9_

---

<a id="data"></a>

### data

**● data**: _`any`_

_Inherited from [FlureeRpcError](flureerpcerror.md).[data](flureerpcerror.md#data)_

_Defined in classes.ts:10_

---

<a id="message"></a>

### message

**● message**: _`string`_

_Inherited from Error.message_

_Defined in /Users/te02416/code/javascript/metafluree/fluree-rpc-errors/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:964_

---

<a id="name"></a>

### name

**● name**: _`string`_

_Inherited from Error.name_

_Defined in /Users/te02416/code/javascript/metafluree/fluree-rpc-errors/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:963_

---

<a id="stack"></a>

### `<Optional>` stack

**● stack**: _`undefined` \| `string`_

_Inherited from Error.stack_

_Overrides Error.stack_

_Defined in /Users/te02416/code/javascript/metafluree/fluree-rpc-errors/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:965_

---

## Methods

<a id="serialize"></a>

### serialize

▸ **serialize**(): `any`

_Inherited from [FlureeRpcError](flureerpcerror.md).[serialize](flureerpcerror.md#serialize)_

_Defined in classes.ts:39_

**Returns:** `any`
The serialized error.

---

<a id="tostring"></a>

### toString

▸ **toString**(): `any`

_Inherited from [FlureeRpcError](flureerpcerror.md).[toString](flureerpcerror.md#tostring)_

_Defined in classes.ts:59_

**Returns:** `any`
The serialized error as a string.

---
