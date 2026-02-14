import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		technologies: z.array(z.string()),
		year: z.number(),
		link: z.string().optional(),
		image: z.string().optional(),
	}),
});

const publicationsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		authors: z.array(z.string()),
		year: z.number(),
		conference: z.string().optional(),
		journal: z.string().optional(),
		link: z.string().optional(),
		type: z.enum(['conference', 'journal', 'workshop', 'thesis', 'other']),
	}),
});

export const collections = {
	projects: projectsCollection,
	publications: publicationsCollection,
};
