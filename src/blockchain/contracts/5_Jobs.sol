// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./3_Products.sol";
import "./4_Equipments.sol";

contract Jobs {
    Products public productsContract;
    Equipments public equipmentContract;

    constructor(
        address _productsContractAddress,
        address _equipmentContractAddress
    ) {
        productsContract = Products(_productsContractAddress);
        equipmentContract = Equipments(_equipmentContractAddress);
    }

    struct Job {
        uint256 jobId;
        uint256 equipmentId;
        uint256 productId;
        uint256 productionCount;
        bool running;
    }

    mapping(uint256 => Job) public jobs;
    uint256 public jobCount;

    event JobAdded(uint256 jobId, uint256 equipmentId, uint256 productId);
    event EthersReceived(address sender, uint256 amount);

    receive() external payable {
        emit EthersReceived(msg.sender, msg.value);
    }

    function addJob(uint256 _equipmentId, uint256 _productId) external {
        require(
            productsContract.productExists(_productId),
            "Product does not exist"
        );
        require(
            equipmentContract.equipmentExists(_equipmentId),
            "Equipment does not exist"
        );
        jobCount++;
        jobs[jobCount] = Job(jobCount, _equipmentId, _productId, 0, false);
        emit JobAdded(jobCount, _equipmentId, _productId);
    }

    function changeJobState(uint256 _jobId, bool _running) external {
        require(_jobId <= jobCount, "Invalid Job ID");
        jobs[_jobId].running = _running;
    }

    function increaseProductionCount(
        uint256 _jobId,
        uint256 _productionCount
    ) external {
        require(_jobId <= jobCount, "Invalid Job ID");
        jobs[_jobId].productionCount += _productionCount;
    }

    function getAllJobs() external view returns (Job[] memory) {
        Job[] memory _jobs = new Job[](jobCount);
        for (uint256 i = 1; i <= jobCount; i++) {
            _jobs[i - 1] = jobs[i];
        }
        return _jobs;
    }

    function getActiveJobs() external view returns (Job[] memory) {
        uint256 activeJobCount;
        for (uint256 i = 1; i <= jobCount; i++) {
            if (jobs[i].running) {
                activeJobCount++;
            }
        }
        Job[] memory _activeJobs = new Job[](activeJobCount);
        uint256 index = 0;
        for (uint256 i = 1; i <= jobCount; i++) {
            if (jobs[i].running) {
                _activeJobs[index++] = jobs[i];
            }
        }
        return _activeJobs;
    }
}
