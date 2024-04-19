import { error } from '@sveltejs/kit';

export async function load({ params }: { params: { slug: string } }) {
	let post;

	try {
		post = await import(`../../../posts/${params.slug}.md`);
	} catch (err) {
		error(404, {
			message: 'Not found'
		});
	}

	const { title, date, thumbnail } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date,
		thumbnail
	};
}
