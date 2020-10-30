class PlayList {
	
	songList: Song[]
	name: String
	
	constructor(songList: Song[], name: String){
		this.songList = songList
		this.name = name
	}

	getSongList(): Song[]{
		return this.songList
	}

	getName():String{
		return this.name
	}

	addSong(song: Song){
		this.songList.push(song);
	}

	removeSong(song: Song){
	}

	 
	
}
