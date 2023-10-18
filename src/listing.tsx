import React from "react";

interface ListingFace {
	items: Array<{
		listing_id: number,
		url: string,
		MainImage: {
			url_570xN: string
		},
		title: string,
		currency_code: string,
		price: number,
		quantity: number
	}>
}

const Listing = (props: ListingFace) => {

	const { items } = props

	return (
		<div className="item-list">
			{items.map((item) => (
				<div className="item-list" key={item.listing_id}>
					<div className="item">
						<div className="item-image">
							<a href={item.url}>
								{item.MainImage && item.MainImage.url_570xN ? (
									<img src={item.MainImage.url_570xN} alt={item.title} />
								) : (
									<img src="my-store-listing-react/public/preview.png" alt="preview" />
								)}
							</a>
						</div>
						<div className="item-details">
							<p className="item-title">{item.title && item.title.length > 50 ? `${item.title.slice(0, 50)}...` : item.title}
							</p>
							<p className="item-price">{currency(item.currency_code, item.price)}</p>
							<p className={`item-quantity ${Level(item.quantity)}`}>{Level(item.quantity)}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

const currency = (currencyCode: string, price: number) => {
	switch (currencyCode) {
		case 'USD':
			return `$${price}`;
		case 'EUR':
			return `€${price}`;
		default:
			return `${price} GBP`;
	}
}

const Level = (quantity: number) => {
	if (quantity <= 10) {
		return 'level-low';
	} else if (quantity <= 20) {
		return 'level-medium';
	} else {
		return 'level-high';
	}
};

export default Listing;
