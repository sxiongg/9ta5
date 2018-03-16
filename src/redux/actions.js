export const APILoad = api => ({type: 'PUSH_API', payload: api})

export const filterResults = api => ({type: 'FILTER_KEYWORD', payload: api})

export const filterResultsByLocation = api => ({type: 'FILTER_LOCATION', payload: api})

export const pushJobToSaved = object => ({type: 'SAVE_JOB', payload: object})