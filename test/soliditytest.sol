import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/HelloWorld.sol";

contract HelloWolrdSolidityTest {

  function testHelloWorld() public {
    HelloWorld helloWorld = new HelloWorld();

    string memory expectedHelloWorld = "Hello Vilag";

    Assert.equal(helloWorld.message(), expectedHelloWorld, "Rossz hello vilag");
  }
 }
