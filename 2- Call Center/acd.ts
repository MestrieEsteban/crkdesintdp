class ACD {

	respondent: Respondant[]
	manager: Manager[]
	director: Director[]

	constructor(respondents: Respondant[], manager: Manager[], director: Director[]) {
		this.respondent = respondents
		this.manager = manager
		this.director = director
	}

	getFree() {
		this.respondent.forEach((r, index) => {
			if (r.getIsFre() == true) {
				r.getCall();
			} else {
				if (index == this.respondent.length) {
					this.manager.forEach((m, index) => {
						if (m.getIsFre() == true) {
							m.getCall();
						} else {
							if (index == this.manager.length) {
								this.director.forEach((d, index) => {
									if (d.getIsFre() == true) {
										d.getCall()
									} else {
										if (index == this.director.length) {
											return 'nobody can take the call'
										}
									}
								})
							}
						}
					})
				}
			}
		})

	}

}
