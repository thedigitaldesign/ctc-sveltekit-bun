export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/campus/[edit].svelte"),
	() => import("../../src/routes/campus/create.svelte"),
	() => import("../../src/routes/campus/index.svelte"),
	() => import("../../src/routes/campus-type/create.svelte"),
	() => import("../../src/routes/campus-type/index.svelte"),
	() => import("../../src/routes/index.svelte")
];

export const dictionary = {
	"": [[0, 7], [1]],
	"campus": [[0, 4], [1]],
	"campus-type": [[0, 6], [1]],
	"campus/create": [[0, 3], [1]],
	"campus-type/create": [[0, 5], [1]],
	"campus/[edit]": [[0, 2], [1]]
};