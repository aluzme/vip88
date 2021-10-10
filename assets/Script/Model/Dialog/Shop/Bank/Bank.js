
cc.Class({
	extends: cc.Component,

	properties: {
		header: cc.Node,
		rut:    cc.Node,
		nap:    cc.Node,
		atm:    cc.Node,		
		smartlink: cc.Node,
	},
	init(){
		this.rut = this.rut.getComponent('bankRut');
		this.nap = this.nap.getComponent('bankNap');
		this.atm = this.atm.getComponent('bankATM');
		
		this.smartlink = this.smartlink.getComponent('banksmartlink');

		this.rut.init();

		this.body   = [this.rut,this.nap, this.atm,this.smartlink];
		this.header = this.header.children.map(function(obj) {
			return obj.getComponent('itemContentMenu');
		});
	},
	onSelectHead: function(event, name){
		this.header.map(function(header) {
			if (header.node.name == name) {
				header.select();
			}else{
				header.unselect();
			}
		});
		this.body.map(function(body) {
			if (body.node.name == name) {
				body.node.active = true;
			}else{
				body.node.active = false;
			}
		});
	},
	onData: function(data){
		if (!!data.list) {
			this.nap.onData(data.list);
		}
		if (void 0 !== data.atm) {
			this.atm.onData(data.atm);
		}
	},
});
