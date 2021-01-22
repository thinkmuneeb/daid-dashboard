const EthSwap = {
  "contractName": "EthSwap",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "contract Dollar",
          "name": "_token",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "rate",
          "type": "uint256"
        }
      ],
      "name": "TokensPurchased",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "rate",
          "type": "uint256"
        }
      ],
      "name": "TokensSold",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "rate",
      "outputs": [
        {
          "internalType": "uint256",
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
      "inputs": [],
      "name": "token",
      "outputs": [
        {
          "internalType": "contract Dollar",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "buyTokens",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.5.16+commit.9c3226ce\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"contract Dollar\",\"name\":\"_token\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"rate\",\"type\":\"uint256\"}],\"name\":\"TokensPurchased\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"rate\",\"type\":\"uint256\"}],\"name\":\"TokensSold\",\"type\":\"event\"},{\"constant\":false,\"inputs\":[],\"name\":\"buyTokens\",\"outputs\":[],\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"rate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"token\",\"outputs\":[{\"internalType\":\"contract Dollar\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/C/Users/mg/Downloads/tokenswap/tokenswap/src/contracts/EthSwap.sol\":\"EthSwap\"},\"evmVersion\":\"petersburg\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/C/Users/mg/Downloads/tokenswap/tokenswap/src/contracts/DollarDsd.sol\":{\"keccak256\":\"0xfb7f29f501f4c5ba8152feba7c8c0267745fa09de1afbb7586c71bfecabd205c\",\"urls\":[\"bzz-raw://516d0236eb78812e8fdb3634a7f0a91a91263886295ba57cbf09c261a381c123\",\"dweb:/ipfs/QmPD1HjxNMUS1H5NQxB1ynF2F2ZUCA7nGjy2QPEJ1KJcTW\"]},\"/C/Users/mg/Downloads/tokenswap/tokenswap/src/contracts/EthSwap.sol\":{\"keccak256\":\"0x6d0396fa91e4b4bc008d0ea331f6bac7b388d0c570c41f365b1ba5bf0346c9ff\",\"urls\":[\"bzz-raw://33ebb0d02d34c7a3da4a18656e74bc43a4ab14d2ca431df1aa067a7462aae520\",\"dweb:/ipfs/QmeebvotbW8sYtdKtkZtSVvWJsXT55dGoeVeWL5LGbded3\"]}},\"version\":1}",
  "bytecode": "0x60806040526040518060400160405280601881526020017f4574685377617020496e7374616e742045786368616e676500000000000000008152506000908051906020019061004f9291906100dd565b506104b060025534801561006257600080fd5b506040516106923803806106928339818101604052602081101561008557600080fd5b810190808051906020019092919050505080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610182565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061011e57805160ff191683800117855561014c565b8280016001018555821561014c579182015b8281111561014b578251825591602001919060010190610130565b5b509050610159919061015d565b5090565b61017f91905b8082111561017b576000816000905550600101610163565b5090565b90565b610501806101916000396000f3fe60806040526004361061003f5760003560e01c806306fdde03146100445780632c4e722e146100d4578063d0febe4c146100ff578063fc0c546a14610109575b600080fd5b34801561005057600080fd5b50610059610160565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561009957808201518184015260208101905061007e565b50505050905090810190601f1680156100c65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156100e057600080fd5b506100e96101fe565b6040518082815260200191505060405180910390f35b610107610204565b005b34801561011557600080fd5b5061011e6104a6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156101f65780601f106101cb576101008083540402835291602001916101f6565b820191906000526020600020905b8154815290600101906020018083116101d957829003601f168201915b505050505081565b60025481565b60006002543402905080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156102ad57600080fd5b505afa1580156102c1573d6000803e3d6000fd5b505050506040513d60208110156102d757600080fd5b810190808051906020019092919050505010156102f357600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561039c57600080fd5b505af11580156103b0573d6000803e3d6000fd5b505050506040513d60208110156103c657600080fd5b8101908080519060200190929190505050507f6faf93231a456e552dbc9961f58d9713ee4f2e69d15f1975b050ef0911053a7b33600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683600254604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182815260200194505050505060405180910390a150565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fea265627a7a723158207d5d7bca1e2ce39a7db3ee9f106d4832aa53db4118dbf2f2f3070be21318fc4d64736f6c63430005100032",
  "deployedBytecode": "0x60806040526004361061003f5760003560e01c806306fdde03146100445780632c4e722e146100d4578063d0febe4c146100ff578063fc0c546a14610109575b600080fd5b34801561005057600080fd5b50610059610160565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561009957808201518184015260208101905061007e565b50505050905090810190601f1680156100c65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156100e057600080fd5b506100e96101fe565b6040518082815260200191505060405180910390f35b610107610204565b005b34801561011557600080fd5b5061011e6104a6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156101f65780601f106101cb576101008083540402835291602001916101f6565b820191906000526020600020905b8154815290600101906020018083116101d957829003601f168201915b505050505081565b60025481565b60006002543402905080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156102ad57600080fd5b505afa1580156102c1573d6000803e3d6000fd5b505050506040513d60208110156102d757600080fd5b810190808051906020019092919050505010156102f357600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561039c57600080fd5b505af11580156103b0573d6000803e3d6000fd5b505050506040513d60208110156103c657600080fd5b8101908080519060200190929190505050507f6faf93231a456e552dbc9961f58d9713ee4f2e69d15f1975b050ef0911053a7b33600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683600254604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182815260200194505050505060405180910390a150565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fea265627a7a723158207d5d7bca1e2ce39a7db3ee9f106d4832aa53db4118dbf2f2f3070be21318fc4d64736f6c63430005100032",
  "sourceMap": "57:837:1:-;;;79:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;174:4;155:23;;398:61;8:9:-1;5:2;;;30:1;27;20:12;5:2;398:61:1;;;;;;;;;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;398:61:1;;;;;;;;;;;;;;;;447:6;439:5;;:14;;;;;;;;;;;;;;;;;;398:61;57:837;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "57:837:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;79:47;;8:9:-1;5:2;;;30:1;27;20:12;5:2;79:47:1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;79:47:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;155:23;;8:9:-1;5:2;;;30:1;27;20:12;5:2;155:23:1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;465:422;;;:::i;:::-;;131:19;;8:9:-1;5:2;;;30:1;27;20:12;5:2;131:19:1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;79:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;155:23::-;;;;:::o;465:422::-;554:16;585:4;;573:9;:16;554:35;;687:11;653:5;;;;;;;;;;;:15;;;677:4;653:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;653:30:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;653:30:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;653:30:1;;;;;;;;;;;;;;;;:45;;645:54;;;;;;744:5;;;;;;;;;;;:14;;;759:10;771:11;744:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;744:39:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;744:39:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;744:39:1;;;;;;;;;;;;;;;;;819:62;835:10;855:5;;;;;;;;;;;863:11;876:4;;819:62;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;465:422;:::o;131:19::-;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.5.16;\r\n\r\nimport \"./DollarDsd.sol\";\r\n\r\ncontract EthSwap {\r\n  string public name = \"EthSwap Instant Exchange\";\r\n  Dollar public token;\r\n  uint public rate = 1200;\r\n\r\n  event TokensPurchased(\r\n    address account,\r\n    address token,\r\n    uint amount,\r\n    uint rate\r\n  );\r\n\r\n  event TokensSold(\r\n    address account,\r\n    address token,\r\n    uint amount,\r\n    uint rate\r\n  );\r\n\r\n  constructor(Dollar _token) public {\r\n    token = _token;\r\n  }\r\n\r\n  function buyTokens() public payable {\r\n    // Calculate the number of tokens to buy\r\n    uint tokenAmount = msg.value * rate;\r\n\r\n    // Require that EthSwap has enough tokens\r\n    require(token.balanceOf(address(this)) >= tokenAmount);\r\n\r\n    // Transfer tokens to the user\r\n    token.transfer(msg.sender, tokenAmount);\r\n\r\n    // Emit an event\r\n    emit TokensPurchased(msg.sender, address(token), tokenAmount, rate);\r\n  }\r\n\r\n\r\n}",
  "sourcePath": "C:/Users/mg/Downloads/tokenswap/tokenswap/src/contracts/EthSwap.sol",
  "ast": {
    "absolutePath": "/C/Users/mg/Downloads/tokenswap/tokenswap/src/contracts/EthSwap.sol",
    "exportedSymbols": {
      "EthSwap": [
        2760
      ]
    },
    "id": 2761,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2680,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".16"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:1"
      },
      {
        "absolutePath": "/C/Users/mg/Downloads/tokenswap/tokenswap/src/contracts/DollarDsd.sol",
        "file": "./DollarDsd.sol",
        "id": 2681,
        "nodeType": "ImportDirective",
        "scope": 2761,
        "sourceUnit": 2679,
        "src": "28:25:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 2760,
        "linearizedBaseContracts": [
          2760
        ],
        "name": "EthSwap",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 2684,
            "name": "name",
            "nodeType": "VariableDeclaration",
            "scope": 2760,
            "src": "79:47:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 2682,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "79:6:1",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "4574685377617020496e7374616e742045786368616e6765",
              "id": 2683,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "100:26:1",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_0cd767832a4b45e13c98bb05545343ab53826a9ea9075205b12bb04a1062f40e",
                "typeString": "literal_string \"EthSwap Instant Exchange\""
              },
              "value": "EthSwap Instant Exchange"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 2686,
            "name": "token",
            "nodeType": "VariableDeclaration",
            "scope": 2760,
            "src": "131:19:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Dollar_$2678",
              "typeString": "contract Dollar"
            },
            "typeName": {
              "contractScope": null,
              "id": 2685,
              "name": "Dollar",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2678,
              "src": "131:6:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Dollar_$2678",
                "typeString": "contract Dollar"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 2689,
            "name": "rate",
            "nodeType": "VariableDeclaration",
            "scope": 2760,
            "src": "155:23:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 2687,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "155:4:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "31323030",
              "id": 2688,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "174:4:1",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1200_by_1",
                "typeString": "int_const 1200"
              },
              "value": "1200"
            },
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 2699,
            "name": "TokensPurchased",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 2698,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2691,
                  "indexed": false,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 2699,
                  "src": "213:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2690,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "213:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2693,
                  "indexed": false,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 2699,
                  "src": "235:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2692,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "235:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2695,
                  "indexed": false,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 2699,
                  "src": "255:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2694,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "255:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2697,
                  "indexed": false,
                  "name": "rate",
                  "nodeType": "VariableDeclaration",
                  "scope": 2699,
                  "src": "273:9:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2696,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "273:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "206:81:1"
            },
            "src": "185:103:1"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 2709,
            "name": "TokensSold",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 2708,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2701,
                  "indexed": false,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 2709,
                  "src": "317:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2700,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "317:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2703,
                  "indexed": false,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 2709,
                  "src": "339:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2702,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "339:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2705,
                  "indexed": false,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 2709,
                  "src": "359:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2704,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "359:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2707,
                  "indexed": false,
                  "name": "rate",
                  "nodeType": "VariableDeclaration",
                  "scope": 2709,
                  "src": "377:9:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2706,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "377:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "310:81:1"
            },
            "src": "294:98:1"
          },
          {
            "body": {
              "id": 2718,
              "nodeType": "Block",
              "src": "432:27:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2716,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2714,
                      "name": "token",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2686,
                      "src": "439:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Dollar_$2678",
                        "typeString": "contract Dollar"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 2715,
                      "name": "_token",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2711,
                      "src": "447:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Dollar_$2678",
                        "typeString": "contract Dollar"
                      }
                    },
                    "src": "439:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Dollar_$2678",
                      "typeString": "contract Dollar"
                    }
                  },
                  "id": 2717,
                  "nodeType": "ExpressionStatement",
                  "src": "439:14:1"
                }
              ]
            },
            "documentation": null,
            "id": 2719,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2712,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2711,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 2719,
                  "src": "410:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Dollar_$2678",
                    "typeString": "contract Dollar"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 2710,
                    "name": "Dollar",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 2678,
                    "src": "410:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Dollar_$2678",
                      "typeString": "contract Dollar"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "409:15:1"
            },
            "returnParameters": {
              "id": 2713,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "432:0:1"
            },
            "scope": 2760,
            "src": "398:61:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2758,
              "nodeType": "Block",
              "src": "501:386:1",
              "statements": [
                {
                  "assignments": [
                    2723
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2723,
                      "name": "tokenAmount",
                      "nodeType": "VariableDeclaration",
                      "scope": 2758,
                      "src": "554:16:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2722,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "554:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2728,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2727,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 2724,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2832,
                        "src": "573:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 2725,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "573:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "*",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 2726,
                      "name": "rate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2689,
                      "src": "585:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "573:16:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "554:35:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 2737,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 2733,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 2876,
                                  "src": "677:4:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_EthSwap_$2760",
                                    "typeString": "contract EthSwap"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_EthSwap_$2760",
                                    "typeString": "contract EthSwap"
                                  }
                                ],
                                "id": 2732,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "669:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": "address"
                              },
                              "id": 2734,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "669:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 2730,
                              "name": "token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2686,
                              "src": "653:5:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Dollar_$2678",
                                "typeString": "contract Dollar"
                              }
                            },
                            "id": 2731,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "balanceOf",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 318,
                            "src": "653:15:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address) view external returns (uint256)"
                            }
                          },
                          "id": 2735,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "653:30:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 2736,
                          "name": "tokenAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2723,
                          "src": "687:11:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "653:45:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 2729,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        2835,
                        2836
                      ],
                      "referencedDeclaration": 2835,
                      "src": "645:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2738,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "645:54:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2739,
                  "nodeType": "ExpressionStatement",
                  "src": "645:54:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 2743,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2832,
                          "src": "759:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 2744,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "759:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 2745,
                        "name": "tokenAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2723,
                        "src": "771:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 2740,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2686,
                        "src": "744:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Dollar_$2678",
                          "typeString": "contract Dollar"
                        }
                      },
                      "id": 2742,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 337,
                      "src": "744:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 2746,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "744:39:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2747,
                  "nodeType": "ExpressionStatement",
                  "src": "744:39:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 2749,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2832,
                          "src": "835:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 2750,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "835:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 2752,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2686,
                            "src": "855:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Dollar_$2678",
                              "typeString": "contract Dollar"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_Dollar_$2678",
                              "typeString": "contract Dollar"
                            }
                          ],
                          "id": 2751,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "847:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 2753,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "847:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 2754,
                        "name": "tokenAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2723,
                        "src": "863:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 2755,
                        "name": "rate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2689,
                        "src": "876:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 2748,
                      "name": "TokensPurchased",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2699,
                      "src": "819:15:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256,uint256)"
                      }
                    },
                    "id": 2756,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "819:62:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2757,
                  "nodeType": "EmitStatement",
                  "src": "814:67:1"
                }
              ]
            },
            "documentation": null,
            "id": 2759,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "buyTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2720,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "483:2:1"
            },
            "returnParameters": {
              "id": 2721,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "501:0:1"
            },
            "scope": 2760,
            "src": "465:422:1",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 2761,
        "src": "57:837:1"
      }
    ],
    "src": "0:894:1"
  },
  "legacyAST": {
    "absolutePath": "/C/Users/mg/Downloads/tokenswap/tokenswap/src/contracts/EthSwap.sol",
    "exportedSymbols": {
      "EthSwap": [
        2760
      ]
    },
    "id": 2761,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2680,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".16"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:1"
      },
      {
        "absolutePath": "/C/Users/mg/Downloads/tokenswap/tokenswap/src/contracts/DollarDsd.sol",
        "file": "./DollarDsd.sol",
        "id": 2681,
        "nodeType": "ImportDirective",
        "scope": 2761,
        "sourceUnit": 2679,
        "src": "28:25:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 2760,
        "linearizedBaseContracts": [
          2760
        ],
        "name": "EthSwap",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 2684,
            "name": "name",
            "nodeType": "VariableDeclaration",
            "scope": 2760,
            "src": "79:47:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 2682,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "79:6:1",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "4574685377617020496e7374616e742045786368616e6765",
              "id": 2683,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "100:26:1",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_0cd767832a4b45e13c98bb05545343ab53826a9ea9075205b12bb04a1062f40e",
                "typeString": "literal_string \"EthSwap Instant Exchange\""
              },
              "value": "EthSwap Instant Exchange"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 2686,
            "name": "token",
            "nodeType": "VariableDeclaration",
            "scope": 2760,
            "src": "131:19:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Dollar_$2678",
              "typeString": "contract Dollar"
            },
            "typeName": {
              "contractScope": null,
              "id": 2685,
              "name": "Dollar",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2678,
              "src": "131:6:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Dollar_$2678",
                "typeString": "contract Dollar"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 2689,
            "name": "rate",
            "nodeType": "VariableDeclaration",
            "scope": 2760,
            "src": "155:23:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 2687,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "155:4:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "31323030",
              "id": 2688,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "174:4:1",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1200_by_1",
                "typeString": "int_const 1200"
              },
              "value": "1200"
            },
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 2699,
            "name": "TokensPurchased",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 2698,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2691,
                  "indexed": false,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 2699,
                  "src": "213:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2690,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "213:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2693,
                  "indexed": false,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 2699,
                  "src": "235:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2692,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "235:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2695,
                  "indexed": false,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 2699,
                  "src": "255:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2694,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "255:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2697,
                  "indexed": false,
                  "name": "rate",
                  "nodeType": "VariableDeclaration",
                  "scope": 2699,
                  "src": "273:9:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2696,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "273:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "206:81:1"
            },
            "src": "185:103:1"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 2709,
            "name": "TokensSold",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 2708,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2701,
                  "indexed": false,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 2709,
                  "src": "317:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2700,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "317:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2703,
                  "indexed": false,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 2709,
                  "src": "339:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2702,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "339:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2705,
                  "indexed": false,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 2709,
                  "src": "359:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2704,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "359:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2707,
                  "indexed": false,
                  "name": "rate",
                  "nodeType": "VariableDeclaration",
                  "scope": 2709,
                  "src": "377:9:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2706,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "377:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "310:81:1"
            },
            "src": "294:98:1"
          },
          {
            "body": {
              "id": 2718,
              "nodeType": "Block",
              "src": "432:27:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2716,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2714,
                      "name": "token",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2686,
                      "src": "439:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Dollar_$2678",
                        "typeString": "contract Dollar"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 2715,
                      "name": "_token",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2711,
                      "src": "447:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Dollar_$2678",
                        "typeString": "contract Dollar"
                      }
                    },
                    "src": "439:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Dollar_$2678",
                      "typeString": "contract Dollar"
                    }
                  },
                  "id": 2717,
                  "nodeType": "ExpressionStatement",
                  "src": "439:14:1"
                }
              ]
            },
            "documentation": null,
            "id": 2719,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2712,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2711,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 2719,
                  "src": "410:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Dollar_$2678",
                    "typeString": "contract Dollar"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 2710,
                    "name": "Dollar",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 2678,
                    "src": "410:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Dollar_$2678",
                      "typeString": "contract Dollar"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "409:15:1"
            },
            "returnParameters": {
              "id": 2713,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "432:0:1"
            },
            "scope": 2760,
            "src": "398:61:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2758,
              "nodeType": "Block",
              "src": "501:386:1",
              "statements": [
                {
                  "assignments": [
                    2723
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2723,
                      "name": "tokenAmount",
                      "nodeType": "VariableDeclaration",
                      "scope": 2758,
                      "src": "554:16:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2722,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "554:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2728,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2727,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 2724,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2832,
                        "src": "573:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 2725,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "573:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "*",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 2726,
                      "name": "rate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2689,
                      "src": "585:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "573:16:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "554:35:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 2737,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 2733,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 2876,
                                  "src": "677:4:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_EthSwap_$2760",
                                    "typeString": "contract EthSwap"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_EthSwap_$2760",
                                    "typeString": "contract EthSwap"
                                  }
                                ],
                                "id": 2732,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "669:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": "address"
                              },
                              "id": 2734,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "669:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 2730,
                              "name": "token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2686,
                              "src": "653:5:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Dollar_$2678",
                                "typeString": "contract Dollar"
                              }
                            },
                            "id": 2731,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "balanceOf",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 318,
                            "src": "653:15:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address) view external returns (uint256)"
                            }
                          },
                          "id": 2735,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "653:30:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 2736,
                          "name": "tokenAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2723,
                          "src": "687:11:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "653:45:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 2729,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        2835,
                        2836
                      ],
                      "referencedDeclaration": 2835,
                      "src": "645:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2738,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "645:54:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2739,
                  "nodeType": "ExpressionStatement",
                  "src": "645:54:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 2743,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2832,
                          "src": "759:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 2744,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "759:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 2745,
                        "name": "tokenAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2723,
                        "src": "771:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 2740,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2686,
                        "src": "744:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Dollar_$2678",
                          "typeString": "contract Dollar"
                        }
                      },
                      "id": 2742,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 337,
                      "src": "744:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 2746,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "744:39:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2747,
                  "nodeType": "ExpressionStatement",
                  "src": "744:39:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 2749,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2832,
                          "src": "835:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 2750,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "835:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 2752,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2686,
                            "src": "855:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Dollar_$2678",
                              "typeString": "contract Dollar"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_Dollar_$2678",
                              "typeString": "contract Dollar"
                            }
                          ],
                          "id": 2751,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "847:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 2753,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "847:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 2754,
                        "name": "tokenAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2723,
                        "src": "863:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 2755,
                        "name": "rate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2689,
                        "src": "876:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 2748,
                      "name": "TokensPurchased",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2699,
                      "src": "819:15:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256,uint256)"
                      }
                    },
                    "id": 2756,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "819:62:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2757,
                  "nodeType": "EmitStatement",
                  "src": "814:67:1"
                }
              ]
            },
            "documentation": null,
            "id": 2759,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "buyTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2720,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "483:2:1"
            },
            "returnParameters": {
              "id": 2721,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "501:0:1"
            },
            "scope": 2760,
            "src": "465:422:1",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 2761,
        "src": "57:837:1"
      }
    ],
    "src": "0:894:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.16+commit.9c3226ce.Emscripten.clang"
  },
  "networks": {
    "4": {
      "events": {
        "0x6faf93231a456e552dbc9961f58d9713ee4f2e69d15f1975b050ef0911053a7b": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "rate",
              "type": "uint256"
            }
          ],
          "name": "TokensPurchased",
          "type": "event"
        },
        "0x697c42d55a5e1fed3f464ec6f38b32546a0bd368dc8068b065c67566d73f3290": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "rate",
              "type": "uint256"
            }
          ],
          "name": "TokensSold",
          "type": "event"
        }
      },
      "links": {},
      "address": "0xd385F8ba4A2A9E74Eeb23CE10CF8dd93Ff0037bd",
      "transactionHash": "0x8954a68a6634a4ea7e7916a21b7cd3596bbc6c41094f7cf48a0978607641a398"
    },
    "3": {
      "events": {
        "0x6faf93231a456e552dbc9961f58d9713ee4f2e69d15f1975b050ef0911053a7b": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "rate",
              "type": "uint256"
            }
          ],
          "name": "TokensPurchased",
          "type": "event"
        },
        "0x697c42d55a5e1fed3f464ec6f38b32546a0bd368dc8068b065c67566d73f3290": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "rate",
              "type": "uint256"
            }
          ],
          "name": "TokensSold",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x8357313311cDb2b497f1777B4fCdF047C99935E7",
      "transactionHash": "0x8954a68a6634a4ea7e7916a21b7cd3596bbc6c41094f7cf48a0978607641a398"
    }
  },
  "schemaVersion": "3.3.0",
  "updatedAt": "2021-01-18T08:58:54.620Z",
  "networkType": "ethereum",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}

export default EthSwap