def machine():
    keys = 'abcdefghijklmnopqrstuvwxyz !'
    value = keys[-1] + keys[0:-1]

    encryptDict = dict(zip(keys,value))
    decryptDict = dict(zip(value,keys))


    message = input("enter your message")
    mode = input("enter the mode : encode(E) or Decode(D)")

    if mode.upper()== 'E':
        newMessage = ''.join([encryptDict[letter]
                              for letter in message.lower()])
    elif mode.upper()== 'D':
        newMessage = ''.join([decryptDict[letter]
                              for letter in message.lower()])
    else:
        print("enter the correct form")

    return newMessage.capitalize()

print(machine())
        