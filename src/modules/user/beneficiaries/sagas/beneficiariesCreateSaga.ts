// tslint:disable-next-line
import { call, put } from 'redux-saga/effects';
import { API, RequestOptions } from '../../../../api';
import { alertPush } from '../../../index';
import {
    BeneficiariesCreate,
    beneficiariesCreateData,
    beneficiariesCreateError,
} from '../actions';
import { getCsrfToken } from '../../../../helpers';

const config = (csrfToken?: string): RequestOptions => {
    return {
        apiVersion: 'peatio',
        headers: { 'X-CSRF-Token': csrfToken },
    };
};

export function* beneficiariesCreateSaga(action: BeneficiariesCreate) {
    try {
        const payload = yield call(API.post(config(getCsrfToken())), '/account/beneficiaries', action.payload);
        yield put(beneficiariesCreateData(payload));
        yield put(alertPush({message: ['success.beneficiaries.created'], type: 'success'}));
    } catch (error) {
        yield put(beneficiariesCreateError(error));
        yield put(alertPush({message: error.message, code: error.code, type: 'error'}));
    }
}
