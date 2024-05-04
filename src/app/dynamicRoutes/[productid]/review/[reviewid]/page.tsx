function reviews({
	params,
}: {
	params: { productid: string; reviewid: string };
}) {
	return (
		<div>
			product id is {params.productid} and review id is {params.reviewid}
		</div>
	);
}

export default reviews;
