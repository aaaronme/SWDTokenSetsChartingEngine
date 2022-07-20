interface CommonDecimals {
  [addr: string]: string;
}

export const ADDRESSES = [
  "0x25ad32265c9354c29e145c902ae876f6b69806f2", // # alpha portfolio
  "0x71b41b3b19aac53ca4063aec2d17fc3caeb38026", // # macro trend btc
  "0x72ca52512b93e8d67309af0c14c1a225bcbd3548", // # macro trend eth
  "0xabcc2102065ba01c6df1a5a5a57158f452403b70", // # quantum momentum btc
  "0x9984d846a3dc77aa0488f3758976b149e8475995", // # quantum momentum eth
  "0x20ab4cb8f8da39582bc92da954ab1bb128f4e244", // # quantum momentum matic
  "0x58f7c5707ba8e09b5e61cebe8821f65434372344", // # buy the dip btc
  "0x07a79127182a1c303d11ecda951310ec1c2e1444", // # buy the dip eth
  "0xb87352b4c3eb9daed09cd4996dff85c122394912", // # buy the dip matic
  "0xf2aa5ccea80c246a71e97b418173fcc956408d3f", // # discretionary btc
  "0x72b467cacbdbec5918d8eec0371ca33e6fd42421", // # discretionary eth
  "0xab80a6e2909c8089ebd84f331c05bbefa3276cd2", // # discretionary matic
  "0x62135f85899d97aed95f4405d710208e68b99f39", // # defi value index
  "0xb4f78a05ab16cd3e6d0100112d0cc431942859bb", // # btc momentum index
  "0xd3ef811331a98d24a2b2fb64cebeea5af31b2568", // # eth momentum index
  "0xdfddd9811796f72ba32a031724f5b1403cd48b91", // # matic momentum index
  "0xb5253c58b8a361d9901922b23ec9fb9e7d38c98a", // # dpi momentum index
  "0xad2b726fd2bd3a7f8f4b3929152438eba637ef19", // # swd momentum index
  "0x55a40b33cff2eb062e7aa76506b7de711f2b2aff", // # polygon ecosystem index
]; // # contract addresS

export const ACTIVE_ADDRESSES: {
  [key: string]: string;
} = {
  // BMI: "0xB4f78a05ab16CD3e6d0100112D0CC431942859Bb",
  BTBTC: "0x58f7C5707Ba8E09B5e61ceBe8821f65434372344",
  BTETH: "0x07A79127182a1c303d11eCDa951310EC1C2E1444",
  BTMAT: "0xb87352B4C3EB9daEd09cD4996dFf85c122394912",
  // DBTC: "0xf2aa5ccea80c246a71e97b418173fcc956408d3f",
  // DETH: "0x72b467cacbdbec5918d8eec0371ca33e6fd42421",
  // DMATI: "0xab80a6e2909c8089ebd84f331c05bbefa3276cd2",
  // DMI: "0xB5253C58b8a361d9901922b23eC9fB9E7d38C98a",
  // DVI: "0x62135f85899d97aed95f4405d710208e68b99f39",
  // EIGHT: "0xD3C5406b4C0e7EF5d325F47fa6ee08371d100B2b",
  // EMI: "0xd3ef811331a98d24a2B2FB64cEBeEa5aF31b2568",
  // FOMO: "0x3c0744E72abb3A312122c2118F01F9EE2EB79d43",
  // HORSE: "0x330FF0aFE63f42eb478c92dA79B0ce0c69070183",
  // KEV: "0x4315C720Cad5aa41D7535902b58B015EEA6F97B0",
  // MMI: "0xDFdDd9811796F72bA32a031724f5B1403CD48B91",
  MTBTC: "0x71b41b3b19aac53ca4063aec2d17fc3caeb38026",
  MTETH: "0x72Ca52512b93E8D67309aF0C14C1A225bcbd3548",
  // PEI: "0x55a40b33CFf2eb062e7aa76506B7De711F2B2aff",
  QMB: "0xabcc2102065ba01c6df1a5a5a57158f452403b70",
  QME: "0x9984d846a3dc77aa0488f3758976b149e8475995",
  QMM: "0x20ab4cb8f8da39582bc92da954ab1bb128f4e244",
  // SMI: "0xad2b726fd2bd3a7f8f4b3929152438eba637ef19",
  // SSPOTS: "0x99Dd5231314005f26ce147E50F9BAC2365217fCe",
  // SURF: "0xb656D21E3BFa5Aed5405760b891BA539f4CEb976",
  SWAP: "0x25ad32265c9354c29e145c902ae876f6b69806f2",
  SWBYF: "0xE525deeC6eB2566c29C272BB69eEd2E8A46389dc",
  SWD: "0xaee24d5296444c007a532696aada9de5ce6cafd0",
  SWEYF: "0x8fcdd8372b5bcd27524546ad02b198c899d8ab2a",
  SWMYF: "0x2C9227bf5FC806f94601eCAf5BC027CAd801b3B6",
  SWYF: "0xdc8d88d9e57cc7be548f76e5e413c4838f953018",
  // SWX: "0x24ec3c300ff53b96937c39b686844db9e471421e",
  WETH: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
  WBTC: "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
};

export const PRECISION_REQUIRED = [
  "0x340f412860da7b7823df372a2b59ff78b7ae6abc",
  "0x130ce4e4f76c2265f94a961d70618562de0bb8d2",
  "0x4f025829c4b13df652f38abd2ab901185ff1e609",
];

export async function asyncForEach<T>(
  array: Array<T>,
  callback: (item: T, index: number) => Promise<void>
) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index);
  }
}

export const BLOCKS = [
  30915738,
];