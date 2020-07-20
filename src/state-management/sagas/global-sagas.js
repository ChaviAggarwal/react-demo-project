import { fork, all } from "redux-saga/effects";
import { cartDetailsSaga } from "../../services/CartDetails/sagas";

const sagas = [
  cartDetailsSaga,
  // NOTE: put other app sagas here
];

function* globalSagas() {
  const globalSagasForks = sagas.map((saga) => fork(saga));

  yield all([...globalSagasForks]);
}

export default globalSagas;
