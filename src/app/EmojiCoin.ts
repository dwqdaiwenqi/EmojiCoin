export default {
  "contractName": "EmojiCoin",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "receiver",
          "type": "address"
        },
        {
          "name": "index",
          "type": "uint256"
        },
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "sendEmojis",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "indexes",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "account",
          "type": "address"
        },
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getEmojiBalance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "emojis",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getEmojiSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "index",
          "type": "uint256"
        },
        {
          "name": "supply",
          "type": "uint256"
        }
      ],
      "name": "createEmoji",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    }
  ],
  "bytecode": "0x6060604052341561000f57600080fd5b6104e58061001e6000396000f300606060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806352382ad41461007d57806392f8eb94146100e0578063c9c70fea14610117578063cac9e4331461016d578063f6871f68146101c3578063fd3a4594146101fa575b600080fd5b341561008857600080fd5b6100c6600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001909190505061023e565b604051808215151515815260200191505060405180910390f35b34156100eb57600080fd5b6101016004808035906020019091905050610369565b6040518082815260200191505060405180910390f35b341561012257600080fd5b610157600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610381565b6040518082815260200191505060405180910390f35b341561017857600080fd5b6101ad600480803590602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506103dc565b6040518082815260200191505060405180910390f35b34156101ce57600080fd5b6101e46004808035906020019091905050610401565b6040518082815260200191505060405180910390f35b341561020557600080fd5b610224600480803590602001909190803590602001909190505061041d565b604051808215151515815260200191505060405180910390f35b6000816001600085815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156102a15760009050610362565b816001600085815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816001600085815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550600190505b9392505050565b60006020528060005260406000206000915090505481565b60006001600083815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6001602052816000526040600020602052806000526040600020600091509150505481565b6000806000838152602001908152602001600020549050919050565b60008060008085815260200190815260200160002054111561044257600090506104b3565b8160008085815260200190815260200160002081905550816001600085815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600190505b929150505600a165627a7a72305820914dcbd885ef1eea8d3350779cbd88dad4da12b10ca0aba7fb881aeba2ade2b40029",
  "deployedBytecode": "0x606060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806352382ad41461007d57806392f8eb94146100e0578063c9c70fea14610117578063cac9e4331461016d578063f6871f68146101c3578063fd3a4594146101fa575b600080fd5b341561008857600080fd5b6100c6600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001909190505061023e565b604051808215151515815260200191505060405180910390f35b34156100eb57600080fd5b6101016004808035906020019091905050610369565b6040518082815260200191505060405180910390f35b341561012257600080fd5b610157600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610381565b6040518082815260200191505060405180910390f35b341561017857600080fd5b6101ad600480803590602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506103dc565b6040518082815260200191505060405180910390f35b34156101ce57600080fd5b6101e46004808035906020019091905050610401565b6040518082815260200191505060405180910390f35b341561020557600080fd5b610224600480803590602001909190803590602001909190505061041d565b604051808215151515815260200191505060405180910390f35b6000816001600085815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156102a15760009050610362565b816001600085815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816001600085815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550600190505b9392505050565b60006020528060005260406000206000915090505481565b60006001600083815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6001602052816000526040600020602052806000526040600020600091509150505481565b6000806000838152602001908152602001600020549050919050565b60008060008085815260200190815260200160002054111561044257600090506104b3565b8160008085815260200190815260200160002081905550816001600085815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600190505b929150505600a165627a7a72305820914dcbd885ef1eea8d3350779cbd88dad4da12b10ca0aba7fb881aeba2ade2b40029",
  "sourceMap": "26:815:0:-;;;150:33;;;;;;;;26:815;;;;;;",
  "deployedSourceMap": "26:815:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;380:237;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;718:121;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;89:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;620:95;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;186:191;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;380:237;458:4;500:6;472;:13;479:5;472:13;;;;;;;;;;;:25;486:10;472:25;;;;;;;;;;;;;;;;:34;468:52;;;515:5;508:12;;;;468:52;554:6;525;:13;532:5;525:13;;;;;;;;;;;:25;539:10;525:25;;;;;;;;;;;;;;;;:35;;;;;;;;;;;591:6;564;:13;571:5;564:13;;;;;;;;;;;:23;578:8;564:23;;;;;;;;;;;;;;;;:33;;;;;;;;;;;609:4;602:11;;380:237;;;;;;:::o;49:37::-;;;;;;;;;;;;;;;;;:::o;718:121::-;796:4;813:6;:13;820:5;813:13;;;;;;;;;;;:22;827:7;813:22;;;;;;;;;;;;;;;;806:29;;718:121;;;;:::o;89:57::-;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;620:95::-;680:4;697:7;:14;705:5;697:14;;;;;;;;;;;;690:21;;620:95;;;:::o;186:191::-;247:4;278:1;261:7;:14;269:5;261:14;;;;;;;;;;;;:18;257:36;;;288:5;281:12;;;;257:36;314:6;297:7;:14;305:5;297:14;;;;;;;;;;;:23;;;;352:6;324;:13;331:5;324:13;;;;;;;;;;;:25;338:10;324:25;;;;;;;;;;;;;;;:34;;;;369:4;362:11;;186:191;;;;;:::o",
  "source": "pragma solidity ^0.4.17;\n\ncontract EmojiCoin {\n\n\tmapping (uint => uint) public indexes;\n\tmapping (uint => mapping (address => uint)) public emojis;\n\n\tfunction EmojiCoin() public {\n\n\t}\n\n\tfunction createEmoji(uint index, uint supply) public returns(bool) {\n\t\tif (indexes[index] > 0) return false;\n\t\tindexes[index] = supply;\n\t\temojis[index][msg.sender] = supply;\n\t\treturn true;\n\t}\n\n\tfunction sendEmojis(address receiver, uint index, uint amount) public returns(bool) {\n\t\tif (emojis[index][msg.sender] < amount) return false;\n\n\t\temojis[index][msg.sender] -= amount;\n\t\temojis[index][receiver] += amount;\n\n\t\treturn true;\n\t}\n\n\tfunction getEmojiSupply(uint index) public constant returns(uint) {\n\t\treturn indexes[index];\n\t}\n\n\tfunction getEmojiBalance(address account, uint index) public constant returns(uint) {\n\t\treturn emojis[index][account];\n\t}\n}\n",
  "sourcePath": "/Users/chriscates/Projects/EmojiCoin/contracts/EmojiCoin.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/chriscates/Projects/EmojiCoin/contracts/EmojiCoin.sol",
      "exportedSymbols": {
        "EmojiCoin": [
          121
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".17"
          ]
        },
        "id": 1,
        "name": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            121
          ],
          "name": "EmojiCoin",
          "scope": 122
        },
        "children": [
          {
            "attributes": {
              "constant": false,
              "name": "indexes",
              "scope": 121,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(uint256 => uint256)",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(uint256 => uint256)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 2,
                    "name": "ElementaryTypeName",
                    "src": "58:4:0"
                  },
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 3,
                    "name": "ElementaryTypeName",
                    "src": "66:4:0"
                  }
                ],
                "id": 4,
                "name": "Mapping",
                "src": "49:22:0"
              }
            ],
            "id": 5,
            "name": "VariableDeclaration",
            "src": "49:37:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "emojis",
              "scope": 121,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(uint256 => mapping(address => uint256))",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(uint256 => mapping(address => uint256))"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 6,
                    "name": "ElementaryTypeName",
                    "src": "98:4:0"
                  },
                  {
                    "attributes": {
                      "type": "mapping(address => uint256)"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 7,
                        "name": "ElementaryTypeName",
                        "src": "115:7:0"
                      },
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 8,
                        "name": "ElementaryTypeName",
                        "src": "126:4:0"
                      }
                    ],
                    "id": 9,
                    "name": "Mapping",
                    "src": "106:25:0"
                  }
                ],
                "id": 10,
                "name": "Mapping",
                "src": "89:43:0"
              }
            ],
            "id": 11,
            "name": "VariableDeclaration",
            "src": "89:57:0"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "modifiers": [
                null
              ],
              "name": "EmojiCoin",
              "payable": false,
              "scope": 121,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 12,
                "name": "ParameterList",
                "src": "168:2:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 13,
                "name": "ParameterList",
                "src": "178:0:0"
              },
              {
                "attributes": {
                  "statements": [
                    null
                  ]
                },
                "children": [],
                "id": 14,
                "name": "Block",
                "src": "178:5:0"
              }
            ],
            "id": 15,
            "name": "FunctionDefinition",
            "src": "150:33:0"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "createEmoji",
              "payable": false,
              "scope": 121,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "index",
                      "scope": 50,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 16,
                        "name": "ElementaryTypeName",
                        "src": "207:4:0"
                      }
                    ],
                    "id": 17,
                    "name": "VariableDeclaration",
                    "src": "207:10:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "supply",
                      "scope": 50,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 18,
                        "name": "ElementaryTypeName",
                        "src": "219:4:0"
                      }
                    ],
                    "id": 19,
                    "name": "VariableDeclaration",
                    "src": "219:11:0"
                  }
                ],
                "id": 20,
                "name": "ParameterList",
                "src": "206:25:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 50,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 21,
                        "name": "ElementaryTypeName",
                        "src": "247:4:0"
                      }
                    ],
                    "id": 22,
                    "name": "VariableDeclaration",
                    "src": "247:4:0"
                  }
                ],
                "id": 23,
                "name": "ParameterList",
                "src": "246:6:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": ">",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5,
                                  "type": "mapping(uint256 => uint256)",
                                  "value": "indexes"
                                },
                                "id": 24,
                                "name": "Identifier",
                                "src": "261:7:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 17,
                                  "type": "uint256",
                                  "value": "index"
                                },
                                "id": 25,
                                "name": "Identifier",
                                "src": "269:5:0"
                              }
                            ],
                            "id": 26,
                            "name": "IndexAccess",
                            "src": "261:14:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 27,
                            "name": "Literal",
                            "src": "278:1:0"
                          }
                        ],
                        "id": 28,
                        "name": "BinaryOperation",
                        "src": "261:18:0"
                      },
                      {
                        "attributes": {
                          "functionReturnParameters": 23
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "66616c7365",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "bool",
                              "type": "bool",
                              "value": "false"
                            },
                            "id": 29,
                            "name": "Literal",
                            "src": "288:5:0"
                          }
                        ],
                        "id": 30,
                        "name": "Return",
                        "src": "281:12:0"
                      }
                    ],
                    "id": 31,
                    "name": "IfStatement",
                    "src": "257:36:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5,
                                  "type": "mapping(uint256 => uint256)",
                                  "value": "indexes"
                                },
                                "id": 32,
                                "name": "Identifier",
                                "src": "297:7:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 17,
                                  "type": "uint256",
                                  "value": "index"
                                },
                                "id": 33,
                                "name": "Identifier",
                                "src": "305:5:0"
                              }
                            ],
                            "id": 34,
                            "name": "IndexAccess",
                            "src": "297:14:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 19,
                              "type": "uint256",
                              "value": "supply"
                            },
                            "id": 35,
                            "name": "Identifier",
                            "src": "314:6:0"
                          }
                        ],
                        "id": 36,
                        "name": "Assignment",
                        "src": "297:23:0"
                      }
                    ],
                    "id": 37,
                    "name": "ExpressionStatement",
                    "src": "297:23:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 11,
                                      "type": "mapping(uint256 => mapping(address => uint256))",
                                      "value": "emojis"
                                    },
                                    "id": 38,
                                    "name": "Identifier",
                                    "src": "324:6:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 17,
                                      "type": "uint256",
                                      "value": "index"
                                    },
                                    "id": 39,
                                    "name": "Identifier",
                                    "src": "331:5:0"
                                  }
                                ],
                                "id": 42,
                                "name": "IndexAccess",
                                "src": "324:13:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 133,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 40,
                                    "name": "Identifier",
                                    "src": "338:3:0"
                                  }
                                ],
                                "id": 41,
                                "name": "MemberAccess",
                                "src": "338:10:0"
                              }
                            ],
                            "id": 43,
                            "name": "IndexAccess",
                            "src": "324:25:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 19,
                              "type": "uint256",
                              "value": "supply"
                            },
                            "id": 44,
                            "name": "Identifier",
                            "src": "352:6:0"
                          }
                        ],
                        "id": 45,
                        "name": "Assignment",
                        "src": "324:34:0"
                      }
                    ],
                    "id": 46,
                    "name": "ExpressionStatement",
                    "src": "324:34:0"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 23
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "74727565",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "bool",
                          "type": "bool",
                          "value": "true"
                        },
                        "id": 47,
                        "name": "Literal",
                        "src": "369:4:0"
                      }
                    ],
                    "id": 48,
                    "name": "Return",
                    "src": "362:11:0"
                  }
                ],
                "id": 49,
                "name": "Block",
                "src": "253:124:0"
              }
            ],
            "id": 50,
            "name": "FunctionDefinition",
            "src": "186:191:0"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "sendEmojis",
              "payable": false,
              "scope": 121,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "receiver",
                      "scope": 92,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 51,
                        "name": "ElementaryTypeName",
                        "src": "400:7:0"
                      }
                    ],
                    "id": 52,
                    "name": "VariableDeclaration",
                    "src": "400:16:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "index",
                      "scope": 92,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 53,
                        "name": "ElementaryTypeName",
                        "src": "418:4:0"
                      }
                    ],
                    "id": 54,
                    "name": "VariableDeclaration",
                    "src": "418:10:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "amount",
                      "scope": 92,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 55,
                        "name": "ElementaryTypeName",
                        "src": "430:4:0"
                      }
                    ],
                    "id": 56,
                    "name": "VariableDeclaration",
                    "src": "430:11:0"
                  }
                ],
                "id": 57,
                "name": "ParameterList",
                "src": "399:43:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 92,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 58,
                        "name": "ElementaryTypeName",
                        "src": "458:4:0"
                      }
                    ],
                    "id": 59,
                    "name": "VariableDeclaration",
                    "src": "458:4:0"
                  }
                ],
                "id": 60,
                "name": "ParameterList",
                "src": "457:6:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "<",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 11,
                                      "type": "mapping(uint256 => mapping(address => uint256))",
                                      "value": "emojis"
                                    },
                                    "id": 61,
                                    "name": "Identifier",
                                    "src": "472:6:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 54,
                                      "type": "uint256",
                                      "value": "index"
                                    },
                                    "id": 62,
                                    "name": "Identifier",
                                    "src": "479:5:0"
                                  }
                                ],
                                "id": 63,
                                "name": "IndexAccess",
                                "src": "472:13:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 133,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 64,
                                    "name": "Identifier",
                                    "src": "486:3:0"
                                  }
                                ],
                                "id": 65,
                                "name": "MemberAccess",
                                "src": "486:10:0"
                              }
                            ],
                            "id": 66,
                            "name": "IndexAccess",
                            "src": "472:25:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 56,
                              "type": "uint256",
                              "value": "amount"
                            },
                            "id": 67,
                            "name": "Identifier",
                            "src": "500:6:0"
                          }
                        ],
                        "id": 68,
                        "name": "BinaryOperation",
                        "src": "472:34:0"
                      },
                      {
                        "attributes": {
                          "functionReturnParameters": 60
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "66616c7365",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "bool",
                              "type": "bool",
                              "value": "false"
                            },
                            "id": 69,
                            "name": "Literal",
                            "src": "515:5:0"
                          }
                        ],
                        "id": 70,
                        "name": "Return",
                        "src": "508:12:0"
                      }
                    ],
                    "id": 71,
                    "name": "IfStatement",
                    "src": "468:52:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "-=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 11,
                                      "type": "mapping(uint256 => mapping(address => uint256))",
                                      "value": "emojis"
                                    },
                                    "id": 72,
                                    "name": "Identifier",
                                    "src": "525:6:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 54,
                                      "type": "uint256",
                                      "value": "index"
                                    },
                                    "id": 73,
                                    "name": "Identifier",
                                    "src": "532:5:0"
                                  }
                                ],
                                "id": 76,
                                "name": "IndexAccess",
                                "src": "525:13:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 133,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 74,
                                    "name": "Identifier",
                                    "src": "539:3:0"
                                  }
                                ],
                                "id": 75,
                                "name": "MemberAccess",
                                "src": "539:10:0"
                              }
                            ],
                            "id": 77,
                            "name": "IndexAccess",
                            "src": "525:25:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 56,
                              "type": "uint256",
                              "value": "amount"
                            },
                            "id": 78,
                            "name": "Identifier",
                            "src": "554:6:0"
                          }
                        ],
                        "id": 79,
                        "name": "Assignment",
                        "src": "525:35:0"
                      }
                    ],
                    "id": 80,
                    "name": "ExpressionStatement",
                    "src": "525:35:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "+=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 11,
                                      "type": "mapping(uint256 => mapping(address => uint256))",
                                      "value": "emojis"
                                    },
                                    "id": 81,
                                    "name": "Identifier",
                                    "src": "564:6:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 54,
                                      "type": "uint256",
                                      "value": "index"
                                    },
                                    "id": 82,
                                    "name": "Identifier",
                                    "src": "571:5:0"
                                  }
                                ],
                                "id": 84,
                                "name": "IndexAccess",
                                "src": "564:13:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 52,
                                  "type": "address",
                                  "value": "receiver"
                                },
                                "id": 83,
                                "name": "Identifier",
                                "src": "578:8:0"
                              }
                            ],
                            "id": 85,
                            "name": "IndexAccess",
                            "src": "564:23:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 56,
                              "type": "uint256",
                              "value": "amount"
                            },
                            "id": 86,
                            "name": "Identifier",
                            "src": "591:6:0"
                          }
                        ],
                        "id": 87,
                        "name": "Assignment",
                        "src": "564:33:0"
                      }
                    ],
                    "id": 88,
                    "name": "ExpressionStatement",
                    "src": "564:33:0"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 60
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "74727565",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "bool",
                          "type": "bool",
                          "value": "true"
                        },
                        "id": 89,
                        "name": "Literal",
                        "src": "609:4:0"
                      }
                    ],
                    "id": 90,
                    "name": "Return",
                    "src": "602:11:0"
                  }
                ],
                "id": 91,
                "name": "Block",
                "src": "464:153:0"
              }
            ],
            "id": 92,
            "name": "FunctionDefinition",
            "src": "380:237:0"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getEmojiSupply",
              "payable": false,
              "scope": 121,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "index",
                      "scope": 104,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 93,
                        "name": "ElementaryTypeName",
                        "src": "644:4:0"
                      }
                    ],
                    "id": 94,
                    "name": "VariableDeclaration",
                    "src": "644:10:0"
                  }
                ],
                "id": 95,
                "name": "ParameterList",
                "src": "643:12:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 104,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 96,
                        "name": "ElementaryTypeName",
                        "src": "680:4:0"
                      }
                    ],
                    "id": 97,
                    "name": "VariableDeclaration",
                    "src": "680:4:0"
                  }
                ],
                "id": 98,
                "name": "ParameterList",
                "src": "679:6:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 98
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5,
                              "type": "mapping(uint256 => uint256)",
                              "value": "indexes"
                            },
                            "id": 99,
                            "name": "Identifier",
                            "src": "697:7:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 94,
                              "type": "uint256",
                              "value": "index"
                            },
                            "id": 100,
                            "name": "Identifier",
                            "src": "705:5:0"
                          }
                        ],
                        "id": 101,
                        "name": "IndexAccess",
                        "src": "697:14:0"
                      }
                    ],
                    "id": 102,
                    "name": "Return",
                    "src": "690:21:0"
                  }
                ],
                "id": 103,
                "name": "Block",
                "src": "686:29:0"
              }
            ],
            "id": 104,
            "name": "FunctionDefinition",
            "src": "620:95:0"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getEmojiBalance",
              "payable": false,
              "scope": 121,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "account",
                      "scope": 120,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 105,
                        "name": "ElementaryTypeName",
                        "src": "743:7:0"
                      }
                    ],
                    "id": 106,
                    "name": "VariableDeclaration",
                    "src": "743:15:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "index",
                      "scope": 120,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 107,
                        "name": "ElementaryTypeName",
                        "src": "760:4:0"
                      }
                    ],
                    "id": 108,
                    "name": "VariableDeclaration",
                    "src": "760:10:0"
                  }
                ],
                "id": 109,
                "name": "ParameterList",
                "src": "742:29:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 120,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 110,
                        "name": "ElementaryTypeName",
                        "src": "796:4:0"
                      }
                    ],
                    "id": 111,
                    "name": "VariableDeclaration",
                    "src": "796:4:0"
                  }
                ],
                "id": 112,
                "name": "ParameterList",
                "src": "795:6:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 112
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "mapping(address => uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 11,
                                  "type": "mapping(uint256 => mapping(address => uint256))",
                                  "value": "emojis"
                                },
                                "id": 113,
                                "name": "Identifier",
                                "src": "813:6:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 108,
                                  "type": "uint256",
                                  "value": "index"
                                },
                                "id": 114,
                                "name": "Identifier",
                                "src": "820:5:0"
                              }
                            ],
                            "id": 115,
                            "name": "IndexAccess",
                            "src": "813:13:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 106,
                              "type": "address",
                              "value": "account"
                            },
                            "id": 116,
                            "name": "Identifier",
                            "src": "827:7:0"
                          }
                        ],
                        "id": 117,
                        "name": "IndexAccess",
                        "src": "813:22:0"
                      }
                    ],
                    "id": 118,
                    "name": "Return",
                    "src": "806:29:0"
                  }
                ],
                "id": 119,
                "name": "Block",
                "src": "802:37:0"
              }
            ],
            "id": 120,
            "name": "FunctionDefinition",
            "src": "718:121:0"
          }
        ],
        "id": 121,
        "name": "ContractDefinition",
        "src": "26:815:0"
      }
    ],
    "id": 122,
    "name": "SourceUnit",
    "src": "0:842:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "1515139474344": {
      "events": {},
      "links": {},
      "address": "0x7aadfcd334af4ca5ece363517fcd5c3dfc2920a1"
    },
    "1515538333732": {
      "events": {},
      "links": {},
      "address": "0xaaf3a804f9610b956da476bd7805f81bec785ebb"
    },
    "1515556295469": {
      "events": {},
      "links": {},
      "address": "0xaf582bfe0706f83a00e14d1abaf1abc4aa561408"
    },
    "1515557215128": {
      "events": {},
      "links": {},
      "address": "0x27721550001300dca0cc0bb427075bd79e44e01c"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-01-10T04:11:29.513Z"
}
