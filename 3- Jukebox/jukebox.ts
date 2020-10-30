class JukeBox {
	
	allSongs	: PlayList[]
	coin		: Number = 0
	selectedSong: Song;

	constructor(allSongs: PlayList[]){
		this.allSongs 	  = allSongs
        this.coin 		  = this.coin
	}

	selectSong(song : Song){
		this.selectedSong = song;
	}

	addCoin(coin: Number){
		this.coin = Number(this.coin) + Number(coin);
	}

	getCoin():Number{
		return this.coin;
	}

	getSong(): PlayList[]{
		return this.allSongs;
	}

	playSong(): String{
		if(this.selectedSong.getPrice() < this.coin){
			return `Not enough coins, Price of this song : ${this.selectedSong.getPrice()}`;
		}
		return `JukeBox play  ${this.selectSong}`;
	}
	


	
	
}
