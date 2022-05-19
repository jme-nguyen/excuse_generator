'use strict';

const beginning = [];
const relation = [];
const excuse = [];

const createExcuse = () => {
    const startOfSentence = beginning[Math.floor(Math.random() * beginning.length)];
    const relationOfSentence = relation[Math.floor(Math.round() * relation.length)];
    const excuseOfSentence = excuse[Math.floor(Math.random() * excuse.length)];
    
    return `${startOfSentence} ${relationOfSentence} ${excuseOfSentence}.`;
};