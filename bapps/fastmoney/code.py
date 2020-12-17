import sys, json, pathlib;

APP_PATH = "/home/nick/res/blockumulus/yos-repo/blockumulus/bapps/fastmoney"

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

def submit_transaction(tid, src, dst, amount):
    if not transaction_exists(tid):
        f = open(f"{APP_PATH}/data/transactions/{tid}", "w+")
        src_balance = get_balance(src)
        dst_balance = get_balance(dst)

        if src_balance >= amount:
            set_balance(src, src_balance - amount)
            set_balance(dst, dst_balance + amount)

        f.write(f"{src} -> {dst}: {amount}")
        f.close()
        return True
    else:
        return False

def main():
    if sys.argv[1] == "balance":
        print(get_balance(sys.argv[2]))
    elif sys.argv[1] == "transfer":
        print(submit_transaction(sys.argv[2], sys.argv[3], sys.argv[4], int(sys.argv[5])))
    else:
        print("False")    

main()