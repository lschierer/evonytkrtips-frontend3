import {z } from 'zod';

export const generalType = z.enum([
    "Ground Troops",
    "Mounted Troops",
    "Ranged Troops",
    "Siege Machines",
]);
export type generalType = z.infer<typeof generalType>;

export const minimalGeneral = z.object({
    name: z.string(),
    type: generalType,
});

export type minimalGeneral = z.infer<typeof minimalGeneral>;

export const lowDetailList = z.array(minimalGeneral);

export type lowDetailList = z.infer<typeof lowDetailList>;

