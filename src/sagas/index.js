import {watchFetchMapData} from './map.js'

export default function* rootSaga() {
  yield [
    watchFetchMapData()
  ]
}