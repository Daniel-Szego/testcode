var HelloWorldJSWrapper = artifacts.require("HelloWorld");
var HelloWorldInstance;
var message;
var oldMessage;
var newMessage;
var szam;
var oldSzam;
var newSzam;


contract('HelloWorld', function(accounts) {
    it("1. hello világ teszt olvasás", function() {
        return HelloWorldJSWrapper.deployed().then(function(instance) {
            HelloWorldInstance = instance;
            return HelloWorldInstance.message({from: accounts[0]});             
        }).then(function(result) {
            message = result;
            assert.equal(message, "Hello Vilag", "Nem jo hello vilag ertek");            
        });
    });
    it("2. hello világ teszt írás", function() {
        return HelloWorldJSWrapper.deployed().then(function(instance) {
            HelloWorldInstance = instance;
            return HelloWorldInstance.message({from: accounts[0]});             
        }).then(function(result) {
            oldMessage = result;
            return HelloWorldInstance.setMessage("XXX",{from: accounts[0]});
        }).then(function(result) {
            return HelloWorldInstance.message({from: accounts[0]});             
        }).then(function(result) {
            newMessage = result;
            assert.equal(oldMessage, "Hello Vilag", "Nem jo hello vilag ertek");            
            assert.equal(newMessage, "XXX", "Nem jo hello vilag ertek");            
        });
    });
    it("3. szam kiolvasasa", function() {
        return HelloWorldJSWrapper.deployed().then(function(instance) {
            HelloWorldInstance = instance;
            return HelloWorldInstance.helloSzam({from: accounts[0]});             
        }).then(function(result) {
            szam = result;
            assert.equal(szam, 2, "Nem jo szam");            
        });
    });
    it("4. hello szam teszt írás", function() {
        return HelloWorldJSWrapper.deployed().then(function(instance) {
            HelloWorldInstance = instance;
            return HelloWorldInstance.helloSzam({from: accounts[0]});             
        }).then(function(result) {
            oldSzam = result;
            return HelloWorldInstance.setSzam(33,{from: accounts[0]});
        }).then(function(result) {
            return HelloWorldInstance.helloSzam({from: accounts[0]});             
        }).then(function(result) {
            newSzam = result;
            assert.equal(oldSzam, 2, "Nem jo old szam");            
            assert.equal(newSzam, 33, "Nem jo new szam");            
        });
    });
});

