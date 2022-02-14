import axios from "axios";

const getDropInfo = () => {
  let payload = {"json":true,"code":"atomicdropsx","scope":"atomicdropsx","table":"drops","lower_bound":"","upper_bound":"","index_position":1,"key_type":"","limit":"100","reverse":false,"show_payer":false}
  return axios.post(`https://eos.eosn.io/v1/chain/get_table_rows`, { ...payload });
}

const getCollectionInfo = (chain: string, collectionName: string) => {
  return axios.get(`https://functions.eosn.io/v1/atomic/atomicassets/templates?chain=${chain}&collection=${collectionName}&deserialize=true`)
}

export default {
  getDropInfo,
  getCollectionInfo
};
