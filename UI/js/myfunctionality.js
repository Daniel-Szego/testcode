web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545/"));

var prov = web3.currentProvider;

console.log('provider has been loaded');

var TestContractABI = [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "helloSzam",
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
      "name": "message",
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
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_newSzam",
          "type": "uint256"
        }
      ],
      "name": "setSzam",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "_newMessage",
          "type": "string"
        }
      ],
      "name": "setMessage",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

  var TestTokenAddress = "0x07fF154D52a202519dbd5014cf1A4D336E3cD4da";
  const TestTokenContract = new web3.eth.Contract(TestContractABI, TestTokenAddress);
  var account;

  web3.eth.getAccounts(function(error, accounts) {
    if (error) {
      console.log(error);
    }

    account = accounts[0];
    console.log(account);
    $( "#actualAddress" ).append(account);
    
    var balance = web3.eth.getBalance(account, function(error, balance) {
      if (error) {
        console.log(error);
      }
      console.log(balance);     
      $("#actualBalance").append(balance);
      
    });

    var szam = TestTokenContract.methods.helloSzam().call(function(error, result){
      if (error) {
        console.log(error);
      }
      console.log("called");
      console.log(result);      
      $("#szam").append(result);              
    });

    var message = TestTokenContract.methods.message().call(function(error, result){
        if (error) {
          console.log(error);
        }
        console.log("called");
        console.log(result);      
        $("#message").append(result);              
      });
  });  


  $("#setMessageButton").click(function() {
    var newMessage = $("#newMessage").val();
    TestTokenContract.methods.setMessage(newMessage).send({from:account}, function(error, result){
      if (error) {
        console.log(error);
      }
     alert('Transaction success!');
    });
  });


