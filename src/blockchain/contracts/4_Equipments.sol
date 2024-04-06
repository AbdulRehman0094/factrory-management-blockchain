// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./2_factory.sol";
contract Equipments {
    Factory factoryContract;
    struct Equipment {
        uint256 equipmentId;
        string equipmentName;
        uint256 cycleTime;
        uint256 factoryId;
    }

    constructor(address _factoryContractAddress) {
        factoryContract = Factory(_factoryContractAddress);
    }

    mapping(uint256 => Equipment) public equipments;
    uint256 public equipmentCount;

    event EquipmentAdded(uint256 equipmentId, string equipmentName);

    function addEquipment(
        string memory _equipmentName,
        uint256 _cycleTime,
        uint256 _factoryId
    ) external {
        require(
            !factoryContract.isFactoryExists(_factoryId),
            "Factory not found"
        );
        equipmentCount++;
        equipments[equipmentCount] = Equipment(
            equipmentCount,
            _equipmentName,
            _cycleTime,
            _factoryId
        );
        emit EquipmentAdded(equipmentCount, _equipmentName);
    }

    function equipmentExists(uint256 _equipmentId) public view returns (bool) {
        return _equipmentId > 0 && _equipmentId <= equipmentCount;
    }

    function getAllEquipments() external view returns (Equipment[] memory) {
        Equipment[] memory allEquipments = new Equipment[](equipmentCount);
        for (uint256 i = 1; i <= equipmentCount; i++) {
            allEquipments[i - 1] = equipments[i];
        }
        return allEquipments;
    }

    function getEquipmentById(
        uint256 _equipmentId
    ) public view returns (Equipment memory) {
        Equipment memory equipment = equipments[_equipmentId - 1];
        return equipment;
    }
}
