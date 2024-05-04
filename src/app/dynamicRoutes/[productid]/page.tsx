function productsDetails({ params }: { params: { productid: string } }) {
	return <div>products details page {params.productid} </div>;
}

export default productsDetails;
