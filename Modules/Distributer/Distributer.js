class Distributer {
	DownStream(com, fun){
		//do something with the downstream process
		for (let node in this.Par.DownStreamLinks){
			this.send(com,node);
		}
		fun(null, com);
	}
	UpStream(com, fun){
		//do something with the downstream process
		for (let node in this.Par.UpStreamLinks){
			this.send(com,node);
		}
		fun(null, com);
	}
};