import {watchRequestMapData} from './map.js'

export default function* rootSaga() {
  yield [
    watchRequestMapData()
  ]
}