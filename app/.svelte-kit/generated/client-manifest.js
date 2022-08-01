export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/campus/[id].svelte"),
	() => import("../../src/routes/campus/create.svelte"),
	() => import("../../src/routes/campus/index.svelte"),
	() => import("../../src/routes/campus-type/create.svelte"),
	() => import("../../src/routes/campus-type/index.svelte"),
	() => import("../../src/routes/counselor/[id].svelte"),
	() => import("../../src/routes/counselor/create.svelte"),
	() => import("../../src/routes/counselor/index.svelte"),
	() => import("../../src/routes/index.svelte")
];

export const dictionary = {
	"": [[0, 10], [1]],
	"campus": [[0, 4], [1]],
	"campus-type": [[0, 6], [1]],
	"counselor": [[0, 9], [1]],
	"campus/create": [[0, 3], [1]],
	"campus-type/create": [[0, 5], [1]],
	"counselor/create": [[0, 8], [1]],
	"campus/[id]": [[0, 2], [1]],
	"counselor/[id]": [[0, 7], [1]]
};