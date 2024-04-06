// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Factory {
    struct FactoryData {
        uint256 factoryId;
        uint256 userId;
        string factoryName;
    }

    mapping(uint256 => FactoryData) public factories;
    uint256 public factoryCount;

    event FactoryAdded(uint256 factoryId, uint256 userId, string factoryName);

    function addFactory(uint256 _userId, string memory _factoryName) external {
        factoryCount++;
        factories[factoryCount] = FactoryData(
            factoryCount,
            _userId,
            _factoryName
        );
        emit FactoryAdded(factoryCount, _userId, _factoryName);
    }

    function getAllFactories(
        uint256 _userId
    ) external view returns (FactoryData[] memory) {
        FactoryData[] memory allFactories = new FactoryData[](factoryCount);
        uint count = 0;
        for (uint256 i = 1; i <= factoryCount; i++) {
            if (factories[i].userId == _userId) {
                allFactories[count] = factories[i];
                count++;
            }
        }
        return allFactories;
    }

    function getFactoryById(
        uint256 _factoryId
    ) external view returns (FactoryData memory) {
        require(
            _factoryId > 0 && _factoryId <= factoryCount,
            "Factory does not exist"
        );
        return factories[_factoryId];
    }

    function isFactoryExists(uint256 _factoryId) external view returns (bool) {
        return (_factoryId > 0 && _factoryId <= factoryCount);
    }
}
