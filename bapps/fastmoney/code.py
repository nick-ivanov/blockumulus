import sys, json, pathlib, os, uuid
from web3 import Web3

APP_PATH = "/root/blockumulus/bapps/fastmoney"
#APP_PATH = "/home/nick/res/blockumulus/yos-repo/blockumulus/bapps/fastmoney"

def get_data_snapshot_fingerprint():
    ret = []
    balances = os.listdir(f"{APP_PATH}/data/balances")
    transactions = os.listdir(f"{APP_PATH}/data/transactions")
    ret.extend(balances)
    ret.extend(transactions)
    s = ''.join(sorted(ret, reverse=False))
    return Web3.toHex(Web3.keccak(text=s))

def get_balance(wallet):
    try:
        f = open(f"{APP_PATH}/data/balances/{wallet}", 'r')
        balance = int(f.read())
        return balance
    except:
        return 0
    
def set_balance(wallet, balance):
    try:
        f = open(f"{APP_PATH}/data/balances/{wallet}", 'w+')
        f.write(str(balance))
        return True
    except:
        return False
    finally:
        f.close()

    return False

def transaction_exists(tid):
    f = pathlib.Path(f"{APP_PATH}/data/transactions/{tid}")
    if f.exists ():
        return True
    else:
        return False

def submit_transaction(txn_uuid, from_address, dst, amount):
    if not transaction_exists(txn_uuid):
        f = open(f"{APP_PATH}/data/transactions/{txn_uuid}", "w+")
        src_balance = get_balance(from_address)
        dst_balance = get_balance(dst)

        if src_balance >= amount:
            set_balance(from_address, src_balance - amount)
            set_balance(dst, dst_balance + amount)

        f.write(f"{from_address} -> {dst}: {amount}")
        f.close()
        return txn_uuid
    else:
        return ""

def main():
    if len(sys.argv) < 2:
        return
    elif sys.argv[3] == "fingerprint":
        print(get_data_snapshot_fingerprint())
    elif sys.argv[3] == "balance":
        print(get_balance(sys.argv[2]))
    elif sys.argv[3] == "transfer":
        print(submit_transaction(sys.argv[1], sys.argv[2], sys.argv[4], int(sys.argv[5])))
    else:
        print("False")    

main()