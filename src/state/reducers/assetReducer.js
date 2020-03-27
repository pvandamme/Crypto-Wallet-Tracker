import {
	FETCH_ASSET_BEGIN,
	FETCH_ASSET_FAILURE,
	FETCH_ASSET_SUCCESS
} from '../actionTypes'

const defaultState = {
	pending: false,
	error: false,
	success: false,
	assetData: {
		id: 'ethereum',
		symbol: 'eth',
		name: 'Ethereum',
		asset_platform_id: null,
		block_time_in_minutes: 0,
		hashing_algorithm: 'Ethash',
		categories: ['Smart Contract Platform'],
		description: {
			en:
				'Ethereum is a <a href="https://www.coingecko.com/en?category_id=29&view=market">smart contract platform</a> that enables developers to build tokens and decentralized applications (dapps). ETH is the native currency for the Ethereum platform and also works as the transaction fees to miners on the Ethereum network.\r\n\r\nEthereum is the pioneer for blockchain based smart contracts. Smart contract is essentially a computer code that runs exactly as programmed without any possibility of downtime, censorship, fraud or third-party interference. It can facilitate the exchange of money, content, property, shares, or anything of value. When running on the blockchain a smart contract becomes like a self-operating computer program that automatically executes when specific conditions are met.\r\n\r\nEthereum allows programmers to run complete-turing smart contracts that is capable of any customizations. Rather than giving a set of limited operations, Ethereum allows developers to have complete control over customization of their smart contract, giving developers the power to build unique and innovative applications.\r\n\r\nEthereum being the first blockchain based smart contract platform, they have gained much popularity, resulting in new competitors fighting for market share. The competitors includes: <a href="https://www.coingecko.com/en/coins/ethereum_classic">Ethereum Classic</a> which is the oldchain of Ethereum, <a href="https://www.coingecko.com/en/coins/qtum">Qtum</a>, <a href="https://www.coingecko.com/en/coins/eos">EOS</a>, <a href="https://www.coingecko.com/en/coins/neo">Neo</a>, <a href="https://www.coingecko.com/en/coins/icon">Icon</a>, <a href="https://www.coingecko.com/en/coins/tron">Tron</a> and <a href="https://www.coingecko.com/en/coins/cardano">Cardano</a>.\r\n\r\nEthereum wallets are fairly simple to set up with multiple popular choices such as myetherwallet, <a href="https://www.coingecko.com/buzz/complete-beginners-guide-to-metamask?locale=en">metamask</a>, and <a href="https://www.coingecko.com/buzz/trezor-model-t-wallet-review">Trezor</a>. Read here for more guide on using ethereum wallet: <a href="https://www.coingecko.com/buzz/how-to-use-an-ethereum-wallet">How to Use an Ethereum Wallet</a>'
		},
		links: {
			homepage: ['https://www.ethereum.org/', '', ''],
			blockchain_site: [
				'https://etherscan.io/',
				'https://ethplorer.io/',
				'https://blockchair.com/ethereum',
				'https://eth.tokenview.com/',
				''
			],
			official_forum_url: ['https://forum.ethereum.org/', '', ''],
			chat_url: ['', '', ''],
			announcement_url: ['', ''],
			twitter_screen_name: 'ethereum',
			facebook_username: 'ethereumproject',
			bitcointalk_thread_identifier: 428589,
			telegram_channel_identifier: '',
			subreddit_url: 'https://www.reddit.com/r/ethereum',
			repos_url: {
				github: [
					'https://github.com/ethereum/go-ethereum',
					'https://github.com/ethereum/py-evm',
					'https://github.com/ethereum/aleth',
					'https://github.com/ethereum/web3.py',
					'https://github.com/ethereum/solidity',
					'https://github.com/ethereum/sharding',
					'https://github.com/ethereum/casper',
					'https://github.com/paritytech/parity'
				],
				bitbucket: []
			}
		},
		image: {
			thumb:
				'https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1547034048',
			small:
				'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1547034048',
			large:
				'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1547034048'
		},
		country_origin: '',
		genesis_date: '2015-07-30',
		sentiment_votes_up_percentage: 79.21,
		sentiment_votes_down_percentage: 20.79,
		ico_data: {
			ico_start_date: '2014-07-20T00:00:00.000Z',
			ico_end_date: '2014-09-01T00:00:00.000Z',
			short_desc: 'A decentralized platform for applications',
			description: null,
			links: {},
			softcap_currency: '',
			hardcap_currency: '',
			total_raised_currency: '',
			softcap_amount: null,
			hardcap_amount: null,
			total_raised: null,
			quote_pre_sale_currency: '',
			base_pre_sale_amount: null,
			quote_pre_sale_amount: null,
			quote_public_sale_currency: 'BTC',
			base_public_sale_amount: 1,
			quote_public_sale_amount: 0.00074794,
			accepting_currencies: '',
			country_origin: '',
			pre_sale_start_date: null,
			pre_sale_end_date: null,
			whitelist_url: '',
			whitelist_start_date: null,
			whitelist_end_date: null,
			bounty_detail_url: '',
			amount_for_sale: null,
			kyc_required: true,
			whitelist_available: null,
			pre_sale_available: null,
			pre_sale_ended: false
		},
		market_cap_rank: 2,
		coingecko_rank: 2,
		coingecko_score: 79.311,
		developer_score: 95.617,
		community_score: 58.077,
		liquidity_score: 92.231,
		public_interest_score: 40.525,
		market_data: {
			current_price: {
				aed: 500.68,
				ars: 8742.41,
				aud: 224.35,
				bch: 0.60116236,
				bdt: 11497.49,
				bhd: 51.35,
				bmd: 136.31,
				bnb: 10.43535,
				brl: 684.74,
				btc: 0.02040968,
				cad: 191.86,
				chf: 131.19,
				clp: 113571,
				cny: 966.64,
				czk: 3371,
				dkk: 923.91,
				eos: 58.548,
				eth: 1,
				eur: 123.82,
				gbp: 111.38,
				hkd: 1056.56,
				huf: 43874,
				idr: 2205793,
				ils: 490.2,
				inr: 10214.53,
				jpy: 14828.35,
				krw: 166557,
				kwd: 42.11,
				lkr: 25334,
				ltc: 3.404089,
				mmk: 189749,
				mxn: 3179.14,
				myr: 592.26,
				nok: 1431.1,
				nzd: 228.91,
				php: 6968.52,
				pkr: 22009,
				pln: 561.76,
				rub: 10651.12,
				sar: 511.96,
				sek: 1360.4,
				sgd: 195.35,
				thb: 4443.76,
				try: 880.5,
				twd: 4117.37,
				uah: 3821.92,
				usd: 136.31,
				vef: 33870687,
				vnd: 3207208,
				xag: 9.41,
				xau: 0.083912,
				xdr: 100.56,
				xlm: 3277,
				xrp: 802.147,
				zar: 2389.47
			},
			roi: {
				times: 26.287858565038118,
				currency: 'btc',
				percentage: 2628.785856503812
			},
			ath: {
				aed: 5319.19,
				ars: 27014,
				aud: 1829.67,
				bch: 1.2239,
				bdt: 119230,
				bhd: 545.07,
				bmd: 1448.18,
				bnb: 7747,
				brl: 4642.29,
				btc: 0.1474984,
				cad: 1804.56,
				chf: 1401.02,
				clp: 874121,
				cny: 9346.41,
				czk: 30286,
				dkk: 8842.2,
				eos: 71.121,
				eth: 1.003981,
				eur: 1187.08,
				gbp: 1054.8,
				hkd: 11328.32,
				huf: 366486,
				idr: 19418208,
				ils: 4915.41,
				inr: 92098,
				jpy: 160806,
				krw: 1533043,
				kwd: 436.16,
				lkr: 221390,
				ltc: 13.727593,
				mmk: 1944616,
				mxn: 27559,
				myr: 5760.12,
				nok: 11472.46,
				nzd: 1996.53,
				php: 73030,
				pkr: 160096,
				pln: 4950.39,
				rub: 82032,
				sar: 5431.11,
				sek: 11654.63,
				sgd: 1916.66,
				thb: 46006,
				try: 5429.08,
				twd: 42870,
				uah: 41067,
				usd: 1448.18,
				vef: 90330602,
				vnd: 32881338,
				xag: 84.01,
				xau: 1.08,
				xdr: 1010.63,
				xlm: 4136,
				xrp: 1028,
				zar: 17900.82
			},
			ath_change_percentage: {
				aed: -90.59149,
				ars: -67.65145,
				aud: -87.73922,
				bch: -50.86178,
				bdt: -90.3613,
				bhd: -90.58424,
				bmd: -90.59196,
				bnb: -99.86518,
				brl: -85.25547,
				btc: -86.15774,
				cad: -89.37611,
				chf: -90.63897,
				clp: -87.01329,
				cny: -89.66047,
				czk: -88.88111,
				dkk: -89.55531,
				eos: -17.66474,
				eth: -0.39652,
				eur: -89.57291,
				gbp: -89.44322,
				hkd: -90.6773,
				huf: -88.03341,
				idr: -88.64962,
				ils: -90.03174,
				inr: -88.90053,
				jpy: -90.7781,
				krw: -89.12996,
				kwd: -90.34887,
				lkr: -88.56224,
				ltc: -75.20196,
				mmk: -90.24678,
				mxn: -88.45348,
				myr: -89.72268,
				nok: -87.50456,
				nzd: -88.53263,
				php: -90.46026,
				pkr: -86.25904,
				pln: -88.66578,
				rub: -87.02143,
				sar: -90.57781,
				sek: -88.31697,
				sgd: -89.81215,
				thb: -90.34482,
				try: -83.79494,
				twd: -90.39222,
				uah: -90.6976,
				usd: -90.59196,
				vef: -62.52069,
				vnd: -90.24885,
				xag: -88.79975,
				xau: -92.23988,
				xdr: -90.0546,
				xlm: -20.70727,
				xrp: -21.94711,
				zar: -86.65438
			},
			ath_date: {
				aed: '2018-01-13T00:00:00.000Z',
				ars: '2018-01-13T00:00:00.000Z',
				aud: '2018-01-13T00:00:00.000Z',
				bch: '2017-08-05T00:00:00.000Z',
				bdt: '2018-01-13T00:00:00.000Z',
				bhd: '2018-01-13T00:00:00.000Z',
				bmd: '2018-01-13T00:00:00.000Z',
				bnb: '2017-10-19T00:00:00.000Z',
				brl: '2018-01-13T00:00:00.000Z',
				btc: '2017-06-12T00:00:00.000Z',
				cad: '2018-01-13T00:00:00.000Z',
				chf: '2018-01-13T00:00:00.000Z',
				clp: '2018-01-13T00:00:00.000Z',
				cny: '2018-01-13T00:00:00.000Z',
				czk: '2018-01-13T00:00:00.000Z',
				dkk: '2018-01-13T00:00:00.000Z',
				eos: '2020-03-13T03:33:03.530Z',
				eth: '2019-10-15T16:26:30.106Z',
				eur: '2018-01-13T00:00:00.000Z',
				gbp: '2018-01-13T00:00:00.000Z',
				hkd: '2018-01-13T00:00:00.000Z',
				huf: '2018-01-13T00:00:00.000Z',
				idr: '2018-01-13T00:00:00.000Z',
				ils: '2018-01-13T00:00:00.000Z',
				inr: '2018-01-13T00:00:00.000Z',
				jpy: '2018-01-13T00:00:00.000Z',
				krw: '2018-01-13T00:00:00.000Z',
				kwd: '2018-01-13T00:00:00.000Z',
				lkr: '2018-01-13T00:00:00.000Z',
				ltc: '2017-06-12T00:00:00.000Z',
				mmk: '2018-01-13T00:00:00.000Z',
				mxn: '2018-01-13T00:00:00.000Z',
				myr: '2018-01-13T00:00:00.000Z',
				nok: '2018-01-13T00:00:00.000Z',
				nzd: '2018-01-13T00:00:00.000Z',
				php: '2018-01-13T00:00:00.000Z',
				pkr: '2018-01-13T00:00:00.000Z',
				pln: '2018-01-13T00:00:00.000Z',
				rub: '2018-01-13T00:00:00.000Z',
				sar: '2018-01-13T00:00:00.000Z',
				sek: '2018-01-13T00:00:00.000Z',
				sgd: '2018-01-13T00:00:00.000Z',
				thb: '2018-01-13T00:00:00.000Z',
				try: '2018-01-13T00:00:00.000Z',
				twd: '2018-01-13T00:00:00.000Z',
				uah: '2018-01-13T00:00:00.000Z',
				usd: '2018-01-13T00:00:00.000Z',
				vef: '2019-06-26T20:25:34.956Z',
				vnd: '2018-01-13T00:00:00.000Z',
				xag: '2018-01-13T00:00:00.000Z',
				xau: '2018-01-13T00:00:00.000Z',
				xdr: '2018-01-13T00:00:00.000Z',
				xlm: '2020-03-08T16:06:05.797Z',
				xrp: '2020-03-07T16:40:50.966Z',
				zar: '2018-01-13T00:00:00.000Z'
			},
			atl: {
				aed: 1.59,
				ars: 4.1,
				aud: 0.596152,
				bch: 0.20411961,
				bdt: 33.7,
				bhd: 0.163288,
				bmd: 0.432979,
				bnb: 6.69256,
				brl: 1.69,
				btc: 0.00160204,
				cad: 0.561954,
				chf: 0.413801,
				clp: 297.03,
				cny: 2.81,
				czk: 10.33,
				dkk: 2.84,
				eos: 30.013555,
				eth: 0.99987722,
				eur: 0.381455,
				gbp: 0.280314,
				hkd: 3.35,
				huf: 118.42,
				idr: 5876.48,
				ils: 1.67,
				inr: 28.13,
				jpy: 51.85,
				krw: 489.4,
				kwd: 0.130639,
				lkr: 61.02,
				ltc: 0.13982924,
				mmk: 468.1,
				mxn: 7.16,
				myr: 1.85,
				nok: 3.52,
				nzd: 0.641302,
				php: 20.05,
				pkr: 45.2,
				pln: 1.62,
				rub: 26.88,
				sar: 1.62,
				sek: 3.59,
				sgd: 0.601615,
				thb: 15.33,
				try: 1.26,
				twd: 14.02,
				uah: 9.54,
				usd: 0.432979,
				vef: 2.74,
				vnd: 9662,
				xag: 0.02721328,
				xau: 0.00036799,
				xdr: 0.306291,
				xlm: 664.668,
				xrp: 286.238,
				zar: 5.74
			},
			atl_change_percentage: {
				aed: 31368.28022,
				ars: 212810.90312,
				aud: 37529.88147,
				bch: 194.63253,
				bdt: 34001.05363,
				bhd: 31330.78277,
				bmd: 31366.99517,
				bnb: 56.05985,
				brl: 40366.26161,
				btc: 1174.44152,
				cad: 34015.75313,
				chf: 31593.93233,
				clp: 38118.63468,
				cny: 34257.70513,
				czk: 32494.79319,
				dkk: 32363.57533,
				eos: 95.10392,
				eth: 0.01228,
				eur: 32348.82762,
				gbp: 39624.17176,
				hkd: 31383.6013,
				huf: 36935.56434,
				idr: 37406.16066,
				ils: 29277.32774,
				inr: 36238.26571,
				jpy: 28503.13252,
				krw: 33950.03767,
				kwd: 32122.17135,
				lkr: 41396.85734,
				ltc: 2334.52239,
				mmk: 40417.86243,
				mxn: 44362.36054,
				myr: 31898.02167,
				nok: 40674.14283,
				nzd: 35600.67778,
				php: 34653.03672,
				pkr: 48575.14329,
				pln: 34449.46032,
				rub: 39506.26401,
				sar: 31415.38496,
				sek: 37786.29196,
				sgd: 32356.9929,
				thb: 28876.29989,
				try: 69970.65965,
				twd: 29279.84004,
				uah: 39925.16406,
				usd: 31366.99517,
				vef: 1237060694.47453,
				vnd: 33084.73059,
				xag: 34475.64369,
				xau: 22729.15598,
				xdr: 32715.54495,
				xlm: 393.39817,
				xrp: 180.32067,
				zar: 41501.98851
			},
			atl_date: {
				aed: '2015-10-20T00:00:00.000Z',
				ars: '2015-10-20T00:00:00.000Z',
				aud: '2015-10-20T00:00:00.000Z',
				bch: '2017-11-12T00:00:00.000Z',
				bdt: '2015-10-20T00:00:00.000Z',
				bhd: '2015-10-20T00:00:00.000Z',
				bmd: '2015-10-20T00:00:00.000Z',
				bnb: '2019-08-16T00:00:00.000Z',
				brl: '2015-10-20T00:00:00.000Z',
				btc: '2015-10-20T00:00:00.000Z',
				cad: '2015-10-20T00:00:00.000Z',
				chf: '2015-10-20T00:00:00.000Z',
				clp: '2015-10-20T00:00:00.000Z',
				cny: '2015-10-20T00:00:00.000Z',
				czk: '2015-10-20T00:00:00.000Z',
				dkk: '2015-10-20T00:00:00.000Z',
				eos: '2019-04-16T00:00:00.000Z',
				eth: '2019-10-22T00:00:00.000Z',
				eur: '2015-10-20T00:00:00.000Z',
				gbp: '2015-10-20T00:00:00.000Z',
				hkd: '2015-10-20T00:00:00.000Z',
				huf: '2015-10-20T00:00:00.000Z',
				idr: '2015-10-20T00:00:00.000Z',
				ils: '2015-10-20T00:00:00.000Z',
				inr: '2015-10-20T00:00:00.000Z',
				jpy: '2015-10-20T00:00:00.000Z',
				krw: '2015-10-20T00:00:00.000Z',
				kwd: '2015-10-20T00:00:00.000Z',
				lkr: '2015-10-20T00:00:00.000Z',
				ltc: '2015-10-20T00:00:00.000Z',
				mmk: '2015-10-20T00:00:00.000Z',
				mxn: '2015-10-20T00:00:00.000Z',
				myr: '2015-10-20T00:00:00.000Z',
				nok: '2015-10-20T00:00:00.000Z',
				nzd: '2015-10-20T00:00:00.000Z',
				php: '2015-10-20T00:00:00.000Z',
				pkr: '2015-10-20T00:00:00.000Z',
				pln: '2015-10-20T00:00:00.000Z',
				rub: '2015-10-20T00:00:00.000Z',
				sar: '2015-10-20T00:00:00.000Z',
				sek: '2015-10-20T00:00:00.000Z',
				sgd: '2015-10-20T00:00:00.000Z',
				thb: '2015-10-20T00:00:00.000Z',
				try: '2015-10-20T00:00:00.000Z',
				twd: '2015-10-20T00:00:00.000Z',
				uah: '2015-10-20T00:00:00.000Z',
				usd: '2015-10-20T00:00:00.000Z',
				vef: '2015-10-20T00:00:00.000Z',
				vnd: '2015-10-20T00:00:00.000Z',
				xag: '2015-10-20T00:00:00.000Z',
				xau: '2015-10-20T00:00:00.000Z',
				xdr: '2015-10-20T00:00:00.000Z',
				xlm: '2018-11-20T00:00:00.000Z',
				xrp: '2018-12-20T00:00:00.000Z',
				zar: '2015-10-20T00:00:00.000Z'
			},
			market_cap: {
				aed: 55157569520,
				ars: 963137176712,
				aud: 24724562234,
				bch: 66315099,
				bdt: 1266614583707,
				bhd: 5656503957,
				bmd: 15016217336,
				bnb: 1153091846,
				brl: 75439974276,
				btc: 2251309,
				cad: 21129754884,
				chf: 14454625824,
				clp: 12511512284673,
				cny: 106508527945,
				czk: 371149341881,
				dkk: 101787579377,
				eos: 6456810012,
				eth: 110267856,
				eur: 13642113320,
				gbp: 12272664332,
				hkd: 116398058521,
				huf: 4833553004839,
				idr: 242917347850647,
				ils: 54003047650,
				inr: 1126657356564,
				jpy: 1634410143544,
				krw: 18366410505215,
				kwd: 4639440541,
				lkr: 2790856416784,
				ltc: 375810225,
				mmk: 20903591926017,
				mxn: 350713546465,
				myr: 65245449310,
				nok: 157996329159,
				nzd: 25233521904,
				php: 767853372523,
				pkr: 2424584297245,
				pln: 61839996462,
				rub: 1173414148344,
				sar: 56400041375,
				sek: 150069538319,
				sgd: 21521182622,
				thb: 489566225709,
				try: 96965181244,
				twd: 453962774405,
				uah: 421039732911,
				usd: 15016217336,
				vef: 3731344441295926,
				vnd: 353381676929110,
				xag: 1037026727,
				xau: 9259000,
				xdr: 11077763853,
				xlm: 361367239666,
				xrp: 88466573014,
				zar: 263299685533
			},
			market_cap_rank: 2,
			total_volume: {
				aed: 34445700356,
				ars: 601454074531,
				aud: 15434622068,
				bch: 41358333,
				bdt: 790996173259,
				bhd: 3532466025,
				bmd: 9377572786,
				bnb: 717923652,
				brl: 47108236888,
				btc: 1404130,
				cad: 13199158757,
				chf: 9025379284,
				clp: 7813402459808,
				cny: 66501995166,
				czk: 231915345923,
				dkk: 63562726262,
				eos: 4027924790,
				eth: 68772240,
				eur: 8518812180,
				gbp: 7662414723,
				hkd: 72688755035,
				huf: 3018440956111,
				idr: 151752571601558,
				ils: 33724752560,
				inr: 702731804349,
				jpy: 1020149805241,
				krw: 11458690625937,
				kwd: 2897313643,
				lkr: 1742879621148,
				ltc: 234192019,
				mmk: 13054216676122,
				mxn: 218716355962,
				myr: 40745544375,
				nok: 98455755595,
				nzd: 15748264368,
				php: 479414979975,
				pkr: 1514144022606,
				pln: 38647462506,
				rub: 732768226246,
				sar: 35221619483,
				sek: 93592049337,
				sgd: 13439571591,
				thb: 305718250380,
				try: 60576306923,
				twd: 283263652346,
				uah: 262937772711,
				usd: 9377572786,
				vef: 2330210951415394,
				vnd: 220647146199444,
				xag: 647442817,
				xau: 5772928,
				xdr: 6918022995,
				xlm: 225482039332,
				xrp: 55185547841,
				zar: 164389010349
			},
			high_24h: {
				aed: 518.59,
				ars: 9056.64,
				aud: 232.76,
				bch: 0.61056297,
				bdt: 12006,
				bhd: 53.19,
				bmd: 141.18,
				bnb: 11.002916,
				brl: 709.29,
				btc: 0.02071363,
				cad: 198.39,
				chf: 135.89,
				clp: 117097,
				cny: 998.74,
				czk: 3476.61,
				dkk: 954.87,
				eos: 59.906,
				eth: 1,
				eur: 127.93,
				gbp: 115.99,
				hkd: 1094.64,
				huf: 45362,
				idr: 2292352,
				ils: 505.63,
				inr: 10550.05,
				jpy: 15435.72,
				krw: 171584,
				kwd: 43.68,
				lkr: 26455,
				ltc: 3.475662,
				mmk: 198143,
				mxn: 3283.45,
				myr: 613.49,
				nok: 1469.88,
				nzd: 236.71,
				php: 7167.37,
				pkr: 22983,
				pln: 578.64,
				rub: 10923.24,
				sar: 530.31,
				sek: 1405.91,
				sgd: 202.08,
				thb: 4605.39,
				try: 903.7,
				twd: 4262.38,
				uah: 3991.27,
				usd: 141.18,
				vef: 35082200,
				vnd: 3313756,
				xag: 9.76,
				xau: 0.08675,
				xdr: 104.15,
				xlm: 3352,
				xrp: 842.331,
				zar: 2446.9
			},
			low_24h: {
				aed: 492.15,
				ars: 8601.81,
				aud: 221.43,
				bch: 0.59927605,
				bdt: 11306.37,
				bhd: 50.5,
				bmd: 133.99,
				bnb: 10.416767,
				brl: 668.98,
				btc: 0.0202213,
				cad: 188.53,
				chf: 129.35,
				clp: 111127,
				cny: 947.98,
				czk: 3313.04,
				dkk: 908,
				eos: 58.402,
				eth: 1,
				eur: 121.67,
				gbp: 110.44,
				hkd: 1038.88,
				huf: 43050,
				idr: 2140809,
				ils: 480.13,
				inr: 10022.69,
				jpy: 14690.46,
				krw: 163149,
				kwd: 41.09,
				lkr: 24931,
				ltc: 3.394729,
				mmk: 186686,
				mxn: 3090.79,
				myr: 582.79,
				nok: 1398.93,
				nzd: 224.85,
				php: 6797.76,
				pkr: 21236,
				pln: 552.16,
				rub: 10349.2,
				sar: 503.17,
				sek: 1332.82,
				sgd: 191.88,
				thb: 4367.09,
				try: 856.53,
				twd: 4050.46,
				uah: 3714.59,
				usd: 133.99,
				vef: 33295473,
				vnd: 3134052,
				xag: 9.19,
				xau: 0.081996,
				xdr: 98.66,
				xlm: 3221,
				xrp: 785.151,
				zar: 2321.05
			},
			price_change_24h: 0.66022402,
			price_change_percentage_24h: 0.48672,
			price_change_percentage_7d: -0.36879,
			price_change_percentage_14d: 23.24586,
			price_change_percentage_30d: -45.10762,
			price_change_percentage_60d: -18.69404,
			price_change_percentage_200d: -24.89289,
			price_change_percentage_1y: 1.69919,
			market_cap_change_24h: 129838116,
			market_cap_change_percentage_24h: 0.87219,
			price_change_24h_in_currency: {
				aed: 2.43,
				ars: 63.53,
				aud: -2.51001497,
				bch: -0.0061500061,
				bdt: 92.45,
				bhd: 0.200004,
				bmd: 0.660224,
				bnb: -0.5520623169,
				brl: 1.85,
				btc: -0.0000216329,
				cad: 0.161247,
				chf: -0.53737688,
				clp: -1647.36237936,
				cny: 5.89,
				czk: -42.09340746,
				dkk: -1.12142154,
				eos: -0.1607642879,
				eth: 0,
				eur: -0.04998628,
				gbp: -2.2030441,
				hkd: 4.82,
				huf: -282.39274626,
				idr: 2884.37,
				ils: -0.68039594,
				inr: 10.48,
				jpy: -72.14923237,
				krw: 613.45,
				kwd: 0.143214,
				lkr: 185.37,
				ltc: -0.0457353996,
				mmk: 1434.27,
				mxn: -73.83966404,
				myr: 4.23,
				nok: -10.15003296,
				nzd: -2.33126071,
				php: 68.16,
				pkr: 581.38,
				pln: -5.13640036,
				rub: 64.07,
				sar: 2.51,
				sek: -4.63155571,
				sgd: 0.243148,
				thb: 12.3,
				try: 7.75,
				twd: 13.77,
				uah: 61.46,
				usd: 0.660224,
				vef: 164058,
				vnd: 46542,
				xag: 0.01802216,
				xau: 0.0001053,
				xdr: 0.378271,
				xlm: -56.572265393,
				xrp: -34.1664058011,
				zar: 17.11
			},
			price_change_percentage_1h_in_currency: {
				aed: -0.0728,
				ars: -0.08908,
				aud: -0.16705,
				bch: -0.06502,
				bdt: -0.07553,
				bhd: -0.16113,
				bmd: -0.07553,
				bnb: 0.11923,
				brl: -0.07553,
				btc: -0.16116,
				cad: -0.15129,
				chf: -0.15582,
				clp: -0.03942,
				cny: -0.08961,
				czk: 0.06629,
				dkk: -0.04814,
				eos: -0.51109,
				eth: 0,
				eur: -0.06078,
				gbp: -0.29906,
				hkd: -0.07804,
				huf: 0.06015,
				idr: 0.22144,
				ils: 0.04563,
				inr: -0.21534,
				jpy: -0.10587,
				krw: -0.08084,
				kwd: -0.08975,
				lkr: -0.07553,
				ltc: 0.18483,
				mmk: -0.07553,
				mxn: 0.33226,
				myr: -0.07553,
				nok: -0.66174,
				nzd: -0.12287,
				php: 0.10181,
				pkr: -0.07553,
				pln: 0.22306,
				rub: 0.25592,
				sar: -0.06757,
				sek: -0.09965,
				sgd: -0.14297,
				thb: -0.13985,
				try: -0.09006,
				twd: -0.15981,
				uah: -0.07553,
				usd: -0.07553,
				vef: -0.07553,
				vnd: -0.06471,
				xag: -0.12055,
				xau: -0.20035,
				xdr: -0.07553,
				xlm: 0.56578,
				xrp: -0.04535,
				zar: -0.02809
			},
			price_change_percentage_24h_in_currency: {
				aed: 0.48672,
				ars: 0.73204,
				aud: -1.10642,
				bch: -1.01266,
				bdt: 0.81064,
				bhd: 0.39105,
				bmd: 0.48672,
				bnb: -5.0245,
				brl: 0.27115,
				btc: -0.10588,
				cad: 0.08412,
				chf: -0.40795,
				clp: -1.42977,
				cny: 0.61299,
				czk: -1.23329,
				dkk: -0.12123,
				eos: -0.27383,
				eth: 0,
				eur: -0.04035,
				gbp: -1.93964,
				hkd: 0.45826,
				huf: -0.63952,
				idr: 0.13093,
				ils: -0.13861,
				inr: 0.10267,
				jpy: -0.48421,
				krw: 0.36967,
				kwd: 0.34123,
				lkr: 0.73712,
				ltc: -1.32573,
				mmk: 0.76164,
				mxn: -2.26991,
				myr: 0.7185,
				nok: -0.70425,
				nzd: -1.00816,
				php: 0.98776,
				pkr: 2.71325,
				pln: -0.90606,
				rub: 0.60517,
				sar: 0.49274,
				sek: -0.3393,
				sgd: 0.12462,
				thb: 0.27756,
				try: 0.88789,
				twd: 0.33559,
				uah: 1.63437,
				usd: 0.48672,
				vef: 0.48672,
				vnd: 1.47252,
				xag: 0.19187,
				xau: 0.12565,
				xdr: 0.3776,
				xlm: -1.6968,
				xrp: -4.08536,
				zar: 0.72143
			},
			price_change_percentage_7d_in_currency: {
				aed: -0.36879,
				ars: 0.70914,
				aud: -5.8044,
				bch: -2.58715,
				bdt: -0.92346,
				bhd: -0.64599,
				bmd: -0.36879,
				bnb: -6.47408,
				brl: -1.79008,
				btc: -7.80669,
				cad: -3.34756,
				chf: -3.01667,
				clp: -3.7309,
				cny: -0.60845,
				czk: -5.35893,
				dkk: -3.64679,
				eos: -2.30402,
				eth: 0,
				eur: -3.50141,
				gbp: -6.44457,
				hkd: -0.49658,
				huf: -4.43811,
				idr: 1.3262,
				ils: -1.84346,
				inr: -0.66401,
				jpy: -2.59656,
				krw: -3.21663,
				kwd: -1.06558,
				lkr: -0.65259,
				ltc: -2.92806,
				mmk: -2.98173,
				mxn: -3.44172,
				myr: -1.95067,
				nok: -8.1577,
				nzd: -4.84739,
				php: -1.04062,
				pkr: 1.2232,
				pln: -4.38074,
				rub: -1.55575,
				sar: -0.50405,
				sek: -4.66601,
				sgd: -1.76733,
				thb: -0.42682,
				try: -1.66779,
				twd: -0.7941,
				uah: 0.3968,
				usd: -0.36879,
				vef: -0.36879,
				vnd: -0.6456,
				xag: -16.65427,
				xau: -9.86396,
				xdr: -0.32177,
				xlm: -1.31328,
				xrp: -4.30876,
				zar: 0.41088
			},
			price_change_percentage_14d_in_currency: {
				aed: 23.24586,
				ars: 26.07368,
				aud: 27.1879,
				bch: -18.87773,
				bdt: 22.51625,
				bhd: 22.9775,
				bmd: 23.24586,
				bnb: -10.86913,
				brl: 29.20252,
				btc: -10.77398,
				cad: 24.50138,
				chf: 25.59598,
				clp: 20.59726,
				cny: 24.33287,
				czk: 29.96652,
				dkk: 25.03134,
				eos: 0.00816,
				eth: 0,
				eur: 25.22495,
				gbp: 26.56766,
				hkd: 22.84537,
				huf: 31.22374,
				idr: 34.19183,
				ils: 20.16091,
				inr: 24.0752,
				jpy: 28.19658,
				krw: 24.5068,
				kwd: 23.7618,
				lkr: 25.25624,
				ltc: -7.59637,
				mmk: 23.56571,
				mxn: 30.788,
				myr: 25.33716,
				nok: 27.15684,
				nzd: 26.52595,
				php: 23.04568,
				pkr: 25.15608,
				pln: 29.72671,
				rub: 28.52121,
				sar: 23.33173,
				sek: 26.22298,
				sgd: 25.36635,
				thb: 26.70887,
				try: 26.0133,
				twd: 23.56698,
				uah: 33.65,
				usd: 23.24586,
				vef: 23.24586,
				vnd: 24.43591,
				xag: 33.48216,
				xau: 19.4919,
				xdr: 26.35419,
				xlm: -3.56051,
				xrp: -1.38828,
				zar: 30.31479
			},
			price_change_percentage_30d_in_currency: {
				aed: -45.10762,
				ars: -43.0087,
				aud: -40.3325,
				bch: -14.2497,
				bdt: -45.5126,
				bhd: -45.15886,
				bmd: -45.10762,
				bnb: -14.3298,
				brl: -37.16202,
				btc: -23.229,
				cad: -41.82696,
				chf: -45.87386,
				clp: -43.71608,
				cny: -44.68485,
				czk: -41.5231,
				dkk: -45.8183,
				eos: -3.57747,
				eth: 0,
				eur: -45.74877,
				gbp: -41.67879,
				hkd: -45.38103,
				huf: -43.24257,
				idr: -35.91277,
				ils: -42.39972,
				inr: -42.77271,
				jpy: -45.8507,
				krw: -44.81928,
				kwd: -44.64032,
				lkr: -43.873,
				ltc: -2.26434,
				mmk: -47.28404,
				mxn: -32.87893,
				myr: -43.6752,
				nok: -38.44918,
				nzd: -41.73989,
				php: -45.06042,
				pkr: -42.54026,
				pln: -42.84003,
				rub: -34.32794,
				sar: -45.05817,
				sek: -43.6398,
				sgd: -43.74509,
				thb: -43.61146,
				try: -42.32367,
				twd: -45.33474,
				uah: -37.27508,
				usd: -45.10762,
				vef: -45.10762,
				vnd: -44.28568,
				xag: -31.52756,
				xau: -44.54915,
				xdr: -44.76191,
				xlm: -14.83141,
				xrp: -17.64139,
				zar: -36.78039
			},
			price_change_percentage_60d_in_currency: {
				aed: -18.68962,
				ars: -13.086,
				aud: -8.97321,
				bch: 23.8925,
				bdt: -19.18949,
				bhd: -18.75142,
				bmd: -18.69404,
				bnb: 8.53734,
				brl: -2.33312,
				btc: 4.62148,
				cad: -13.04698,
				chf: -19.33022,
				clp: -12.84676,
				cny: -16.87844,
				czk: -11.86651,
				dkk: -18.69012,
				eos: 27.14761,
				eth: 0,
				eur: -18.56532,
				gbp: -13.22355,
				hkd: -18.92781,
				huf: -14.20156,
				idr: -4.0666,
				ils: -15.36618,
				inr: -14.57826,
				jpy: -18.69993,
				krw: -15.10017,
				kwd: -17.32723,
				lkr: -16.7936,
				ltc: 13.93544,
				mmk: -22.86232,
				mxn: 0.51577,
				myr: -13.10434,
				nok: -5.80828,
				nzd: -10.1995,
				php: -18.2136,
				pkr: -15.09305,
				pln: -13.1925,
				rub: 2.36696,
				sar: -18.59994,
				sek: -15.2861,
				sgd: -13.9688,
				thb: -13.50621,
				try: -11.6924,
				twd: -18.24826,
				uah: -6.66256,
				usd: -18.69404,
				vef: -18.69404,
				vnd: -17.50692,
				xag: 2.20758,
				xau: -20.78003,
				xdr: -17.33015,
				xlm: 14.21887,
				xrp: 9.75218,
				zar: -1.40217
			},
			price_change_percentage_200d_in_currency: {
				aed: -24.88897,
				ars: -14.06713,
				aud: -15.33342,
				bch: 1.74384,
				bdt: -24.34093,
				bhd: -24.41009,
				bmd: -24.89289,
				bnb: 28.87102,
				brl: -7.13302,
				btc: 16.88142,
				cad: -19.73345,
				chf: -26.87273,
				clp: -12.07066,
				cny: -25.14727,
				czk: -20.80986,
				dkk: -24.79308,
				eos: 21.65039,
				eth: 0,
				eur: -24.79007,
				gbp: -24.61307,
				hkd: -25.74462,
				huf: -19.23153,
				idr: -13.81523,
				ils: -23.22694,
				inr: -21.47935,
				jpy: -23.61095,
				krw: -23.06165,
				kwd: -23.34649,
				lkr: -22.12072,
				ltc: 32.29173,
				mmk: -30.80306,
				mxn: -10.37035,
				myr: -21.9375,
				nok: -12.20334,
				nzd: -18.92424,
				php: -26.02735,
				pkr: -22.08851,
				pln: -21.36265,
				rub: -10.80038,
				sar: -24.79795,
				sek: -22.24825,
				sgd: -22.0682,
				thb: -20.14857,
				try: -14.98855,
				twd: -27.27509,
				uah: -15.12686,
				usd: -24.89289,
				vef: -24.89289,
				vnd: -23.87735,
				xag: -5.70657,
				xau: -30.3895,
				xdr: -24.14298,
				xlm: 9.13593,
				xrp: 15.8209,
				zar: -11.06437
			},
			price_change_percentage_1y_in_currency: {
				aed: 1.70434,
				ars: 53.0152,
				aud: 19.46182,
				bch: -28.63414,
				bdt: 2.19893,
				bhd: 1.62204,
				bmd: 1.69919,
				bnb: 26.65685,
				brl: 31.78931,
				btc: -40.04042,
				cad: 6.9816,
				chf: -1.50592,
				clp: 24.50239,
				cny: 7.3917,
				czk: 10.17401,
				dkk: 4.10982,
				eos: 59.80288,
				eth: 0,
				eur: 4.16696,
				gbp: 9.78754,
				hkd: 0.43317,
				huf: 15.84022,
				idr: 16.14364,
				ils: 1.00603,
				inr: 10.35843,
				jpy: 0.096,
				krw: 9.49625,
				kwd: 3.52398,
				lkr: 6.57093,
				ltc: 48.79081,
				mmk: -6.88817,
				mxn: 24.16672,
				myr: 8.44816,
				nok: 25.01569,
				nzd: 17.98662,
				php: -1.23291,
				pkr: 16.83658,
				pln: 10.12947,
				rub: 23.45638,
				sar: 1.85355,
				sek: 9.89906,
				sgd: 7.81069,
				thb: 4.7765,
				try: 22.39526,
				twd: -0.43539,
				uah: 5.25505,
				usd: 1.69919,
				vef: 1.69919,
				vnd: 2.82554,
				xag: 8.42546,
				xau: -17.54312,
				xdr: 4.70383,
				xlm: 150.15239,
				xrp: 80.25741,
				zar: 23.62814
			},
			market_cap_change_24h_in_currency: {
				aed: 476921369,
				ars: 10962679940,
				aud: -201354882.54084396,
				bch: -712164.8488108815,
				bdt: 14986486411,
				bhd: 43564899,
				bmd: 129838116,
				bnb: -57504715.66364455,
				brl: 487054904,
				btc: -1556.244278342,
				cad: 54512367,
				chf: -5199085.59432221,
				clp: -132989865928.07812,
				cny: 1004292499,
				czk: -4093375709.5957646,
				dkk: 196526437,
				eos: -14408044.73056221,
				eth: 13626,
				eur: 37510897,
				gbp: -229244437.5630207,
				hkd: 984704747,
				huf: -17524997428.081055,
				idr: 1177435697358,
				ils: 120904881,
				inr: 5303625871,
				jpy: -1915546695.853027,
				krw: 108564119492,
				kwd: 33445946,
				lkr: 31008333240,
				ltc: -5150279.34317857,
				mmk: 237282950388,
				mxn: -7116067215.431946,
				myr: 712995392,
				nok: -953297576.2892761,
				nzd: -158443086.38156512,
				php: 9160019544,
				pkr: 73067853999,
				pln: -521904275.5851898,
				rub: 6578807539,
				sar: 489525232,
				sek: 114500091,
				sgd: 95395647,
				thb: 3049580042,
				try: 904790344,
				twd: 3553041535,
				uah: 8353767146,
				usd: 129838116,
				vef: 32263167417156,
				vnd: 6259361303490,
				xag: 5274559,
				xau: 51476,
				xdr: 83845299,
				xlm: -6301216734.550354,
				xrp: -3794986053.397171,
				zar: 2271491825
			},
			market_cap_change_percentage_24h_in_currency: {
				aed: 0.87219,
				ars: 1.15133,
				aud: -0.80781,
				bch: -1.0625,
				bdt: 1.19736,
				bhd: 0.77615,
				bmd: 0.87219,
				bnb: -4.75011,
				brl: 0.64981,
				btc: -0.06908,
				cad: 0.25866,
				chf: -0.03596,
				clp: -1.05176,
				cny: 0.9519,
				czk: -1.09086,
				dkk: 0.19345,
				eos: -0.22265,
				eth: 0.01236,
				eur: 0.27572,
				gbp: -1.83368,
				hkd: 0.8532,
				huf: -0.36126,
				idr: 0.48707,
				ils: 0.22439,
				inr: 0.47297,
				jpy: -0.11706,
				krw: 0.59462,
				kwd: 0.72614,
				lkr: 1.12355,
				ltc: -1.35192,
				mmk: 1.14816,
				mxn: -1.98867,
				myr: 1.10486,
				nok: -0.59975,
				nzd: -0.62399,
				php: 1.20734,
				pkr: 3.10727,
				pln: -0.8369,
				rub: 0.56382,
				sar: 0.87555,
				sek: 0.07636,
				sgd: 0.44524,
				thb: 0.62682,
				try: 0.9419,
				twd: 0.78885,
				uah: 2.02424,
				usd: 0.87219,
				vef: 0.87219,
				vnd: 1.80321,
				xag: 0.51122,
				xau: 0.55907,
				xdr: 0.76265,
				xlm: -1.71383,
				xrp: -4.11329,
				zar: 0.87021
			},
			total_supply: null,
			circulating_supply: 110267856.4365,
			last_updated: '2020-03-27T10:45:51.716Z'
		},
		community_data: {
			facebook_likes: 148245,
			twitter_followers: 452835,
			reddit_average_posts_48h: 3.909,
			reddit_average_comments_48h: 25.818,
			reddit_subscribers: 456081,
			reddit_accounts_active_48h: 2274,
			telegram_channel_user_count: null
		},
		developer_data: {
			forks: 9314,
			stars: 25580,
			subscribers: 2012,
			total_issues: 4748,
			closed_issues: 4464,
			pull_requests_merged: 2884,
			pull_request_contributors: 421,
			code_additions_deletions_4_weeks: {
				additions: 1622,
				deletions: -1022
			},
			commit_count_4_weeks: 40,
			last_4_weeks_commit_activity_series: [
				0,
				3,
				3,
				4,
				0,
				2,
				0,
				0,
				0,
				1,
				0,
				2,
				1,
				0,
				0,
				3,
				0,
				6,
				0,
				1,
				1,
				0,
				3,
				0,
				0,
				0,
				0,
				0
			]
		},
		public_interest_stats: {
			alexa_rank: 19216,
			bing_matches: 35100000
		},
		status_updates: [],
		last_updated: '2020-03-27T10:45:51.716Z',
		tickers: [
			{
				base: 'ETH',
				target: 'USDT',
				market: {
					name: 'Binance',
					identifier: 'binance',
					has_trading_incentive: false
				},
				last: 136.17,
				volume: 761855.2602077888,
				converted_last: {
					btc: 0.02041941,
					eth: 1.000113,
					usd: 136.37
				},
				converted_volume: {
					btc: 15557,
					eth: 761941,
					usd: 103895981
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.107343,
				timestamp: '2020-03-27T10:44:32+00:00',
				last_traded_at: '2020-03-27T10:44:32+00:00',
				last_fetch_at: '2020-03-27T10:44:32+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.binance.com/en/trade/ETH_USDT',
				coin_id: 'ethereum',
				target_coin_id: 'tether'
			},
			{
				base: 'ETH',
				target: 'USDT',
				market: {
					name: 'ZBG',
					identifier: 'zbg',
					has_trading_incentive: false
				},
				last: 136.31,
				volume: 3536.0412,
				converted_last: {
					btc: 0.02044041,
					eth: 1.00116,
					usd: 136.4
				},
				converted_volume: {
					btc: 72.278,
					eth: 3540,
					usd: 482330
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.300564,
				timestamp: '2020-03-27T10:39:51+00:00',
				last_traded_at: '2020-03-27T10:39:51+00:00',
				last_fetch_at: '2020-03-27T10:39:51+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: null,
				coin_id: 'ethereum',
				target_coin_id: 'tether'
			},
			{
				base: 'ETH',
				target: 'USD',
				market: {
					name: 'Bitfinex',
					identifier: 'bitfinex',
					has_trading_incentive: false
				},
				last: 136.27,
				volume: 70374.82214431,
				converted_last: {
					btc: 0.02040409,
					eth: 0.99936234,
					usd: 136.27
				},
				converted_volume: {
					btc: 1436,
					eth: 70330,
					usd: 9589977
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.729927,
				timestamp: '2020-03-27T10:45:56+00:00',
				last_traded_at: '2020-03-27T10:45:56+00:00',
				last_fetch_at: '2020-03-27T10:45:56+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.bitfinex.com/t/ETHUSD?refcode=6dwJVwfb',
				coin_id: 'ethereum'
			},
			{
				base: 'ETH',
				target: 'JPY',
				market: {
					name: 'Bitfinex',
					identifier: 'bitfinex',
					has_trading_incentive: false
				},
				last: 14815.64156606,
				volume: 169.38568824,
				converted_last: {
					btc: 0.02042752,
					eth: 0.99921953,
					usd: 136.1
				},
				converted_volume: {
					btc: 3.46013,
					eth: 169.253,
					usd: 23053
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.671141,
				timestamp: '2020-03-27T10:26:41+00:00',
				last_traded_at: '2020-03-27T10:26:41+00:00',
				last_fetch_at: '2020-03-27T10:45:03+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.bitfinex.com/t/ETHJPY?refcode=6dwJVwfb',
				coin_id: 'ethereum'
			},
			{
				base: 'ETH',
				target: 'USD',
				market: {
					name: 'Currency.com',
					identifier: 'currency',
					has_trading_incentive: false
				},
				last: 136.36,
				volume: 4341.75,
				converted_last: {
					btc: 0.02043429,
					eth: 1.00086,
					usd: 136.36
				},
				converted_volume: {
					btc: 88.721,
					eth: 4345,
					usd: 592041
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.107334,
				timestamp: '2020-03-27T10:40:45+00:00',
				last_traded_at: '2020-03-27T10:40:45+00:00',
				last_fetch_at: '2020-03-27T10:40:45+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://exchange.currency.com/eth-to-usd',
				coin_id: 'ethereum'
			},
			{
				base: 'ETH',
				target: 'BTC',
				market: {
					name: 'Binance',
					identifier: 'binance',
					has_trading_incentive: false
				},
				last: 0.020419,
				volume: 220600.76154855773,
				converted_last: {
					btc: 0.020419,
					eth: 1.000093,
					usd: 136.37
				},
				converted_volume: {
					btc: 4504,
					eth: 220621,
					usd: 30083230
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.104898,
				timestamp: '2020-03-27T10:45:32+00:00',
				last_traded_at: '2020-03-27T10:45:32+00:00',
				last_fetch_at: '2020-03-27T10:45:32+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.binance.com/en/trade/ETH_BTC',
				coin_id: 'ethereum',
				target_coin_id: 'bitcoin'
			},
			{
				base: 'ETH',
				target: 'EUR',
				market: {
					name: 'Bitfinex',
					identifier: 'bitfinex',
					has_trading_incentive: false
				},
				last: 123.79516285,
				volume: 11205.02322874,
				converted_last: {
					btc: 0.02040479,
					eth: 0.99939644,
					usd: 136.27
				},
				converted_volume: {
					btc: 228.636,
					eth: 11198,
					usd: 1526961
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.806452,
				timestamp: '2020-03-27T10:45:28+00:00',
				last_traded_at: '2020-03-27T10:45:28+00:00',
				last_fetch_at: '2020-03-27T10:45:28+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.bitfinex.com/t/ETHEUR?refcode=6dwJVwfb',
				coin_id: 'ethereum'
			},
			{
				base: 'ETH',
				target: 'USD',
				market: {
					name: 'Coinbase Pro',
					identifier: 'gdax',
					has_trading_incentive: false
				},
				last: 136.43,
				volume: 197651.96895609,
				converted_last: {
					btc: 0.02042717,
					eth: 1.000493,
					usd: 136.43
				},
				converted_volume: {
					btc: 4037,
					eth: 197749,
					usd: 26965658
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.143982,
				timestamp: '2020-03-27T10:43:42+00:00',
				last_traded_at: '2020-03-27T10:43:42+00:00',
				last_fetch_at: '2020-03-27T10:43:42+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://pro.coinbase.com/trade/ETH-USD',
				coin_id: 'ethereum'
			},
			{
				base: 'ETH',
				target: 'GBP',
				market: {
					name: 'Bitfinex',
					identifier: 'bitfinex',
					has_trading_incentive: false
				},
				last: 111.12924852,
				volume: 138.57229141,
				converted_last: {
					btc: 0.02039558,
					eth: 0.99769603,
					usd: 135.82
				},
				converted_volume: {
					btc: 2.826263,
					eth: 138.253,
					usd: 18820.42
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.892857,
				timestamp: '2020-03-27T10:23:34+00:00',
				last_traded_at: '2020-03-27T10:23:34+00:00',
				last_fetch_at: '2020-03-27T10:45:31+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.bitfinex.com/t/ETHGBP?refcode=6dwJVwfb',
				coin_id: 'ethereum'
			},
			{
				base: 'ETH',
				target: 'BTC',
				market: {
					name: 'Bitfinex',
					identifier: 'bitfinex',
					has_trading_incentive: false
				},
				last: 0.020409,
				volume: 103845.76176219,
				converted_last: {
					btc: 0.020409,
					eth: 0.99960274,
					usd: 136.31
				},
				converted_volume: {
					btc: 2119,
					eth: 103805,
					usd: 14155075
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.487805,
				timestamp: '2020-03-27T10:43:10+00:00',
				last_traded_at: '2020-03-27T10:43:10+00:00',
				last_fetch_at: '2020-03-27T10:43:10+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.bitfinex.com/t/ETHBTC?refcode=6dwJVwfb',
				coin_id: 'ethereum',
				target_coin_id: 'bitcoin'
			},
			{
				base: 'ETH',
				target: 'USD',
				market: {
					name: 'Kraken',
					identifier: 'kraken',
					has_trading_incentive: false
				},
				last: 136.52,
				volume: 63718.07585568,
				converted_last: {
					btc: 0.02046771,
					eth: 1.002497,
					usd: 136.52
				},
				converted_volume: {
					btc: 1304,
					eth: 63877,
					usd: 8698792
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.173255,
				timestamp: '2020-03-27T10:38:41+00:00',
				last_traded_at: '2020-03-27T10:38:41+00:00',
				last_fetch_at: '2020-03-27T10:38:41+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://trade.kraken.com/markets/kraken/eth/usd',
				coin_id: 'ethereum'
			},
			{
				base: 'ETH',
				target: 'EUR',
				market: {
					name: 'Kraken',
					identifier: 'kraken',
					has_trading_incentive: false
				},
				last: 124.25,
				volume: 59181.53449404,
				converted_last: {
					btc: 0.02050446,
					eth: 1.004297,
					usd: 136.77
				},
				converted_volume: {
					btc: 1213,
					eth: 59436,
					usd: 8093969
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.116103,
				timestamp: '2020-03-27T10:38:41+00:00',
				last_traded_at: '2020-03-27T10:38:41+00:00',
				last_fetch_at: '2020-03-27T10:38:41+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://trade.kraken.com/markets/kraken/eth/eur',
				coin_id: 'ethereum'
			},
			{
				base: 'ETH',
				target: 'QC',
				market: {
					name: 'BW.com',
					identifier: 'bw',
					has_trading_incentive: false
				},
				last: 987.83,
				volume: 2400.578,
				converted_last: {
					btc: 0.02043848,
					eth: 1.00132,
					usd: 136.28
				},
				converted_volume: {
					btc: 49.064173,
					eth: 2404,
					usd: 327148
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.401967,
				timestamp: '2020-03-27T10:34:46+00:00',
				last_traded_at: '2020-03-27T10:34:46+00:00',
				last_fetch_at: '2020-03-27T10:34:46+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.bw.com/trade/eth_qc',
				coin_id: 'ethereum',
				target_coin_id: 'qcash'
			},
			{
				base: 'ETH',
				target: 'USDT',
				market: {
					name: 'Float SV',
					identifier: 'floatsv',
					has_trading_incentive: false
				},
				last: 136.04,
				volume: 4.460134,
				converted_last: {
					btc: 0.02039992,
					eth: 0.99917676,
					usd: 136.13
				},
				converted_volume: {
					btc: 0.09098638,
					eth: 4.456462,
					usd: 607.16
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.10735,
				timestamp: '2020-03-27T10:40:44+00:00',
				last_traded_at: '2020-03-27T10:40:44+00:00',
				last_fetch_at: '2020-03-27T10:40:44+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url:
					'https://www.floatsv.com/spot/trade#product=eth_usdt',
				coin_id: 'ethereum',
				target_coin_id: 'tether'
			},
			{
				base: 'ETH',
				target: 'BTC',
				market: {
					name: 'Coinbase Pro',
					identifier: 'gdax',
					has_trading_incentive: false
				},
				last: 0.02041,
				volume: 17501.68608512,
				converted_last: {
					btc: 0.02041,
					eth: 0.99965172,
					usd: 136.32
				},
				converted_volume: {
					btc: 357.209,
					eth: 17496,
					usd: 2385748
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.148972,
				timestamp: '2020-03-27T10:43:37+00:00',
				last_traded_at: '2020-03-27T10:43:37+00:00',
				last_fetch_at: '2020-03-27T10:43:37+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://pro.coinbase.com/trade/ETH-BTC',
				coin_id: 'ethereum',
				target_coin_id: 'bitcoin'
			},
			{
				base: 'ETH',
				target: 'USD',
				market: {
					name: 'Bitstamp',
					identifier: 'bitstamp',
					has_trading_incentive: false
				},
				last: 136.12,
				volume: 51595.12204481,
				converted_last: {
					btc: 0.0204164,
					eth: 0.99910007,
					usd: 136.12
				},
				converted_volume: {
					btc: 1053,
					eth: 51549,
					usd: 7023128
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.154219,
				timestamp: '2020-03-27T10:30:26+00:00',
				last_traded_at: '2020-03-27T10:30:26+00:00',
				last_fetch_at: '2020-03-27T10:30:26+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: null,
				coin_id: 'ethereum'
			},
			{
				base: 'ETH',
				target: 'USDT',
				market: {
					name: 'CoinTiger',
					identifier: 'cointiger',
					has_trading_incentive: false
				},
				last: 136.05,
				volume: 103432.18751529,
				converted_last: {
					btc: 0.02040142,
					eth: 0.99925021,
					usd: 136.14
				},
				converted_volume: {
					btc: 2110,
					eth: 103355,
					usd: 14081648
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.18817,
				timestamp: '2020-03-27T10:39:47+00:00',
				last_traded_at: '2020-03-27T10:39:47+00:00',
				last_fetch_at: '2020-03-27T10:39:47+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: null,
				coin_id: 'ethereum',
				target_coin_id: 'tether'
			},
			{
				base: 'ETH',
				target: 'XBT',
				market: {
					name: 'Kraken',
					identifier: 'kraken',
					has_trading_incentive: false
				},
				last: 0.0204,
				volume: 4809.63209742,
				converted_last: {
					btc: 0.0204,
					eth: 0.9991806,
					usd: 136.07
				},
				converted_volume: {
					btc: 98.116,
					eth: 4806,
					usd: 654439
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.148972,
				timestamp: '2020-03-27T10:38:41+00:00',
				last_traded_at: '2020-03-27T10:38:41+00:00',
				last_fetch_at: '2020-03-27T10:38:41+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://trade.kraken.com/markets/kraken/eth/xbt',
				coin_id: 'ethereum',
				target_coin_id: 'bitcoin'
			},
			{
				base: 'ETH',
				target: 'USD',
				market: {
					name: 'Gemini',
					identifier: 'gemini',
					has_trading_incentive: false
				},
				last: 136.54,
				volume: 21964.4615321,
				converted_last: {
					btc: 0.02044452,
					eth: 1.001342,
					usd: 136.54
				},
				converted_volume: {
					btc: 449.053,
					eth: 21994,
					usd: 2999028
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.180586,
				timestamp: '2020-03-27T10:45:48+00:00',
				last_traded_at: '2020-03-27T10:45:48+00:00',
				last_fetch_at: '2020-03-27T10:45:48+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: null,
				coin_id: 'ethereum'
			},
			{
				base: 'ETH',
				target: 'USD',
				market: {
					name: 'Tokenize',
					identifier: 'tokenize',
					has_trading_incentive: false
				},
				last: 136.37,
				volume: 20128.168575802814,
				converted_last: {
					btc: 0.02043579,
					eth: 1.000934,
					usd: 136.37
				},
				converted_volume: {
					btc: 411.335,
					eth: 20147,
					usd: 2744878
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.672761,
				timestamp: '2020-03-27T10:41:04+00:00',
				last_traded_at: '2020-03-27T10:41:04+00:00',
				last_fetch_at: '2020-03-27T10:41:04+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://tokenize.exchange/market/USD-ETH',
				coin_id: 'ethereum'
			},
			{
				base: 'ETH',
				target: 'BTC',
				market: {
					name: 'Huobi Global',
					identifier: 'huobi',
					has_trading_incentive: false
				},
				last: 0.020403,
				volume: 54937.6298,
				converted_last: {
					btc: 0.020403,
					eth: 0.99932759,
					usd: 136.19
				},
				converted_volume: {
					btc: 1121,
					eth: 54901,
					usd: 7482085
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.13431,
				timestamp: '2020-03-27T10:41:26+00:00',
				last_traded_at: '2020-03-27T10:41:26+00:00',
				last_fetch_at: '2020-03-27T10:41:26+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.hbg.com/en-us/exchange/?s=eth_btc',
				coin_id: 'ethereum',
				target_coin_id: 'bitcoin'
			},
			{
				base: 'ETH',
				target: 'KRW',
				market: {
					name: 'Coinone',
					identifier: 'coinone',
					has_trading_incentive: false
				},
				last: 167150,
				volume: 42565.4579,
				converted_last: {
					btc: 0.02048627,
					eth: 1.003387,
					usd: 136.83
				},
				converted_volume: {
					btc: 872.007,
					eth: 42710,
					usd: 5824178
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.159791,
				timestamp: '2020-03-27T10:46:03+00:00',
				last_traded_at: '2020-03-27T10:46:03+00:00',
				last_fetch_at: '2020-03-27T10:46:03+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://coinone.co.kr/exchange/trade/eth/krw',
				coin_id: 'ethereum'
			},
			{
				base: 'ETH',
				target: 'BITCNY',
				market: {
					name: 'CoinTiger',
					identifier: 'cointiger',
					has_trading_incentive: false
				},
				last: 983.74,
				volume: 84534.2158,
				converted_last: {
					btc: 0.02042533,
					eth: 1.000421,
					usd: 136.3
				},
				converted_volume: {
					btc: 1727,
					eth: 84570,
					usd: 11522295
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.117275,
				timestamp: '2020-03-27T10:39:40+00:00',
				last_traded_at: '2020-03-27T10:39:40+00:00',
				last_fetch_at: '2020-03-27T10:39:40+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: null,
				coin_id: 'ethereum',
				target_coin_id: 'bitCNY'
			},
			{
				base: 'ETH',
				target: 'UST',
				market: {
					name: 'Bitfinex',
					identifier: 'bitfinex',
					has_trading_incentive: false
				},
				last: 136.07,
				volume: 2256.07397496,
				converted_last: {
					btc: 0.02038502,
					eth: 0.99844688,
					usd: 136.03
				},
				converted_volume: {
					btc: 45.99011,
					eth: 2253,
					usd: 306903
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 1.459854,
				timestamp: '2020-03-27T10:39:34+00:00',
				last_traded_at: '2020-03-27T10:39:34+00:00',
				last_fetch_at: '2020-03-27T10:45:08+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.bitfinex.com/t/ETHUST?refcode=6dwJVwfb',
				coin_id: 'ethereum',
				target_coin_id: 'tether'
			},
			{
				base: 'ETH',
				target: 'USDC',
				market: {
					name: 'Coinbase Pro',
					identifier: 'gdax',
					has_trading_incentive: false
				},
				last: 136.38,
				volume: 17731.80159619,
				converted_last: {
					btc: 0.02039022,
					eth: 0.99868302,
					usd: 136.18
				},
				converted_volume: {
					btc: 361.555,
					eth: 17708,
					usd: 2414774
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.195252,
				timestamp: '2020-03-27T10:43:15+00:00',
				last_traded_at: '2020-03-27T10:43:15+00:00',
				last_fetch_at: '2020-03-27T10:43:15+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://pro.coinbase.com/trade/ETH-USDC',
				coin_id: 'ethereum',
				target_coin_id: 'usd-coin'
			},
			{
				base: 'ETH',
				target: 'USDT',
				market: {
					name: 'KuCoin',
					identifier: 'kucoin',
					has_trading_incentive: false
				},
				last: 135.99,
				volume: 23582.20152368,
				converted_last: {
					btc: 0.02039242,
					eth: 0.99880952,
					usd: 136.08
				},
				converted_volume: {
					btc: 480.898,
					eth: 23554,
					usd: 3209080
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.107352,
				timestamp: '2020-03-27T10:40:31+00:00',
				last_traded_at: '2020-03-27T10:40:31+00:00',
				last_fetch_at: '2020-03-27T10:40:31+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.kucoin.com/trade/ETH-USDT',
				coin_id: 'ethereum',
				target_coin_id: 'tether'
			},
			{
				base: 'ETH',
				target: 'USDT',
				market: {
					name: 'Gate.io',
					identifier: 'gate',
					has_trading_incentive: false
				},
				last: 136.14,
				volume: 72592.9896512,
				converted_last: {
					btc: 0.02041492,
					eth: 0.99991123,
					usd: 136.23
				},
				converted_volume: {
					btc: 1482,
					eth: 72587,
					usd: 9889621
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.188164,
				timestamp: '2020-03-27T10:39:36+00:00',
				last_traded_at: '2020-03-27T10:39:36+00:00',
				last_fetch_at: '2020-03-27T10:39:36+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://gate.io/trade/ETH_USDT',
				coin_id: 'ethereum',
				target_coin_id: 'tether'
			},
			{
				base: 'ETH',
				target: 'SGD',
				market: {
					name: 'Tokenize',
					identifier: 'tokenize',
					has_trading_incentive: false
				},
				last: 195.7,
				volume: 10420.9427180372,
				converted_last: {
					btc: 0.02046246,
					eth: 1.00224,
					usd: 136.55
				},
				converted_volume: {
					btc: 213.238,
					eth: 10444,
					usd: 1422959
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.677672,
				timestamp: '2020-03-27T10:41:03+00:00',
				last_traded_at: '2020-03-27T10:41:03+00:00',
				last_fetch_at: '2020-03-27T10:41:03+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://tokenize.exchange/market/SGD-ETH',
				coin_id: 'ethereum'
			},
			{
				base: 'ETH',
				target: 'USDT',
				market: {
					name: 'Poloniex',
					identifier: 'poloniex',
					has_trading_incentive: false
				},
				last: 136.14708837,
				volume: 22511.07941968,
				converted_last: {
					btc: 0.02042958,
					eth: 1.000611,
					usd: 136.44
				},
				converted_volume: {
					btc: 459.892,
					eth: 22525,
					usd: 3071417
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.110498,
				timestamp: '2020-03-27T10:45:28+00:00',
				last_traded_at: '2020-03-27T10:45:28+00:00',
				last_fetch_at: '2020-03-27T10:45:28+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://poloniex.com/exchange#eth_usdt',
				coin_id: 'ethereum',
				target_coin_id: 'tether'
			},
			{
				base: 'ETH',
				target: 'EUR',
				market: {
					name: 'Bitstamp',
					identifier: 'bitstamp',
					has_trading_incentive: false
				},
				last: 124.16,
				volume: 19694.13827323,
				converted_last: {
					btc: 0.02048015,
					eth: 1.003106,
					usd: 136.67
				},
				converted_volume: {
					btc: 403.339,
					eth: 19755,
					usd: 2691520
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.148012,
				timestamp: '2020-03-27T10:40:38+00:00',
				last_traded_at: '2020-03-27T10:40:38+00:00',
				last_fetch_at: '2020-03-27T10:40:38+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: null,
				coin_id: 'ethereum'
			},
			{
				base: 'ETH',
				target: 'DAI',
				market: {
					name: 'dYdX',
					identifier: 'dydx',
					has_trading_incentive: false
				},
				last: 134,
				volume: 7904.1628,
				converted_last: {
					btc: 0.02038761,
					eth: 0.9976911,
					usd: 135.93
				},
				converted_volume: {
					btc: 161.147,
					eth: 7886,
					usd: 1074406
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.305332,
				timestamp: '2020-03-27T10:28:38+00:00',
				last_traded_at: '2020-03-27T10:28:38+00:00',
				last_fetch_at: '2020-03-27T10:39:49+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://trade.dydx.exchange/markets',
				coin_id: 'ethereum',
				target_coin_id: 'sai'
			},
			{
				base: 'ETH',
				target: 'USDC',
				market: {
					name: 'dYdX',
					identifier: 'dydx',
					has_trading_incentive: false
				},
				last: 136,
				volume: 7242.2658,
				converted_last: {
					btc: 0.02033341,
					eth: 0.99591902,
					usd: 135.69
				},
				converted_volume: {
					btc: 147.26,
					eth: 7213,
					usd: 982702
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.175824,
				timestamp: '2020-03-27T10:39:49+00:00',
				last_traded_at: '2020-03-27T10:39:49+00:00',
				last_fetch_at: '2020-03-27T10:39:49+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://trade.dydx.exchange/markets',
				coin_id: 'ethereum',
				target_coin_id: 'usd-coin'
			},
			{
				base: 'ETH',
				target: 'BTC',
				market: {
					name: 'Poloniex',
					identifier: 'poloniex',
					has_trading_incentive: false
				},
				last: 0.02042497,
				volume: 10650.43899225,
				converted_last: {
					btc: 0.02042497,
					eth: 1.000385,
					usd: 136.41
				},
				converted_volume: {
					btc: 217.535,
					eth: 10655,
					usd: 1452820
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.137454,
				timestamp: '2020-03-27T10:45:21+00:00',
				last_traded_at: '2020-03-27T10:45:21+00:00',
				last_fetch_at: '2020-03-27T10:45:21+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://poloniex.com/exchange#eth_btc',
				coin_id: 'ethereum',
				target_coin_id: 'bitcoin'
			},
			{
				base: 'ETH',
				target: 'USDC',
				market: {
					name: 'Binance',
					identifier: 'binance',
					has_trading_incentive: false
				},
				last: 136.45,
				volume: 17500.56768337413,
				converted_last: {
					btc: 0.02040069,
					eth: 0.99919562,
					usd: 136.25
				},
				converted_volume: {
					btc: 357.024,
					eth: 17486,
					usd: 2384405
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.195203,
				timestamp: '2020-03-27T10:44:40+00:00',
				last_traded_at: '2020-03-27T10:44:40+00:00',
				last_fetch_at: '2020-03-27T10:44:40+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.binance.com/en/trade/ETH_USDC',
				coin_id: 'ethereum',
				target_coin_id: 'usd-coin'
			},
			{
				base: 'ETH',
				target: 'BUSD',
				market: {
					name: 'Binance',
					identifier: 'binance',
					has_trading_incentive: false
				},
				last: 136.54,
				volume: 17010.818946248717,
				converted_last: {
					btc: 0.02042945,
					eth: 1.000604,
					usd: 136.44
				},
				converted_volume: {
					btc: 347.522,
					eth: 17021,
					usd: 2320945
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.10989,
				timestamp: '2020-03-27T10:45:32+00:00',
				last_traded_at: '2020-03-27T10:45:32+00:00',
				last_fetch_at: '2020-03-27T10:45:32+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.binance.com/en/trade/ETH_BUSD',
				coin_id: 'ethereum',
				target_coin_id: 'binance-usd'
			},
			{
				base: 'ETH',
				target: 'USD',
				market: {
					name: 'Bittrex',
					identifier: 'bittrex',
					has_trading_incentive: false
				},
				last: 135.95,
				volume: 6809.32268892,
				converted_last: {
					btc: 0.02036669,
					eth: 0.99754934,
					usd: 135.95
				},
				converted_volume: {
					btc: 138.683,
					eth: 6793,
					usd: 925727
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.115869,
				timestamp: '2020-03-27T10:41:11+00:00',
				last_traded_at: '2020-03-27T10:41:11+00:00',
				last_fetch_at: '2020-03-27T10:41:11+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url:
					'https://bittrex.com/Market/Index?MarketName=USD-ETH',
				coin_id: 'ethereum'
			},
			{
				base: 'ETH',
				target: 'USDT',
				market: {
					name: 'BW.com',
					identifier: 'bw',
					has_trading_incentive: false
				},
				last: 136,
				volume: 31224.516,
				converted_last: {
					btc: 0.02042645,
					eth: 1.00073,
					usd: 136.2
				},
				converted_volume: {
					btc: 637.806,
					eth: 31247,
					usd: 4252734
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.183567,
				timestamp: '2020-03-27T10:35:20+00:00',
				last_traded_at: '2020-03-27T10:35:20+00:00',
				last_fetch_at: '2020-03-27T10:35:20+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.bw.com/trade/eth_usdt',
				coin_id: 'ethereum',
				target_coin_id: 'tether'
			},
			{
				base: 'ETH',
				target: 'BTC',
				market: {
					name: 'Tokenize',
					identifier: 'tokenize',
					has_trading_incentive: false
				},
				last: 0.02040776,
				volume: 19927.387268862432,
				converted_last: {
					btc: 0.02040776,
					eth: 0.99956074,
					usd: 136.18
				},
				converted_volume: {
					btc: 406.673,
					eth: 19919,
					usd: 2713770
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 1.093336,
				timestamp: '2020-03-27T10:40:58+00:00',
				last_traded_at: '2020-03-27T10:40:58+00:00',
				last_fetch_at: '2020-03-27T10:40:58+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://tokenize.exchange/market/BTC-ETH',
				coin_id: 'ethereum',
				target_coin_id: 'bitcoin'
			},
			{
				base: 'ETH',
				target: 'BTC',
				market: {
					name: 'Gemini',
					identifier: 'gemini',
					has_trading_incentive: false
				},
				last: 0.02045,
				volume: 1127.290297,
				converted_last: {
					btc: 0.02045,
					eth: 1.001203,
					usd: 135.75
				},
				converted_volume: {
					btc: 23.053087,
					eth: 1129,
					usd: 153025
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.197991,
				timestamp: '2020-03-27T10:13:51+00:00',
				last_traded_at: '2020-03-27T10:13:51+00:00',
				last_fetch_at: '2020-03-27T10:41:34+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: null,
				coin_id: 'ethereum',
				target_coin_id: 'bitcoin'
			},
			{
				base: 'ETH',
				target: 'USD',
				market: {
					name: 'Binance US',
					identifier: 'binance_us',
					has_trading_incentive: false
				},
				last: 136.35,
				volume: 7023.48897689769,
				converted_last: {
					btc: 0.02043232,
					eth: 1.000764,
					usd: 136.35
				},
				converted_volume: {
					btc: 143.506,
					eth: 7029,
					usd: 957653
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.129317,
				timestamp: '2020-03-27T10:39:19+00:00',
				last_traded_at: '2020-03-27T10:39:19+00:00',
				last_fetch_at: '2020-03-27T10:39:19+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.binance.us/en/trade/ETH_USD',
				coin_id: 'ethereum'
			},
			{
				base: 'ETH',
				target: 'KRW',
				market: {
					name: 'GoPax',
					identifier: 'gopax',
					has_trading_incentive: false
				},
				last: 167100,
				volume: 8191.14951044,
				converted_last: {
					btc: 0.02058416,
					eth: 1.007771,
					usd: 136.64
				},
				converted_volume: {
					btc: 168.608,
					eth: 8255,
					usd: 1119213
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.238806,
				timestamp: '2020-03-27T10:13:43+00:00',
				last_traded_at: '2020-03-27T10:13:43+00:00',
				last_fetch_at: '2020-03-27T10:31:25+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.gopax.co.kr/exchange/ETH-KRW',
				coin_id: 'ethereum'
			},
			{
				base: 'ETH',
				target: 'BTC',
				market: {
					name: 'STEX',
					identifier: 'stocks_exchange',
					has_trading_incentive: false
				},
				last: 0.02045195,
				volume: 38119.17871592,
				converted_last: {
					btc: 0.02045195,
					eth: 1.001706,
					usd: 136.6
				},
				converted_volume: {
					btc: 779.612,
					eth: 38184,
					usd: 5206908
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.100146,
				timestamp: '2020-03-27T10:43:05+00:00',
				last_traded_at: '2020-03-27T10:43:05+00:00',
				last_fetch_at: '2020-03-27T10:43:05+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url:
					'https://app.stex.com/en/basic-trade/pair/BTC/ETH/240',
				coin_id: 'ethereum',
				target_coin_id: 'bitcoin'
			},
			{
				base: 'ETH',
				target: 'BTC',
				market: {
					name: 'KuCoin',
					identifier: 'kucoin',
					has_trading_incentive: false
				},
				last: 0.020397,
				volume: 10079.3296482,
				converted_last: {
					btc: 0.020397,
					eth: 0.99903372,
					usd: 136.11
				},
				converted_volume: {
					btc: 205.588,
					eth: 10070,
					usd: 1371909
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.104902,
				timestamp: '2020-03-27T10:40:25+00:00',
				last_traded_at: '2020-03-27T10:40:25+00:00',
				last_fetch_at: '2020-03-27T10:40:25+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.kucoin.com/trade/ETH-BTC',
				coin_id: 'ethereum',
				target_coin_id: 'bitcoin'
			},
			{
				base: 'ETH',
				target: 'BTC',
				market: {
					name: 'Bitstamp',
					identifier: 'bitstamp',
					has_trading_incentive: false
				},
				last: 0.02041634,
				volume: 2747.86270835,
				converted_last: {
					btc: 0.02041634,
					eth: 0.99909692,
					usd: 136.12
				},
				converted_volume: {
					btc: 56.101,
					eth: 2745,
					usd: 374038
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.178916,
				timestamp: '2020-03-27T10:30:32+00:00',
				last_traded_at: '2020-03-27T10:30:32+00:00',
				last_fetch_at: '2020-03-27T10:30:32+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: null,
				coin_id: 'ethereum',
				target_coin_id: 'bitcoin'
			},
			{
				base: 'LINK',
				target: 'ETH',
				market: {
					name: 'Coinbase Pro',
					identifier: 'gdax',
					has_trading_incentive: false
				},
				last: 0.01673595,
				volume: 52106.53,
				converted_last: {
					btc: 0.00034158,
					eth: 0.01673043,
					usd: 2.28
				},
				converted_volume: {
					btc: 17.798587,
					eth: 871.765,
					usd: 118772
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.130089,
				timestamp: '2020-03-27T10:40:42+00:00',
				last_traded_at: '2020-03-27T10:40:42+00:00',
				last_fetch_at: '2020-03-27T10:43:34+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://pro.coinbase.com/trade/LINK-ETH',
				coin_id: 'chainlink',
				target_coin_id: 'ethereum'
			},
			{
				base: 'ETH',
				target: 'USDC',
				market: {
					name: 'Poloniex',
					identifier: 'poloniex',
					has_trading_incentive: false
				},
				last: 136.40719765,
				volume: 7800.03082005,
				converted_last: {
					btc: 0.02039429,
					eth: 0.99888219,
					usd: 136.2
				},
				converted_volume: {
					btc: 159.076,
					eth: 7791,
					usd: 1062400
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.145681,
				timestamp: '2020-03-27T10:45:21+00:00',
				last_traded_at: '2020-03-27T10:45:21+00:00',
				last_fetch_at: '2020-03-27T10:45:21+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://poloniex.com/exchange#eth_usdc',
				coin_id: 'ethereum',
				target_coin_id: 'usd-coin'
			},
			{
				base: 'ETH',
				target: 'TUSD',
				market: {
					name: 'Binance',
					identifier: 'binance',
					has_trading_incentive: false
				},
				last: 136.48,
				volume: 14902.05327112324,
				converted_last: {
					btc: 0.02040701,
					eth: 0.99950525,
					usd: 136.29
				},
				converted_volume: {
					btc: 304.106,
					eth: 14895,
					usd: 2030993
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.195259,
				timestamp: '2020-03-27T10:45:35+00:00',
				last_traded_at: '2020-03-27T10:45:35+00:00',
				last_fetch_at: '2020-03-27T10:45:35+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.binance.com/en/trade/ETH_TUSD',
				coin_id: 'ethereum',
				target_coin_id: 'true-usd'
			},
			{
				base: 'BNB',
				target: 'ETH',
				market: {
					name: 'Binance',
					identifier: 'binance',
					has_trading_incentive: false
				},
				last: 0.095955,
				volume: 106583.23627419103,
				converted_last: {
					btc: 0.00195844,
					eth: 0.09592158,
					usd: 13.08
				},
				converted_volume: {
					btc: 208.737,
					eth: 10224,
					usd: 1394063
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.184362,
				timestamp: '2020-03-27T10:44:40+00:00',
				last_traded_at: '2020-03-27T10:44:40+00:00',
				last_fetch_at: '2020-03-27T10:44:40+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.binance.com/en/trade/BNB_ETH',
				coin_id: 'binancecoin',
				target_coin_id: 'ethereum'
			},
			{
				base: 'ETH',
				target: 'BTC',
				market: {
					name: 'Bittrex',
					identifier: 'bittrex',
					has_trading_incentive: false
				},
				last: 0.02040776,
				volume: 3960.3833099,
				converted_last: {
					btc: 0.02040776,
					eth: 0.99956074,
					usd: 136.22
				},
				converted_volume: {
					btc: 80.823,
					eth: 3959,
					usd: 539500
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.112642,
				timestamp: '2020-03-27T10:41:05+00:00',
				last_traded_at: '2020-03-27T10:41:05+00:00',
				last_fetch_at: '2020-03-27T10:41:05+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url:
					'https://bittrex.com/Market/Index?MarketName=BTC-ETH',
				coin_id: 'ethereum',
				target_coin_id: 'bitcoin'
			},
			{
				base: 'ETH',
				target: 'USDT',
				market: {
					name: 'XT',
					identifier: 'xt',
					has_trading_incentive: false
				},
				last: 136.47,
				volume: 22279.254,
				converted_last: {
					btc: 0.02047803,
					eth: 1.002984,
					usd: 136.76
				},
				converted_volume: {
					btc: 456.235,
					eth: 22346,
					usd: 3046996
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.21247,
				timestamp: '2020-03-27T10:45:58+00:00',
				last_traded_at: '2020-03-27T10:45:58+00:00',
				last_fetch_at: '2020-03-27T10:45:58+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.xt.com/trade/eth_usdt',
				coin_id: 'ethereum',
				target_coin_id: 'tether'
			},
			{
				base: 'LINK',
				target: 'ETH',
				market: {
					name: 'Binance',
					identifier: 'binance',
					has_trading_incentive: false
				},
				last: 0.0167967,
				volume: 174541.90837069188,
				converted_last: {
					btc: 0.00034282,
					eth: 0.01679085,
					usd: 2.29
				},
				converted_volume: {
					btc: 59.837,
					eth: 2931,
					usd: 399622
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.251976,
				timestamp: '2020-03-27T10:45:35+00:00',
				last_traded_at: '2020-03-27T10:45:35+00:00',
				last_fetch_at: '2020-03-27T10:45:35+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.binance.com/en/trade/LINK_ETH',
				coin_id: 'chainlink',
				target_coin_id: 'ethereum'
			},
			{
				base: 'ETH',
				target: 'DAI',
				market: {
					name: 'Coinbase Pro',
					identifier: 'gdax',
					has_trading_incentive: false
				},
				last: 134.2,
				volume: 15770.5096,
				converted_last: {
					btc: 0.02039622,
					eth: 0.99899562,
					usd: 136.04
				},
				converted_volume: {
					btc: 321.659,
					eth: 15755,
					usd: 2145470
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.238148,
				timestamp: '2020-03-27T10:38:14+00:00',
				last_traded_at: '2020-03-27T10:38:14+00:00',
				last_fetch_at: '2020-03-27T10:43:13+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://pro.coinbase.com/trade/ETH-DAI',
				coin_id: 'ethereum',
				target_coin_id: 'dai'
			},
			{
				base: 'ETH',
				target: 'PAX',
				market: {
					name: 'Binance',
					identifier: 'binance',
					has_trading_incentive: false
				},
				last: 136.45,
				volume: 6528.308876266764,
				converted_last: {
					btc: 0.02043546,
					eth: 1.000899,
					usd: 136.48
				},
				converted_volume: {
					btc: 133.409,
					eth: 6534,
					usd: 890980
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.11719,
				timestamp: '2020-03-27T10:44:34+00:00',
				last_traded_at: '2020-03-27T10:44:34+00:00',
				last_fetch_at: '2020-03-27T10:44:34+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.binance.com/en/trade/ETH_PAX',
				coin_id: 'ethereum',
				target_coin_id: 'paxos-standard'
			},
			{
				base: 'EOS',
				target: 'ETH',
				market: {
					name: 'Bitfinex',
					identifier: 'bitfinex',
					has_trading_incentive: false
				},
				last: 0.017028,
				volume: 62261.57325539,
				converted_last: {
					btc: 0.00034788,
					eth: 0.0170434,
					usd: 2.32
				},
				converted_volume: {
					btc: 21.659683,
					eth: 1061,
					usd: 144421
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.584795,
				timestamp: '2020-03-27T10:35:53+00:00',
				last_traded_at: '2020-03-27T10:35:53+00:00',
				last_fetch_at: '2020-03-27T10:45:27+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.bitfinex.com/t/EOSETH?refcode=6dwJVwfb',
				coin_id: 'eos',
				target_coin_id: 'ethereum'
			},
			{
				base: 'ETH',
				target: 'USDT',
				market: {
					name: 'Bittrex',
					identifier: 'bittrex',
					has_trading_incentive: false
				},
				last: 136,
				volume: 3196.02000737,
				converted_last: {
					btc: 0.02039392,
					eth: 0.99888297,
					usd: 136.13
				},
				converted_volume: {
					btc: 65.179,
					eth: 3192,
					usd: 435080
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.109332,
				timestamp: '2020-03-27T10:41:10+00:00',
				last_traded_at: '2020-03-27T10:41:10+00:00',
				last_fetch_at: '2020-03-27T10:41:10+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url:
					'https://bittrex.com/Market/Index?MarketName=USDT-ETH',
				coin_id: 'ethereum',
				target_coin_id: 'tether'
			},
			{
				base: 'LTC',
				target: 'ETH',
				market: {
					name: 'WhiteBIT',
					identifier: 'whitebit',
					has_trading_incentive: false
				},
				last: 0.29397,
				volume: 40123.665,
				converted_last: {
					btc: 0.00599993,
					eth: 0.29386762,
					usd: 40.07
				},
				converted_volume: {
					btc: 240.739,
					eth: 11791,
					usd: 1607791
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.105374,
				timestamp: '2020-03-27T10:45:53+00:00',
				last_traded_at: '2020-03-27T10:45:53+00:00',
				last_fetch_at: '2020-03-27T10:45:53+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://whitebit.com/trade/LTC_ETH',
				coin_id: 'litecoin',
				target_coin_id: 'ethereum'
			},
			{
				base: 'ETH',
				target: 'BTC',
				market: {
					name: 'Bitexlive',
					identifier: 'bitexlive',
					has_trading_incentive: false
				},
				last: 0.02042867,
				volume: 38.5123,
				converted_last: {
					btc: 0.02042867,
					eth: 1.000585,
					usd: 136.33
				},
				converted_volume: {
					btc: 0.78675507,
					eth: 38.534826,
					usd: 5250.21
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.187775,
				timestamp: '2020-03-27T10:39:49+00:00',
				last_traded_at: '2020-03-27T10:39:49+00:00',
				last_fetch_at: '2020-03-27T10:39:49+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://bitexlive.com/exchange/BTC-ETH',
				coin_id: 'ethereum',
				target_coin_id: 'bitcoin'
			},
			{
				base: 'ETH',
				target: 'BTC',
				market: {
					name: 'CoinTiger',
					identifier: 'cointiger',
					has_trading_incentive: false
				},
				last: 0.020413,
				volume: 2685.40195796,
				converted_last: {
					btc: 0.020413,
					eth: 0.99981739,
					usd: 136.22
				},
				converted_volume: {
					btc: 54.817,
					eth: 2685,
					usd: 365808
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.173475,
				timestamp: '2020-03-27T10:39:41+00:00',
				last_traded_at: '2020-03-27T10:39:41+00:00',
				last_fetch_at: '2020-03-27T10:39:41+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: null,
				coin_id: 'ethereum',
				target_coin_id: 'bitcoin'
			},
			{
				base: 'EOS',
				target: 'ETH',
				market: {
					name: 'Binance',
					identifier: 'binance',
					has_trading_incentive: false
				},
				last: 0.017056,
				volume: 403456.34239974205,
				converted_last: {
					btc: 0.00034811,
					eth: 0.01705006,
					usd: 2.32
				},
				converted_volume: {
					btc: 140.448,
					eth: 6879,
					usd: 937993
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.152746,
				timestamp: '2020-03-27T10:45:34+00:00',
				last_traded_at: '2020-03-27T10:45:34+00:00',
				last_fetch_at: '2020-03-27T10:45:34+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.binance.com/en/trade/EOS_ETH',
				coin_id: 'eos',
				target_coin_id: 'ethereum'
			},
			{
				base: 'XLM',
				target: 'ETH',
				market: {
					name: 'WhiteBIT',
					identifier: 'whitebit',
					has_trading_incentive: false
				},
				last: 0.0003055,
				volume: 48393812,
				converted_last: {
					btc: 0.00000624,
					eth: 0.00030539,
					usd: 0.04164254
				},
				converted_volume: {
					btc: 301.748,
					eth: 14779,
					usd: 2015241
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.369317,
				timestamp: '2020-03-27T10:45:27+00:00',
				last_traded_at: '2020-03-27T10:45:27+00:00',
				last_fetch_at: '2020-03-27T10:45:27+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://whitebit.com/trade/XLM_ETH',
				coin_id: 'stellar',
				target_coin_id: 'ethereum'
			},
			{
				base: 'ETH',
				target: 'BTC',
				market: {
					name: 'Mercatox',
					identifier: 'mercatox',
					has_trading_incentive: false
				},
				last: 0.02049021,
				volume: 20866.4117,
				converted_last: {
					btc: 0.02049021,
					eth: 1.002286,
					usd: 136.51
				},
				converted_volume: {
					btc: 427.557,
					eth: 20914,
					usd: 2848436
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.817817,
				timestamp: '2020-03-27T10:25:27+00:00',
				last_traded_at: '2020-03-27T10:25:27+00:00',
				last_fetch_at: '2020-03-27T10:25:27+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: null,
				coin_id: 'ethereum',
				target_coin_id: 'bitcoin'
			},
			{
				base: 'ETH',
				target: 'BTC',
				market: {
					name: 'XT',
					identifier: 'xt',
					has_trading_incentive: false
				},
				last: 0.02046259,
				volume: 11617.844,
				converted_last: {
					btc: 0.02046259,
					eth: 1.002228,
					usd: 136.66
				},
				converted_volume: {
					btc: 237.731,
					eth: 11644,
					usd: 1587703
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.286455,
				timestamp: '2020-03-27T10:45:30+00:00',
				last_traded_at: '2020-03-27T10:45:30+00:00',
				last_fetch_at: '2020-03-27T10:45:30+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.xt.com/trade/eth_btc',
				coin_id: 'ethereum',
				target_coin_id: 'bitcoin'
			},
			{
				base: 'ETH',
				target: 'USDT',
				market: {
					name: 'Coinsuper',
					identifier: 'coinsuper',
					has_trading_incentive: true
				},
				last: 136.11,
				volume: 14040.6896,
				converted_last: {
					btc: 0.02041042,
					eth: 0.99967216,
					usd: 136.31
				},
				converted_volume: {
					btc: 286.576,
					eth: 14036,
					usd: 1913918
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.735294,
				timestamp: '2020-03-27T10:44:33+00:00',
				last_traded_at: '2020-03-27T10:44:33+00:00',
				last_fetch_at: '2020-03-27T10:44:33+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.coinsuper.com/trade?symbol=ETH%2FUSDT',
				coin_id: 'ethereum',
				target_coin_id: 'tether'
			},
			{
				base: 'ETH',
				target: 'BTC',
				market: {
					name: 'Gate.io',
					identifier: 'gate',
					has_trading_incentive: false
				},
				last: 0.02042,
				volume: 3058.37190405,
				converted_last: {
					btc: 0.02042,
					eth: 1.00016,
					usd: 136.27
				},
				converted_volume: {
					btc: 62.452,
					eth: 3059,
					usd: 416757
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.132178,
				timestamp: '2020-03-27T10:39:29+00:00',
				last_traded_at: '2020-03-27T10:39:29+00:00',
				last_fetch_at: '2020-03-27T10:39:29+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://gate.io/trade/ETH_BTC',
				coin_id: 'ethereum',
				target_coin_id: 'bitcoin'
			},
			{
				base: 'ETH',
				target: 'USDT',
				market: {
					name: 'Binance US',
					identifier: 'binance_us',
					has_trading_incentive: false
				},
				last: 136.2,
				volume: 2267.029425301028,
				converted_last: {
					btc: 0.02042391,
					eth: 1.000352,
					usd: 136.29
				},
				converted_volume: {
					btc: 46.301613,
					eth: 2268,
					usd: 308982
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.188138,
				timestamp: '2020-03-27T10:39:13+00:00',
				last_traded_at: '2020-03-27T10:39:13+00:00',
				last_fetch_at: '2020-03-27T10:39:13+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.binance.us/en/trade/ETH_USDT',
				coin_id: 'ethereum',
				target_coin_id: 'tether'
			},
			{
				base: 'ETH',
				target: 'BTC',
				market: {
					name: 'Probit',
					identifier: 'probit',
					has_trading_incentive: false
				},
				last: 0.020396,
				volume: 16103.448,
				converted_last: {
					btc: 0.020396,
					eth: 0.99898474,
					usd: 136.1
				},
				converted_volume: {
					btc: 328.446,
					eth: 16087,
					usd: 2191751
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.557266,
				timestamp: '2020-03-27T10:40:38+00:00',
				last_traded_at: '2020-03-27T10:40:38+00:00',
				last_fetch_at: '2020-03-27T10:40:38+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.probit.com/app/exchange/ETH-BTC',
				coin_id: 'ethereum',
				target_coin_id: 'bitcoin'
			},
			{
				base: 'ETH',
				target: 'USDT',
				market: {
					name: 'Kraken',
					identifier: 'kraken',
					has_trading_incentive: false
				},
				last: 135.12,
				volume: 749.32476892,
				converted_last: {
					btc: 0.02027825,
					eth: 0.99191772,
					usd: 135.11
				},
				converted_volume: {
					btc: 15.194995,
					eth: 743.269,
					usd: 101238
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.154117,
				timestamp: '2020-03-27T10:26:30+00:00',
				last_traded_at: '2020-03-27T10:26:30+00:00',
				last_fetch_at: '2020-03-27T10:38:42+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://trade.kraken.com/markets/kraken/eth/usdt',
				coin_id: 'ethereum',
				target_coin_id: 'tether'
			},
			{
				base: 'ETH',
				target: 'USD',
				market: {
					name: 'BTSE',
					identifier: 'btse',
					has_trading_incentive: false
				},
				last: 136.25,
				volume: 3620.205504587156,
				converted_last: {
					btc: 0.02041781,
					eth: 1.000053,
					usd: 136.25
				},
				converted_volume: {
					btc: 73.917,
					eth: 3620,
					usd: 493253
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.146681,
				timestamp: '2020-03-27T10:40:04+00:00',
				last_traded_at: '2020-03-27T10:40:04+00:00',
				last_fetch_at: '2020-03-27T10:40:04+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.btse.com/en/trading/ETH-USD',
				coin_id: 'ethereum'
			},
			{
				base: 'TRX',
				target: 'ETH',
				market: {
					name: 'Binance',
					identifier: 'binance',
					has_trading_incentive: false
				},
				last: 0.00008594,
				volume: 40934164.3978357,
				converted_last: {
					btc: 0.00000175,
					eth: 0.00008591,
					usd: 0.01171443
				},
				converted_volume: {
					btc: 71.8,
					eth: 3517,
					usd: 479521
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.116279,
				timestamp: '2020-03-27T10:45:31+00:00',
				last_traded_at: '2020-03-27T10:45:31+00:00',
				last_fetch_at: '2020-03-27T10:45:31+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.binance.com/en/trade/TRX_ETH',
				coin_id: 'tron',
				target_coin_id: 'ethereum'
			},
			{
				base: 'XRP',
				target: 'ETH',
				market: {
					name: 'Binance',
					identifier: 'binance',
					has_trading_incentive: false
				},
				last: 0.00126459,
				volume: 4915105.385160408,
				converted_last: {
					btc: 0.00002581,
					eth: 0.00126415,
					usd: 0.172376
				},
				converted_volume: {
					btc: 126.86,
					eth: 6213,
					usd: 847244
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.13083,
				timestamp: '2020-03-27T10:45:32+00:00',
				last_traded_at: '2020-03-27T10:45:32+00:00',
				last_fetch_at: '2020-03-27T10:45:32+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.binance.com/en/trade/XRP_ETH',
				coin_id: 'ripple',
				target_coin_id: 'ethereum'
			},
			{
				base: 'DGD',
				target: 'ETH',
				market: {
					name: 'Binance',
					identifier: 'binance',
					has_trading_incentive: false
				},
				last: 0.19258,
				volume: 1831.9425454875895,
				converted_last: {
					btc: 0.00393056,
					eth: 0.19251293,
					usd: 26.25
				},
				converted_volume: {
					btc: 7.200556,
					eth: 352.673,
					usd: 48089
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.248627,
				timestamp: '2020-03-27T10:44:38+00:00',
				last_traded_at: '2020-03-27T10:44:38+00:00',
				last_fetch_at: '2020-03-27T10:44:38+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.binance.com/en/trade/DGD_ETH',
				coin_id: 'digixdao',
				target_coin_id: 'ethereum'
			},
			{
				base: 'ETH',
				target: 'USDT',
				market: {
					name: 'Bitexlive',
					identifier: 'bitexlive',
					has_trading_incentive: false
				},
				last: 136.26986695,
				volume: 39.1662,
				converted_last: {
					btc: 0.02043439,
					eth: 1.000865,
					usd: 136.36
				},
				converted_volume: {
					btc: 0.80033742,
					eth: 39.200082,
					usd: 5340.85
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.119852,
				timestamp: '2020-03-27T10:39:52+00:00',
				last_traded_at: '2020-03-27T10:39:52+00:00',
				last_fetch_at: '2020-03-27T10:39:52+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://bitexlive.com/exchange/USDT-ETH',
				coin_id: 'ethereum',
				target_coin_id: 'tether'
			},
			{
				base: 'ETH',
				target: 'USDT',
				market: {
					name: 'Probit',
					identifier: 'probit',
					has_trading_incentive: false
				},
				last: 135.99,
				volume: 10820.5948867,
				converted_last: {
					btc: 0.02039242,
					eth: 0.99880952,
					usd: 136.08
				},
				converted_volume: {
					btc: 220.658,
					eth: 10808,
					usd: 1472473
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.720535,
				timestamp: '2020-03-27T10:40:34+00:00',
				last_traded_at: '2020-03-27T10:40:34+00:00',
				last_fetch_at: '2020-03-27T10:40:34+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.probit.com/app/exchange/ETH-USDT',
				coin_id: 'ethereum',
				target_coin_id: 'tether'
			},
			{
				base: 'ETH',
				target: 'USDC',
				market: {
					name: 'Kraken',
					identifier: 'kraken',
					has_trading_incentive: false
				},
				last: 135.67,
				volume: 363.07843646,
				converted_last: {
					btc: 0.02046873,
					eth: 1.001122,
					usd: 136.17
				},
				converted_volume: {
					btc: 7.431754,
					eth: 363.486,
					usd: 49440
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.175695,
				timestamp: '2020-03-27T10:07:11+00:00',
				last_traded_at: '2020-03-27T10:07:11+00:00',
				last_fetch_at: '2020-03-27T10:38:41+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://trade.kraken.com/markets/kraken/eth/usdc',
				coin_id: 'ethereum',
				target_coin_id: 'usd-coin'
			},
			{
				base: 'ETH',
				target: 'EUR',
				market: {
					name: 'CEX.IO',
					identifier: 'cex',
					has_trading_incentive: false
				},
				last: 124.74,
				volume: 436.799617,
				converted_last: {
					btc: 0.02056052,
					eth: 1.007024,
					usd: 137.31
				},
				converted_volume: {
					btc: 8.980828,
					eth: 439.868,
					usd: 59979
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.120221,
				timestamp: '2020-03-27T10:44:59+00:00',
				last_traded_at: '2020-03-27T10:44:59+00:00',
				last_fetch_at: '2020-03-27T10:44:59+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: null,
				coin_id: 'ethereum'
			},
			{
				base: 'ETH',
				target: 'BTC',
				market: {
					name: 'EXMO',
					identifier: 'exmo',
					has_trading_incentive: false
				},
				last: 0.02042749,
				volume: 7654.10981589,
				converted_last: {
					btc: 0.02042749,
					eth: 1.000508,
					usd: 136.43
				},
				converted_volume: {
					btc: 156.354,
					eth: 7658,
					usd: 1044222
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.316664,
				timestamp: '2020-03-27T10:44:01+00:00',
				last_traded_at: '2020-03-27T10:44:01+00:00',
				last_fetch_at: '2020-03-27T10:44:01+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://exmo.com/en/trade#?pair=ETH_BTC',
				coin_id: 'ethereum',
				target_coin_id: 'bitcoin'
			},
			{
				base: 'EOS',
				target: 'ETH',
				market: {
					name: 'Tokenize',
					identifier: 'tokenize',
					has_trading_incentive: false
				},
				last: 0.017064,
				volume: 29113.02612400375,
				converted_last: {
					btc: 0.00034828,
					eth: 0.01705838,
					usd: 2.32
				},
				converted_volume: {
					btc: 10.139375,
					eth: 496.621,
					usd: 67661
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.252398,
				timestamp: '2020-03-27T10:40:59+00:00',
				last_traded_at: '2020-03-27T10:40:59+00:00',
				last_fetch_at: '2020-03-27T10:40:59+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://tokenize.exchange/market/ETH-EOS',
				coin_id: 'eos',
				target_coin_id: 'ethereum'
			},
			{
				base: 'ETH',
				target: 'BTC',
				market: {
					name: 'Binance US',
					identifier: 'binance_us',
					has_trading_incentive: false
				},
				last: 0.020443,
				volume: 143.2565689967226,
				converted_last: {
					btc: 0.020443,
					eth: 1.001287,
					usd: 136.42
				},
				converted_volume: {
					btc: 2.928594,
					eth: 143.441,
					usd: 19543.24
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.20553,
				timestamp: '2020-03-27T10:39:19+00:00',
				last_traded_at: '2020-03-27T10:39:19+00:00',
				last_fetch_at: '2020-03-27T10:39:19+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.binance.us/en/trade/ETH_BTC',
				coin_id: 'ethereum',
				target_coin_id: 'bitcoin'
			},
			{
				base: 'ETH',
				target: 'GBP',
				market: {
					name: 'CEX.IO',
					identifier: 'cex',
					has_trading_incentive: false
				},
				last: 112.46,
				volume: 88.572529,
				converted_last: {
					btc: 0.02060819,
					eth: 1.009359,
					usd: 137.63
				},
				converted_volume: {
					btc: 1.82532,
					eth: 89.401,
					usd: 12190.51
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.133428,
				timestamp: '2020-03-27T10:44:59+00:00',
				last_traded_at: '2020-03-27T10:44:59+00:00',
				last_fetch_at: '2020-03-27T10:44:59+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: null,
				coin_id: 'ethereum'
			},
			{
				base: 'REP',
				target: 'ETH',
				market: {
					name: 'Kraken',
					identifier: 'kraken',
					has_trading_incentive: false
				},
				last: 0.07176,
				volume: 3643.88941459,
				converted_last: {
					btc: 0.0014639,
					eth: 0.0717012,
					usd: 9.76
				},
				converted_volume: {
					btc: 5.334304,
					eth: 261.271,
					usd: 35580
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.663625,
				timestamp: '2020-03-27T10:38:14+00:00',
				last_traded_at: '2020-03-27T10:38:14+00:00',
				last_fetch_at: '2020-03-27T10:38:14+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://trade.kraken.com/markets/kraken/rep/eth',
				coin_id: 'augur',
				target_coin_id: 'ethereum'
			},
			{
				base: 'ETH',
				target: 'AUD',
				market: {
					name: 'BTCMarkets',
					identifier: 'btcmarkets',
					has_trading_incentive: false
				},
				last: 225.72,
				volume: 1663.1927,
				converted_last: {
					btc: 0.02054498,
					eth: 1.006282,
					usd: 137.14
				},
				converted_volume: {
					btc: 34.170268,
					eth: 1674,
					usd: 228090
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.345867,
				timestamp: '2020-03-27T10:41:26+00:00',
				last_traded_at: '2020-03-27T10:41:26+00:00',
				last_fetch_at: '2020-03-27T10:41:26+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: null,
				coin_id: 'ethereum'
			},
			{
				base: 'LTC',
				target: 'ETH',
				market: {
					name: 'Binance',
					identifier: 'binance',
					has_trading_incentive: false
				},
				last: 0.29433,
				volume: 4666.53284738219,
				converted_last: {
					btc: 0.00600728,
					eth: 0.29422749,
					usd: 40.12
				},
				converted_volume: {
					btc: 28.033148,
					eth: 1373,
					usd: 187221
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.181583,
				timestamp: '2020-03-27T10:45:34+00:00',
				last_traded_at: '2020-03-27T10:45:34+00:00',
				last_fetch_at: '2020-03-27T10:45:34+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.binance.com/en/trade/LTC_ETH',
				coin_id: 'litecoin',
				target_coin_id: 'ethereum'
			},
			{
				base: 'ETH',
				target: 'USD',
				market: {
					name: 'BTC-Alpha',
					identifier: 'btc_alpha',
					has_trading_incentive: false
				},
				last: 135.98,
				volume: 8153.74763274,
				converted_last: {
					btc: 0.02039549,
					eth: 0.99807655,
					usd: 135.98
				},
				converted_volume: {
					btc: 166.3,
					eth: 8138,
					usd: 1108747
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.20003,
				timestamp: '2020-03-27T10:32:50+00:00',
				last_traded_at: '2020-03-27T10:32:50+00:00',
				last_fetch_at: '2020-03-27T10:32:50+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://btc-alpha.com/exchange/ETH_USD',
				coin_id: 'ethereum'
			},
			{
				base: 'ETC',
				target: 'ETH',
				market: {
					name: 'Binance',
					identifier: 'binance',
					has_trading_incentive: false
				},
				last: 0.037662,
				volume: 30676.029285752218,
				converted_last: {
					btc: 0.00076868,
					eth: 0.03764888,
					usd: 5.13
				},
				converted_volume: {
					btc: 23.580094,
					eth: 1155,
					usd: 157481
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.138074,
				timestamp: '2020-03-27T10:44:35+00:00',
				last_traded_at: '2020-03-27T10:44:35+00:00',
				last_fetch_at: '2020-03-27T10:44:35+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.binance.com/en/trade/ETC_ETH',
				coin_id: 'ethereum-classic',
				target_coin_id: 'ethereum'
			},
			{
				base: 'ETH',
				target: 'TWD',
				market: {
					name: 'BitoPro',
					identifier: 'bitopro',
					has_trading_incentive: false
				},
				last: 4121,
				volume: 1917.55841226,
				converted_last: {
					btc: 0.02043824,
					eth: 1.001054,
					usd: 136.43
				},
				converted_volume: {
					btc: 39.191522,
					eth: 1920,
					usd: 261608
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.121183,
				timestamp: '2020-03-27T10:41:26+00:00',
				last_traded_at: '2020-03-27T10:41:26+00:00',
				last_fetch_at: '2020-03-27T10:41:26+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.bitopro.com/trading/eth',
				coin_id: 'ethereum'
			},
			{
				base: 'ETH',
				target: 'BUSD',
				market: {
					name: 'Binance US',
					identifier: 'binance_us',
					has_trading_incentive: false
				},
				last: 135.82,
				volume: 88.90140841334119,
				converted_last: {
					btc: 0.02036802,
					eth: 0.99773284,
					usd: 135.28
				},
				converted_volume: {
					btc: 1.810745,
					eth: 88.7,
					usd: 12026.39
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.402488,
				timestamp: '2020-03-27T10:18:55+00:00',
				last_traded_at: '2020-03-27T10:18:55+00:00',
				last_fetch_at: '2020-03-27T10:39:13+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.binance.us/en/trade/ETH_BUSD',
				coin_id: 'ethereum',
				target_coin_id: 'binance-usd'
			},
			{
				base: 'XTZ',
				target: 'ETH',
				market: {
					name: 'Kraken',
					identifier: 'kraken',
					has_trading_incentive: false
				},
				last: 0.0126998,
				volume: 17174.00331353,
				converted_last: {
					btc: 0.00025958,
					eth: 0.01269764,
					usd: 1.73
				},
				converted_volume: {
					btc: 4.458095,
					eth: 218.069,
					usd: 29703
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.18863,
				timestamp: '2020-03-27T10:26:36+00:00',
				last_traded_at: '2020-03-27T10:26:36+00:00',
				last_fetch_at: '2020-03-27T10:38:35+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://trade.kraken.com/markets/kraken/xtz/eth',
				coin_id: 'tezos',
				target_coin_id: 'ethereum'
			},
			{
				base: 'EOS',
				target: 'ETH',
				market: {
					name: 'Kraken',
					identifier: 'kraken',
					has_trading_incentive: false
				},
				last: 0.017001,
				volume: 4946.30222004,
				converted_last: {
					btc: 0.0003475,
					eth: 0.01700019,
					usd: 2.31
				},
				converted_volume: {
					btc: 1.718842,
					eth: 84.088,
					usd: 11449.94
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.409094,
				timestamp: '2020-03-27T09:58:30+00:00',
				last_traded_at: '2020-03-27T09:58:30+00:00',
				last_fetch_at: '2020-03-27T10:38:41+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://trade.kraken.com/markets/kraken/eos/eth',
				coin_id: 'eos',
				target_coin_id: 'ethereum'
			},
			{
				base: 'ETH',
				target: 'BTC',
				market: {
					name: 'Bitbank',
					identifier: 'bitbank',
					has_trading_incentive: false
				},
				last: 0.020459,
				volume: 769.2534,
				converted_last: {
					btc: 0.020459,
					eth: 1.00207,
					usd: 136.57
				},
				converted_volume: {
					btc: 15.738155,
					eth: 770.846,
					usd: 105054
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.117747,
				timestamp: '2020-03-27T10:41:17+00:00',
				last_traded_at: '2020-03-27T10:41:17+00:00',
				last_fetch_at: '2020-03-27T10:41:17+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://bitbank.cc/app/trade/ETH_BTC',
				coin_id: 'ethereum',
				target_coin_id: 'bitcoin'
			},
			{
				base: 'ETH',
				target: 'USDT',
				market: {
					name: 'CoinFLEX',
					identifier: 'coinflex',
					has_trading_incentive: true
				},
				last: 136.6,
				volume: 37.4444,
				converted_last: {
					btc: 0.02045403,
					eth: 0.99909252,
					usd: 136.76
				},
				converted_volume: {
					btc: 0.76588897,
					eth: 37.41042,
					usd: 5120.71
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.146951,
				timestamp: '2020-03-27T09:45:54+00:00',
				last_traded_at: '2020-03-27T09:45:54+00:00',
				last_fetch_at: '2020-03-27T10:39:59+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://coinflex-preview.trade.tt/live/preview',
				coin_id: 'ethereum',
				target_coin_id: 'tether'
			},
			{
				base: 'ADA',
				target: 'ETH',
				market: {
					name: 'Binance',
					identifier: 'binance',
					has_trading_incentive: false
				},
				last: 0.00022249,
				volume: 6193117.523259472,
				converted_last: {
					btc: 0.00000454,
					eth: 0.00022241,
					usd: 0.03032749
				},
				converted_volume: {
					btc: 28.123076,
					eth: 1377,
					usd: 187822
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.130279,
				timestamp: '2020-03-27T10:44:39+00:00',
				last_traded_at: '2020-03-27T10:44:39+00:00',
				last_fetch_at: '2020-03-27T10:44:39+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.binance.com/en/trade/ADA_ETH',
				coin_id: 'cardano',
				target_coin_id: 'ethereum'
			},
			{
				base: 'MTL',
				target: 'ETH',
				market: {
					name: 'Binance',
					identifier: 'binance',
					has_trading_incentive: false
				},
				last: 0.002624,
				volume: 2606260.204855183,
				converted_last: {
					btc: 0.00005356,
					eth: 0.00262309,
					usd: 0.357676
				},
				converted_volume: {
					btc: 139.58,
					eth: 6836,
					usd: 932197
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.643696,
				timestamp: '2020-03-27T10:44:39+00:00',
				last_traded_at: '2020-03-27T10:44:39+00:00',
				last_fetch_at: '2020-03-27T10:44:39+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.binance.com/en/trade/MTL_ETH',
				coin_id: 'metal',
				target_coin_id: 'ethereum'
			},
			{
				base: 'XRP',
				target: 'ETH',
				market: {
					name: 'Bittrex',
					identifier: 'bittrex',
					has_trading_incentive: false
				},
				last: 0.00125784,
				volume: 386599.18706408,
				converted_last: {
					btc: 0.00002567,
					eth: 0.00125743,
					usd: 0.171367
				},
				converted_volume: {
					btc: 9.924973,
					eth: 486.12,
					usd: 66250
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.349261,
				timestamp: '2020-03-27T10:41:10+00:00',
				last_traded_at: '2020-03-27T10:41:10+00:00',
				last_fetch_at: '2020-03-27T10:41:10+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url:
					'https://bittrex.com/Market/Index?MarketName=ETH-XRP',
				coin_id: 'ripple',
				target_coin_id: 'ethereum'
			},
			{
				base: 'ETH',
				target: 'GBP',
				market: {
					name: 'Kraken',
					identifier: 'kraken',
					has_trading_incentive: false
				},
				last: 112.55,
				volume: 234.61342638,
				converted_last: {
					btc: 0.0206462,
					eth: 1.011239,
					usd: 137.71
				},
				converted_volume: {
					btc: 4.843876,
					eth: 237.25,
					usd: 32309
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.258467,
				timestamp: '2020-03-27T10:38:35+00:00',
				last_traded_at: '2020-03-27T10:38:35+00:00',
				last_fetch_at: '2020-03-27T10:38:35+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://trade.kraken.com/markets/kraken/eth/gbp',
				coin_id: 'ethereum'
			},
			{
				base: 'ETH',
				target: 'USDC',
				market: {
					name: 'ExMarkets',
					identifier: 'exmarkets',
					has_trading_incentive: false
				},
				last: 136.17,
				volume: 5573.11506,
				converted_last: {
					btc: 0.02035882,
					eth: 0.99714524,
					usd: 135.97
				},
				converted_volume: {
					btc: 113.462,
					eth: 5557,
					usd: 757764
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.381316,
				timestamp: '2020-03-27T10:45:06+00:00',
				last_traded_at: '2020-03-27T10:45:06+00:00',
				last_fetch_at: '2020-03-27T10:45:06+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://exmarkets.com/trade/eth-usdc',
				coin_id: 'ethereum',
				target_coin_id: 'usd-coin'
			},
			{
				base: 'LINK',
				target: 'ETH',
				market: {
					name: 'Tokenize',
					identifier: 'tokenize',
					has_trading_incentive: false
				},
				last: 0.0167967,
				volume: 1454.581952407318,
				converted_last: {
					btc: 0.00034282,
					eth: 0.01679116,
					usd: 2.29
				},
				converted_volume: {
					btc: 0.49866073,
					eth: 24.424125,
					usd: 3327.61
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.566017,
				timestamp: '2020-03-27T10:40:59+00:00',
				last_traded_at: '2020-03-27T10:40:59+00:00',
				last_fetch_at: '2020-03-27T10:40:59+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://tokenize.exchange/market/ETH-LINK',
				coin_id: 'chainlink',
				target_coin_id: 'ethereum'
			},
			{
				base: 'ETH',
				target: 'CAD',
				market: {
					name: 'Kraken',
					identifier: 'kraken',
					has_trading_incentive: false
				},
				last: 193.15,
				volume: 262.40601039,
				converted_last: {
					btc: 0.02057945,
					eth: 1.00797,
					usd: 137.27
				},
				converted_volume: {
					btc: 5.400172,
					eth: 264.497,
					usd: 36019
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.352642,
				timestamp: '2020-03-27T10:38:40+00:00',
				last_traded_at: '2020-03-27T10:38:40+00:00',
				last_fetch_at: '2020-03-27T10:38:40+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://trade.kraken.com/markets/kraken/eth/cad',
				coin_id: 'ethereum'
			},
			{
				base: 'ETH',
				target: 'QC',
				market: {
					name: 'ZBG',
					identifier: 'zbg',
					has_trading_incentive: false
				},
				last: 987.02,
				volume: 6619.1584,
				converted_last: {
					btc: 0.02040041,
					eth: 0.9992009,
					usd: 136.14
				},
				converted_volume: {
					btc: 135.034,
					eth: 6614,
					usd: 901113
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 1.851034,
				timestamp: '2020-03-27T10:39:51+00:00',
				last_traded_at: '2020-03-27T10:39:51+00:00',
				last_fetch_at: '2020-03-27T10:39:51+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: null,
				coin_id: 'ethereum',
				target_coin_id: 'qcash'
			},
			{
				base: 'ETH',
				target: 'EUR',
				market: {
					name: 'Binance',
					identifier: 'binance',
					has_trading_incentive: false
				},
				last: 126.91,
				volume: 1070.3251962532504,
				converted_last: {
					btc: 0.0209182,
					eth: 1.024542,
					usd: 139.7
				},
				converted_volume: {
					btc: 22.389274,
					eth: 1097,
					usd: 149528
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 0.830762,
				timestamp: '2020-03-27T10:45:28+00:00',
				last_traded_at: '2020-03-27T10:45:28+00:00',
				last_fetch_at: '2020-03-27T10:45:28+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.binance.com/en/trade/ETH_EUR',
				coin_id: 'ethereum'
			},
			{
				base: 'ETH',
				target: 'BTC',
				market: {
					name: 'BW.com',
					identifier: 'bw',
					has_trading_incentive: false
				},
				last: 0.0204,
				volume: 1558.5316,
				converted_last: {
					btc: 0.0204,
					eth: 0.9994345,
					usd: 136.02
				},
				converted_volume: {
					btc: 31.794045,
					eth: 1558,
					usd: 211995
				},
				trust_score: 'green',
				bid_ask_spread_percentage: 1.072647,
				timestamp: '2020-03-27T10:34:49+00:00',
				last_traded_at: '2020-03-27T10:34:49+00:00',
				last_fetch_at: '2020-03-27T10:34:49+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.bw.com/trade/eth_btc',
				coin_id: 'ethereum',
				target_coin_id: 'bitcoin'
			}
		]
	}
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case FETCH_ASSET_BEGIN:
			return {
				...state,
				pending: true,
				success: false
			}
		case FETCH_ASSET_SUCCESS:
			return {
				...state,
				pending: false,
				success: true,
				assetData: action.payload
			}
		case FETCH_ASSET_FAILURE:
			return {
				...state,
				pending: false,
				error: true
			}
		default:
			return state
	}
}
