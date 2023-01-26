function Card({
	title,
	img,
	description,
}: {
	title: string;
	img?: string;
	description: string;
}) {
	return (
		<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow m-5">
			<a href="#">
				<img className="rounded-t-lg" src={img} />
			</a>
			<div className="p-5">
				<a href="#">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
						{title}
					</h5>
				</a>
				<p className="mb-3 font-normal text-gray-700 ">{description}</p>
			</div>
		</div>
	);
}

export default Card;
