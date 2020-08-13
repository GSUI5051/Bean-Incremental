function prestige(keysToKeep) {
	var savedKeys = {};
	keysToKeep.push("tutorial");
	keysToKeep.push("navigation");
	for (var i = 0; i < keysToKeep.length; i++) {
		savedKeys[keysToKeep[i]] = player[keysToKeep[i]];
	}
	player = defaultPlayer();
	for (var i = 0; i < keysToKeep.length; i++) {
		player[keysToKeep[i]] = savedKeys[keysToKeep[i]];
	}
}

function shrink() {
	var pc = player.char;
	var sumOfAllChar = pc.bean.add(pc.one).add(pc.square).add(pc.legs).add(pc.cmone).add(pc.dirt).add(pc.cap);
	var keep = ["cmpcbean", "shrinkstat", "sup", "shrinkpow", "shrinkers"];
	if (player.sup.includes("13")) keep.push("auto", "autobought", "upgrades");
	if (sumOfAllChar.div(1e10).pow(0.1).floor().lt(1)) return;
	if (player.cmpcbean.lt(10)) {
		prestige(keep);
		player.cmpcbean = player.cmpcbean.add(sumOfAllChar.div(1e10).pow(0.1).mul(player.spup.includes("11") ? player.cmpcbean.log(5) : 1).floor());
		player.shrinkstat = player.shrinkstat.add(1);
	} else {
		$("body").style.height = "0vh";
		$("body").style.width = "0vw";
		$("body").style.fontSize = "0px";
		setTimeout(function() {
			prestige(keep);
			player.cmpcbean = player.cmpcbean.add(sumOfAllChar.div(1e10).pow(0.1).floor());
			player.shrinkstat = player.shrinkstat.add(1);
			$("body").style.height = "96vh";
			$("body").style.width = "98vw";
			$("body").style.fontSize = "16px";
		}, 2000);
	}
}

function buySup(upgrade, cost) {
	if (player.cmpcbean.lt(cost) || player.sup.includes(upgrade)) return;
	player.cmpcbean = player.cmpcbean.sub(cost);
	player.sup.push(upgrade);
}