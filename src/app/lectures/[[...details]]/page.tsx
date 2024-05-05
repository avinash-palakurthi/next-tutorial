import { notFound } from "next/navigation";

function lectureDetails({ params }: { params: { details: string[] } }) {
	console.log(params);
	if (params.details?.length == 2) {
		return <h3>lecture details 2</h3>;
	} else if (params.details?.length == 3) {
		return <h3>lecture details 3</h3>;
	} else if (params.details?.length > 3) {
		notFound();
	}
	return <div>lectureDetails page</div>;
}

export default lectureDetails;
