'use strict';

const beginning = ['I','My'];
const relation = ['dog','sister','mother','father','girlfriend','grandpa','grandma',];
const relationExcuse = ['has covid','has gotten sick','has died'];
const excuse = ['have covid','am sick','have a headache'];

const createExcuse = () => {
    const startOfSentence = beginning[Math.floor(Math.random() * beginning.length)];
    const relationOfSentence = relation[Math.floor(Math.random() * relation.length)];
    
    if(startOfSentence === 'My'){
        const excuseOfSentence = relationExcuse[Math.floor(Math.random() * relationExcuse.length)];
        return `${startOfSentence} ${relationOfSentence} ${excuseOfSentence}.`;
    }

    const excuseOfSentence = excuse[Math.floor(Math.random() * excuse.length)];
    return `${startOfSentence} ${excuseOfSentence}.`;
};