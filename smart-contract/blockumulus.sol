pragma solidity ^0.8.0;

contract Blockumulus {

    address private cell1 = 0x550F266Eb5C840fD666369a76D3b416d749a917B;
    address private cell2 = 0xdbC1Ab23d82E14DD73B0C296323B619d9DDbA369;
    address private cell3 = 0x1F37bc6da4Ce315a0F0a5331aa1509073146AD2C;
    address private cell4 = 0xc46275f7928FAE177A4bEEc4288dBf2807587671;
    address private cell5 = 0xD9E6c7F1B0531585Ae64eE798Cfa37D7d5FFc73c;
    address private cell6 = 0xdAd8b0893672932fF71eCb473fCc6c0852d68013;
    address private cell7 = 0x67Fe43a778EEc69dD66D3035F20B1AFDDb2E86eA;
    address private cell8 = 0x533B79B81E1e5c0D8F47cfFE610CAff10Eb60C1B;

    uint cell1_last_timestamp;
    uint cell2_last_timestamp;
    uint cell3_last_timestamp;
    uint cell4_last_timestamp;
    uint cell5_last_timestamp;
    uint cell6_last_timestamp;
    uint cell7_last_timestamp;
    uint cell8_last_timestamp;


    mapping(uint => bytes32) private cell1_report;
    mapping(uint => bytes32) private cell2_report;
    mapping(uint => bytes32) private cell3_report;
    mapping(uint => bytes32) private cell4_report;
    mapping(uint => bytes32) private cell5_report;
    mapping(uint => bytes32) private cell6_report;
    mapping(uint => bytes32) private cell7_report;
    mapping(uint => bytes32) private cell8_report;


    constructor() {}

    function do_cell1_report(uint timestamp, bytes32 rhash) public {
        require(msg.sender == cell1);
        require(timestamp > cell1_last_timestamp);
        cell1_report[timestamp] = rhash;
        cell1_last_timestamp = timestamp;
    }

    function do_cell2_report(uint timestamp, bytes32 rhash) public {
        require(msg.sender == cell2);
        require(timestamp > cell2_last_timestamp);
        cell2_report[timestamp] = rhash;
        cell2_last_timestamp = timestamp;
    }

    function do_cell3_report(uint timestamp, bytes32 rhash) public {
        require(msg.sender == cell3);
        require(timestamp > cell3_last_timestamp);
        cell3_report[timestamp] = rhash;
        cell3_last_timestamp = timestamp;
    }

    function do_cell4_report(uint timestamp, bytes32 rhash) public {
        require(msg.sender == cell4);
        require(timestamp > cell4_last_timestamp);
        cell4_report[timestamp] = rhash;
        cell4_last_timestamp = timestamp;
    }

    function do_cell5_report(uint timestamp, bytes32 rhash) public {
        require(msg.sender == cell5);
        require(timestamp > cell5_last_timestamp);
        cell5_report[timestamp] = rhash;
        cell5_last_timestamp = timestamp;
    }

    function do_cell6_report(uint timestamp, bytes32 rhash) public {
        require(msg.sender == cell6);
        require(timestamp > cell6_last_timestamp);
        cell6_report[timestamp] = rhash;
        cell6_last_timestamp = timestamp;
    }

    function do_cell7_report(uint timestamp, bytes32 rhash) public {
        require(msg.sender == cell7);
        require(timestamp > cell7_last_timestamp);
        cell7_report[timestamp] = rhash;
        cell7_last_timestamp = timestamp;
    }

    function do_cell8_report(uint timestamp, bytes32 rhash) public {
        require(msg.sender == cell8);
        require(timestamp > cell8_last_timestamp);
        cell8_report[timestamp] = rhash;
        cell8_last_timestamp = timestamp;
    }                

    function get_cell1_report(uint timestamp) public view returns (bytes32) {
        return cell1_report[timestamp];
    }

    function get_cell2_report(uint timestamp) public view returns (bytes32) {
        return cell2_report[timestamp];
    }

    function get_cell3_report(uint timestamp) public view returns (bytes32) {
        return cell3_report[timestamp];
    }

    function get_cell4_report(uint timestamp) public view returns (bytes32) {
        return cell4_report[timestamp];
    }

    function get_cell5_report(uint timestamp) public view returns (bytes32) {
        return cell5_report[timestamp];
    }

    function get_cell6_report(uint timestamp) public view returns (bytes32) {
        return cell6_report[timestamp];
    }

    function get_cell7_report(uint timestamp) public view returns (bytes32) {
        return cell7_report[timestamp];
    }

    function get_cell8_report(uint timestamp) public view returns (bytes32) {
        return cell8_report[timestamp];
    }
}