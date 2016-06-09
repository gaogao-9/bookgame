const pages = {
	top: {
		title: "トップページ",
		choice: ["start"],
	},
	start: {
		title: "最初の選択肢",
		text: "選択肢が現れた、選べ",
		choice: ["page0", "page1"],
	},
	page0: {
		title: "選択肢A",
		text: "しんでしまった",
	},
	page1: {
		title: "選択肢B",
		text: "アイテムを拾った、使う？",
		choice: ["page2", "page3"],
	},
	page2: {
		title: "アイテムを使う",
		text: "アイテムが爆発してしまった(ゲームオーバー)",
		img: "bomb"
	},
	page3: {
		title: "アイテムを使わない",
		text: "選択肢がある、どうする？",
		choice: ["page4", "page5", "page6"],
	},
	page4: {
		title: "選択肢A",
		text: "前の選択肢に戻されてしまった！",
		choice: [{ hash: "page1", title: "前の選択肢へ" }],
	},
	page5: {
		title: "選択肢B",
		text: "平和な世界が訪れた(ゲームクリア)",
		img: "flower",
	},
	page6: {
		title: "選択肢C",
		text: "しんでしまった！(ゲームオーバー)",
		img: "boss",
	},
}

riot.mount("app", pages);