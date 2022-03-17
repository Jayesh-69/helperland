import React from "react"

import BookServiceMenu from "./BookServiceMenu"
import Payment from "./Payment"

const BookAServiceContent = () => {
	return(
		<div className="container">
			<div className="row">
				<BookServiceMenu/>
				<Payment/>
			</div>
		</div>
	)
}

export default BookAServiceContent