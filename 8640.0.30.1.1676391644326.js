"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[8640],{48640:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__='import { BytesLike, Signature, SignatureLike } from "@ethersproject/bytes";\nexport declare class SigningKey {\n    readonly curve: string;\n    readonly privateKey: string;\n    readonly publicKey: string;\n    readonly compressedPublicKey: string;\n    readonly _isSigningKey: boolean;\n    constructor(privateKey: BytesLike);\n    _addPoint(other: BytesLike): string;\n    signDigest(digest: BytesLike): Signature;\n    computeSharedSecret(otherKey: BytesLike): string;\n    static isSigningKey(value: any): value is SigningKey;\n}\nexport declare function recoverPublicKey(digest: BytesLike, signature: SignatureLike): string;\nexport declare function computePublicKey(key: BytesLike, compressed?: boolean): string;\n//# sourceMappingURL=index.d.ts.map'}}]);