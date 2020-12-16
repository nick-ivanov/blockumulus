import sys, json, pathlib;


def get_balance(wallet):
    try:
        f = open(f"data/balances/{wallet}", 'r')
        balance = int(f.read())
        return balance
    except:
        return -1
    finally:
        f.close()

def set_balance(wallet, balance):
    try:
        f = open(f"data/balances/{wallet}", 'w+')
        f.write(str(balance))
        return True
    except:
        return False
    finally:
        f.close()

    return False



def transaction_exists(tid):
    f = pathlib.Path(f"data/transactions/{tid}")
    if f.exists ():
        return True
    else:
        return False

def submit_transaction(tid, src, dst, amount):    
    f = open(f"data/transactions/{tid}", "w+")
    f.write(f"{src} -> {dst}: {amount}")
    f.close()



def main():
    #data = json.load(sys.stdin)
    #print(json.dumps(data))



    print(transaction_exists("blah"))

    print(get_balance("blah"))

    print(set_balance("abc", 123))

main()