export default [
    {
        "path": "/about",
        "text": "About"
    },
    {
        "path": "/blog",
        "text": "Blog"
    },
    {
        "path": "/projects",
        "text": "Projects"
    }
] as IIndividualRouteConfig[];

export interface IIndividualRouteConfig {
    path: string,
    text: string
};