import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import * as actions from "./actions";
import sinon from 'sinon';
import $ from 'jquery';

import api from 'api';



const mockStore = configureMockStore([thunk]);

describe("Actions/structureDefinitions", () => {
    let sandbox, store;

    beforeEach( () => {
        sandbox = sinon.createSandbox();
        store = mockStore({});
    })

    afterEach(() => {
        sandbox.restore();
    })

    it('creates a success when fetching structures has been done', () => {
        // const scope = nock('http://localhost:8080').log(console.log)
        //     .get('/structureDefinitions')
        //     .reply(200, { payload: [1,2,3] });
        //
        let stub = sandbox.stub($, 'ajax').callsFake( () => (
            new Promise(function(resolve, reject) {
                resolve( [1,2,3] );
            })
        ));

        const expectedActions = [
            { type: 'structureDefinition/REQUEST' },
            { type: 'structureDefinition/RECEIVE', payload: [1,2,3]  }
        ];

        return store.dispatch(actions.fetchStructureDefinitions()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it ('creates a fail when fetching program fails', () => {
        // nock("http://localhost")
        //     .get('/structureDefinitions')
        //     .replyWithError("");
        let stub = sandbox.stub($, 'ajax').callsFake( () => (
            new Promise(function(resolve, reject) {
                reject();
            })
        ));
        const store = mockStore({});

        return store.dispatch(actions.fetchStructureDefinitions()).then(() => {
            expect(store.getActions()[1]).toMatchObject({  "type": "structureDefinition/SET_ERROR" });
        });

    });
})
