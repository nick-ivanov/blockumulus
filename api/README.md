# conf
* `read_config(config_json_file)`: read configuration JSON file specified by `config_json_file`, and returns JSON object on success and `null` on failure.

# ecdsa
* `sign_message(message, private_key)`: sign string `message` using Ethereum ECDSA and Ethereum account's private key `private_key`, and return the 130-byte signature in hexadecimal string format.
* `verify_signature(message, signature, address)`: verity the Ethereum ECDSA signature, taking the 130-byte hexadecimal string signature (`signature`) and Ethereum EIP-55-compliant address (`address`) as inputs.

# file
* `read_file(filename)`: read file `filename` and return its contents, or return `null` in case of error.
* `write_file(filename, data)`: write string `data` into the file `filename`, and return `true` on success and `false` on error.

# hash
* `keccak256_hash(message)`: returns Keccak256 hash of `message`.
* `keccak256_hash(message)`: returns Keccak256 hash of `message` without the `0x` prefix.
