# Prerequisite for Buffers :

-   To understand buffers we need to grasp 4 simple computer science topics;

1. Binary Data :
    - data with 2 possible satates (0 & 1).
2. Binary Numbers :
    - Base 2 Numbers.
3. Hexadecimal Numbers :
    - Base 16 Numbers.
    - eg: {0x456, FF2}
4. Character Sets/Encodings
    - Character Sets :
        - while character sets define the collection of characters that can be represented.
        - eg:- Unicode, ASCII
    - Character Encodings :
        - Character encoding defines the mapping between characters and binary values
        - eg:- 'utf-8'.
        - `0111 0100` in utf-8 is `t` | while same in suppose `x` encoding can be = `5`.

# Buffers:

-   A Buffer is a container in memory that has a fixed length size, that takes in some data and then sends it out.
-   `In rare case we use buffers directly but it is used by other nodejs utilities or apis.`
-   Buffers usually are used to transmit data from one stream to another.
