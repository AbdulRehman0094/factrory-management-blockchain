// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./3_Products.sol";

contract Orders {
    Products private productsContract;

    struct Order {
        uint256 orderId;
        uint256 productId;
        uint256 quantity;
        address buyer;
        address seller;
    }

    mapping(uint256 => Order) public orders;
    uint256 public orderCount;

    event OrderPlaced(
        uint256 orderId,
        uint256 productId,
        uint256 quantity,
        address buyer,
        address seller
    );

    constructor(address _productsContractAddress) {
        productsContract = Products(_productsContractAddress);
    }

    function placeOrder(
        uint256 _productId,
        uint256 _quantity,
        address _seller
    ) external payable {
        require(_quantity > 0, "Quantity must be greater than 0");
        require(
            msg.value ==
                productsContract.getProductPrice(_productId) * _quantity,
            "Insufficient funds"
        );
        orderCount++;
        orders[orderCount] = Order(
            orderCount,
            _productId,
            _quantity,
            msg.sender,
            _seller
        );
        productsContract.updateSoldProduction(_productId, _quantity);
        productsContract.updateUnsoldProduction(_productId, -int256(_quantity));
        payable(_seller).transfer(msg.value);
        emit OrderPlaced(
            orderCount,
            _productId,
            _quantity,
            msg.sender,
            _seller
        );
    }
}
