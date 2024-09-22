import { sha256 as hash } from "@noble/hashes/sha256";
import { hmac } from "@noble/hashes/hmac";
import { hexToBytes as nobleHexToBytes, concatBytes } from "@noble/curves/abstract/utils";
import { base64 } from "@scure/base";

export function hmacSha256(key: Uint8Array, ...messages: Uint8Array[]) {
    return hmac(hash, key, concatBytes(...messages));
}

export function base64Encode(data: Uint8Array) {
    return base64.encode(data);
}

export function  hexToBytes(text: string) {
    return nobleHexToBytes(text);
}
