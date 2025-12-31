// aqui importamos las funciones necesarias para definir una coleccion y los esquemas de validacion
import { defineCollection, getCollection, z }  from "astro:content";

const seccion =  defineCollection({
    type: "content",
    schema: z.object({
        section: z.enum([
            "about",
            "certifications",
            "info-link",
            "languages",
            "skills",
            "volunteering"
        ]).optional(),
        order: z.number().int().nonnegative().optional(),
        title: z.string().optional(),
    }),
});

// educacion
const educacion = defineCollection({
    type: "content",
    schema: z.object({
        university_name: z.string().optional(),
        professional_career: z.string().optional(),
        start: z.string().optional(),
        end: z.string().optional(),
        location: z.string().optional(),
        }),
});

// proyectos
const proyectos  = defineCollection({
    type: "content",
    schema: z.object({
        name_project: z.string().optional(),
        company_name: z.string().optional(),
        date: z.string().optional(),
        location: z.string().optional(),
        achievements: z.array(z.string()).optional(),
        tech: z.array(z.string()).optional()
    }),

});

// experiencia
const experiencia  = defineCollection({
    type: "content",
    schema: z.object({
        company: z.string().optional(),
        location: z.string().optional(),
        role: z.string().optional(),
        start: z.string().optional(),
        end: z.string().optional(),
        archievements: z.array(z.string()).optional(),
        tech: z.array(z.string()).optional()
    }), 
});

export const collections = {
    seccion,
    educacion,
    proyectos,
    experiencia
};


    
