import React from 'react'

const TestData = {
    
    tasks : {
        'task-1': {id: 'task1', content: 'take out trash'},
        'task-2': {id: 'task2', content: 'clean kitchen'},
        'task-3': {id: 'task3', content: 'walk dog'},
        'task-4': {id: 'task4', content: 'meal plan'},
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'to do', 
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        },
    },
    columnOrder: ['column-1']
}
export default TestData;