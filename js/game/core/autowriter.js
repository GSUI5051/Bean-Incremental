function buyAuto() {
	if (player.char.legs.lt(Decimal.pow(autoScale(), player.auto).mul(autoScale()))) return;
	player.auto = player.auto.add(1);
	player.char.legs = player.char.legs.sub(Decimal.pow(autoScale(), player.auto));
}
function buyUp(upgrade, cost, character) {
	cost = new Decimal(cost);
	var pc = player.char;
	if (pc[character].lt(cost.div(player.sup.includes("11") ? 5 : 1)) || player.upgrades.includes(upgrade)) return;
	player.upgrades.push(upgrade);
	player.char[character] = player.char[character].sub(cost.div(player.sup.includes("11") ? 5 : 1));
}
function autoScale() {
	return (player.upgrades.includes("13") ? 80 : 128)*(player.sup.includes("11") ? 0.6 : 1);
}