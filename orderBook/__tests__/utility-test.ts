/**
 * @format
 */

import 'react-native';
import { getTotalFromTupleString, getTotalFromTuple, getTotalFromArray, composeLevels  } from "../src/_shared/utils";
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { Level } from '../src/orderBook';

const tuple = [[12000, 12], [12001, 20]]

it('given a tuple of value, getTotalFromTuple() returns Level array', () => {
    expect(getTotalFromTuple(tuple)).toStrictEqual([
        { price: 12000, size: 12, total: 12 },
        { price: 12001, size: 20, total: 32 },

    ]);
});

const levelArray: Level[] = [
    { price: 12000, size: 12, total: 0 },
    { price: 12001, size: 2, total: 30 },
    { price: 12001.5, size: 32, total: 1200 },
    { price: 12002, size: 42, total: 0 },
    ]

it('given an array of Level, getTotalFromArray() returns Level array with correct total', () => {
    expect(getTotalFromArray(levelArray)).toStrictEqual([
        { price: 12000, size: 12, total: 12 },
        { price: 12001, size: 2, total: 14 },
        { price: 12001.5, size: 32, total: 46 },
        { price: 12002, size: 42, total: 88 },
    ]);
});


const tupleCompose = [[10000, 12], [10000.5, 20]]
const levelCompose: Level[] = [
    { price: 9999, size: 12, total: 330 },
    { price: 1001.5, size: 2, total: 30 },
    { price: 1002, size: 32, total: 12 },
    { price: 12002.5, size: 42, total: 0 },
    ]


it('given an array of Level saved into store and a tuple, getTotalFromArray() returns Level array merged with tuple', () => {
    expect(composeLevels(levelCompose, tupleCompose)).toStrictEqual([
        { price: 1001.5, size: 2, total: 2 },
        { price: 1002, size: 32, total: 34 },
        { price: 9999, size: 12, total: 46 },
        { price: 10000, size: 12, total: 58 },
        { price: 10000.5, size: 20, total: 78 },
        { price: 12002.5, size: 42, total: 120 },
    ]);
});



const tupleComposeOverride = [[9999, 120], [10000.5, 20], [12001.5, 201], [12002.5, 200]]
const levelComposeOverride: Level[] = [
    { price: 9999, size: 12, total: 330 },
    { price: 1001.5, size: 2, total: 30 },
    { price: 1002, size: 32, total: 12 },
    { price: 12002.5, size: 42, total: 0 },
    ]



it('given an array of Level saved into store and a tuple that ovveride a value, getTotalFromArray() returns Level array merged with tuple', () => {
    expect(composeLevels(levelComposeOverride, tupleComposeOverride)).toStrictEqual([
        { price: 1001.5, size: 2, total: 2 },
        { price: 1002, size: 32, total: 34 },
        { price: 9999, size: 120, total: 154 },
        { price: 10000.5, size: 20, total: 174 },
        { price: 12001.5, size: 201, total: 375 },
        { price: 12002.5, size: 200, total: 575 },
    ]);
});



it('given an array of Level saved into store and a tuple that ovveride a value, getTotalFromArray() returns Level array merged with tuple', () => {
    expect(composeLevels(levelComposeOverride, tupleComposeOverride)).toStrictEqual([
        { price: 1001.5, size: 2, total: 2 },
        { price: 1002, size: 32, total: 34 },
        { price: 9999, size: 120, total: 154 },
        { price: 10000.5, size: 20, total: 174 },
        { price: 12001.5, size: 201, total: 375 },
        { price: 12002.5, size: 200, total: 575 },
    ]);
});



const tupleComposeLevel = [[9999, 120], [10000.5, 20], [1.5, 1], [12001.5, 201],[12002.5, 200]]
const tuple2ComposeLeve = [[10000, 1], [200, 1]]


it('given an array of Level saved into store and a tuple that ovveride a value, getTotalFromArray() returns Level array merged with tuple', () => {
    expect(composeLevels(levelComposeOverride, tupleComposeOverride)).toStrictEqual([
        { price: 1001.5, size: 2, total: 2 },
        { price: 1002, size: 32, total: 34 },
        { price: 9999, size: 120, total: 154 },
        { price: 10000.5, size: 20, total: 174 },
        { price: 12001.5, size: 201, total: 375 },
        { price: 12002.5, size: 200, total: 575 },
    ]);
});