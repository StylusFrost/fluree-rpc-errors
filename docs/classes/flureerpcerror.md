[fluree-rpc-errors](../README.md) > [FlureeRpcError](../classes/flureerpcerror.md)

# Class: FlureeRpcError

## Hierarchy

`Error`

**↳ FlureeRpcError**

↳ [FlureeProviderError](flureeprovidererror.md)

## Index

### Constructors

- [constructor](flureerpcerror.md#constructor)

### Properties

- [code](flureerpcerror.md#code)
- [data](flureerpcerror.md#data)
- [message](flureerpcerror.md#message)
- [name](flureerpcerror.md#name)
- [stack](flureerpcerror.md#stack)
- [Error](flureerpcerror.md#error)

### Methods

- [serialize](flureerpcerror.md#serialize)
- [toString](flureerpcerror.md#tostring)

---

## Constructors

<a id="constructor"></a>

### constructor

⊕ **new FlureeRpcError**(code: _`number`_, message: _`string`_, data: _`any`_): [FlureeRpcError](flureerpcerror.md)

_Defined in classes.ts:10_

**Parameters:**

| Name    | Type     | Description             |
| ------- | -------- | ----------------------- |
| code    | `number` | The integer error code. |
| message | `string` | The string message.     |
| data    | `any`    |

**Returns:** [FlureeRpcError](flureerpcerror.md)

---

## Properties

<a id="code"></a>

### code

**● code**: _`Number`_

_Defined in classes.ts:9_

---

<a id="data"></a>

### data

**● data**: _`any`_

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

<a id="error"></a>

### `<Static>` Error

**● Error**: _`ErrorConstructor`_

_Defined in /Users/te02416/code/javascript/metafluree/fluree-rpc-errors/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:974_

---

## Methods

<a id="serialize"></a>

### serialize

▸ **serialize**(): `any`

_Defined in classes.ts:39_

**Returns:** `any`
The serialized error.

---

<a id="tostring"></a>

### toString

▸ **toString**(): `any`

_Defined in classes.ts:59_

**Returns:** `any`
The serialized error as a string.

---
