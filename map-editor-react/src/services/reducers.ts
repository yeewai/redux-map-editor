import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { modalReducer } from '@evercourse/ever-modal';
import { reducer as formReducer } from 'redux-form'

import { StateTree } from './types';
import structureDefinitions from './structureDefinitions';
import worlds from './worlds';
import mapEditor from './mapEditor';

const rootReducer = combineReducers<StateTree>({
    router: routerReducer,
    modals: modalReducer,
    form: formReducer,
    structureDefinitions,
    worlds,
    mapEditor

});

export default rootReducer;
