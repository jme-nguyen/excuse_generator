'use strict';

const beginning = ['I','My'];
const relation = ['Dog','Sister','Mother','Father','Girlfriend','Grandpa','Grandma',];
const excuse = [];

const createExcuse = () => {
    const startOfSentence = beginning[Math.floor(Math.random() * beginning.length)];
    const relationOfSentence = relation[Math.floor(Math.round() * relation.length)];
    const excuseOfSentence = excuse[Math.floor(Math.random() * excuse.length)];
    
    if(beginning === 'My'){
        return `${startOfSentence} ${relationOfSentence} ${excuseOfSentence}.`;
    }

    return `${startOfSentence} ${excuseOfSentence}.`;
};